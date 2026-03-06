'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Fundada em 2009 com foco em inovação',
  'Atendimento personalizado para cada cliente',
  'Capacidade para protótipos e grandes lotes',
  'Equipamentos modernos de alta precisão',
  'Equipe técnica especializada',
  'Parceria de longo prazo com clientes',
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900">
              <Image
                src="https://i.imgur.com/0NOvQT5.png"
                alt="TUBA Ferramentaria - Industrial"
                fill
                className="object-contain"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl p-6 shadow-2xl" style={{ backgroundColor: '#8fc508' }}>
              <div className="text-gray-950 font-bold text-3xl">15+</div>
              <div className="text-gray-950/80 text-sm font-medium">Anos de Experiência</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            <span className="inline-block bg-blue-400/10 text-blue-300 border border-blue-400/20 rounded-full px-3 py-1 text-sm font-medium mb-4">
              Sobre nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Expertise em{' '}
              <span className="text-blue-300">Ferramentaria</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A TUBA FERRAMENTARIA LTDA é uma empresa especializada em soluções de ferramentaria e metalurgia, 
              fundada em 2009 em São Bernardo do Campo - SP. Com mais de 15 anos de experiência, nos destacamos 
              pela precisão, qualidade e comprometimento com a satisfação dos nossos clientes.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Atendemos os mais variados setores, incluindo automotiva, arquitetura e comunicação visual, 
              oferecendo desde protótipos até grandes lotes de produção com o mesmo padrão de excelência.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
