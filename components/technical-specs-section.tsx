'use client'

import { motion } from 'framer-motion'
import { Cpu, ShieldCheck, Gauge, Check, FileCheck, Award, Zap } from 'lucide-react'

const specs = [
  {
    material: 'Aço Carbono (SAE 1020, A36, etc.)',
    espessura: 'Até 25 mm',
    gas: 'Oxigênio / Nitrogênio',
    acabamento: 'Corte liso, perpendicular e com borda limpa',
  },
  {
    material: 'Aço Inox (AISI 304, 316, 430)',
    espessura: 'Até 20 mm',
    gas: 'Nitrogênio Alta Pressão',
    acabamento: 'Corte brilhante, 100% isento de oxidação',
  },
  {
    material: 'Alumínio (5052, 6061, 1050)',
    espessura: 'Até 16 mm',
    gas: 'Nitrogênio Puro',
    acabamento: 'Bordas sem escoria e excelente usinabilidade',
  },
  {
    material: 'Latão e Cobre',
    espessura: 'Até 8 mm',
    gas: 'Fibra Óptica Direta',
    acabamento: 'Precisão para componentes elétricos e decorativos',
  },
  {
    material: 'Dobra CNC (Prensa Dobradeira)',
    espessura: 'Até 200 Toneladas',
    gas: 'Comprimento até 3.200 mm',
    acabamento: 'Ângulos e raios controlados por CNC multi-eixos',
  },
]

export function TechnicalSpecsSection() {
  return (
    <section className="py-20 bg-[#040711] relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/30 rounded-full px-4 py-1 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            <Gauge className="w-3.5 h-3.5" />
            Parâmetros Industriais
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Tabela de <span className="text-cyan-400">Capacidades Fabris</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Equipamentos de padrão mundial para entregar peças complexas no menor tempo hábil com repetibilidade garantida.
          </p>
        </motion.div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#080d1a] border border-cyan-500/20 rounded-xl p-5 text-center">
            <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white font-mono">12.000W</div>
            <div className="text-xs text-gray-400 font-medium">Potência Laser Fibra</div>
          </div>
          <div className="bg-[#080d1a] border border-cyan-500/20 rounded-xl p-5 text-center">
            <Gauge className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white font-mono">3000 x 1500 mm</div>
            <div className="text-xs text-gray-400 font-medium">Área Útil da Mesa</div>
          </div>
          <div className="bg-[#080d1a] border border-cyan-500/20 rounded-xl p-5 text-center">
            <Award className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white font-mono">±0.03 mm</div>
            <div className="text-xs text-gray-400 font-medium">Tolerância Dimensional</div>
          </div>
          <div className="bg-[#080d1a] border border-cyan-500/20 rounded-xl p-5 text-center">
            <FileCheck className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white font-mono">DXF / STEP / DWG</div>
            <div className="text-xs text-gray-400 font-medium">Arquivos Homologados</div>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-[#080d1a]/80 backdrop-blur-md shadow-2xl">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-[#0c1426] text-xs uppercase font-mono tracking-wider text-cyan-400 border-b border-gray-800">
              <tr>
                <th className="px-6 py-4">Material / Processo</th>
                <th className="px-6 py-4">Capacidade Máxima</th>
                <th className="px-6 py-4">Gás de Corte</th>
                <th className="px-6 py-4">Qualidade da Borda</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 font-sans">
              {specs.map((row, idx) => (
                <tr key={idx} className="hover:bg-cyan-950/20 transition-colors">
                  <td className="px-6 py-4 font-semibold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {row.material}
                  </td>
                  <td className="px-6 py-4 font-mono font-bold text-cyan-300">{row.espessura}</td>
                  <td className="px-6 py-4 font-mono text-gray-400 text-xs">{row.gas}</td>
                  <td className="px-6 py-4 text-gray-300 text-xs">{row.acabamento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
