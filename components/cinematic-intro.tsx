'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CinematicIntroProps {
  onComplete: () => void
}

// Seeded pseudo-random number generator for deterministic values
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [visible, setVisible] = useState(true)

  // Pre-generate all random values so they are stable across renders and SSR/hydration
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      width: seededRandom(i * 7 + 1) * 4 + 2,
      height: seededRandom(i * 7 + 2) * 4 + 2,
      left: seededRandom(i * 7 + 3) * 100,
      top: seededRandom(i * 7 + 4) * 100,
      moveY: -(seededRandom(i * 7 + 5) * 80 + 40),
      moveX: (seededRandom(i * 7 + 6) - 0.5) * 60,
      duration: seededRandom(i * 7 + 7) * 1.5 + 1,
      delay: seededRandom(i * 7 + 8) * 2,
      repeatDelay: seededRandom(i * 7 + 9) * 1,
    }))
  }, [])

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
          style={{ backgroundColor: '#000000' }}
        >
          {/* Spark particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: p.width,
                  height: p.height,
                  backgroundColor: '#5487ff',
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [0, p.moveY],
                  x: [p.moveX],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  repeatDelay: p.repeatDelay,
                }}
              />
            ))}
          </div>

          {/* Yellow glow */}
          <div
            className="absolute w-96 h-96 rounded-full blur-2xl opacity-40"
            style={{ backgroundColor: '#5487ff' }}
          />

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="p-4 rounded-2xl mb-6 relative z-10"
            style={{ backgroundColor: '#ffffff' }}
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
            className="text-white-400 text-lg tracking-widest uppercase relative z-10"
          >
            Precisão em cada corte
          </motion.p>

          {/* Bottom bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.8, delay: 0.2, ease: 'linear' }}
            className="absolute bottom-0 left-0 h-1 origin-left"
            style={{ backgroundColor: '#5487ff', width: '100%' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
