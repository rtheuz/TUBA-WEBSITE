'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useCinematicNavigation } from '@/components/cinematic-curtain'

const SECTORS = [
  { id: 'inicio', num: '01', label: 'Início' },
  { id: 'servicos', num: '02', label: 'Serviços' },
  { id: 'calculadora', num: '03', label: 'Simulador' },
  { id: 'sobre', num: '04', label: 'Sobre' },
  { id: 'portfolio', num: '05', label: 'Portfólio' },
  { id: 'contato', num: '06', label: 'Contato' },
]

export function CinematicHUD() {
  const { activeSection, transitionTo } = useCinematicNavigation()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Laser Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 shadow-[0_0_12px_#00f0ff] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Viewport 4-Corner Reticles (Cinematic HUD) */}
      <div className="fixed top-3 left-3 z-40 text-cyan-500/20 font-mono text-[10px] pointer-events-none hidden lg:block select-none">
        + [LOC: SBC // SP]
      </div>
      <div className="fixed top-3 right-3 z-40 text-cyan-500/20 font-mono text-[10px] pointer-events-none hidden lg:block select-none text-right">
        [TOL: ±0.03mm] +
      </div>
      <div className="fixed bottom-3 left-3 z-40 text-cyan-500/20 font-mono text-[10px] pointer-events-none hidden lg:block select-none">
        + [CORTE A LASER]
      </div>
      <div className="fixed bottom-3 right-3 z-40 text-cyan-500/20 font-mono text-[10px] pointer-events-none hidden lg:block select-none text-right">
        [TUBA · CNC 4K] +
      </div>

      {/* Right Persistent Sector Navigator (Like Igloo.inc) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 pointer-events-auto">
        <div className="text-[9px] font-mono tracking-widest text-gray-500 uppercase rotate-90 origin-right translate-x-4 mb-8 select-none">
          SETOR NAVEGAÇÃO
        </div>

        {SECTORS.map((sec) => {
          const isActive = activeSection === sec.id
          return (
            <button
              key={sec.id}
              onClick={() => transitionTo(sec.id)}
              className="group flex items-center gap-3 py-1 text-right focus:outline-none"
              aria-label={`Ir para ${sec.label}`}
            >
              {/* Sector Name on Hover / Active */}
              <span
                className={`text-[10px] font-mono tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 font-bold opacity-100 translate-x-0'
                    : 'text-gray-500 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
                }`}
              >
                {sec.num} // {sec.label}
              </span>

              {/* Sector Indicator Line & Dot */}
              <div className="relative flex items-center justify-center">
                <div
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-6 h-[2px] bg-cyan-400 shadow-[0_0_8px_#00f0ff]'
                      : 'w-3 h-[1px] bg-gray-700 group-hover:w-5 group-hover:bg-cyan-500/60'
                  }`}
                />
                {isActive && (
                  <span className="absolute right-0 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#00f0ff]" />
                )}
              </div>
            </button>
          )
        })}
      </div>
    </>
  )
}
