import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <img src="https://i.imgur.com/aHxlYK9.png" alt="Ícone TUBA" className="h-7 w-7 object-contain" />
              </div>
              <img src="https://i.imgur.com/o8GQOEV.png" alt="TUBA" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mb-6">
              TUBA FERRAMENTARIA LTDA — Soluções completas em metalurgia e ferramentaria desde 2009. 
              Precisão, qualidade e comprometimento em cada projeto.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5511912854204"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 text-green-400 px-3 py-1.5 rounded-lg text-sm transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="mailto:tubaferram@gmail.com"
                className="flex items-center gap-2 bg-blue-400/10 hover:bg-blue-400/20 border border-blue-400/20 text-blue-300 px-3 py-1.5 rounded-lg text-sm transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#servicos', label: 'Serviços' },
                { href: '#sobre', label: 'Sobre' },
                { href: '#portfolio', label: 'Portfólio' },
                { href: '#contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-300 hover:text-blue-300 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-blue-300 flex-shrink-0" />
                <a href="mailto:tubaferram@gmail.com" className="hover:text-blue-300 transition-colors">
                  tubaferram@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-blue-300 flex-shrink-0" />
                <a href="https://wa.me/5511912854204" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                  (11) 91285-4204
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-blue-300 flex-shrink-0 mt-0.5" />
                <span>Estr. dos Alvarengas, 4101 - Galpão 2, São Bernardo do Campo - SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2009–{currentYear} TUBA FERRAMENTARIA LTDA. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-xs">
            CNPJ: 10.684.825.0001-26 · São Bernardo do Campo - SP
          </p>
        </div>
      </div>
    </footer>
  )
}
