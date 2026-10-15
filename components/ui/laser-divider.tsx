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
    <div className={`relative w-full py-8 overflow-hidden flex items-center justify-center ${className}`}>
      {/* Background line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent relative">
        {/* Moving laser beam cutter */}
        <motion.div
          animate={{
            x: ['-20%', '120%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 -translate-y-1/2 w-48 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${beamColor}, #ffffff, ${beamColor}, transparent)`,
            boxShadow: `0 0 16px rgba(${beamRgb}, 0.9), 0 0 30px rgba(${beamRgb}, 0.5)`,
          }}
        >
          {/* Intense cutting focal point */}
          <div
            className="absolute right-12 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"
            style={{
              boxShadow: `0 0 10px #ffffff, 0 0 20px rgba(${beamRgb}, 1)`,
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
