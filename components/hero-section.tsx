'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, ShieldCheck, Zap, Box } from 'lucide-react'
import { LaserCuttingDisplay } from '@/components/laser-cutting-display'
import { SplineScene } from '@/components/ui/splite'

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'spline'>('simulator')

  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-20 flex items-center bg-[#030712] overflow-hidden bg-cnc-grid">
      {/* Background ambient laser glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Crosshair markings */}
      <div className="absolute top-28 left-8 text-cyan-500/20 font-mono text-[10px] hidden lg:block select-none pointer-events-none">
        <div>SYS: TUBA-CNC-LASER</div>
        <div>AXIS: X/Y/Z REALTIME</div>
        <div>LOC: SÃO BERNARDO DO CAMPO</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-950/70 border border-cyan-500/40 rounded-full px-4 py-1.5 text-xs font-semibold text-cyan-300 w-fit mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>DESDE 2009 · SÃO BERNARDO DO CAMPO - SP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent laser-text-glow">
                Corte a Laser
              </span> <br />
              & Dobra de Precisão
            </h1>

            {/* Exact requested description text */}
            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              Especialistas em corte de alta precisão, dobra, solda e outros serviços industriais. Garantia de tolerância centesimal, sem rebarbas e entrega ágil para protótipos e grandes lotes seriados.
            </p>

            {/* Technical Badges in Hero */}
            <div className="grid grid-cols-3 gap-3 mb-8 max-w-lg">
              <div className="bg-[#091020] border border-cyan-500/20 rounded-xl p-3 text-center">
                <div className="text-cyan-400 font-mono font-bold text-sm sm:text-base">Alta Precisão</div>
                <div className="text-[11px] text-gray-400 font-medium">Tolerância Centesimal</div>
              </div>
              <div className="bg-[#091020] border border-cyan-500/20 rounded-xl p-3 text-center">
                <div className="text-cyan-400 font-mono font-bold text-sm sm:text-base">Corte & Dobra</div>
                <div className="text-[11px] text-gray-400 font-medium">Soluções Completas</div>
              </div>
              <div className="bg-[#091020] border border-cyan-500/20 rounded-xl p-3 text-center">
                <div className="text-cyan-400 font-mono font-bold text-sm sm:text-base">Sob Medida</div>
                <div className="text-[11px] text-gray-400 font-medium">Protótipos & Séries</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <a
                href="https://wa.me/5511912854204"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 font-bold px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-gray-950 text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 fill-gray-950 text-cyan-500" />
                Solicitar Cotação Imediata
              </a>

              <a
                href="#calculadora"
                className="flex items-center justify-center gap-2 border border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/20 hover:bg-cyan-950/40 text-cyan-200 font-semibold px-6 py-4 rounded-xl text-sm transition-all shadow-sm"
              >
                Simular Configuração
                <ArrowRight className="h-4 w-4 text-cyan-400" />
              </a>
            </div>

            {/* Accepted Formats */}
            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Recebemos: <strong>.DXF · .DWG · .STEP · .IGES · .PDF</strong></span>
            </div>
          </motion.div>

          {/* Right Hero (6 Cols) - Interactive CNC Laser Cutter & 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* View Switcher Tabs */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-1 bg-[#090e1c] border border-gray-800 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setActiveTab('simulator')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'simulator'
                      ? 'bg-cyan-500 text-gray-950 shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  Mesa CNC Interativa
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('spline')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'spline'
                      ? 'bg-cyan-500 text-gray-950 shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Box className="w-3.5 h-3.5" />
                  Visualizador 3D
                </button>
              </div>
            </div>

            {/* Both views kept in DOM so switching back preserves canvas state and never goes blank */}
            <div style={{ display: activeTab === 'simulator' ? 'block' : 'none' }}>
              <LaserCuttingDisplay isActive={activeTab === 'simulator'} />
            </div>

            <div style={{ display: activeTab === 'spline' ? 'block' : 'none' }}>
              <div className="w-full h-[460px] lg:h-[520px] rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#060a14] relative">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
