import { motion } from 'framer-motion'

/**
 * GlassCard — glassmorphism container used across sections.
 * Accepts optional hover glow effect.
 */
export default function GlassCard({ children, className = '', glow = false }) {
  return (
    <motion.div
      whileHover={glow ? { boxShadow: '0 0 40px rgba(124,58,237,0.2)' } : {}}
      transition={{ duration: 0.3 }}
      className={`
        glass p-6
        transition-colors duration-300
        ${glow ? 'hover:border-violet/30' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
