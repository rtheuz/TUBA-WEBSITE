'use client'

import { motion } from 'framer-motion'

interface LaserDividerProps {
  glowColor?: 'cyan' | 'amber'
  className?: string
}

export function LaserDivider({ glowColor = 'cyan', className = '' }: LaserDividerProps) {
  const isCyan = glowColor === 'cyan'
  const beamColor = isCyan ? '#00f0ff' : '#f59e0b'
  const beamRgb = isCyan ? '0, 240, 255' : '245, 158, 11'

  return (
    <div className={`relative w-full py-10 overflow-hidden flex items-center justify-center ${className}`}>
      {/* Background track line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent relative">
        {/* Center Optical Crosshair Tick */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 border border-cyan-500/30 rotate-45 pointer-events-none" />

        {/* Moving laser beam cutter */}
        <motion.div
          animate={{
            x: ['-20%', '120%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 -translate-y-1/2 w-64 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${beamColor}, #ffffff, ${beamColor}, transparent)`,
            boxShadow: `0 0 16px rgba(${beamRgb}, 0.9), 0 0 35px rgba(${beamRgb}, 0.6)`,
          }}
        >
          {/* Intense cutting focal point */}
          <div
            className="absolute right-16 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white"
            style={{
              boxShadow: `0 0 10px #ffffff, 0 0 25px rgba(${beamRgb}, 1)`,
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
