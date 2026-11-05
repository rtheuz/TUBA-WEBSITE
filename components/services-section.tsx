'use client'

import { motion } from 'framer-motion'
import { Zap, Layers, Flame, Factory, FileCode2, ArrowRight, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Zap,
    tag: 'ESPESSURAS ATÉ 12MM',
    title: 'Corte a Laser CNC',
    description: 'Corte térmico de alta precisão para chapas de aço carbono, aço inoxidável e alumínio com espessura de até 12mm. Bordas limpas, sem rebarbas e precisão centesimal.',
    materials: ['Aço Carbono (até 12mm)', 'Aço Inox (AISI 304 / 316)', 'Alumínio e Ligas Metálicas'],
  },
  {
    icon: Layers,
    tag: 'CONFORMAÇÃO CNC',
    title: 'Dobra de Chapas CNC',
    description: 'Dobra e conformação precisa de chapas metálicas com repetibilidade geométrica rigorosa. Dobradeiras CNC com ferramentas adequadas para perfis e geometrias técnicas.',
    materials: ['Conformação de Chapas', 'Ângulos e Raios Precisos', 'Repetibilidade Garantida'],
  },
  {
    icon: Flame,
    tag: 'SOLDA ESPECIALIZADA TIG',
    title: 'Solda Técnica TIG',
    description: 'Processo de soldagem TIG de alta precisão com acabamento fino, sem respingos e com máxima estanqueidade para componentes em aço inoxidável e ligas especiais.',
    materials: ['Solda TIG em Aço Inox', 'Soldagem Fina de Precisão', 'Excelente Acabamento Estético'],
  },
  {
    icon: Factory,
    tag: 'AJUSTE & MONTAGEM',
    title: 'Montagem de Conjuntos',
    description: 'Montagem e união técnica de gabinetes, suportes, caixas de controle e componentes sob medida a partir das peças cortadas, dobradas e soldadas.',
    materials: ['Gabinetes Técnicos', 'Suportes & Chassi', 'Montagem de Peças Seriadas'],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background laser beam effect */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-950/70 border border-cyan-500/30 rounded-full px-4 py-1 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            Serviços Industriais
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Nossas Soluções em <span className="text-cyan-400">Corte a Laser, Dobra & Solda TIG</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Parque fabril em São Bernardo do Campo preparado para atender rigorosas normas de tolerância, acabamento limpo e prazos industriais.
          </p>
        </motion.div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-b from-[#0a1020] to-[#050812] border border-gray-800 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] group-hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Material badges */}
                  <div className="space-y-1.5 pt-4 border-t border-gray-800/80 mb-6">
                    {service.materials.map((mat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{mat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <a
                  href={`https://wa.me/5511912854204?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20o%20servi%C3%A7o%20de%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl border border-gray-800 group-hover:border-cyan-500/40 bg-gray-900/40 group-hover:bg-cyan-950/40 text-gray-300 group-hover:text-cyan-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <span>Orçar {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CAD/CAM & Technical Direct Readout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-[#070e1c] via-[#091428] to-[#070e1c] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_25px_rgba(0,240,255,0.08)]"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/90 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
              <FileCode2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ENGENHARIA & CAD/CAM INTEGRADO</span>
              </div>
              <h4 className="text-white font-bold text-base sm:text-lg">
                Leitura Direta de Arquivos .DXF, .DWG, .STEP, .IGES e .PDF
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 max-w-2xl">
                Otimização computadorizada por nesting para aproveitamento máximo da chapa e redução de desperdício. Corte com limite seguro de até 12mm de espessura.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5511912854204?text=Ol%C3%A1!%20Tenho%20um%20desenho%20t%C3%A9cnico%20e%20gostaria%20de%20uma%20an%C3%A1lise%20de%20corte%20e%20dobra."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-gray-950 font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all shrink-0 hover:scale-105"
          >
            Enviar Desenho p/ Análise
          </a>
        </motion.div>
      </div>
    </section>
  )
}
