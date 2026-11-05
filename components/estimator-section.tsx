'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, CheckCircle2, MessageCircle, ArrowRight, Sliders, ShieldCheck } from 'lucide-react'

const materials = [
  { id: 'carbono', name: 'Aço Carbono (1020 / A36)', desc: 'Peças industriais, perfis e bases até 12mm' },
  { id: 'inox', name: 'Aço Inox (AISI 304 / 316)', desc: 'Alimentício, químico e acabamento fino' },
  { id: 'aluminio', name: 'Alumínio (5052 / Naval)', desc: 'Leveza e resistência à oxidação' },
  { id: 'latao', name: 'Latão & Cobre', desc: 'Componentes elétricos e decorativos' },
  { id: 'galvanizado', name: 'Chapa Galvanizada / ZRC', desc: 'Proteção anticorrosiva para gabinetes' },
]

const thicknesses = [
  '0.8 mm', '1.2 mm', '1.5 mm', '2.0 mm', '3.0 mm',
  '4.75 mm', '6.35 mm', '8.0 mm', '9.5 mm', '12.0 mm (Máx.)'
]

const operations = [
  { id: 'laser', label: 'Corte a Laser (até 12mm)' },
  { id: 'dobra', label: 'Dobra de Chapas CNC' },
  { id: 'solda', label: 'Solda Especializada TIG' },
  { id: 'montagem', label: 'Montagem de Conjuntos' },
]

const volumes = [
  'Protótipo / Peça Única',
  'Pequeno Lote',
  'Lote Médio',
  'Produção Contínua',
]

export function EstimatorSection() {
  const [selectedMat, setSelectedMat] = useState(materials[0])
  const [selectedThick, setSelectedThick] = useState(thicknesses[3])
  const [selectedOps, setSelectedOps] = useState<string[]>(['laser', 'dobra'])
  const [selectedVol, setSelectedVol] = useState(volumes[1])

  const toggleOp = (id: string) => {
    if (selectedOps.includes(id)) {
      if (selectedOps.length > 1) {
        setSelectedOps(selectedOps.filter(o => o !== id))
      }
    } else {
      setSelectedOps([...selectedOps, id])
    }
  }

  const selectedOpsLabels = operations
    .filter(op => selectedOps.includes(op.id))
    .map(op => op.label)
    .join(', ')

  const buildQuoteMessage = () => {
    const text = `Olá, equipe TUBA! Gostaria de uma cotação com os seguintes parâmetros:
• Material: ${selectedMat.name}
• Espessura: ${selectedThick}
• Processos: ${selectedOpsLabels}
• Volume: ${selectedVol}
Tenho o desenho/arquivo técnico (.DXF/.DWG/.STEP/.PDF) para envio.`
    return encodeURIComponent(text)
  }

  return (
    <section id="calculadora" className="py-24 bg-[#050811] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-950/70 border border-cyan-500/30 rounded-full px-4 py-1.5 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            Configurador de Peças Técnicas
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Simulador de <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Corte, Dobra & Solda TIG</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Selecione o material, a espessura (até 12mm) e os processos do seu projeto para obter atendimento ágil com nossa equipe técnica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls (Left 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Step 1: Material */}
            <div className="bg-[#090e1c] border border-gray-800 rounded-2xl p-6 shadow-xl">
              <label className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">1</span>
                Tipo de Metal:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {materials.map((mat) => (
                  <button
                    key={mat.id}
                    type="button"
                    onClick={() => setSelectedMat(mat)}
                    className={`text-left p-3.5 rounded-xl border transition-all text-xs flex flex-col justify-between ${
                      selectedMat.id === mat.id
                        ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'border-gray-800 bg-gray-900/30 text-gray-400 hover:border-gray-700'
                    }`}
                  >
                    <span className="font-bold text-white mb-1">{mat.name}</span>
                    <span className="text-[11px] text-gray-500">{mat.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Thickness */}
            <div className="bg-[#090e1c] border border-gray-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">2</span>
                  Espessura da Chapa:
                </label>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                  CAPACIDADE: ATÉ 12MM
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {thicknesses.map((th) => (
                  <button
                    key={th}
                    type="button"
                    onClick={() => setSelectedThick(th)}
                    className={`px-3.5 py-2 rounded-lg border text-xs font-mono font-medium transition-all ${
                      selectedThick === th
                        ? 'border-cyan-400 bg-cyan-500 text-gray-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                        : 'border-gray-800 bg-gray-900/50 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    {th}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Operations */}
            <div className="bg-[#090e1c] border border-gray-800 rounded-2xl p-6 shadow-xl">
              <label className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">3</span>
                Processos Solicitados:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {operations.map((op) => {
                  const active = selectedOps.includes(op.id)
                  return (
                    <button
                      key={op.id}
                      type="button"
                      onClick={() => toggleOp(op.id)}
                      className={`text-left p-3 rounded-xl border transition-all text-xs font-medium flex items-center justify-between ${
                        active
                          ? 'border-cyan-400/80 bg-cyan-950/30 text-white shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                          : 'border-gray-800 bg-gray-900/30 text-gray-400 hover:border-gray-700'
                      }`}
                    >
                      <span>{op.label}</span>
                      <CheckCircle2 className={`w-4 h-4 ${active ? 'text-cyan-400' : 'text-gray-600'}`} />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 4: Volume */}
            <div className="bg-[#090e1c] border border-gray-800 rounded-2xl p-6 shadow-xl">
              <label className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">4</span>
                Volume Estimado:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {volumes.map((vol) => (
                  <button
                    key={vol}
                    type="button"
                    onClick={() => setSelectedVol(vol)}
                    className={`text-left p-2.5 rounded-lg border text-xs transition-all ${
                      selectedVol === vol
                        ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200 font-semibold'
                        : 'border-gray-800 bg-gray-900/30 text-gray-400 hover:border-gray-700'
                    }`}
                  >
                    {vol}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technical Summary Card (Right 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 sticky top-28"
          >
            <div className="bg-gradient-to-b from-[#0c1324] to-[#060a14] border-2 border-cyan-500/40 rounded-2xl p-6 lg:p-8 shadow-[0_0_35px_rgba(0,240,255,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold text-white text-base">Especificação Técnica</span>
                </div>
                <span className="text-[10px] font-mono bg-cyan-950 border border-cyan-500/30 px-2 py-0.5 rounded text-cyan-300">
                  TUBA CNC
                </span>
              </div>

              <div className="py-5 space-y-4 font-mono text-xs border-b border-gray-800">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Material:</span>
                  <span className="text-white font-bold text-right">{selectedMat.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Espessura:</span>
                  <span className="text-cyan-400 font-bold">{selectedThick}</span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <span className="text-gray-400">Processos:</span>
                  <span className="text-white font-bold text-right max-w-[200px]">{selectedOpsLabels}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Volume:</span>
                  <span className="text-white font-bold">{selectedVol}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Tolerância Fabril:</span>
                  <span className="text-emerald-400 font-bold">±0.03 mm</span>
                </div>
              </div>

              {/* Technical Capacity Note */}
              <div className="my-4 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-[11px] text-gray-300 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Corte de alta precisão até 12mm de espessura, conformação CNC e solda especializada TIG.</span>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/5511912854204?text=${buildQuoteMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-gray-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 fill-gray-950 text-cyan-500" />
                  Enviar Especificação no WhatsApp
                </a>
                <p className="text-center text-[11px] text-gray-500 mt-3 font-mono">
                  Atendimento direto com a Engenharia · Retorno ágil
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
