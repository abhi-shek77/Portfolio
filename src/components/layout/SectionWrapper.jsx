import { motion } from 'framer-motion'

/**
 * SectionWrapper — wraps every page section with
 * consistent padding, max-width, and an entrance animation.
 */
export default function SectionWrapper({ children, className = '', id = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={`max-w-6xl mx-auto px-6 py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}
