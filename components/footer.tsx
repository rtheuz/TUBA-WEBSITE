import { Mail, Phone, MapPin, MessageCircle, ArrowUp, ShieldCheck, Zap } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#02050d] border-t border-gray-900 text-gray-400 text-xs">
      {/* Top industrial banner */}
      <div className="border-b border-gray-900/80 bg-[#040814] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-gray-400">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>FIBER LASER CUTTING & PRECISION SHEET METAL FABRICATION</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span>SÃO BERNARDO DO CAMPO - SP</span>
            <span>·</span>
            <span className="text-emerald-400">CONFORMIDADE DIMENSIONAL 100%</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-xl bg-cyan-950/70 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.25)] flex items-center justify-center">
                <img
                  src="https://i.imgur.com/aHxlYK9.png"
                  alt="Ícone TUBA"
                  className="h-8 w-8 object-contain"
                  style={{
                    filter: 'brightness(0) invert(1) drop-shadow(0 0 5px rgba(0,240,255,0.8))',
                  }}
                />
              </div>
              <img
                src="https://i.imgur.com/o8GQOEV.png"
                alt="TUBA FERRAMENTARIA"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md text-xs sm:text-sm">
              TUBA FERRAMENTARIA LTDA — Soluções integradas de corte a laser de alta potência, dobra CNC multi-eixos, solda qualificada e caldeiraria industrial desde 2009.
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href="https://wa.me/5511912854204"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Direto
              </a>
              <a
                href="mailto:tubaferram@gmail.com"
                className="flex items-center gap-2 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 text-cyan-300 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors"
              >
                <Mail className="h-4 w-4" />
                tubaferram@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-mono">Navegação Rápida</h3>
            <ul className="space-y-2.5">
              {[
                { href: '#inicio', label: 'Início & Simulador' },
                { href: '#servicos', label: 'Serviços de Corte & Dobra' },
                { href: '#calculadora', label: 'Configurador de Peças' },
                { href: '#sobre', label: 'Nossa Fábrica & História' },
                { href: '#portfolio', label: 'Projetos Realizados' },
                { href: '#contato', label: 'Orçamento Técnico' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                    <span className="text-cyan-500/60">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-mono">Dados da Unidade</h3>

            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-gray-300 leading-snug">
                Estr. dos Alvarengas, 4101 - Galpão 2<br />
                Assunção, São Bernardo do Campo - SP<br />
                CEP 09850-550
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
              <span className="text-gray-300 font-mono">(11) 91285-4204</span>
            </div>

            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
              <span className="text-gray-300 font-mono">CNPJ: 10.684.825/0001-26</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-[11px]">
          <p>© 2009–{currentYear} TUBA FERRAMENTARIA LTDA. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Precisão em cada corte</span>
            <span>·</span>
            <a href="#inicio" className="text-cyan-400 hover:underline flex items-center gap-1">
              Voltar ao topo <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
