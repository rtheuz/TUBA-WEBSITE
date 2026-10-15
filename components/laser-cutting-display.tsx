'use client'

import { useEffect, useRef, useState } from 'react'
import { Zap, Crosshair, Cpu } from 'lucide-react'

interface Spark {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  size: number
  color: string
}

interface LaserCuttingDisplayProps {
  isActive?: boolean
}

export function LaserCuttingDisplay({ isActive = true }: LaserCuttingDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [interactive, setInteractive] = useState(false)
  const [coords, setCoords] = useState({ x: 320, y: 180 })
  const [gasType, setGasType] = useState<'N2' | 'O2'>('N2')

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0

    // Set canvas dimensions safely with transform reset
    const resize = () => {
      if (!container || !canvas) return
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      
      const targetW = rect.width > 0 ? rect.width : (container.offsetWidth || 560)
      const targetH = rect.height > 0 ? rect.height : (container.offsetHeight || 480)

      if (targetW <= 0 || targetH <= 0) return

      width = targetW
      height = targetH

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    resize()

    // ResizeObserver ensures that if the tab was hidden and becomes visible, it re-measures instantly!
    const resizeObserver = new ResizeObserver(() => {
      resize()
    })
    resizeObserver.observe(container)
    window.addEventListener('resize', resize)

    // Pre-calculate cutting path (An industrial precision flange with gear teeth)
    const points: { x: number; y: number }[] = []
    const cx = 300
    const cy = 200
    const teeth = 12
    const rOuter = 110
    const rInner = 85

    for (let i = 0; i < teeth; i++) {
      const a0 = (i / teeth) * Math.PI * 2
      const a1 = ((i + 0.3) / teeth) * Math.PI * 2
      const a2 = ((i + 0.5) / teeth) * Math.PI * 2
      const a3 = ((i + 0.8) / teeth) * Math.PI * 2
      points.push({ x: cx + Math.cos(a0) * rInner, y: cy + Math.sin(a0) * rInner })
      points.push({ x: cx + Math.cos(a1) * rOuter, y: cy + Math.sin(a1) * rOuter })
      points.push({ x: cx + Math.cos(a2) * rOuter, y: cy + Math.sin(a2) * rOuter })
      points.push({ x: cx + Math.cos(a3) * rInner, y: cy + Math.sin(a3) * rInner })
    }

    // Spark particle pool
    const maxSparks = 60
    const sparks: Spark[] = []
    const sparkColors = ['#ffffff', '#00f0ff', '#38bdf8', '#ff9900', '#ffea00']

    function spawnSparks(originX: number, originY: number, count = 4) {
      for (let i = 0; i < count; i++) {
        if (sparks.length >= maxSparks) break
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 5 + 2
        sparks.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 2,
          vy: Math.sin(angle) * speed + Math.random() * 2,
          alpha: 1,
          size: Math.random() * 2.5 + 1,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
        })
      }
    }

    let progress = 0
    let mousePos = { x: cx, y: cy, active: false }
    let currentPos = { x: cx, y: cy }
    const cutTrail: { x: number; y: number }[] = []

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
      setInteractive(true)
      setCoords({ x: Math.round(mousePos.x), y: Math.round(mousePos.y) })
    }

    const onMouseLeave = () => {
      mousePos.active = false
      setInteractive(false)
    }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    // Render loop
    let lastTime = performance.now()
    const render = (time: number) => {
      if (!isActive) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      if (width <= 0 || height <= 0) {
        resize()
      }

      const delta = (time - lastTime) / 1000
      lastTime = time

      ctx.clearRect(0, 0, width || 600, height || 480)

      const w = width || 600
      const h = height || 480

      // 1. Draw CNC bed plate with titanium texture
      ctx.fillStyle = '#080d19'
      ctx.fillRect(15, 15, w - 30, h - 30)

      // Machine grid
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)'
      ctx.lineWidth = 1
      const gridSize = 25
      for (let x = 15; x < w - 30; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 15)
        ctx.lineTo(x, h - 15)
        ctx.stroke()
      }
      for (let y = 15; y < h - 30; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(15, y)
        ctx.lineTo(w - 15, y)
        ctx.stroke()
      }

      // Plate border with fasteners
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)'
      ctx.lineWidth = 1.5
      ctx.strokeRect(15, 15, w - 30, h - 30)

      // Clamps in 4 corners
      const clamps = [
        { x: 22, y: 22 },
        { x: w - 22, y: 22 },
        { x: 22, y: h - 22 },
        { x: w - 22, y: h - 22 },
      ]
      clamps.forEach((c) => {
        ctx.fillStyle = '#1e293b'
        ctx.beginPath()
        ctx.arc(c.x, c.y, 6, 0, Math.PI * 2)
        ctx.fill()
        ctx.strokeStyle = '#00f0ff'
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Scale points dynamically to fit canvas center
      const centerX = w * 0.48
      const centerY = h * 0.52
      const scale = Math.min(w, h) / 450

      // Compute target laser head position
      let targetX = centerX
      let targetY = centerY

      if (mousePos.active) {
        targetX = mousePos.x
        targetY = mousePos.y
      } else {
        // Auto cutting path animation
        progress += delta * 0.45
        if (progress >= points.length) progress = 0

        const idx = Math.floor(progress)
        const nextIdx = (idx + 1) % points.length
        const frac = progress - idx

        const p0 = points[idx]
        const p1 = points[nextIdx]

        targetX = centerX + (p0.x - cx + (p1.x - p0.x) * frac) * scale
        targetY = centerY + (p0.y - cy + (p1.y - p0.y) * frac) * scale

        setCoords({ x: Math.round(targetX), y: Math.round(targetY) })
      }

      // Smooth laser head interpolation
      currentPos.x += (targetX - currentPos.x) * 0.25
      currentPos.y += (targetY - currentPos.y) * 0.25

      // Add to cut trail
      cutTrail.push({ x: currentPos.x, y: currentPos.y })
      if (cutTrail.length > 180) cutTrail.shift()

      // 2. Draw cut kerf on sheet
      if (cutTrail.length > 2) {
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        // Laser cut glow
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)'
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(cutTrail[0].x, cutTrail[0].y)
        for (let i = 1; i < cutTrail.length; i++) {
          ctx.lineTo(cutTrail[i].x, cutTrail[i].y)
        }
        ctx.stroke()

        // Intense laser cut kerf
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 1.2
        ctx.stroke()
      }

      // 3. Draw Laser Head Gantry & Axis lines
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(15, currentPos.y)
      ctx.lineTo(w - 15, currentPos.y)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(currentPos.x, 15)
      ctx.lineTo(currentPos.x, h - 15)
      ctx.stroke()

      // Laser Nozzle assembly
      ctx.save()
      ctx.translate(currentPos.x, currentPos.y)

      // Targeting Reticle
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.7)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(0, 0, 18, 0, Math.PI * 2)
      ctx.stroke()

      // Crosshairs
      ctx.beginPath()
      ctx.moveTo(-24, 0)
      ctx.lineTo(-12, 0)
      ctx.moveTo(12, 0)
      ctx.lineTo(24, 0)
      ctx.moveTo(0, -24)
      ctx.lineTo(0, -12)
      ctx.moveTo(0, 12)
      ctx.lineTo(0, 24)
      ctx.stroke()

      // Molten focal point
      const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, 28)
      grad.addColorStop(0, '#ffffff')
      grad.addColorStop(0.2, '#00f0ff')
      grad.addColorStop(0.5, 'rgba(0, 240, 255, 0.4)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(0, 0, 28, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

      // 4. Update and draw Sparks
      spawnSparks(currentPos.x, currentPos.y, 3)

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x += s.vx
        s.y += s.vy
        s.vy += 0.12
        s.alpha -= 0.035

        if (s.alpha <= 0) {
          sparks.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = Math.max(0, s.alpha)
        ctx.fillStyle = s.color
        ctx.shadowColor = s.color
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isActive])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] lg:h-[520px] rounded-2xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-[#060a14] via-[#091122] to-[#040711] shadow-[0_0_35px_rgba(0,240,255,0.15)] group"
    >
      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair block" />

      {/* Top Left CNC Readout */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none flex flex-col gap-1.5 font-mono text-xs">
        <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-cyan-500/30 text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
          <span className="font-semibold tracking-wider">CORTE A LASER CNC</span>
        </div>
        <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-md border border-gray-800 text-gray-300 flex items-center gap-4">
          <span>X: <strong className="text-white font-mono">{coords.x.toFixed(1)} mm</strong></span>
          <span>Y: <strong className="text-white font-mono">{coords.y.toFixed(1)} mm</strong></span>
          <span className="text-cyan-400 font-semibold">±0.03mm</span>
        </div>
      </div>

      {/* Top Right Controls & Status */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 text-xs font-mono">
        <button
          onClick={() => setGasType(gasType === 'N2' ? 'O2' : 'N2')}
          className="bg-black/70 hover:bg-cyan-950/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-cyan-500/30 text-cyan-300 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          title="Alternar Gás de Assistência"
        >
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          Gás: <strong className="text-white">{gasType}</strong>
        </button>

        <div className="hidden sm:flex bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-amber-500/30 text-amber-300 items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>PRECISÃO INDUSTRIAL</span>
        </div>
      </div>

      {/* Bottom Floating Interactive Pill */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 text-xs bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-xl border border-cyan-500/20 text-gray-300">
        <div className="flex items-center gap-2">
          <Crosshair className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>
            {interactive ? (
              <span className="text-cyan-300 font-medium">Controle Manual Ativo — Guie o laser pela chapa</span>
            ) : (
              <span>Passe o cursor sobre a mesa para pilotar o cabeçote laser em tempo real</span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <span className="hidden md:inline">Operação: <strong className="text-white">Corte Contínuo</strong></span>
          <span>Repetibilidade: <strong className="text-emerald-400">100%</strong></span>
        </div>
      </div>
    </div>
  )
}
