'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Send, Paperclip, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react'

export function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    material: 'Aço Carbono',
    thickness: '',
    description: '',
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files?.[0] ?? null)
  }

  const buildWhatsAppMessage = () => {
    const fileNote = selectedFile
      ? `\n• Arquivo anexo: ${selectedFile.name} (enviando pelo chat)`
      : ''
    const text = `*SOLICITAÇÃO DE ORÇAMENTO - TUBA*
• Nome: ${form.name || 'Não informado'}
• Email: ${form.email || 'Não informado'}
• Telefone: ${form.phone || 'Não informado'}
• Material: ${form.material}
• Espessura: ${form.thickness || 'A definir'}
• Descrição do Projeto:
${form.description || 'Gostaria de cotar peças em corte a laser / dobra.'}${fileNote}`
    return encodeURIComponent(text)
  }

  const buildEmailBody = () => {
    const fileNote = selectedFile
      ? `\n\nArquivo para anexar: ${selectedFile.name}\n(Por favor, confira o arquivo anexado nesta mensagem.)`
      : ''
    return encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone}\nMaterial: ${form.material}\nEspessura: ${form.thickness}\n\nDescrição do Projeto:\n${form.description}${fileNote}`
    )
  }

  return (
    <section id="contato" className="py-24 bg-[#030712] relative overflow-hidden border-t border-gray-900">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-950/70 border border-cyan-500/30 rounded-full px-4 py-1 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            Canal Direto de Atendimento
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Solicite seu <span className="text-cyan-400">Orçamento Técnico</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Envie as especificações do seu projeto ou arquivos em DXF, DWG ou PDF. Nossa equipe de engenharia responderá com rapidez.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Google Maps (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#080d1a] border border-gray-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Informações da Empresa
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">WhatsApp & Comercial</div>
                    <a
                      href="https://wa.me/5511912854204"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-300 font-bold transition-colors text-base"
                    >
                      (11) 91285-4204
                    </a>
                    <div className="text-xs text-emerald-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>Atendimento Seg a Sex · 07:30 às 17:30</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Email Corporativo</div>
                    <a
                      href="mailto:tubaferram@gmail.com"
                      className="text-white hover:text-cyan-300 font-medium transition-colors"
                    >
                      tubaferram@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Endereço Fabril</div>
                    <div className="text-gray-200 leading-snug">
                      Estr. dos Alvarengas, 4101 - Galpão 2<br />
                      Assunção, São Bernardo do Campo - SP<br />
                      <span className="text-gray-400 text-xs">CEP: 09850-550</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-xl bg-[#080d1a]">
              <iframe
                src="https://maps.google.com/maps?q=Estr.+dos+Alvarengas,+4101+-+Galp%C3%A3o+2,+Assun%C3%A7%C3%A3o,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09850-550&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da TUBA Ferramentaria"
              />
            </div>
          </motion.div>

          {/* Right Column: Interactive Quote Request Terminal (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#090f1e] border-2 border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_35px_rgba(0,240,255,0.1)] relative">
              <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Formulário de Engenharia</h3>
                  <p className="text-xs text-gray-400">Preencha os dados e escolha se deseja enviar pelo WhatsApp ou Email</p>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded">
                  RESPOSTA ÁGIL
                </span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Nome / Empresa *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome ou razão social"
                      className="w-full bg-[#060a14] border border-gray-700 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">WhatsApp / Telefone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-[#060a14] border border-gray-700 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Email Comercial *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu.email@empresa.com"
                      className="w-full bg-[#060a14] border border-gray-700 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Material Previsto</label>
                    <select
                      name="material"
                      value={form.material}
                      onChange={handleChange}
                      className="w-full bg-[#060a14] border border-gray-700 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    >
                      <option value="Aço Carbono">Aço Carbono (1020 / A36)</option>
                      <option value="Aço Inox">Aço Inox (AISI 304 / 316)</option>
                      <option value="Alumínio">Alumínio (5052 / Naval)</option>
                      <option value="Latão / Cobre">Latão / Cobre</option>
                      <option value="Chapa Galvanizada">Chapa Galvanizada</option>
                      <option value="Outro / Não sei">Outro / A Definir</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Descrição do Projeto e Quantidades *</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Descreva quantidade de peças, espessura da chapa, se requer dobra ou solda, ou envie dúvidas técnicas..."
                    rows={4}
                    className="w-full bg-[#060a14] border border-gray-700 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                {/* File Attachment Notification */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Paperclip className="h-3.5 w-3.5 text-cyan-400" />
                      Anexar Arquivo Técnico (.DXF, .DWG, .STEP, .PDF)
                    </span>
                  </label>
                  <label className="flex items-center justify-between w-full bg-[#060a14] border border-dashed border-gray-700 hover:border-cyan-400 rounded-xl px-4 py-3 cursor-pointer transition-colors text-xs">
                    <span className="text-gray-400 truncate">
                      {selectedFile ? (
                        <span className="text-cyan-300 font-medium">✓ {selectedFile.name}</span>
                      ) : (
                        'Clique para selecionar ou arraste o desenho técnico'
                      )}
                    </span>
                    <span className="text-cyan-400 font-semibold uppercase text-[10px] tracking-wider bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-md shrink-0">
                      Selecionar
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg,.svg,.dxf,.dwg,.step,.stp,.iges"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                </div>

                {/* Dual Dispatch Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/5511912854204?text=${buildWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-gray-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 fill-gray-950" />
                    Enviar via WhatsApp
                  </a>

                  <a
                    href={`mailto:tubaferram@gmail.com?subject=Solicitação de Orçamento - ${encodeURIComponent(form.name || 'Site')}&body=${buildEmailBody()}`}
                    className="flex-1 py-3 px-4 rounded-xl border border-gray-700 hover:border-cyan-400/60 bg-[#060a14] hover:bg-cyan-950/20 text-gray-200 hover:text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4 text-cyan-400" />
                    Enviar por Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
