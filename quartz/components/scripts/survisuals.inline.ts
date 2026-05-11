type Point = { x: number; y: number; c?: number; r?: number }

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

function sizeCanvas(canvas: HTMLCanvasElement, wrap: HTMLElement) {
  const rect = wrap.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1
  const width = Math.max(320, Math.floor(rect.width))
  const height = Math.max(260, Math.floor(rect.height))
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

    info.innerHTML = `<span class="sur-viz-formula">argmax_c log p(x|C=c) + log P(C=c)</span><br>Pri <strong>P(C1)=${prior.toFixed(
      2,
    )}</strong> je MAP hranice na <strong>x=${boundary.toFixed(
      2,
    )}</strong>. Vetsi prior dava tride vetsi oblast i beze zmeny likelihoodu.`
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
    info.innerHTML =
      '<span class="sur-viz-formula">r_ik = pi_k N(x_i|mu_k,Sigma_k) / sum_j pi_j N(x_i|mu_j,Sigma_j)</span><br>E krok: barva bodu ukazuje, jak moc patri ke komponente 1 vs 2.'
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
    info.innerHTML = `<span class="sur-viz-formula">mu_k = sum_i r_ik x_i / sum_i r_ik</span><br>M krok: aktualizovane vahy jsou <strong>${weights[0].toFixed(
      2,
    )}</strong> a <strong>${weights[1].toFixed(2)}</strong>.`
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
      info.innerHTML =
        '<span class="sur-viz-formula">delta_1(s) = P(s) p(x_1|s)</span><br>Inicializace kombinuje prior stavu a emission pravdepodobnost prvniho pozorovani.'
    } else if (stepIndex < obs.length) {
      info.innerHTML =
        '<span class="sur-viz-formula">delta_t(s) = max_q delta_{t-1}(q) a_qs b_s(x_t)</span><br>Kazdy uzel si pamatuje nejlepsiho predchudce.'
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

function mountSurVisuals() {
  document.querySelectorAll<HTMLElement>("[data-sur-viz]").forEach((root) => {
    if (root.dataset.surVizMounted === "true") return
    root.dataset.surVizMounted = "true"

    if (root.dataset.surViz === "bayes-map") {
      renderBayes(root)
    } else if (root.dataset.surViz === "gmm-em") {
      renderGmm(root)
    } else if (root.dataset.surViz === "hmm-viterbi") {
      renderHmm(root)
    }
  })
}

document.addEventListener("nav", mountSurVisuals)
