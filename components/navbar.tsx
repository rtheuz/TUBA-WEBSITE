'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#contato', label: 'Contato' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg transition-colors" style={{ backgroundColor: '#FFF400' }}>
              <Wrench className="h-8 w-8 text-gray-950" />
            </div>
            <span className="text-white font-extrabold text-3xl tracking-wider">
              TUBA</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-yellow-300 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/5511912854204"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold px-4 py-2 rounded-lg text-sm transition-colors text-gray-950"
              style={{ backgroundColor: '#FFF400' }}
            >
              Solicite Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-yellow-300 transition-colors py-2 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511912854204"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold px-4 py-2 rounded-lg text-sm transition-colors text-center mt-4 text-gray-950"
              style={{ backgroundColor: '#FFF400' }}
            >
              Solicite Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
