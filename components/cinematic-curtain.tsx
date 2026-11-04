'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Crosshair, Zap, Cpu } from 'lucide-react'

interface NavigationContextType {
  transitionTo: (targetId: string, label?: string) => void
  isTransitioning: boolean
  activeSection: string
}

const NavigationContext = createContext<NavigationContextType>({
  transitionTo: () => {},
  isTransitioning: false,
  activeSection: 'inicio',
})

export const useCinematicNavigation = () => useContext(NavigationContext)

const SECTION_LABELS: Record<string, string> = {
  inicio: '01 // INÍCIO · CORTE A LASER',
  servicos: '02 // SERVIÇOS & METALURGIA',
  calculadora: '03 // SIMULADOR CNC & ORÇAMENTO',
  sobre: '04 // HISTÓRIA & CAPACIDADE',
  portfolio: '05 // PORTFÓLIO DE PROJETOS',
  contato: '06 // ATENDIMENTO & ENGENHARIA',
}

export function CinematicCurtainProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [targetLabel, setTargetLabel] = useState('CALIBRANDO SETOR...')
  const [activeSection, setActiveSection] = useState('inicio')

  const transitionTo = useCallback((targetId: string, customLabel?: string) => {
    const cleanId = targetId.replace(/^#/, '')
    const label = customLabel || SECTION_LABELS[cleanId] || `SECTOR // ${cleanId.toUpperCase()}`
    
    setTargetLabel(label)
    setIsTransitioning(true)

    // Execute scroll when screen is covered (at 380ms)
    setTimeout(() => {
      const targetElement = document.getElementById(cleanId)
      if (targetElement) {
        const lenis = (window as any).__lenis
        if (lenis) {
          lenis.scrollTo(targetElement, { offset: -20, immediate: true })
        } else {
          targetElement.scrollIntoView({ behavior: 'auto' })
        }
      }
      setActiveSection(cleanId)
    }, 420)

    // Lift curtain after positioning
    setTimeout(() => {
      setIsTransitioning(false)
    }, 950)
  }, [])

  // Global anchor click interceptor for smooth # links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      const href = target.getAttribute('href')
      if (!href || !href.startsWith('#') || href === '#') return

      // Don't intercept if external or special
      if (target.getAttribute('target') === '_blank') return

      e.preventDefault()
      const cleanId = href.replace(/^#/, '')
      transitionTo(cleanId)
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [transitionTo])

  // Track active section on scroll
  useEffect(() => {
    const sections = ['inicio', 'servicos', 'calculadora', 'sobre', 'portfolio', 'contato']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: [0.25, 0.5] }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <NavigationContext.Provider value={{ transitionTo, isTransitioning, activeSection }}>
      {children}

      {/* Cinematic Laser Shutter Curtain */}
      <AnimatePresence>
        {isTransitioning && (
          <div className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden">
            {/* Top Shutter Panel */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{
                duration: 0.42,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="absolute inset-0 bg-gradient-to-b from-[#020409] via-[#050a17] to-[#030611] flex flex-col items-center justify-center border-b-2 border-cyan-400 shadow-[0_10px_50px_rgba(0,240,255,0.4)]"
            >
              {/* Background CNC grid pattern */}
              <div className="absolute inset-0 bg-cnc-grid opacity-20 pointer-events-none" />

              {/* Leading Laser Blade Beam */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#00f0ff] via-white to-transparent shadow-[0_0_30px_#00f0ff,0_0_60px_#00f0ff]" />

              {/* Central Cinematic HUD */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative z-10 flex flex-col items-center text-center px-6"
              >
                {/* Tech Reticle */}
                <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center mb-6 shadow-[0_0_35px_rgba(0,240,255,0.5)] relative">
                  <div className="absolute inset-0 rounded-2xl border border-cyan-300/30 animate-ping" />
                  <Crosshair className="w-8 h-8 text-cyan-300" />
                </div>

                {/* Subtitle */}
                <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-cyan-400/80 mb-2">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>TUBA FERRAMENTARIA · TRANSIÇÃO INDUSTRIAL</span>
                </div>

                {/* Sector Target Display */}
                <h3 className="text-xl sm:text-3xl font-black text-white font-mono tracking-wider laser-text-glow mb-4">
                  {targetLabel}
                </h3>

                {/* Telemetry status bar */}
                <div className="flex items-center gap-4 text-[10px] font-mono text-gray-400 border border-cyan-500/30 bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    SISTEMA CNC ONLINE
                  </span>
                  <span className="text-gray-600">|</span>
                  <span className="text-cyan-300">TOLERÂNCIA ±0.03mm</span>
                  <span className="text-gray-600">|</span>
                  <span>SÃO BERNARDO DO CAMPO</span>
                </div>

                {/* Laser scan line animation across center */}
                <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-6 animate-pulse" />
              </motion.div>

              {/* Viewport Corner Brackets */}
              <div className="absolute top-8 left-8 text-cyan-500/30 font-mono text-[10px] select-none">
                <div>[SYS_OPT: CNC-LASER-TRANSITION]</div>
                <div>[LATENCY: 0.4MS]</div>
              </div>
              <div className="absolute bottom-8 right-8 text-cyan-500/30 font-mono text-[10px] select-none text-right">
                <div>[PRECISION: 100%]</div>
                <div>[REPEATABILITY: CONTINUOUS]</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </NavigationContext.Provider>
  )
}
