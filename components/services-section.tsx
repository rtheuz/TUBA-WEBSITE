'use client'

import { motion } from 'framer-motion'
import { Zap, Layers, Flame, Wrench, Factory, ShieldCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { TextShimmer } from '@/components/ui/text-shimmer'

const services = [
  {
    icon: Zap,
    title: 'Corte a Laser',
    description: 'Corte de precisão para aço inox, alumínio e diversos metais com tecnologia de ponta.',
    color: 'text-yellow-300',
    bg: 'bg-yellow-600/10',
  },
  {
    icon: Layers,
    title: 'Dobra de Chapas',
    description: 'Dobra precisa de chapas metálicas com acabamento de alta qualidade e tolerâncias apertadas.',
    color: 'text-white-100',
    bg: 'bg-gray-100/10',
  },
  {
    icon: Flame,
    title: 'Solda',
    description: 'Solda profissional para fins estruturais e decorativos com máxima qualidade e durabilidade.',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
  },
  {
    icon: Factory,
    title: 'Caldeiraria e Montagens',
    description: 'Incluindo usinagem, tornearia e outros processos de fabricação metálica de alta precisão.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos <span className="text-blue-300">Serviços</span>
          </h2>
          <p className="text-white-100 max-w-2xl mx-auto">
            Oferecemos soluções completas em metalurgia e ferramentaria, com tecnologia avançada e equipe especializada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10 h-full">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.bg} flex items-center justify-center mb-4`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">
                    <TextShimmer
                      duration={1.2}
                      className="text-xl font-medium [--base-color:theme(colors.blue.300)] [--base-gradient-color:theme(colors.blue.100)] dark:[--base-color:theme(colors.blue.300)] dark:[--base-gradient-color:theme(colors.blue.100)]"
                    >
                      {service.title}
                    </TextShimmer>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
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
