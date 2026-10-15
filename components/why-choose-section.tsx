'use client'

import { motion } from 'framer-motion'
import { Zap, Gauge, Layers, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    metric: 'ALTA PRECISÃO',
    title: 'Corte a Laser de Alta Precisão',
    description: 'Equipamentos modernos garantem bordas perfeitas, sem escória, excelente perpendicularidade e acabamento limpo.',
  },
  {
    icon: Gauge,
    metric: '±0.03 MM',
    title: 'Tolerâncias Rigorosas',
    description: 'Garantia de fidelidade dimensional aos seus desenhos técnicos em DWG, DXF ou STEP, facilitando montagens e processos posteriores.',
  },
  {
    icon: Layers,
    metric: 'CAD / CAM',
    title: 'Aproveitamento Inteligente (Nesting)',
    description: 'Softwares avançados de arranjo de peças otimizam o uso de chapas, gerando economia direta no custo final do seu projeto.',
  },
  {
    icon: Clock,
    metric: 'AGILIDADE',
    title: 'Prazos Competitivos & Pontualidade',
    description: 'Processo ágil desde o envio do orçamento até a entrega das peças cortadas e dobradas, atendendo paradas e cronogramas exigentes.',
  },
  {
    icon: ShieldCheck,
    metric: 'INSPEÇÃO',
    title: 'Controle de Qualidade Rigoroso',
    description: 'Cada lote de peças passa por checagem dimensional e conferência técnica antes da liberação para transporte.',
  },
  {
    icon: CheckCircle2,
    metric: '+15 ANOS',
    title: 'Polo Industrial do ABC Paulista',
    description: 'Empresa consolidada desde 2009 em São Bernardo do Campo - SP, com tradição e relacionamento com as indústrias da região.',
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-[#050812] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-950/70 border border-cyan-500/30 rounded-full px-4 py-1 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Diferenciais de Produção
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Por que confiar seu projeto à <span className="text-cyan-400">TUBA?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Combinamos maquinário CNC moderno, processos enxutos e mais de 15 anos de expertise técnica para entregar qualidade em cada peça.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-b from-[#0a1020] to-[#060a14] border border-gray-800 rounded-2xl p-7 transition-all duration-300 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.1)] group-hover:-translate-y-1 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.2)] group-hover:scale-110 transition-transform">
                      <reason.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                      {reason.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center gap-2 text-xs text-cyan-400/80 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Padrão TUBA de Qualidade</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
