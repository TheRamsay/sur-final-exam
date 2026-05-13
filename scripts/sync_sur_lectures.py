#!/usr/bin/env python3
"""Download SUR lecture materials and convert readable sources to Markdown."""

from __future__ import annotations

import argparse
import datetime as dt
import html.parser
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.parse
import urllib.request
import zipfile
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
from xml.etree import ElementTree


BASE_URL = "https://www.fit.vut.cz/study/course/SUR/public/prednasky/"
RAW_ROOT = Path("raw/sur-prednasky")
SLIDES_ROOT = Path("slides/sur-prednasky")
CONVERTIBLE_EXTENSIONS = {".pdf", ".ppt", ".pptx", ".ipynb"}
USER_AGENT = "sur-final-exam-lecture-sync/1.0"


@dataclass(frozen=True)
class RemoteFile:
    url: str
    rel_path: Path


class LinkCollector(html.parser.HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.hrefs: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag != "a":
            return
        for key, value in attrs:
            if key == "href" and value:
                self.hrefs.append(value)


def request(url: str) -> urllib.request.Request:
    return urllib.request.Request(url, headers={"User-Agent": USER_AGENT})


def read_url(url: str) -> tuple[bytes, str | None]:
    with urllib.request.urlopen(request(url), timeout=45) as response:
        content_type = response.headers.get_content_charset()
        return response.read(), content_type


def collect_links(index_url: str) -> list[str]:
    body, charset = read_url(index_url)
    parser = LinkCollector()
    parser.feed(body.decode(charset or "utf-8", errors="replace"))
    return parser.hrefs


def remote_rel_path(url: str) -> Path:
    base = urllib.parse.urlparse(BASE_URL)
    parsed = urllib.parse.urlparse(url)
    if parsed.netloc != base.netloc:
        raise ValueError(f"URL is outside base host: {url}")
    if not parsed.path.startswith(base.path):
        raise ValueError(f"URL is outside base path: {url}")
    rel = urllib.parse.unquote(parsed.path[len(base.path) :]).strip("/")
    if not rel:
        raise ValueError(f"URL does not point to a file below base: {url}")
    path = Path(rel)
    if path.is_absolute() or any(part in {"", ".", ".."} for part in path.parts):
        raise ValueError(f"Unsafe relative path from URL: {url}")
    return path


def crawl(base_url: str = BASE_URL) -> list[RemoteFile]:
    base = urllib.parse.urlparse(base_url)
    seen_dirs: set[str] = set()
    files: dict[Path, RemoteFile] = {}

    def visit(index_url: str) -> None:
        normalized = index_url if index_url.endswith("/") else f"{index_url}/"
        if normalized in seen_dirs:
            return
        seen_dirs.add(normalized)

        for href in collect_links(normalized):
            if href.startswith("?"):
                continue
            target = urllib.parse.urljoin(normalized, href)
            parsed = urllib.parse.urlparse(target)
            if parsed.netloc != base.netloc:
                continue
            if not parsed.path.startswith(base.path):
                continue
            if parsed.path.rstrip("/") == base.path.rstrip("/"):
                continue
            if parsed.path.endswith("/"):
                visit(urllib.parse.urlunparse(parsed._replace(query="", fragment="")))
                continue
            clean_url = urllib.parse.urlunparse(parsed._replace(query="", fragment=""))
            rel_path = remote_rel_path(clean_url)
            files[rel_path] = RemoteFile(clean_url, rel_path)

    visit(base_url)
    return [files[key] for key in sorted(files)]


def download_file(remote: RemoteFile, raw_root: Path) -> tuple[Path, str]:
    destination = raw_root / remote.rel_path
    destination.parent.mkdir(parents=True, exist_ok=True)

    with urllib.request.urlopen(request(remote.url), timeout=90) as response:
        content_length = response.headers.get("Content-Length")
        if (
            destination.exists()
            and content_length
            and destination.stat().st_size == int(content_length)
        ):
            return destination, "skipped"

        with tempfile.NamedTemporaryFile(
            dir=destination.parent, prefix=f".{destination.name}.", delete=False
        ) as tmp:
            tmp_path = Path(tmp.name)
            shutil.copyfileobj(response, tmp)

    tmp_path.replace(destination)
    return destination, "downloaded"


def md_link(target: str) -> str:
    return urllib.parse.quote(target.replace(os.sep, "/"), safe="/#._-")


def clean_title(path: Path) -> str:
    name = path.stem.replace("_", " ").replace("-", " ")
    name = re.sub(r"\s+", " ", name).strip()
    return name or path.name


def front_matter(remote: RemoteFile, raw_path: Path, title: str, kind: str) -> str:
    today = dt.date.today().isoformat()
    return "\n".join(
        [
            "---",
            f'title: "{title.replace(chr(34), chr(39))}"',
            f"source_url: {remote.url}",
            f"raw_path: {raw_path.as_posix()}",
            f"format: {kind}",
            f"generated: {today}",
            "---",
            "",
        ]
    )


def collapse_blank_lines(text: str, max_blank: int = 1) -> str:
    lines = [line.rstrip() for line in text.replace("\r\n", "\n").replace("\r", "\n").split("\n")]
    output: list[str] = []
    blank_count = 0
    for line in lines:
        if not line.strip():
            blank_count += 1
            if blank_count <= max_blank:
                output.append("")
            continue
        blank_count = 0
        output.append(line)
    return "\n".join(output).strip()


def run_pdftotext(source: Path) -> str:
    result = subprocess.run(
        ["pdftotext", "-layout", "-enc", "UTF-8", str(source), "-"],
        check=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    return result.stdout


def convert_pdf(remote: RemoteFile, source: Path, output: Path) -> None:
    text = run_pdftotext(source)
    pages = text.split("\f")
    title = clean_title(source)
    parts = [
        front_matter(remote, source, title, "pdf"),
        f"# {title}",
        "",
        f"- Source: [{remote.rel_path.name}]({md_link(os.path.relpath(source, output.parent))})",
        f"- URL: {remote.url}",
        "",
    ]
    for index, page in enumerate(pages, start=1):
        cleaned = collapse_blank_lines(page)
        if not cleaned:
            continue
        parts.extend([f"## Page {index}", "", cleaned, ""])
    output.write_text("\n".join(parts).rstrip() + "\n", encoding="utf-8")


def run_pandoc(source: Path, output: Path, media_dir: Path) -> str:
    media_rel = os.path.relpath(media_dir, output.parent)
    result = subprocess.run(
        [
            "pandoc",
            str(source),
            "-t",
            "gfm",
            "--wrap=none",
            f"--extract-media={media_rel}",
        ],
        check=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        cwd=output.parent,
    )
    return result.stdout


def pptx_slide_number(path: Path) -> int:
    match = re.search(r"slide(\d+)\.xml$", path.name)
    return int(match.group(1)) if match else 0


def convert_pptx_fallback(source: Path) -> str:
    ns = {"a": "http://schemas.openxmlformats.org/drawingml/2006/main"}
    parts: list[str] = []
    with zipfile.ZipFile(source) as archive:
        slide_names = sorted(
            (Path(name) for name in archive.namelist() if re.search(r"ppt/slides/slide\d+\.xml$", name)),
            key=pptx_slide_number,
        )
        for index, slide_name in enumerate(slide_names, start=1):
            xml = archive.read(slide_name.as_posix())
            root = ElementTree.fromstring(xml)
            texts = [
                node.text.strip()
                for node in root.findall(".//a:t", ns)
                if node.text and node.text.strip()
            ]
            if not texts:
                continue
            parts.extend([f"## Slide {index}", "", "\n".join(texts), ""])
    return "\n".join(parts).strip()


def uint16(data: bytes, offset: int) -> int:
    return int.from_bytes(data[offset : offset + 2], "little")


def uint32(data: bytes, offset: int) -> int:
    return int.from_bytes(data[offset : offset + 4], "little")


def uint64(data: bytes, offset: int) -> int:
    return int.from_bytes(data[offset : offset + 8], "little")


class CompoundFile:
    signature = bytes.fromhex("d0cf11e0a1b11ae1")
    free_sector = 0xFFFFFFFF
    end_of_chain = 0xFFFFFFFE

    def __init__(self, data: bytes) -> None:
        if data[:8] != self.signature:
            raise ValueError("not an OLE compound file")
        self.data = data
        self.sector_size = 1 << uint16(data, 30)
        self.first_dir_sector = uint32(data, 48)
        self.mini_cutoff = uint32(data, 56)
        self.first_minifat_sector = uint32(data, 60)
        self.minifat_sector_count = uint32(data, 64)
        self.first_difat_sector = uint32(data, 68)
        self.difat_sector_count = uint32(data, 72)
        self.difat = self._read_difat()
        self.fat = self._read_fat()
        self.entries = self._read_directory()
        self.root_stream = self._read_regular_stream(self.entries[0]["start"], self.entries[0]["size"])
        self.minifat = self._read_minifat()

    def sector(self, sector_id: int) -> bytes:
        offset = (sector_id + 1) * self.sector_size
        return self.data[offset : offset + self.sector_size]

    def _read_difat(self) -> list[int]:
        entries = [
            uint32(self.data, offset)
            for offset in range(76, 76 + 109 * 4, 4)
            if uint32(self.data, offset) != self.free_sector
        ]
        sector_id = self.first_difat_sector
        for _ in range(self.difat_sector_count):
            if sector_id in {self.free_sector, self.end_of_chain}:
                break
            sector = self.sector(sector_id)
            for offset in range(0, self.sector_size - 4, 4):
                value = uint32(sector, offset)
                if value != self.free_sector:
                    entries.append(value)
            sector_id = uint32(sector, self.sector_size - 4)
        return entries

    def _read_fat(self) -> list[int]:
        fat: list[int] = []
        for sector_id in self.difat:
            sector = self.sector(sector_id)
            fat.extend(uint32(sector, offset) for offset in range(0, self.sector_size, 4))
        return fat

    def _read_chain(self, start: int, table: list[int], sector_reader) -> bytes:
        if start in {self.free_sector, self.end_of_chain}:
            return b""
        chunks: list[bytes] = []
        seen: set[int] = set()
        sector_id = start
        while sector_id not in {self.free_sector, self.end_of_chain}:
            if sector_id in seen or sector_id >= len(table):
                break
            seen.add(sector_id)
            chunks.append(sector_reader(sector_id))
            sector_id = table[sector_id]
        return b"".join(chunks)

    def _read_regular_stream(self, start: int, size: int) -> bytes:
        return self._read_chain(start, self.fat, self.sector)[:size]

    def _read_minifat(self) -> list[int]:
        if self.first_minifat_sector in {self.free_sector, self.end_of_chain}:
            return []
        data = self._read_chain(self.first_minifat_sector, self.fat, self.sector)
        return [uint32(data, offset) for offset in range(0, len(data) - 3, 4)]

    def _mini_sector(self, sector_id: int) -> bytes:
        mini_size = 64
        offset = sector_id * mini_size
        return self.root_stream[offset : offset + mini_size]

    def _read_mini_stream(self, start: int, size: int) -> bytes:
        return self._read_chain(start, self.minifat, self._mini_sector)[:size]

    def _read_directory(self) -> list[dict[str, object]]:
        directory = self._read_regular_stream(self.first_dir_sector, len(self.data))
        entries: list[dict[str, object]] = []
        for offset in range(0, len(directory) - 127, 128):
            entry = directory[offset : offset + 128]
            entry_type = entry[66]
            if entry_type == 0:
                continue
            name_length = uint16(entry, 64)
            name = entry[: max(0, name_length - 2)].decode("utf-16le", errors="ignore")
            entries.append(
                {
                    "name": name,
                    "type": entry_type,
                    "start": uint32(entry, 116),
                    "size": uint64(entry, 120),
                }
            )
        return entries

    def stream(self, name: str) -> bytes:
        for entry in self.entries:
            if entry["name"] == name and entry["type"] == 2:
                size = int(entry["size"])
                start = int(entry["start"])
                if size < self.mini_cutoff:
                    return self._read_mini_stream(start, size)
                return self._read_regular_stream(start, size)
        raise KeyError(name)


def clean_ppt_lines(text: str) -> list[str]:
    text = text.replace("\x00", "")
    text = text.replace("\r", "\n").replace("\x0b", "\n").replace("\u2028", "\n")
    cleaned: list[str] = []
    for raw_line in text.split("\n"):
        line = re.sub(r"[ \t]+", " ", raw_line).strip()
        if not line:
            continue
        if is_ppt_boilerplate(line):
            continue
        if sum(char.isalnum() for char in line) < 2:
            continue
        if cleaned and cleaned[-1] == line:
            continue
        cleaned.append(line)
    return cleaned


def is_ppt_boilerplate(line: str) -> bool:
    exact = {
        "PREAMBLE",
        "MAGPC",
        "FONTSIZE",
        "___PPT10",
        "Výchozí návrh",
        "Druhá úroveň",
        "Třetí úroveň",
        "Čtvrtá úroveň",
        "Pátá úroveň",
    }
    prefixes = (
        "\\documentclass",
        "\\pagestyle",
        "\\usepackage",
        "mailto:",
        "Klepnutím lze upravit",
    )
    if line in exact:
        return True
    if line.startswith(prefixes):
        return True
    if re.fullmatch(r"\d{1,4}", line):
        return True
    return False


def decode_text_atom(record_type: int, payload: bytes) -> list[str]:
    if record_type == 4008:
        candidates = ("cp1250", "cp1252", "latin1")
        decoded = ""
        for encoding in candidates:
            decoded = payload.decode(encoding, errors="ignore")
            if any(char.isalpha() for char in decoded):
                break
    else:
        if len(payload) % 2:
            payload = payload[:-1]
        decoded = payload.decode("utf-16le", errors="ignore")
    return clean_ppt_lines(decoded)


def extract_legacy_ppt_text(source: Path) -> str:
    ole = CompoundFile(source.read_bytes())
    stream = ole.stream("PowerPoint Document")
    chunks: list[list[str]] = []
    text_record_types = {4000, 4008, 4026}

    def walk_records(start: int, end: int) -> None:
        position = start
        while position + 8 <= end:
            version_instance = uint16(stream, position)
            record_type = uint16(stream, position + 2)
            length = uint32(stream, position + 4)
            payload_start = position + 8
            payload_end = payload_start + length
            if payload_end > end or payload_end < payload_start:
                break
            if record_type in text_record_types:
                lines = decode_text_atom(record_type, stream[payload_start:payload_end])
                if lines:
                    chunks.append(lines)
            if version_instance & 0x000F == 0x000F:
                walk_records(payload_start, payload_end)
            position = payload_end

    walk_records(0, len(stream))
    parts: list[str] = []
    previous: list[str] | None = None
    for index, lines in enumerate(chunks, start=1):
        if lines == previous:
            continue
        previous = lines
        parts.extend([f"## Text block {index}", "", "\n".join(lines), ""])
    return "\n".join(parts).strip()


def convert_legacy_ppt(remote: RemoteFile, source: Path, output: Path) -> None:
    title = clean_title(source)
    body = extract_legacy_ppt_text(source)
    parts = [
        front_matter(remote, source, title, "ppt"),
        f"# {title}",
        "",
        f"- Source: [{remote.rel_path.name}]({md_link(os.path.relpath(source, output.parent))})",
        f"- URL: {remote.url}",
        "- Note: extracted from legacy binary PowerPoint; slide layout and images are not preserved.",
        "",
        collapse_blank_lines(body),
        "",
    ]
    output.write_text("\n".join(parts).rstrip() + "\n", encoding="utf-8")


def convert_ipynb_fallback(source: Path) -> str:
    notebook = json.loads(source.read_text(encoding="utf-8"))
    parts: list[str] = []
    for index, cell in enumerate(notebook.get("cells", []), start=1):
        cell_type = cell.get("cell_type", "cell")
        content = "".join(cell.get("source", []))
        if not content.strip():
            continue
        if cell_type == "markdown":
            parts.extend([content.strip(), ""])
        elif cell_type == "code":
            parts.extend([f"## Code cell {index}", "", "```python", content.rstrip(), "```", ""])
        else:
            parts.extend([f"## {cell_type.title()} cell {index}", "", content.strip(), ""])
    return "\n".join(parts).strip()


def convert_with_pandoc(remote: RemoteFile, source: Path, output: Path, kind: str) -> None:
    title = clean_title(source)
    media_dir = SLIDES_ROOT / "_media" / source.relative_to(RAW_ROOT).with_suffix("")
    body = ""
    error = None
    try:
        body = run_pandoc(source.resolve(), output.resolve(), media_dir.resolve())
    except (subprocess.CalledProcessError, FileNotFoundError) as exc:
        error = exc

    if not body.strip():
        if source.suffix.lower() == ".pptx":
            body = convert_pptx_fallback(source)
        elif source.suffix.lower() == ".ipynb":
            body = convert_ipynb_fallback(source)

    if not body.strip() and error:
        raise RuntimeError(f"pandoc failed for {source}: {error}") from error

    parts = [
        front_matter(remote, source, title, kind),
        f"# {title}",
        "",
        f"- Source: [{remote.rel_path.name}]({md_link(os.path.relpath(source, output.parent))})",
        f"- URL: {remote.url}",
        "",
        collapse_blank_lines(body),
        "",
    ]
    output.write_text("\n".join(parts).rstrip() + "\n", encoding="utf-8")


def markdown_path_for(raw_path: Path, slides_root: Path) -> Path:
    rel = raw_path.relative_to(RAW_ROOT)
    return slides_root / rel.with_suffix(f"{raw_path.suffix.lower()}.md")


def convert_file(remote: RemoteFile, raw_path: Path, slides_root: Path) -> Path | None:
    ext = raw_path.suffix.lower()
    if ext not in CONVERTIBLE_EXTENSIONS:
        return None
    output = markdown_path_for(raw_path, slides_root)
    output.parent.mkdir(parents=True, exist_ok=True)
    if ext == ".pdf":
        convert_pdf(remote, raw_path, output)
    elif ext == ".ppt":
        convert_legacy_ppt(remote, raw_path, output)
    elif ext in {".pptx", ".ipynb"}:
        convert_with_pandoc(remote, raw_path, output, ext.lstrip("."))
    return output


def write_index(remotes: Iterable[RemoteFile], converted: dict[Path, Path], slides_root: Path) -> None:
    slides_root.mkdir(parents=True, exist_ok=True)
    index_path = slides_root / "index.md"
    today = dt.date.today().isoformat()
    lines = [
        "---",
        'title: "SUR prednasky"',
        f"source_url: {BASE_URL}",
        f"generated: {today}",
        "---",
        "",
        "# SUR prednasky",
        "",
        f"Source: {BASE_URL}",
        "",
        "| Material | Markdown | Raw |",
        "| --- | --- | --- |",
    ]
    for remote in remotes:
        raw_path = RAW_ROOT / remote.rel_path
        md_path = converted.get(remote.rel_path)
        material = remote.rel_path.as_posix()
        raw_rel = os.path.relpath(raw_path, index_path.parent)
        raw_link = f"[raw]({md_link(raw_rel)})"
        if md_path:
            md_rel = os.path.relpath(md_path, index_path.parent)
            md_link_text = f"[md]({md_link(md_rel)})"
        else:
            md_link_text = ""
        lines.append(f"| `{material}` | {md_link_text} | {raw_link} |")
    index_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--download-only", action="store_true")
    parser.add_argument("--convert-only", action="store_true")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if args.download_only and args.convert_only:
        print("--download-only and --convert-only cannot be combined", file=sys.stderr)
        return 2

    remotes = crawl()
    if not args.convert_only:
        downloaded = skipped = 0
        for remote in remotes:
            _, status = download_file(remote, RAW_ROOT)
            downloaded += status == "downloaded"
            skipped += status == "skipped"
        print(f"downloaded={downloaded} skipped={skipped} total={len(remotes)}")

    if args.download_only:
        return 0

    converted: dict[Path, Path] = {}
    failed: list[tuple[Path, str]] = []
    for remote in remotes:
        raw_path = RAW_ROOT / remote.rel_path
        if not raw_path.exists():
            failed.append((remote.rel_path, "raw file missing"))
            continue
        try:
            md_path = convert_file(remote, raw_path, SLIDES_ROOT)
        except Exception as exc:  # noqa: BLE001 - report all conversion failures.
            failed.append((remote.rel_path, str(exc)))
            continue
        if md_path:
            converted[remote.rel_path] = md_path

    write_index(remotes, converted, SLIDES_ROOT)
    print(f"converted={len(converted)} indexed={len(remotes)} failed={len(failed)}")
    for rel_path, reason in failed:
        print(f"FAILED {rel_path}: {reason}", file=sys.stderr)
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
