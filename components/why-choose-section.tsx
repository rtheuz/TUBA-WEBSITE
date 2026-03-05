'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const reasons = [
  {
    emoji: '✅',
    title: 'Atendimento Personalizado',
    description:
      'Cada projeto é único. Nossa equipe está preparada para entender suas necessidades e propor as melhores soluções sob medida.',
  },
  {
    emoji: '⚙️',
    title: 'Produção em Corte a Laser de Alta Precisão',
    description:
      'Utilizamos equipamentos modernos que garantem cortes perfeitos, com acabamento profissional e fidelidade ao projeto.',
  },
  {
    emoji: '📐',
    title: 'Peças sob Medida para Diversos Segmentos',
    description:
      'Atendemos demandas para indústrias, setor automotivo, arquitetura, comunicação visual e muito mais.',
  },
  {
    emoji: '📦',
    title: 'Prazos de Entrega Competitivos',
    description:
      'Comprometimento com prazos e agilidade na produção para que você receba suas peças quando precisa.',
  },
  {
    emoji: '🔍',
    title: 'Controle de Qualidade Rigoroso',
    description:
      'Cada peça passa por revisão técnica antes do envio, garantindo qualidade e segurança em todas as entregas.',
  },
  {
    emoji: '🤝',
    title: 'Parceria de Longo Prazo',
    description:
      'Buscamos construir relações duradouras com nossos clientes, oferecendo suporte constante e confiança em cada pedido.',
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🏆 Por que escolher a <span className="text-yellow-300">Tuba?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça os diferenciais que fazem da TUBA FERRAMENTARIA a escolha certa para o seu projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10 h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">{reason.emoji}</div>
                  <CardTitle className="text-white text-lg leading-snug">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
