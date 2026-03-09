'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import { SplineScene } from '@/components/ui/splite'
import { AuroraBackground } from '@/components/ui/aurora-background'

export function HeroSection() {
  return (
    <AuroraBackground className="min-h-screen bg-black">
      <div id="inicio" className="relative w-full flex items-center justify-center min-h-screen overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="amber" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 relative z-10">
          <Card className="w-full bg-black/[0.5] relative overflow-hidden border-gray-800 min-h-[500px] flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-white text-sm font-medium mb-6">
                  Fundada em 2009 · São Bernardo do Campo - SP
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              >
                TUBA{' '}
                <span className="text-white">
                  FERRAMENTARIA
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-100 text-lg mb-8 max-w-lg"
              >
                Soluções em corte a laser, dobra e solda. 
                Qualidade e expertise em metalurgia desde 2009.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://wa.me/5511912854204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg transition-colors text-gray-950"
                  style={{ backgroundColor: '#8fc508' }}
                >
                  <MessageCircle className="h-5 w-5" />
                  Solicite um Orçamento
                </a>
                <a
                  href="#servicos"
                  className="flex items-center justify-center gap-2 border border-white-700 hover:border-blue-400 text-gray-300 hover:text-blue-300 font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Conheça Nossos Serviços
                  <ArrowRight className="h-5 w-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Content - 3D Scene */}
            <div className="flex-1 min-h-[300px] lg:min-h-[500px] relative">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </Card>
        </div>
      </div>
    </AuroraBackground>
  )
}
