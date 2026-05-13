type Point = { x: number; y: number; c?: number; r?: number }
type LabeledPoint = Point & { label: number }
type Rect = { x: number; y: number; w: number; h: number }

const colors = {
  blue: "#2f5f6f",
  blueLight: "#9bc8d6",
  rust: "#8a5a44",
  rustLight: "#d9ae95",
  ink: "#25221f",
  muted: "#6d675f",
  grid: "#d8d1c7",
  paper: "#fbfaf7",
  good: "#3f7a5f",
  goodLight: "#b9d7c4",
  bad: "#b94a48",
}

function html<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag)
  if (className) el.className = className
  return el
}

function shell(root: HTMLElement, title: string, subtitle: string) {
  root.replaceChildren()

  const outer = html("section", "sur-viz-shell")
  const head = html("div", "sur-viz-head")
  const titleEl = html("div", "sur-viz-title")
  const subtitleEl = html("div")
  const body = html("div", "sur-viz-body")

  titleEl.textContent = title
  subtitleEl.className = "sur-viz-subtitle"
  subtitleEl.textContent = subtitle
  head.append(titleEl, subtitleEl)
  outer.append(head, body)
  root.append(outer)

  return body
}

function canvasPanel(body: HTMLElement) {
  const wrap = html("div", "sur-viz-canvas-wrap")
  const canvas = document.createElement("canvas")
  wrap.append(canvas)
  body.append(wrap)
  return { wrap, canvas }
}

function readout(body: HTMLElement) {
  const el = html("div", "sur-viz-readout")
  body.append(el)
  return el
}

function controls(body: HTMLElement) {
  const el = html("div", "sur-viz-controls")
  body.append(el)
  return el
}

function range(
  parent: HTMLElement,
  label: string,
  min: number,
  max: number,
  step: number,
  value: number,
  onInput: (value: number) => void,
) {
  const box = html("label", "sur-viz-control")
  const strong = html("strong")
  const valueEl = html("span")
  const input = document.createElement("input")
  input.type = "range"
  input.min = String(min)
  input.max = String(max)
  input.step = String(step)
  input.value = String(value)

  const updateText = () => {
    valueEl.textContent = `${label}: ${Number(input.value).toFixed(2)}`
  }
  const listener = () => {
    updateText()
    onInput(Number(input.value))
  }

  strong.append(valueEl)
  box.append(strong, input)
  parent.append(box)
  updateText()
  input.addEventListener("input", listener)
  window.addCleanup(() => input.removeEventListener("input", listener))
}

function button(parent: HTMLElement, label: string, onClick: () => void) {
  const btn = html("button", "sur-viz-button")
  btn.type = "button"
  btn.textContent = label
  btn.addEventListener("click", onClick)
  window.addCleanup(() => btn.removeEventListener("click", onClick))
  parent.append(btn)
  return btn
}

type KatexWindow = Window &
  typeof globalThis & {
    katex?: {
      render: (
        tex: string,
        element: HTMLElement,
        options?: { displayMode?: boolean; throwOnError?: boolean },
      ) => void
    }
  }

let katexReady: Promise<void> | undefined

function getKatex() {
  return (window as KatexWindow).katex
}

function renderLatexInto(element: HTMLElement, tex: string, displayMode = false) {
  const katex = getKatex()
  if (!katex) {
    element.textContent = displayMode ? `$$${tex}$$` : `\\(${tex}\\)`
    return
  }

  try {
    katex.render(tex, element, { displayMode, throwOnError: false })
  } catch {
    element.textContent = displayMode ? `$$${tex}$$` : `\\(${tex}\\)`
  }
}

function renderPendingLatex(root: HTMLElement = document.body) {
  root.querySelectorAll<HTMLElement>("[data-sur-tex]").forEach((element) => {
    renderLatexInto(element, element.dataset.surTex ?? "", element.dataset.surDisplay === "true")
  })
}

function ensureKatex(root: HTMLElement = document.body) {
  if (getKatex()) {
    renderPendingLatex(root)
    return
  }

  if (!katexReady) {
    katexReady = new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"
      script.onload = () => resolve()
      script.onerror = () => resolve()
      document.head.append(script)
    })
  }

  katexReady.then(() => renderPendingLatex(root))
}

function formulaReadout(info: HTMLElement, tex: string, bodyHtml: string, displayMode = false) {
  const formula = html("span", "sur-viz-formula")
  formula.dataset.surTex = tex
  formula.dataset.surDisplay = String(displayMode)
  renderLatexInto(formula, tex, displayMode)

  const body = html("span")
  body.innerHTML = bodyHtml

  info.replaceChildren(formula, document.createElement("br"), body)
  ensureKatex(info)
}

function sizeCanvas(canvas: HTMLCanvasElement, wrap: HTMLElement) {
  const dpr = window.devicePixelRatio || 1
  const width = Math.max(1, Math.floor(wrap.clientWidth || 320))
  const height = Math.max(1, Math.floor(wrap.clientHeight || 280))
  canvas.width = Math.floor(width * dpr)
  canvas.height = Math.floor(height * dpr)
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  const ctx = canvas.getContext("2d")!
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  return { ctx, width, height }
}

function world(width: number, height: number) {
  const xMin = -3
  const xMax = 3
  const yMin = -2.2
  const yMax = 2.2
  return {
    toX: (x: number) => ((x - xMin) / (xMax - xMin)) * width,
    toY: (y: number) => height - ((y - yMin) / (yMax - yMin)) * height,
    fromX: (px: number) => xMin + (px / width) * (xMax - xMin),
    fromY: (py: number) => yMin + ((height - py) / height) * (yMax - yMin),
  }
}

function gaussian2d(x: number, y: number, mu: Point, sigma: number) {
  const dx = x - mu.x
  const dy = y - mu.y
  return Math.exp(-(dx * dx + dy * dy) / (2 * sigma * sigma))
}

