'use client'

import { motion } from 'framer-motion'
import { Zap, Layers, Flame, Factory, Wrench, FileCode2, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Zap,
    tag: 'ALTA PRECISÃO',
    title: 'Corte a Laser',
    description: 'Corte de alta precisão para aço carbono, aço inoxidável, alumínio e diversos metais com tecnologia avançada. Acabamento limpo, perpendicular e sem rebarbas.',
    materials: ['Aço Carbono', 'Aço Inox', 'Alumínio e Metais Diversos'],
  },
  {
    icon: Layers,
    tag: 'CONFORMAÇÃO CNC',
    title: 'Dobra de Chapas CNC',
    description: 'Dobra precisa de chapas metálicas com repetibilidade geométrica rigorosa. Dobradeiras CNC com ferramentas adequadas para cada raio e ângulo.',
    materials: ['Conformação de Chapas', 'Ângulos e Raios Precisos', 'Repetibilidade Garantida'],
  },
  {
    icon: Flame,
    tag: 'SOLDA PROFISSIONAL',
    title: 'Solda Especializada',
    description: 'Solda profissional para fins estruturais e decorativos com máxima qualidade mecânica, estanqueidade e durabilidade.',
    materials: ['Solda TIG em Inox', 'Solda MIG/MAG Estrutural', 'Acabamento Refinado'],
  },
  {
    icon: Factory,
    tag: 'CONJUNTOS INDUSTRIAIS',
    title: 'Caldeiraria & Montagens',
    description: 'Construção mecânica e montagem de gabinetes, suportes, tubulações, bases de máquinas e estruturas industriais conforme projeto.',
    materials: ['Chassis & Gabinetes', 'Estruturas Metálicas', 'Montagens Sob Medida'],
  },
  {
    icon: Wrench,
    tag: 'SERVIÇOS DE APOIO',
    title: 'Usinagem & Furação Complementar',
    description: 'Operações mecânicas de apoio incluindo rosqueamento, chanfros para solda, furos escareados e preparação completa para montagem.',
    materials: ['Rosqueamento', 'Escareamento', 'Furação Técnica'],
  },
  {
    icon: FileCode2,
    tag: 'SOFTWARE ESPECIALIZADO',
    title: 'Engenharia & CAD/CAM',
    description: 'Otimização computadorizada de aproveitamento de chapa que reduz custos de matéria-prima e agiliza o tempo de produção.',
    materials: ['Leitura .DXF/.DWG/.STEP', 'Desenvolvimento 3D', 'Aproveitamento Máximo'],
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
            Nossas Soluções em <span className="text-cyan-400">Corte a Laser & Metalurgia</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Parque fabril em São Bernardo do Campo preparado para atender rigorosas normas de tolerância, acabamento e prazos.
          </p>
        </motion.div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
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
      </div>
    </section>
  )
}
