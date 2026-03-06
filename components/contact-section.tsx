'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Send, Paperclip } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files?.[0] ?? null)
  }

  const buildWhatsAppMessage = () => {
    const fileNote = selectedFile
      ? `\n\nArquivo para anexar: ${selectedFile.name}\n(Por favor, envie o arquivo diretamente no chat do WhatsApp.)`
      : ''
    return encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone}\n\nDescrição do Projeto:\n${form.description}${fileNote}`
    )
  }

  const buildEmailBody = () => {
    const fileNote = selectedFile
      ? `\n\nArquivo para anexar: ${selectedFile.name}\n(Obs.: Por favor, anexe o arquivo mencionado ao enviar este email.)`
      : ''
    return encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone}\n\nDescrição do Projeto:\n${form.description}${fileNote}`
    )
  }

  return (
    <section id="contato" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-400/10 text-blue-300 border border-blue-400/20 rounded-full px-3 py-1 text-sm font-medium mb-4">
            Fale conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Solicite um <span className="text-blue-300">Orçamento</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado para o seu projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-400/10 text-blue-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm">Email</div>
                    <a href="mailto:tubaferram@gmail.com" className="text-white hover:text-blue-300 transition-colors">
                      tubaferram@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-400/10 text-blue-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm">WhatsApp / Telefone</div>
                    <a href="https://wa.me/5511912854204" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                      (11) 91285-4204
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-400/10 text-blue-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm">Endereço</div>
                    <div className="text-white text-sm">
                      Estr. dos Alvarengas, 4101 - Galpão 2<br />
                      Assunção, São Bernardo do Campo - SP<br />
                      CEP: 09850-550
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="pt-2">
              <iframe
                src="https://maps.google.com/maps?q=Estr.+dos+Alvarengas,+4101+-+Galp%C3%A3o+2,+Assun%C3%A7%C3%A3o,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09850-550&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="224"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg border border-gray-700"
                title="Localização TUBA Ferramentaria"
              />
            </div>

            <div className="pt-4">
              <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/5511912854204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 text-green-400 px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="mailto:tubaferram@gmail.com"
                  className="flex items-center gap-2 bg-blue-400/10 hover:bg-blue-400/20 border border-blue-400/20 text-blue-300 px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Nome *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Telefone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Descrição do Projeto *</label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Descreva seu projeto, materiais, quantidades e especificações..."
                      rows={4}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-sm resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <Paperclip className="h-4 w-4" />
                        Anexar Arquivo (opcional)
                      </span>
                    </label>
                    <label className="flex items-center gap-3 w-full bg-gray  -700/50 border border-gray-600 rounded-lg px-3 py-2.5 cursor-pointer hover:border-blue-400 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition-colors text-sm">
                      <span className="text-gray-400 truncate flex-1">
                        {selectedFile ? selectedFile.name : 'Desenho, PDF, imagem...'}
                      </span>
                      <span className="text-blue-400 text-xs font-medium shrink-0">Escolher</span>
                      <input
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg,.svg,.dxf,.dwg"
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={`https://wa.me/5511912854204?text=${buildWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Enviar via WhatsApp
                    </a>
                    <a
                      href={`mailto:tubaferram@gmail.com?subject=Solicitação de Orçamento&body=${buildEmailBody()}`}
                      className="flex-1 flex items-center justify-center gap-2 font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm text-gray-950"
                      style={{ backgroundColor: '#5487ff' }}
                    >
                      <Send className="h-4 w-4" />
                      Enviar via Email
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
