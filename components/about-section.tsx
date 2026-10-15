'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Award } from 'lucide-react'

const highlights = [
  'Fundada em 2009 no Grande ABC Paulista',
  'Corte a Laser Fibra Óptica de 12.000W',
  'Dobra CNC de precisão com múltiplos eixos',
  'Leitura direta de arquivos CAD 2D e 3D',
  'Controle de qualidade e rastreabilidade fabril',
  'Atendimento a indústrias, arquitetura e engenharia',
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-[#030712] relative overflow-hidden border-t border-gray-900">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Industrial Photography & Floating Stat Badge (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#060a14] shadow-[0_0_30px_rgba(0,240,255,0.12)]">
              <Image
                src="https://i.imgur.com/0NOvQT5.png"
                alt="TUBA Ferramentaria - Instalações Industriais"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

              {/* Technical overlay mark */}
              <div className="absolute top-4 left-4 font-mono text-[11px] text-cyan-400 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-cyan-500/30">
                SBC - SP · PARQUE INDUSTRIAL TUBA
              </div>
            </div>

            {/* Floating Experience Badge with Laser Cyan Theme */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-6 sm:-right-6 rounded-2xl p-6 bg-gradient-to-br from-[#0c1426] to-[#040813] border-2 border-cyan-400/60 shadow-[0_0_25px_rgba(0,240,255,0.25)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-white font-extrabold text-3xl font-mono leading-none">15+ Anos</div>
                  <div className="text-cyan-300 text-xs font-semibold uppercase tracking-wider mt-1">de Excelência Fabril</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Highlights (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 lg:pl-6"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-950/70 border border-cyan-500/30 rounded-full px-4 py-1 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Nossa Trajetória
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
              Expertise Consolidada em <br />
              <span className="text-cyan-400">Metalurgia & Ferramentaria</span>
            </h2>

            <p className="text-gray-300 mb-4 leading-relaxed text-base">
              A <strong>TUBA FERRAMENTARIA LTDA</strong> foi fundada em 2009 em São Bernardo do Campo - SP, no epicentro da indústria automotiva e metalúrgica do Brasil.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              Ao longo de mais de uma década e meia de atuação ininterrupta, modernizamos continuamente nossa linha produtiva com tecnologia a laser fibra óptica de alta potência, dobradeiras CNC de grande tonelagem e softwares integrados de CAD/CAM. Entregamos desde peças individuais sob medida até lotes seriados de grande porte com precisão absoluta.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span className="text-gray-300 text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511912854204?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20com%20a%20equipe%20da%20TUBA."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-gray-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-gray-950" />
                Falar com a Engenharia
              </a>
              <a
                href="#portfolio"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-gray-700 hover:border-cyan-400 text-gray-300 hover:text-white text-xs font-semibold transition-all"
              >
                Ver Peças Fabricadas
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
