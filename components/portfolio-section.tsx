'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Eye, X, MessageCircle, Layers, ZoomIn } from 'lucide-react'

interface PortfolioItem {
  src: string
  title: string
  category: 'laser' | 'dobra' | 'estrutural'
  material: string
  tolerancia: string
  processo: string
}

const portfolioData: PortfolioItem[] = [
  {
    src: 'https://i.imgur.com/7ONdmgy.png',
    title: 'Flange & Conjunto Usinado de Alta Pressão',
    category: 'laser',
    material: 'Aço Carbono SAE 1020 (16mm)',
    tolerancia: '±0.03 mm',
    processo: 'Corte a Laser + Furação Escareada',
  },
  {
    src: 'https://i.imgur.com/DhQZtmV.png',
    title: 'Gabinete Conformado em Inox Escovado',
    category: 'dobra',
    material: 'Aço Inox AISI 304 (2.0mm)',
    tolerancia: '±0.1 mm',
    processo: 'Corte a Laser + Dobra CNC de Precisão',
  },
  {
    src: 'https://i.imgur.com/MVTqmJO.png',
    title: 'Chapa Perfurada com Geometria Complexa',
    category: 'laser',
    material: 'Alumínio Naval 5052 (3.0mm)',
    tolerancia: '±0.05 mm',
    processo: 'Corte a Laser de Alta Precisão',
  },
  {
    src: 'https://i.imgur.com/IDkEq5o.png',
    title: 'Suportes Estruturais para Maquinário Pesado',
    category: 'estrutural',
    material: 'Aço Estrutural ASTM A36 (19mm)',
    tolerancia: '±0.05 mm',
    processo: 'Corte Laser O₂ + Chanfro p/ Solda MIG',
  },
  {
    src: 'https://i.imgur.com/w5atK2E.png',
    title: 'Conjunto Soldado & Dobrado sob Medida',
    category: 'estrutural',
    material: 'Aço Carbono 1020 + Dobra CNC',
    tolerancia: '±0.08 mm',
    processo: 'Dobra Multi-Eixos + Solda TIG Estrutural',
  },
  {
    src: 'https://i.imgur.com/1vWRRWQ.png',
    title: 'Peças Seriadas c/ Nesting Otimizado',
    category: 'laser',
    material: 'Aço Galvanizado ZRC (1.5mm)',
    tolerancia: '±0.04 mm',
    processo: 'Corte Laser Alta Velocidade em Lote Seriado',
  },
]

export function PortfolioSection() {
  const [filter, setFilter] = useState<'all' | 'laser' | 'dobra' | 'estrutural'>('all')
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null)

  const filteredItems = filter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === filter)

  return (
    <section id="portfolio" className="py-24 bg-[#050812] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-950/70 border border-cyan-500/30 rounded-full px-4 py-1 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Galeria Fabril
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Portfólio de <span className="text-cyan-400">Projetos Executados</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Conheça alguns dos componentes cortados, dobrados e soldados entregues para nossos clientes em todo o Brasil.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Todos os Projetos' },
            { id: 'laser', label: 'Corte a Laser' },
            { id: 'dobra', label: 'Dobra CNC' },
            { id: 'estrutural', label: 'Conjuntos & Caldeiraria' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-gray-950 shadow-[0_0_15px_rgba(0,240,255,0.3)] font-bold'
                  : 'bg-[#090e1c] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="h-full bg-gradient-to-b from-[#090f1e] to-[#040712] border border-gray-800 group-hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] group-hover:-translate-y-1 flex flex-col">
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-gray-950">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040712] via-transparent to-transparent opacity-80" />

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-gray-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.6)]">
                      <ZoomIn className="w-4 h-4" />
                      Visualizar Detalhes
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-3 right-3 font-mono text-[10px] bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-cyan-400 border border-cyan-500/30">
                    {item.tolerancia}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs text-gray-400 mb-1">
                      Material: <strong className="text-gray-200">{item.material}</strong>
                    </div>
                    <div className="text-xs text-cyan-400/80 font-mono">
                      {item.processo}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                    <span>PADRÃO TUBA</span>
                    <span className="text-cyan-400 group-hover:underline flex items-center gap-1">
                      Ver foto ampliada →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#090f1e] border border-cyan-500/40 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col shadow-[0_0_50px_rgba(0,240,255,0.25)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-base">{selectedImage.title}</h3>
                  <p className="text-xs text-cyan-400 font-mono">{selectedImage.material}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white bg-gray-900 border border-gray-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Modal Footer with Quote CTA */}
              <div className="p-5 border-t border-gray-800 bg-[#060a14] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-400">
                  <span>Processo: </span>
                  <strong className="text-gray-200">{selectedImage.processo}</strong>
                </div>

                <a
                  href={`https://wa.me/5511912854204?text=Ol%C3%A1!%20Vi%20a%20pe%C3%A7a%20'${encodeURIComponent(selectedImage.title)}'%20no%20site%20da%20TUBA%20e%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20semelhante.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-gray-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                  <MessageCircle className="w-4 h-4 fill-gray-950" />
                  Cotar Peça Semelhante
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}