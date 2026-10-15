'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* Tooltip on hover */}
      <span className="hidden md:block mr-3 px-3 py-1.5 rounded-xl bg-[#090f1e] border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Orçamento Rápido no WhatsApp
      </span>

      <motion.a
        href="https://wa.me/5511912854204?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20corte%20a%20laser%20e%20dobra."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-transform"
        style={{ backgroundColor: '#25D366' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Atendimento no WhatsApp"
      >
        {/* Pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-40"
          style={{ backgroundColor: '#25D366' }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <MessageCircle className="h-7 w-7 text-white relative z-10" />
      </motion.a>
    </div>
  )
}