function mixColor(a: string, b: string, t: number) {
  const pa = parseInt(a.slice(1), 16)
  const pb = parseInt(b.slice(1), 16)
  const ar = (pa >> 16) & 255
  const ag = (pa >> 8) & 255
  const ab = pa & 255
  const br = (pb >> 16) & 255
  const bg = (pb >> 8) & 255
  const bb = pb & 255
  const r = Math.round(ar + (br - ar) * t)
  const g = Math.round(ag + (bg - ag) * t)
  const bl = Math.round(ab + (bb - ab) * t)
  return `rgb(${r}, ${g}, ${bl})`
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

function sigmoid(value: number) {
  return 1 / (1 + Math.exp(-clamp(value, -40, 40)))
}

function softmax(values: number[], temperature: number) {
  const temp = Math.max(0.08, temperature)
  const scaled = values.map((value) => value / temp)
  const maxValue = Math.max(...scaled)
  const exp = scaled.map((value) => Math.exp(value - maxValue))
  const sum = exp.reduce((total, value) => total + value, 0)
  return exp.map((value) => value / sum)
}

function seeded(seed: number) {
  let state = seed >>> 0
  return () => {
    state = (1664525 * state + 1013904223) >>> 0
    return state / 0xffffffff
  }
}

function normal(rand: () => number) {
  const u = Math.max(rand(), 1e-9)
  const v = Math.max(rand(), 1e-9)
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

function drawAxes(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const w = world(width, height)
  ctx.strokeStyle = colors.grid
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(0, w.toY(0))
  ctx.lineTo(width, w.toY(0))
  ctx.moveTo(w.toX(0), 0)
  ctx.lineTo(w.toX(0), height)
  ctx.stroke()
}

function drawPoint(
  ctx: CanvasRenderingContext2D,
  map: ReturnType<typeof world>,
  p: Point,
  fill: string,
  radius = 4,
) {
  ctx.beginPath()
  ctx.arc(map.toX(p.x), map.toY(p.y), radius, 0, Math.PI * 2)
  ctx.fillStyle = fill
  ctx.fill()
  ctx.strokeStyle = "rgba(37, 34, 31, 0.3)"
  ctx.stroke()
}

function panelWorld(rect: Rect, xMin: number, xMax: number, yMin: number, yMax: number) {
  return {
    rect,
    xMin,
    xMax,
    yMin,
    yMax,
    toX: (x: number) => rect.x + ((x - xMin) / (xMax - xMin)) * rect.w,
    toY: (y: number) => rect.y + rect.h - ((y - yMin) / (yMax - yMin)) * rect.h,
    fromX: (px: number) => xMin + ((px - rect.x) / rect.w) * (xMax - xMin),
    fromY: (py: number) => yMin + ((rect.y + rect.h - py) / rect.h) * (yMax - yMin),
  }
}

function drawPanelFrame(ctx: CanvasRenderingContext2D, rect: Rect, title: string) {
  ctx.strokeStyle = colors.grid
  ctx.lineWidth = 1
  ctx.strokeRect(rect.x, rect.y, rect.w, rect.h)
  ctx.fillStyle = colors.muted
  ctx.font = "12px sans-serif"
  ctx.fillText(title, rect.x + 10, rect.y + 18)
}

function drawPanelAxes(ctx: CanvasRenderingContext2D, map: ReturnType<typeof panelWorld>) {
  ctx.strokeStyle = colors.grid
  ctx.lineWidth = 1
  ctx.beginPath()
  if (map.yMin <= 0 && map.yMax >= 0) {
    ctx.moveTo(map.rect.x, map.toY(0))
    ctx.lineTo(map.rect.x + map.rect.w, map.toY(0))
  }
  if (map.xMin <= 0 && map.xMax >= 0) {
    ctx.moveTo(map.toX(0), map.rect.y)
    ctx.lineTo(map.toX(0), map.rect.y + map.rect.h)
  }
  ctx.stroke()
}

function normalizeVec(v: Point) {
  const length = Math.hypot(v.x, v.y) || 1
  return { x: v.x / length, y: v.y / length }
}

function drawWorldLine(
  ctx: CanvasRenderingContext2D,
  map: ReturnType<typeof panelWorld> | ReturnType<typeof world>,
  point: Point,
  direction: Point,
  stroke: string,
  width = 2,
  dash: number[] = [],
) {
  const dir = normalizeVec(direction)
  const span = 10
  ctx.strokeStyle = stroke
  ctx.lineWidth = width
  ctx.setLineDash(dash)
  ctx.beginPath()
  ctx.moveTo(map.toX(point.x - dir.x * span), map.toY(point.y - dir.y * span))
  ctx.lineTo(map.toX(point.x + dir.x * span), map.toY(point.y + dir.y * span))
  ctx.stroke()
  ctx.setLineDash([])
}

function covariance(points: Point[]) {
  const mean = points.reduce((sum, p) => ({ x: sum.x + p.x, y: sum.y + p.y }), { x: 0, y: 0 })
  mean.x /= points.length
  mean.y /= points.length

  const cov = points.reduce(
    (sum, p) => {
      const dx = p.x - mean.x
      const dy = p.y - mean.y
      return {
        xx: sum.xx + dx * dx,
        xy: sum.xy + dx * dy,
        yy: sum.yy + dy * dy,
      }
    },
    { xx: 0, xy: 0, yy: 0 },
  )
  const scale = Math.max(1, points.length - 1)
  return { mean, xx: cov.xx / scale, xy: cov.xy / scale, yy: cov.yy / scale }
}

function eigen2(cov: { xx: number; xy: number; yy: number }) {
  const trace = cov.xx + cov.yy
  const diff = cov.xx - cov.yy
  const root = Math.sqrt(diff * diff + 4 * cov.xy * cov.xy)
  const l1 = (trace + root) / 2
  const l2 = (trace - root) / 2
  const v1 =
    Math.abs(cov.xy) > 1e-9
      ? normalizeVec({ x: cov.xy, y: l1 - cov.xx })
      : cov.xx >= cov.yy
        ? { x: 1, y: 0 }
        : { x: 0, y: 1 }
  const v2 = { x: -v1.y, y: v1.x }
  return { l1, l2, v1, v2 }
}

function drawCovEllipse(
  ctx: CanvasRenderingContext2D,
  map: ReturnType<typeof panelWorld> | ReturnType<typeof world>,
  mean: Point,
  cov: { xx: number; xy: number; yy: number },
  stroke: string,
) {
  const eig = eigen2(cov)
  const a = Math.sqrt(Math.max(eig.l1, 1e-6)) * 1.8
  const b = Math.sqrt(Math.max(eig.l2, 1e-6)) * 1.8
  ctx.strokeStyle = stroke
  ctx.lineWidth = 1.5
  ctx.beginPath()
  for (let i = 0; i <= 64; i++) {
    const t = (i / 64) * Math.PI * 2
    const x = mean.x + eig.v1.x * Math.cos(t) * a + eig.v2.x * Math.sin(t) * b
    const y = mean.y + eig.v1.y * Math.cos(t) * a + eig.v2.y * Math.sin(t) * b
    if (i === 0) ctx.moveTo(map.toX(x), map.toY(y))
    else ctx.lineTo(map.toX(x), map.toY(y))
  }
  ctx.stroke()
}

function drawProbabilityBars(
  ctx: CanvasRenderingContext2D,
  rect: Rect,
  labels: string[],
  values: number[],
  fills: string[],
  threshold?: number,
) {
  const left = rect.x + 56
  const right = rect.x + rect.w - 46
  const top = rect.y + 42
  const rowGap = 16
  const rowHeight = Math.min(34, (rect.h - 58 - rowGap * (labels.length - 1)) / labels.length)
  const barWidth = Math.max(40, right - left)

  ctx.font = "12px sans-serif"
  labels.forEach((label, i) => {
    const y = top + i * (rowHeight + rowGap)
    const value = clamp(values[i], 0, 1)

    ctx.fillStyle = colors.muted
    ctx.textAlign = "right"
    ctx.fillText(label, left - 10, y + rowHeight * 0.68)

    ctx.fillStyle = "rgba(216, 209, 199, 0.42)"
    ctx.fillRect(left, y, barWidth, rowHeight)

    ctx.fillStyle = fills[i]
    ctx.fillRect(left, y, barWidth * value, rowHeight)

    if (threshold !== undefined) {
      const tx = left + barWidth * threshold
      ctx.strokeStyle = colors.ink
      ctx.lineWidth = 1
      ctx.setLineDash([4, 4])
      ctx.beginPath()
      ctx.moveTo(tx, y - 3)
      ctx.lineTo(tx, y + rowHeight + 3)
      ctx.stroke()
      ctx.setLineDash([])
    }

    ctx.fillStyle = colors.ink
    ctx.textAlign = "left"
    ctx.fillText(value.toFixed(2), right + 10, y + rowHeight * 0.68)
  })
  ctx.textAlign = "left"
}

function renderSigmoid(root: HTMLElement) {
  const body = shell(
    root,
    "Sigmoid / logit",
    "Sigmoid prevadi linearni score z na pravdepodobnost mezi 0 a 1.",
  )
  const { wrap, canvas } = canvasPanel(body)
  const controlBox = controls(body)
  const info = readout(body)
  let weight = 1.25
  let bias = -0.2

  function draw() {
    const { ctx, width, height } = sizeCanvas(canvas, wrap)
    const rect = { x: 42, y: 28, w: width - 70, h: height - 62 }
    const map = panelWorld(rect, -5, 5, -0.08, 1.08)
    const threshold = -bias / weight

    ctx.clearRect(0, 0, width, height)
    drawPanelFrame(ctx, rect, "sigma(wx+b)")
    drawPanelAxes(ctx, map)

    ctx.strokeStyle = colors.grid
    ctx.lineWidth = 1
    ctx.setLineDash([5, 5])
    ctx.beginPath()
    ctx.moveTo(map.toX(-5), map.toY(0.5))
    ctx.lineTo(map.toX(5), map.toY(0.5))
    if (threshold >= -5 && threshold <= 5) {
      ctx.moveTo(map.toX(threshold), map.toY(-0.08))
      ctx.lineTo(map.toX(threshold), map.toY(1.08))
    }
    ctx.stroke()
    ctx.setLineDash([])

    ctx.strokeStyle = colors.blue
    ctx.lineWidth = 3
    ctx.beginPath()
    for (let i = 0; i <= 160; i++) {
      const x = -5 + (i / 160) * 10
      const y = sigmoid(weight * x + bias)
      if (i === 0) ctx.moveTo(map.toX(x), map.toY(y))
      else ctx.lineTo(map.toX(x), map.toY(y))
    }
    ctx.stroke()

    const x0 = 0
    const p0 = sigmoid(weight * x0 + bias)
    drawPoint(ctx, map, { x: x0, y: p0 }, colors.rust, 6)

    ctx.fillStyle = colors.muted
    ctx.font = "12px sans-serif"
    ctx.fillText("p=0.5", map.toX(-4.85), map.toY(0.5) - 8)
    ctx.fillText(`x0=${threshold.toFixed(2)}`, map.toX(clamp(threshold, -4.7, 4.7)) + 6, map.toY(0.08))

    formulaReadout(
      info,
      "\\sigma(z)=\\frac{1}{1+e^{-z}},\\qquad z=wx+b",
      `Aktualne <strong>w=${weight.toFixed(2)}</strong>, <strong>b=${bias.toFixed(
        2,
      )}</strong>. Bod <strong>x=0</strong> ma <strong>p=${p0.toFixed(
        2,
      )}</strong>; hranice p=0.5 je tam, kde <strong>wx+b=0</strong>.`,
    )
  }

  range(controlBox, "w", 0.25, 3.5, 0.05, weight, (value) => {
    weight = value
    draw()
  })
  range(controlBox, "b", -3, 3, 0.05, bias, (value) => {
    bias = value
    draw()
  })

  const resize = new ResizeObserver(draw)
  resize.observe(wrap)
  window.addCleanup(() => resize.disconnect())
  draw()
}

function makeLogRegData() {
  const rand = seeded(20260513)
  const data: LabeledPoint[] = []
  for (let i = 0; i < 26; i++) {
    data.push({ x: 0.9 + normal(rand) * 0.65, y: 0.62 + normal(rand) * 0.5, label: 1 })
    data.push({ x: -0.95 + normal(rand) * 0.62, y: -0.62 + normal(rand) * 0.52, label: -1 })
  }
  data.push({ x: -0.22, y: 0.52, label: 1 })
  data.push({ x: 0.3, y: -0.44, label: -1 })
  return data
}

function renderLogReg(root: HTMLElement) {
  const body = shell(
    root,
    "Logisticka regrese / rozhodovaci hranice",
    "Linearni score urci hranici p=0.5; sigmoid z nej dela posteriorni pravdepodobnost.",
  )
  const { wrap, canvas } = canvasPanel(body)
  const controlBox = controls(body)
  const info = readout(body)
  const data = makeLogRegData()
  let angle = 0.82
  let bias = 0.05

  function draw() {
    const { ctx, width, height } = sizeCanvas(canvas, wrap)
    const map = world(width, height)
    const w = { x: Math.cos(angle) * 1.35, y: Math.sin(angle) * 1.35 }
    const norm2 = w.x * w.x + w.y * w.y
    const pointOnBoundary = { x: (-bias * w.x) / norm2, y: (-bias * w.y) / norm2 }
    const direction = { x: -w.y, y: w.x }

    ctx.clearRect(0, 0, width, height)
    const step = 7
    for (let py = 0; py < height; py += step) {
      for (let px = 0; px < width; px += step) {
        const x = map.fromX(px)
        const y = map.fromY(py)
        const p = sigmoid(w.x * x + w.y * y + bias)
        ctx.fillStyle = mixColor(colors.rustLight, colors.blueLight, p)
        ctx.globalAlpha = 0.22 + Math.abs(p - 0.5) * 0.38
        ctx.fillRect(px, py, step + 1, step + 1)
      }
    }
    ctx.globalAlpha = 1
    drawAxes(ctx, width, height)
    drawWorldLine(ctx, map, pointOnBoundary, direction, colors.ink, 2.6)

    let ce = 0
    for (const p of data) {
      const prob = sigmoid(w.x * p.x + w.y * p.y + bias)
      const y = p.label > 0 ? 1 : 0
      ce += -(y * Math.log(Math.max(prob, 1e-9)) + (1 - y) * Math.log(Math.max(1 - prob, 1e-9)))
      drawPoint(ctx, map, p, p.label > 0 ? colors.blue : colors.rust, 4.6)
    }
    ce /= data.length

    ctx.fillStyle = colors.ink
    ctx.font = "13px sans-serif"
    ctx.fillText("p(C=1|x)>0.5", map.toX(0.55), map.toY(1.85))
    ctx.fillText("p(C=1|x)<0.5", map.toX(-2.65), map.toY(-1.75))

    formulaReadout(
      info,
      "P(C=1\\mid x)=\\sigma(w^\\top x+b),\\qquad \\hat C=\\mathbb{1}[P(C=1\\mid x)\\ge 0.5]",
      `Otocenim vah se meni smer hranice. Aktualni prumerna binary cross entropy na bodech je <strong>${ce.toFixed(
        2,
      )}</strong>.`,
    )
  }

  range(controlBox, "uhel w", -2.6, 2.6, 0.02, angle, (value) => {
    angle = value
    draw()
  })
  range(controlBox, "b", -2.2, 2.2, 0.05, bias, (value) => {
    bias = value
    draw()
  })

  const resize = new ResizeObserver(draw)
  resize.observe(wrap)
  window.addCleanup(() => resize.disconnect())
  draw()
}

function multiclassScores(x: number, y: number) {
  return [1.15 * x + 0.25 * y + 0.2, -0.45 * x + 1.2 * y - 0.05, -0.7 * x - 1.05 * y + 0.05]
}

function renderSoftmaxMulticlass(root: HTMLElement) {
  const body = shell(
    root,
    "Multiclass softmax",
    "Jedna ukazka patri prave do jedne tridy; softmax pravdepodobnosti mezi sebou soutezi a sectou se na 1.",
  )
  const { wrap, canvas } = canvasPanel(body)
  const controlBox = controls(body)
  const info = readout(body)
  const labels = ["C1", "C2", "C3"]
  const fills = [colors.blue, colors.rust, colors.good]
  const lights = [colors.blueLight, colors.rustLight, colors.goodLight]
  let xValue = 0.55
  let yValue = 0.25
  let temperature = 1.0

  function draw() {
    const { ctx, width, height } = sizeCanvas(canvas, wrap)
    ctx.clearRect(0, 0, width, height)

    const gap = 18
    const vertical = width < 620
    const plane: Rect = vertical
      ? { x: 34, y: 30, w: width - 68, h: (height - 90) * 0.56 }
      : { x: 38, y: 38, w: (width - 96) * 0.58, h: height - 76 }
    const bars: Rect = vertical
      ? { x: 34, y: plane.y + plane.h + gap, w: width - 68, h: height - plane.y - plane.h - gap - 24 }
      : { x: plane.x + plane.w + gap, y: 38, w: width - plane.x - plane.w - gap - 38, h: height - 76 }
    const map = panelWorld(plane, -3, 3, -2.2, 2.2)

    drawPanelFrame(ctx, plane, "feature space")
    drawPanelFrame(ctx, bars, "posterior P(C|x)")

    const step = 7
    for (let py = plane.y; py < plane.y + plane.h; py += step) {
      for (let px = plane.x; px < plane.x + plane.w; px += step) {
        const x = map.fromX(px)
        const y = map.fromY(py)
        const probs = softmax(multiclassScores(x, y), temperature)
        const best = probs.indexOf(Math.max(...probs))
        ctx.fillStyle = lights[best]
        ctx.globalAlpha = 0.2 + probs[best] * 0.4
        ctx.fillRect(px, py, step + 1, step + 1)
      }
    }
    ctx.globalAlpha = 1
    drawPanelAxes(ctx, map)
    drawPoint(ctx, map, { x: xValue, y: yValue }, colors.ink, 7)

    const probs = softmax(multiclassScores(xValue, yValue), temperature)
    const best = probs.indexOf(Math.max(...probs))
    drawProbabilityBars(ctx, bars, labels, probs, fills)

    ctx.fillStyle = colors.muted
    ctx.font = "12px sans-serif"
    ctx.fillText(`x=(${xValue.toFixed(2)}, ${yValue.toFixed(2)})`, map.toX(xValue) + 10, map.toY(yValue) - 10)

    formulaReadout(
      info,
      "P(C=k\\mid x)=\\frac{e^{z_k}}{\\sum_j e^{z_j}},\\qquad \\sum_k P(C=k\\mid x)=1",
      `Vitez je <strong>${labels[best]}</strong>. Teplota <strong>T=${temperature.toFixed(
        2,
      )}</strong> meni ostrost rozdeleni, ale pravdepodobnosti porad tvori jednu distribuci.`,
    )
  }

  range(controlBox, "x1", -2.6, 2.6, 0.05, xValue, (value) => {
    xValue = value
    draw()
  })
  range(controlBox, "x2", -2.0, 2.0, 0.05, yValue, (value) => {
    yValue = value
    draw()
  })
  range(controlBox, "T", 0.35, 2.8, 0.05, temperature, (value) => {
    temperature = value
    draw()
  })

  const resize = new ResizeObserver(draw)
  resize.observe(wrap)
  window.addCleanup(() => resize.disconnect())
  draw()
}

function renderMultilabel(root: HTMLElement) {
  const body = shell(
    root,
    "Multilabel sigmoid heads",
    "Kazdy label ma vlastni sigmoid; vysledky se nesectou na 1 a aktivnich labelu muze byt vic naraz.",
  )
  const { wrap, canvas } = canvasPanel(body)
  const controlBox = controls(body)
  const info = readout(body)
  const labels = ["y1", "y2", "y3"]
  const fills = [colors.blue, colors.rust, colors.good]
  const heads = [
    { w: { x: 1.05, y: 0.45 }, b: -0.2 },
    { w: { x: -0.55, y: 1.15 }, b: -0.15 },
    { w: { x: -0.75, y: -0.9 }, b: 0.25 },
  ]
  let xValue = 0.65
  let yValue = 0.35

  function draw() {
    const { ctx, width, height } = sizeCanvas(canvas, wrap)
    ctx.clearRect(0, 0, width, height)

    const gap = 18
    const vertical = width < 620
    const plane: Rect = vertical
      ? { x: 34, y: 30, w: width - 68, h: (height - 90) * 0.56 }
      : { x: 38, y: 38, w: (width - 96) * 0.58, h: height - 76 }
    const bars: Rect = vertical
      ? { x: 34, y: plane.y + plane.h + gap, w: width - 68, h: height - plane.y - plane.h - gap - 24 }
      : { x: plane.x + plane.w + gap, y: 38, w: width - plane.x - plane.w - gap - 38, h: height - 76 }
    const map = panelWorld(plane, -3, 3, -2.2, 2.2)

    drawPanelFrame(ctx, plane, "tri nezavisle hranice")
    drawPanelFrame(ctx, bars, "P(y_k=1|x)")
    drawPanelAxes(ctx, map)

    heads.forEach((head, i) => {
      const norm2 = head.w.x * head.w.x + head.w.y * head.w.y
      const pointOnBoundary = { x: (-head.b * head.w.x) / norm2, y: (-head.b * head.w.y) / norm2 }
      const direction = { x: -head.w.y, y: head.w.x }
      drawWorldLine(ctx, map, pointOnBoundary, direction, fills[i], 2.2, [8, 5])
      ctx.fillStyle = fills[i]
      ctx.font = "12px sans-serif"
      ctx.fillText(labels[i], map.toX(pointOnBoundary.x + direction.x * 1.8), map.toY(pointOnBoundary.y + direction.y * 1.8))
    })

    const probs = heads.map((head) => sigmoid(head.w.x * xValue + head.w.y * yValue + head.b))
    drawPoint(ctx, map, { x: xValue, y: yValue }, colors.ink, 7)
    drawProbabilityBars(ctx, bars, labels, probs, fills, 0.5)

    const active = probs.map((value, i) => (value >= 0.5 ? labels[i] : "")).filter(Boolean)
    formulaReadout(
      info,
      "P(y_k=1\\mid x)=\\sigma(w_k^\\top x+b_k),\\qquad \\hat y_k=\\mathbb{1}[P(y_k=1\\mid x)\\ge 0.5]",
      `Aktivni labely: <strong>${active.length ? active.join(", ") : "zadny"}</strong>. Soucet pravdepodobnosti je <strong>${probs
        .reduce((sum, value) => sum + value, 0)
        .toFixed(2)}</strong>, tedy nemusi byt 1.`,
    )
  }

  range(controlBox, "x1", -2.6, 2.6, 0.05, xValue, (value) => {
    xValue = value
    draw()
  })
  range(controlBox, "x2", -2.0, 2.0, 0.05, yValue, (value) => {
    yValue = value
    draw()
  })

  const resize = new ResizeObserver(draw)
  resize.observe(wrap)
  window.addCleanup(() => resize.disconnect())
  draw()
}

function renderBayes(root: HTMLElement) {
  const body = shell(
    root,
    "Bayes / MAP hranice",
    "Prior posouva rozhodovaci hranici i pri stejnem likelihood modelu.",
  )
  const { wrap, canvas } = canvasPanel(body)
  const controlBox = controls(body)
  const info = readout(body)

  let prior = 0.5
  const mu1 = { x: -1.0, y: 0 }
  const mu2 = { x: 1.0, y: 0 }
  const sigma = 0.72

  function draw() {
    const { ctx, width, height } = sizeCanvas(canvas, wrap)
    const map = world(width, height)
    ctx.clearRect(0, 0, width, height)

    const step = 6
    for (let py = 0; py < height; py += step) {
      for (let px = 0; px < width; px += step) {
        const x = map.fromX(px)
        const y = map.fromY(py)
        const l1 = prior * gaussian2d(x, y, mu1, sigma)
        const l2 = (1 - prior) * gaussian2d(x, y, mu2, sigma)
        const post = l1 / (l1 + l2)
        ctx.fillStyle = mixColor(colors.rustLight, colors.blueLight, post)
        ctx.globalAlpha = 0.5 + Math.abs(post - 0.5) * 0.5
        ctx.fillRect(px, py, step + 1, step + 1)
      }
    }
    ctx.globalAlpha = 1
    drawAxes(ctx, width, height)

    const boundary = (sigma * sigma * Math.log(prior / (1 - prior))) / 2
    ctx.strokeStyle = colors.ink
    ctx.lineWidth = 2
    ctx.setLineDash([7, 5])
    ctx.beginPath()
    ctx.moveTo(map.toX(boundary), 0)
    ctx.lineTo(map.toX(boundary), height)
    ctx.stroke()
    ctx.setLineDash([])

    drawPoint(ctx, map, mu1, colors.blue, 8)
    drawPoint(ctx, map, mu2, colors.rust, 8)

    ctx.fillStyle = colors.ink
    ctx.font = "13px sans-serif"
    ctx.fillText("C1", map.toX(mu1.x) + 10, map.toY(mu1.y) - 10)
    ctx.fillText("C2", map.toX(mu2.x) + 10, map.toY(mu2.y) - 10)

    formulaReadout(
      info,
      "\\arg\\max_c \\left[\\log p(x\\mid C=c)+\\log P(C=c)\\right]",
      `Pri <strong>P(C1)=${prior.toFixed(2)}</strong> je MAP hranice na <strong>x=${boundary.toFixed(
        2,
      )}</strong>. Vetsi prior dava tride vetsi oblast i beze zmeny likelihoodu.`,
    )
  }

  range(controlBox, "P(C1)", 0.1, 0.9, 0.01, prior, (value) => {
    prior = value
    draw()
  })

  const resize = new ResizeObserver(draw)
  resize.observe(wrap)
  window.addCleanup(() => resize.disconnect())
  draw()
}

function makeGmmData() {
  const rand = seeded(20260511)
  const data: Point[] = []
  for (let i = 0; i < 32; i++) {
    data.push({ x: -1.15 + normal(rand) * 0.45, y: 0.45 + normal(rand) * 0.35 })
  }
  for (let i = 0; i < 32; i++) {
    data.push({ x: 1.15 + normal(rand) * 0.5, y: -0.35 + normal(rand) * 0.45 })
  }
  return data
}

function renderGmm(root: HTMLElement) {
  const body = shell(
    root,
    "GMM / EM kroky",
    "E krok pocita responsibilities, M krok z nich aktualizuje parametry komponent.",
  )
  const { wrap, canvas } = canvasPanel(body)
  const actions = html("div", "sur-viz-buttons")
  body.append(actions)
  const info = readout(body)

  const data = makeGmmData()
  let means: [Point, Point] = [
    { x: -2.0, y: -1.0 },
    { x: 1.8, y: 1.0 },
  ]
  let weights: [number, number] = [0.5, 0.5]
  let resp = data.map(() => 0.5)
  let sigma = 0.82
  let phase: "E" | "M" = "E"
  let autoTimer: number | undefined

  function eStep() {
    resp = data.map((p) => {
      const a = weights[0] * gaussian2d(p.x, p.y, means[0], sigma)
      const b = weights[1] * gaussian2d(p.x, p.y, means[1], sigma)
      return a / (a + b)
    })
    phase = "M"
    formulaReadout(
      info,
      "r_{ik}=\\frac{\\pi_k\\,\\mathcal{N}(x_i\\mid\\mu_k,\\Sigma_k)}{\\sum_j \\pi_j\\,\\mathcal{N}(x_i\\mid\\mu_j,\\Sigma_j)}",
      "E krok: barva bodu ukazuje, jak moc patri ke komponente 1 vs 2.",
    )
    draw()
  }

  function mStep() {
    const n1 = resp.reduce((sum, r) => sum + r, 0)
    const n2 = data.length - n1
    const mu1 = data.reduce((m, p, i) => ({ x: m.x + p.x * resp[i], y: m.y + p.y * resp[i] }), {
      x: 0,
      y: 0,
    })
    const mu2 = data.reduce(
      (m, p, i) => ({ x: m.x + p.x * (1 - resp[i]), y: m.y + p.y * (1 - resp[i]) }),
      { x: 0, y: 0 },
    )
    means = [
      { x: mu1.x / n1, y: mu1.y / n1 },
      { x: mu2.x / n2, y: mu2.y / n2 },
    ]
    weights = [n1 / data.length, n2 / data.length]
    sigma = Math.max(0.42, sigma * 0.95)
    phase = "E"
    formulaReadout(
      info,
      "\\mu_k=\\frac{\\sum_i r_{ik}x_i}{\\sum_i r_{ik}}",
      `M krok: aktualizovane vahy jsou <strong>${weights[0].toFixed(
        2,
      )}</strong> a <strong>${weights[1].toFixed(2)}</strong>.`,
    )
    draw()
  }

  function step() {
    phase === "E" ? eStep() : mStep()
  }

  function reset() {
    if (autoTimer !== undefined) {
      window.clearInterval(autoTimer)
      autoTimer = undefined
    }
    means = [
      { x: -2.0, y: -1.0 },
      { x: 1.8, y: 1.0 },
    ]
    weights = [0.5, 0.5]
    resp = data.map(() => 0.5)
    sigma = 0.82
    phase = "E"
    info.innerHTML = "Zacni E krokem: pro kazdy bod se spocita posterior komponenty."
    draw()
  }

  function toggleAuto() {
    if (autoTimer !== undefined) {
      window.clearInterval(autoTimer)
      autoTimer = undefined
      return
    }
    autoTimer = window.setInterval(step, 900)
    window.addCleanup(() => {
      if (autoTimer !== undefined) window.clearInterval(autoTimer)
    })
  }

  function draw() {
    const { ctx, width, height } = sizeCanvas(canvas, wrap)
    const map = world(width, height)
    ctx.clearRect(0, 0, width, height)
    drawAxes(ctx, width, height)

    for (const m of means) {
      ctx.beginPath()
      ctx.arc(map.toX(m.x), map.toY(m.y), Math.abs(map.toX(m.x + sigma) - map.toX(m.x)), 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(80, 74, 68, 0.35)"
      ctx.lineWidth = 2
      ctx.stroke()
    }

    data.forEach((p, i) => {
      drawPoint(ctx, map, p, mixColor(colors.rust, colors.blue, resp[i]), 4.5)
    })

    drawPoint(ctx, map, means[0], colors.blue, 9)
    drawPoint(ctx, map, means[1], colors.rust, 9)

    ctx.fillStyle = colors.ink
    ctx.font = "13px sans-serif"
    ctx.fillText("mu1", map.toX(means[0].x) + 10, map.toY(means[0].y) - 10)
    ctx.fillText("mu2", map.toX(means[1].x) + 10, map.toY(means[1].y) - 10)
  }

  button(actions, "Step", step)
  button(actions, "Auto", toggleAuto)
  button(actions, "Reset", reset)

  const resize = new ResizeObserver(draw)
  resize.observe(wrap)
  window.addCleanup(() => resize.disconnect())
  reset()
}

function renderHmm(root: HTMLElement) {
  const body = shell(
    root,
    "HMM / Viterbi trellis",
    "Dynamicke programovani uklada nejlepsi predchozi stav misto enumerace vsech cest.",
  )
  const wrap = html("div", "sur-viz-svg-wrap")
  const actions = html("div", "sur-viz-buttons")
  const info = readout(body)
  body.prepend(wrap, actions)

  const states = ["S1", "S2", "S3"]
  const obs = ["a", "b", "a", "a", "b"]
  const start = [0.55, 0.3, 0.15]
  const trans = [
    [0.72, 0.2, 0.08],
    [0.18, 0.64, 0.18],
    [0.08, 0.28, 0.64],
  ]
  const emit: Record<string, number[]> = {
    a: [0.75, 0.35, 0.2],
    b: [0.25, 0.65, 0.8],
  }
  const delta: number[][] = []
  const psi: number[][] = []
  let stepIndex = 0

  function computeUntil(tMax: number) {
    delta.length = 0
    psi.length = 0
    delta[0] = start.map((p, s) => p * emit[obs[0]][s])
    psi[0] = states.map(() => -1)
    for (let t = 1; t <= tMax; t++) {
      delta[t] = []
      psi[t] = []
      for (let s = 0; s < states.length; s++) {
        let best = -1
        let arg = 0
        for (let prev = 0; prev < states.length; prev++) {
          const score = delta[t - 1][prev] * trans[prev][s] * emit[obs[t]][s]
          if (score > best) {
            best = score
            arg = prev
          }
        }
        delta[t][s] = best
        psi[t][s] = arg
      }
    }
  }

  function bestPath() {
    const last = obs.length - 1
    computeUntil(last)
    let best = 0
    for (let s = 1; s < states.length; s++) {
      if (delta[last][s] > delta[last][best]) best = s
    }
    const path = Array(obs.length).fill(0)
    path[last] = best
    for (let t = last; t > 0; t--) {
      path[t - 1] = psi[t][path[t]]
    }
    return path
  }

  function draw() {
    computeUntil(Math.min(stepIndex, obs.length - 1))
    const path = stepIndex >= obs.length ? bestPath() : []
    const width = 720
    const height = 300
    const x = (t: number) => 70 + t * ((width - 140) / (obs.length - 1))
    const y = (s: number) => 70 + s * 80
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`)
    svg.setAttribute("role", "img")
    svg.setAttribute("aria-label", "Viterbi trellis")

    for (let t = 0; t < obs.length; t++) {
      const label = document.createElementNS(svg.namespaceURI, "text")
      label.setAttribute("x", String(x(t)))
      label.setAttribute("y", "30")
      label.setAttribute("text-anchor", "middle")
      label.setAttribute("fill", colors.muted)
      label.textContent = `x${t + 1}=${obs[t]}`
      svg.append(label)
    }

    for (let t = 1; t < obs.length; t++) {
      for (let prev = 0; prev < states.length; prev++) {
        for (let s = 0; s < states.length; s++) {
          const edge = document.createElementNS(svg.namespaceURI, "line")
          edge.setAttribute("x1", String(x(t - 1)))
          edge.setAttribute("y1", String(y(prev)))
          edge.setAttribute("x2", String(x(t)))
          edge.setAttribute("y2", String(y(s)))
          const activeBest =
            stepIndex > t && psi[t] && psi[t][s] === prev && (!path.length || path[t] === s)
          const finalPath = path.length && path[t - 1] === prev && path[t] === s
          edge.setAttribute("stroke", finalPath ? colors.good : activeBest ? colors.ink : colors.grid)
          edge.setAttribute("stroke-width", finalPath ? "4" : activeBest ? "2.5" : "1")
          edge.setAttribute("opacity", finalPath || activeBest ? "0.9" : "0.28")
          svg.append(edge)
        }
      }
    }

    for (let t = 0; t < obs.length; t++) {
      for (let s = 0; s < states.length; s++) {
        const active = t <= Math.min(stepIndex, obs.length - 1)
        const onPath = path.length && path[t] === s
        const node = document.createElementNS(svg.namespaceURI, "circle")
        node.setAttribute("cx", String(x(t)))
        node.setAttribute("cy", String(y(s)))
        node.setAttribute("r", onPath ? "22" : active ? "19" : "16")
        node.setAttribute("fill", onPath ? colors.good : active ? colors.blue : colors.paper)
        node.setAttribute("stroke", active ? colors.ink : colors.grid)
        node.setAttribute("stroke-width", onPath ? "3" : "1.5")
        svg.append(node)

        const name = document.createElementNS(svg.namespaceURI, "text")
        name.setAttribute("x", String(x(t)))
        name.setAttribute("y", String(y(s) - 2))
        name.setAttribute("text-anchor", "middle")
        name.setAttribute("fill", active ? "#fff" : colors.muted)
        name.setAttribute("font-size", "13")
        name.setAttribute("font-weight", "700")
        name.textContent = states[s]
        svg.append(name)

        if (active && delta[t]) {
          const score = document.createElementNS(svg.namespaceURI, "text")
          score.setAttribute("x", String(x(t)))
          score.setAttribute("y", String(y(s) + 15))
          score.setAttribute("text-anchor", "middle")
          score.setAttribute("fill", active ? "#fff" : colors.muted)
          score.setAttribute("font-size", "10")
          score.textContent = delta[t][s].toExponential(1)
          svg.append(score)
        }
      }
    }

    wrap.replaceChildren(svg)

    if (stepIndex === 0) {
      formulaReadout(
        info,
        "\\delta_1(s)=P(s)\\,p(x_1\\mid s)",
        "Inicializace kombinuje prior stavu a emission pravdepodobnost prvniho pozorovani.",
      )
    } else if (stepIndex < obs.length) {
      formulaReadout(
        info,
        "\\delta_t(s)=\\max_q\\,\\delta_{t-1}(q)a_{qs}b_s(x_t)",
        "Kazdy uzel si pamatuje nejlepsiho predchudce.",
      )
    } else {
      info.innerHTML = `Nejpravdepodobnejsi cesta: <strong>${path
        .map((s) => states[s])
        .join(" -> ")}</strong>. Backtrace jde zprava doleva pres ulozene predchudce.`
    }
  }

  function next() {
    stepIndex = Math.min(stepIndex + 1, obs.length)
    draw()
  }

  function reset() {
    stepIndex = 0
    draw()
  }

  button(actions, "Step", next)
  button(actions, "Reset", reset)
  draw()
}

function renderSvm(root: HTMLElement) {
  const body = shell(
    root,
    "SVM / margin a kernel",
    "Margin ukazuje podporne vektory; kernel pohled ukazuje, proc skalarni soucin ve feature prostoru staci.",
  )
  const { wrap, canvas } = canvasPanel(body)
  const controlBox = controls(body)
  const actions = html("div", "sur-viz-buttons")
  body.append(actions)
  const info = readout(body)

  const marginData: LabeledPoint[] = [
    { x: -2.3, y: 1.05, label: 1 },
    { x: -1.7, y: 1.45, label: 1 },
    { x: -1.2, y: 0.72, label: 1 },
    { x: -0.45, y: 1.12, label: 1 },
    { x: 0.28, y: 0.55, label: 1 },
    { x: 1.0, y: 1.0, label: 1 },
    { x: 1.8, y: 1.35, label: 1 },
    { x: -2.2, y: -1.15, label: -1 },
    { x: -1.3, y: -1.42, label: -1 },
    { x: -0.45, y: -0.88, label: -1 },
    { x: 0.42, y: -1.2, label: -1 },
    { x: 1.08, y: -0.72, label: -1 },
    { x: 1.85, y: -1.28, label: -1 },
    { x: 2.35, y: -0.92, label: -1 },
  ]
  const kernelData: LabeledPoint[] = [
    { x: -0.35, y: 0.18, label: 1 },
    { x: 0.25, y: -0.28, label: 1 },
    { x: 0.42, y: 0.34, label: 1 },
    { x: -0.18, y: -0.42, label: 1 },
    { x: -1.55, y: 0.95, label: -1 },
    { x: -1.2, y: -1.1, label: -1 },
    { x: 1.35, y: 1.05, label: -1 },
    { x: 1.45, y: -0.92, label: -1 },
    { x: 0.0, y: 1.55, label: -1 },
    { x: 0.1, y: -1.62, label: -1 },
  ]

  let cPenalty = 1.0
  let mode: "margin" | "kernel" = "margin"

  function drawMargin() {
    const { ctx, width, height } = sizeCanvas(canvas, wrap)
    const map = world(width, height)
    const logC = Math.log(cPenalty)
    const normal = normalizeVec({ x: -0.28 + 0.12 * logC, y: 1 })
    const bias = -0.08 + 0.05 * logC
    const margin = 0.92 / (0.8 + Math.sqrt(cPenalty))
    const direction = { x: -normal.y, y: normal.x }
    const pointOn = (level: number) => ({
      x: (level - bias) * normal.x,
      y: (level - bias) * normal.y,
    })

    ctx.clearRect(0, 0, width, height)
    const step = 8
    for (let py = 0; py < height; py += step) {
      for (let px = 0; px < width; px += step) {
        const x = map.fromX(px)
        const y = map.fromY(py)
        const score = normal.x * x + normal.y * y + bias
        ctx.fillStyle = score >= 0 ? colors.blueLight : colors.rustLight
        ctx.globalAlpha = 0.18
        ctx.fillRect(px, py, step + 1, step + 1)
      }
    }
    ctx.globalAlpha = 1
    drawAxes(ctx, width, height)

    drawWorldLine(ctx, map, pointOn(0), direction, colors.ink, 2.5)
    drawWorldLine(ctx, map, pointOn(margin), direction, colors.ink, 1.5, [8, 6])
    drawWorldLine(ctx, map, pointOn(-margin), direction, colors.ink, 1.5, [8, 6])

    let support = 0
    let slack = 0
    for (const p of marginData) {
      const signed = p.label * (normal.x * p.x + normal.y * p.y + bias)
      const violation = Math.max(0, margin - signed)
      const fill = p.label > 0 ? colors.blue : colors.rust
      if (Math.abs(signed - margin) < 0.18 || violation > 0) support++
      if (violation > 0) {
        slack++
        const projected = {
          x: p.x + normal.x * violation * p.label,
          y: p.y + normal.y * violation * p.label,
        }
        ctx.strokeStyle = colors.bad
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(map.toX(p.x), map.toY(p.y))
        ctx.lineTo(map.toX(projected.x), map.toY(projected.y))
        ctx.stroke()
      }
      drawPoint(ctx, map, p, fill, violation > 0 ? 6 : 5)
      if (Math.abs(signed - margin) < 0.18 || violation > 0) {
        ctx.strokeStyle = colors.ink
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(map.toX(p.x), map.toY(p.y), 9, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    formulaReadout(
      info,
      "\\min_{w,b,\\xi}\\frac{1}{2}\\lVert w\\rVert^2+C\\sum_i\\xi_i\\quad\\text{s.t.}\\quad y_i(w^\\top x_i+b)\\ge 1-\\xi_i",
      `Aktualne <strong>C=${cPenalty.toFixed(
        2,
      )}</strong>: oznaceno je <strong>${support}</strong> support/slack bodu, z toho <strong>${slack}</strong> porusuje margin. Vetsi C vic tresta poruseni, mensi C dovoli mekci hranici.`,
    )
  }

  function drawKernel() {
    const { ctx, width, height } = sizeCanvas(canvas, wrap)
    ctx.clearRect(0, 0, width, height)
    const gap = 18
    const vertical = width < 560
    const left: Rect = vertical
      ? { x: 34, y: 30, w: width - 68, h: (height - 80) / 2 }
      : { x: 34, y: 38, w: (width - 86) / 2, h: height - 72 }
    const right: Rect = vertical
      ? { x: 34, y: left.y + left.h + gap, w: width - 68, h: (height - 80) / 2 }
      : { x: left.x + left.w + gap, y: 38, w: (width - 86) / 2, h: height - 72 }
    const input = panelWorld(left, -2, 2, -2, 2)
    const feature = panelWorld(right, -2, 2, -0.2, 4.5)
    const threshold = 1.15

    drawPanelFrame(ctx, left, "vstupni prostor")
    drawPanelFrame(ctx, right, "feature prostor")
    drawPanelAxes(ctx, input)
    drawPanelAxes(ctx, feature)

    ctx.strokeStyle = colors.ink
    ctx.lineWidth = 2
    ctx.setLineDash([7, 5])
    ctx.beginPath()
    for (let i = 0; i <= 96; i++) {
      const t = (i / 96) * Math.PI * 2
      const x = Math.cos(t) * Math.sqrt(threshold)
      const y = Math.sin(t) * Math.sqrt(threshold)
      if (i === 0) ctx.moveTo(input.toX(x), input.toY(y))
      else ctx.lineTo(input.toX(x), input.toY(y))
    }
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(feature.toX(-2), feature.toY(threshold))
    ctx.lineTo(feature.toX(2), feature.toY(threshold))
    ctx.stroke()
    ctx.setLineDash([])

    for (const p of kernelData) {
      const fill = p.label > 0 ? colors.blue : colors.rust
      drawPoint(ctx, input, p, fill, 5)
      drawPoint(ctx, feature, { x: p.x, y: p.x * p.x + p.y * p.y }, fill, 5)
    }

    ctx.fillStyle = colors.muted
    ctx.font = "12px sans-serif"
    ctx.fillText("nelinearni kruh", input.toX(-1.9), input.toY(1.8))
    ctx.fillText("linearni rez", feature.toX(-1.9), feature.toY(4.25))

    formulaReadout(
      info,
      "K(x,z)=(x^\\top z+1)^2=\\phi(x)^\\top\\phi(z)",
      "Kernel nemusi explicitne kreslit cely vyssi prostor. Staci, ze SVM dostane skalarni soucin po mapovani a muze najit linearni hranici tam.",
    )
  }

  function draw() {
    mode === "margin" ? drawMargin() : drawKernel()
  }

  range(controlBox, "C", 0.2, 4, 0.05, cPenalty, (value) => {
    cPenalty = value
    draw()
  })
  button(actions, "Margin", () => {
    mode = "margin"
    draw()
  })
  button(actions, "Kernel", () => {
    mode = "kernel"
    draw()
  })

  const resize = new ResizeObserver(draw)
  resize.observe(wrap)
  window.addCleanup(() => resize.disconnect())
  draw()
}

function makePcaLdaData(separation: number) {
  const rand = seeded(20260512)
  const angle = 1.08
  const ca = Math.cos(angle)
  const sa = Math.sin(angle)
  const makeClass = (label: number, meanX: number, meanY: number) => {
    const points: LabeledPoint[] = []
    for (let i = 0; i < 34; i++) {
      const along = normal(rand) * 1.05
      const across = normal(rand) * 0.24
      points.push({
        x: meanX + along * ca - across * sa,
        y: meanY + along * sa + across * ca,
        label,
      })
    }
    return points
  }
  return [
    ...makeClass(1, -separation * 0.55, 0.2),
    ...makeClass(-1, separation * 0.55, -0.2),
  ]
}

function renderPcaLda(root: HTMLElement) {
  const body = shell(
    root,
    "PCA vs LDA smer",
    "PCA sleduje celkovou varianci bez trid; LDA hleda smer, ktery oddeli tridy.",
  )
  const { wrap, canvas } = canvasPanel(body)
  const controlBox = controls(body)
  const info = readout(body)
  let separation = 1.35

  function draw() {
    const { ctx, width, height } = sizeCanvas(canvas, wrap)
    const map = world(width, height)
    const data = makePcaLdaData(separation)
    const c1 = data.filter((p) => p.label > 0)
    const c2 = data.filter((p) => p.label < 0)
    const totalCov = covariance(data)
    const cov1 = covariance(c1)
    const cov2 = covariance(c2)
    const pca = eigen2(totalCov)
    const sw = {
      xx: cov1.xx + cov2.xx,
      xy: cov1.xy + cov2.xy,
      yy: cov1.yy + cov2.yy,
    }
    const diff = { x: cov1.mean.x - cov2.mean.x, y: cov1.mean.y - cov2.mean.y }
    const det = Math.max(1e-6, sw.xx * sw.yy - sw.xy * sw.xy)
    const lda = normalizeVec({
      x: (sw.yy * diff.x - sw.xy * diff.y) / det,
      y: (-sw.xy * diff.x + sw.xx * diff.y) / det,
    })

    ctx.clearRect(0, 0, width, height)
    drawAxes(ctx, width, height)

    drawCovEllipse(ctx, map, cov1.mean, cov1, colors.blue)
    drawCovEllipse(ctx, map, cov2.mean, cov2, colors.rust)
    for (const p of data) {
      drawPoint(ctx, map, p, p.label > 0 ? colors.blue : colors.rust, 4.2)
    }

    drawPoint(ctx, map, cov1.mean, colors.blue, 8)
    drawPoint(ctx, map, cov2.mean, colors.rust, 8)
    drawWorldLine(ctx, map, totalCov.mean, pca.v1, colors.blue, 3, [8, 5])
    drawWorldLine(ctx, map, totalCov.mean, lda, colors.good, 3)

    ctx.fillStyle = colors.blue
    ctx.font = "13px sans-serif"
    ctx.fillText("PCA", map.toX(totalCov.mean.x + pca.v1.x * 1.8), map.toY(totalCov.mean.y + pca.v1.y * 1.8))
    ctx.fillStyle = colors.good
    ctx.fillText("LDA", map.toX(totalCov.mean.x + lda.x * 1.8), map.toY(totalCov.mean.y + lda.y * 1.8))

    const dot = Math.abs(pca.v1.x * lda.x + pca.v1.y * lda.y)
    const angle = (Math.acos(clamp(dot, -1, 1)) * 180) / Math.PI
    formulaReadout(
      info,
      "w_{LDA}\\propto S_W^{-1}(\\mu_1-\\mu_2),\\qquad u_{PCA}=\\arg\\max_{\\lVert u\\rVert=1}u^\\top S_Tu",
      `Pri separaci <strong>${separation.toFixed(
        2,
      )}</strong> je rozdil smeru asi <strong>${angle.toFixed(
        0,
      )} deg</strong>. PCA muze jit po nejvetsi rozptylene ose, i kdyz pro klasifikaci neni nejlepsi.`,
    )
  }

  range(controlBox, "Separace trid", 0.4, 2.4, 0.05, separation, (value) => {
    separation = value
    draw()
  })

  const resize = new ResizeObserver(draw)
  resize.observe(wrap)
  window.addCleanup(() => resize.disconnect())
  draw()
}

function erfApprox(x: number) {
  const sign = x < 0 ? -1 : 1
  const a = Math.abs(x)
  const t = 1 / (1 + 0.3275911 * a)
  const y =
    1 -
    (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t +
      0.254829592) *
      t *
      Math.exp(-a * a))
  return sign * y
}

function normalPdf1d(x: number, mean: number, sigma: number) {
  const z = (x - mean) / sigma
  return Math.exp(-0.5 * z * z) / (sigma * Math.sqrt(2 * Math.PI))
}

function normalCdf1d(x: number, mean: number, sigma: number) {
  return 0.5 * (1 + erfApprox((x - mean) / (sigma * Math.SQRT2)))
}

function renderDet(root: HTMLElement) {
  const body = shell(
    root,
    "DET / threshold",
    "Posun prahu meni false alarm a miss; jeden bod DET krivky je jedna konkretni hodnota prahu.",
  )
  const { wrap, canvas } = canvasPanel(body)
  const controlBox = controls(body)
  const info = readout(body)
  let threshold = 0.15
  const impostor = { mean: -0.65, sigma: 0.72 }
  const target = { mean: 0.9, sigma: 0.68 }

  function rates(th: number) {
    const fa = 1 - normalCdf1d(th, impostor.mean, impostor.sigma)
    const miss = normalCdf1d(th, target.mean, target.sigma)
    return { fa, miss }
  }

  function drawCurve(ctx: CanvasRenderingContext2D, map: ReturnType<typeof panelWorld>) {
    ctx.strokeStyle = colors.ink
    ctx.lineWidth = 2
    ctx.beginPath()
    for (let i = 0; i <= 90; i++) {
      const th = -2.8 + (i / 90) * 5.6
      const r = rates(th)
      if (i === 0) ctx.moveTo(map.toX(r.fa), map.toY(r.miss))
      else ctx.lineTo(map.toX(r.fa), map.toY(r.miss))
    }
    ctx.stroke()
  }

  function drawDistribution(ctx: CanvasRenderingContext2D, map: ReturnType<typeof panelWorld>) {
    const drawPdf = (mean: number, sigma: number, stroke: string) => {
      ctx.strokeStyle = stroke
      ctx.lineWidth = 2.5
      ctx.beginPath()
      for (let i = 0; i <= 120; i++) {
        const x = -3 + (i / 120) * 6
        const y = normalPdf1d(x, mean, sigma)
        if (i === 0) ctx.moveTo(map.toX(x), map.toY(y))
        else ctx.lineTo(map.toX(x), map.toY(y))
      }
      ctx.stroke()
    }

    drawPdf(impostor.mean, impostor.sigma, colors.rust)
    drawPdf(target.mean, target.sigma, colors.blue)
    ctx.strokeStyle = colors.ink
    ctx.lineWidth = 2
    ctx.setLineDash([7, 5])
    ctx.beginPath()
    ctx.moveTo(map.toX(threshold), map.toY(0))
    ctx.lineTo(map.toX(threshold), map.toY(0.65))
    ctx.stroke()
    ctx.setLineDash([])
  }

  function draw() {
    const { ctx, width, height } = sizeCanvas(canvas, wrap)
    ctx.clearRect(0, 0, width, height)
    const gap = 18
    const vertical = width < 560
    const left: Rect = vertical
      ? { x: 34, y: 30, w: width - 68, h: (height - 80) / 2 }
      : { x: 42, y: 38, w: (width - 96) / 2, h: height - 76 }
    const right: Rect = vertical
      ? { x: 34, y: left.y + left.h + gap, w: width - 68, h: (height - 80) / 2 }
      : { x: left.x + left.w + gap, y: 38, w: (width - 96) / 2, h: height - 76 }
    const distMap = panelWorld(left, -3, 3, 0, 0.65)
    const detMap = panelWorld(right, 0, 1, 0, 1)
    const current = rates(threshold)

    drawPanelFrame(ctx, left, "score distribuce")
    drawPanelFrame(ctx, right, "DET")
    drawPanelAxes(ctx, distMap)
    drawPanelAxes(ctx, detMap)
    drawDistribution(ctx, distMap)
    drawCurve(ctx, detMap)
    drawPoint(ctx, detMap, { x: current.fa, y: current.miss }, colors.good, 7)

    ctx.fillStyle = colors.muted
    ctx.font = "12px sans-serif"
    ctx.fillText("impostor", distMap.toX(-1.85), distMap.toY(0.55))
    ctx.fillText("target", distMap.toX(1.05), distMap.toY(0.55))
    ctx.fillText("P_FA", detMap.toX(0.78), detMap.toY(-0.08))
    ctx.save()
    ctx.translate(detMap.toX(-0.12), detMap.toY(0.78))
    ctx.rotate(-Math.PI / 2)
    ctx.fillText("P_Miss", 0, 0)
    ctx.restore()

    formulaReadout(
      info,
      "P_{FA}=\\frac{FP}{FP+TN},\\qquad P_{Miss}=\\frac{FN}{TP+FN}",
      `Prahovani na <strong>${threshold.toFixed(2)}</strong>: <strong>P_FA=${(
        current.fa * 100
      ).toFixed(1)}%</strong>, <strong>P_Miss=${(current.miss * 100).toFixed(
        1,
      )}%</strong>. Zvyseni prahu snizuje false alarm, ale zvysuje miss.`,
    )
  }

  range(controlBox, "Threshold", -2.2, 2.6, 0.05, threshold, (value) => {
    threshold = value
    draw()
  })

  const resize = new ResizeObserver(draw)
  resize.observe(wrap)
  window.addCleanup(() => resize.disconnect())
  draw()
}

function mountSurVisuals() {
  document.querySelectorAll<HTMLElement>("[data-sur-viz]").forEach((root) => {
    if (root.dataset.surVizMounted === "true") return
    root.dataset.surVizMounted = "true"

    if (root.dataset.surViz === "sigmoid-logit") {
      renderSigmoid(root)
    } else if (root.dataset.surViz === "logreg-binary") {
      renderLogReg(root)
    } else if (root.dataset.surViz === "softmax-multiclass") {
      renderSoftmaxMulticlass(root)
    } else if (root.dataset.surViz === "multilabel-sigmoids") {
      renderMultilabel(root)
    } else if (root.dataset.surViz === "bayes-map") {
      renderBayes(root)
    } else if (root.dataset.surViz === "gmm-em") {
      renderGmm(root)
    } else if (root.dataset.surViz === "hmm-viterbi") {
      renderHmm(root)
    } else if (root.dataset.surViz === "svm-margin-kernel") {
      renderSvm(root)
    } else if (root.dataset.surViz === "pca-lda") {
      renderPcaLda(root)
    } else if (root.dataset.surViz === "det-threshold") {
      renderDet(root)
    }
  })
}

document.addEventListener("nav", mountSurVisuals)
