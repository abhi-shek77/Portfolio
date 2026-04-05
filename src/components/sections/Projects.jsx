import { motion } from 'framer-motion'
import SectionWrapper from '../layout/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading label="Work" title="Projects" />

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass border-dashed border-white/10 flex flex-col items-center justify-center py-24 text-center"
      >
        {/* Decorative hex icon */}
        <div className="text-5xl text-violet/30 mb-6 select-none">⬡</div>

        <p className="font-cinzel text-xl text-ghost/60 mb-2">
          Projects Coming Soon
        </p>
        <p className="text-base text-muted max-w-xs leading-relaxed">
          The grimoire is empty for now. Check back — great things are being forged.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
