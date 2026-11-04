'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCinematicNavigation } from '@/components/cinematic-curtain'

const navLinks = [
  { href: '#inicio', id: 'inicio', label: 'Início', sector: '01 // INÍCIO · CORTE A LASER' },
  { href: '#servicos', id: 'servicos', label: 'Serviços', sector: '02 // SERVIÇOS & METALURGIA' },
  { href: '#calculadora', id: 'calculadora', label: 'Simulador', sector: '03 // SIMULADOR CNC' },
  { href: '#sobre', id: 'sobre', label: 'Sobre', sector: '04 // HISTÓRIA & CAPACIDADE' },
  { href: '#portfolio', id: 'portfolio', label: 'Portfólio', sector: '05 // PORTFÓLIO DE PEÇAS' },
  { href: '#contato', id: 'contato', label: 'Contato', sector: '06 // CONTATO & ENGENHARIA' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { activeSection, transitionTo } = useCinematicNavigation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, sector: string) => {
    e.preventDefault()
    setIsOpen(false)
    transitionTo(id, sector)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#030712]/92 backdrop-blur-md border-b border-cyan-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Laser Nozzle Icon */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, 'inicio', '01 // INÍCIO · CORTE A LASER')}
            className="flex items-center gap-3 group"
          >
            <div className="p-1.5 rounded-xl bg-cyan-950/70 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.25)] flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="https://i.imgur.com/aHxlYK9.png"
                alt="Ícone TUBA"
                className="h-8 w-8 object-contain transition-all"
                style={{
                  filter: 'brightness(0) invert(1) drop-shadow(0 0 5px rgba(0,240,255,0.8))',
                }}
              />
            </div>
            <div className="flex flex-col">
              <img
                src="https://i.imgur.com/o8GQOEV.png"
                alt="TUBA FERRAMENTARIA"
                className="h-9 w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id, link.sector)}
                  className={cn(
                    'transition-all text-xs uppercase tracking-wider font-semibold relative py-1',
                    isActive ? 'text-cyan-300 font-bold' : 'text-gray-300 hover:text-cyan-400'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 h-[2px] bg-cyan-400 transition-all duration-300 shadow-[0_0_8px_#00f0ff]',
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    )}
                  />
                </a>
              )
            })}
          </nav>

          {/* Status badge & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-gray-400 bg-gray-900/60 border border-gray-800 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SBC - SP · Resposta Rápida</span>
            </div>

            <a
              href="https://wa.me/5511912854204"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-gray-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-gray-950 text-cyan-500" />
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2 rounded-lg bg-gray-900/80 border border-gray-800"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="h-6 w-6 text-cyan-400" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#050914]/98 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id, link.sector)}
                className={cn(
                  'block font-semibold text-sm uppercase tracking-wider py-2 border-b border-gray-800/60 transition-colors',
                  activeSection === link.id ? 'text-cyan-300' : 'text-gray-200 hover:text-cyan-400'
                )}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="https://wa.me/5511912854204"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-gray-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <MessageCircle className="w-4 h-4 fill-gray-950" />
                WhatsApp (11) 91285-4204
              </a>

              <a
                href="tel:5511912854204"
                className="w-full py-2.5 rounded-xl border border-gray-800 text-gray-300 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                Ligar Diretamente
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
