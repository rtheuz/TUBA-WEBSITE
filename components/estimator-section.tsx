'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, CheckCircle2, MessageCircle, ArrowRight, Sliders } from 'lucide-react'

const materials = [
  { id: 'carbono', name: 'Aço Carbono (1020 / A36)', desc: 'Estrutural, peças mecânicas e bases' },
  { id: 'inox', name: 'Aço Inox (AISI 304 / 316)', desc: 'Alimentício, químico e acabamento' },
  { id: 'aluminio', name: 'Alumínio (5052 / Naval)', desc: 'Leveza e resistência à corrosão' },
  { id: 'latao', name: 'Latão & Cobre', desc: 'Componentes elétricos e decorativos' },
  { id: 'galvanizado', name: 'Chapa Galvanizada / ZRC', desc: 'Proteção anticorrosiva' },
]

const thicknesses = [
  '0.8 mm', '1.2 mm', '1.5 mm', '2.0 mm', '3.0 mm',
  '4.75 mm', '6.35 mm', '9.5 mm', '12.7 mm', 'Sob Consulta'
]

const operations = [
  { id: 'laser', label: 'Corte a Laser' },
  { id: 'dobra', label: 'Dobra de Chapas' },
  { id: 'solda', label: 'Solda TIG / MIG' },
  { id: 'caldeiraria', label: 'Caldeiraria & Montagem' },
  { id: 'rosqueamento', label: 'Furação & Rosqueamento' },
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
Tenho o desenho/arquivo para envio.`
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
            Simulador de <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Corte & Dobra</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Selecione o material, a espessura e os processos do seu projeto para obter atendimento ágil com nossa equipe.
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
                Selecione o Material:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {materials.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedMat(m)}
                    className={`text-left p-3 rounded-xl border transition-all text-xs font-medium flex flex-col gap-1 ${
                      selectedMat.id === m.id
                        ? 'border-cyan-400 bg-cyan-950/40 text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'border-gray-800/80 bg-gray-900/40 text-gray-400 hover:border-gray-700 hover:text-gray-200'
                    }`}
                  >
                    <span className="font-semibold text-white">{m.name}</span>
                    <span className="text-[11px] text-cyan-400/80">{m.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Thickness */}
            <div className="bg-[#090e1c] border border-gray-800 rounded-2xl p-6 shadow-xl">
              <label className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">2</span>
                Espessura Desejada:
              </label>
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
                Processos Desejados:
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
                          ? 'border-cyan-400/80 bg-cyan-950/30 text-white'
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
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                  PRONTO P/ COTAÇÃO
                </span>
              </div>

              <div className="space-y-4 py-6 font-mono text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-gray-800/60">
                  <span className="text-gray-400">Material Base:</span>
                  <span className="text-white font-semibold text-right">{selectedMat.name}</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-gray-800/60">
                  <span className="text-gray-400">Espessura:</span>
                  <span className="text-cyan-300 font-bold">{selectedThick}</span>
                </div>

                <div className="flex justify-between items-start py-1.5 border-b border-gray-800/60">
                  <span className="text-gray-400">Processos:</span>
                  <span className="text-white text-right max-w-[200px] font-sans font-medium text-xs leading-tight">
                    {selectedOpsLabels}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-gray-800/60">
                  <span className="text-gray-400">Lote Proposto:</span>
                  <span className="text-gray-200">{selectedVol}</span>
                </div>

                <div className="flex justify-between items-center py-1.5">
                  <span className="text-gray-400">Tolerância:</span>
                  <span className="text-emerald-400 font-semibold">Centesimal Conforme Projeto</span>
                </div>
              </div>

              <div className="bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-3 text-[11px] text-gray-300 mb-6 leading-relaxed">
                <strong className="text-cyan-300">Aceitamos arquivos CAD:</strong> .DXF, .DWG, .STEP ou croqui em .PDF com cotas.
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href={`https://wa.me/5511912854204?text=${buildQuoteMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-gray-950 font-bold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-gray-950 text-cyan-500" />
                Cotar esta Configuração no WhatsApp
              </a>

              <a
                href="#contato"
                className="w-full mt-3 py-2.5 px-4 rounded-xl border border-gray-700 hover:border-cyan-400/50 bg-black/40 text-gray-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Ou preencher formulário detalhado
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
