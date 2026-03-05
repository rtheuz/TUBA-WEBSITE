'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const portfolioImages = [
  {
    src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6525?w=600',
    alt: 'Fabricação Industrial',
    title: 'Fabricação Industrial',
  },
  {
    src: 'https://images.unsplash.com/photo-1565034946487-077786996e27?w=600',
    alt: 'Processo de Soldagem',
    title: 'Processo de Soldagem',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600',
    alt: 'Manufatura de Precisão',
    title: 'Manufatura de Precisão',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600',
    alt: 'Fábrica Moderna',
    title: 'Fábrica Moderna',
  },
  {
    src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6525?w=600',
    alt: 'Corte a Laser',
    title: 'Corte a Laser',
  },
  {
    src: 'https://images.unsplash.com/photo-1565034946487-077786996e27?w=600',
    alt: 'Dobra de Chapas',
    title: 'Dobra de Chapas',
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-yellow-400/10 text-yellow-300 border border-yellow-400/20 rounded-full px-3 py-1 text-sm font-medium mb-4">
            Nosso trabalho
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-yellow-300">Portfólio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Confira alguns dos nossos projetos e trabalhos realizados ao longo dos anos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-64 rounded-xl overflow-hidden bg-gray-800"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
