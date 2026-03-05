'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CinematicIntroProps {
  onComplete: () => void
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onComplete, 600)
    }, 3200)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cinematic-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#030712' }}
        >
          {/* Spark particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(18)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  backgroundColor: '#FFF400',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -(Math.random() * 80 + 40)],
                  x: [(Math.random() - 0.5) * 60],
                }}
                transition={{
                  duration: Math.random() * 1.5 + 1,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 1,
                }}
              />
            ))}
          </div>

          {/* Yellow glow */}
          <div
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: '#FFF400' }}
          />

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="p-4 rounded-2xl mb-6 relative z-10"
            style={{ backgroundColor: '#FFF400' }}
          >
            <img
              src="https://i.imgur.com/aHxlYK9.png"
              alt="Ícone TUBA"
              className="h-16 w-16 object-contain"
            />
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="relative z-10 mb-6"
          >
            <img
              src="https://i.imgur.com/o8GQOEV.png"
              alt="TUBA"
              className="h-16 w-auto object-contain"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-gray-400 text-lg tracking-widest uppercase relative z-10"
          >
            Precisão em cada corte
          </motion.p>

          {/* Bottom bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.8, delay: 0.2, ease: 'linear' }}
            className="absolute bottom-0 left-0 h-1 origin-left"
            style={{ backgroundColor: '#FFF400', width: '100%' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
