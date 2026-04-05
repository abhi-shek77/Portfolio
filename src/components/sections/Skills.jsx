import { motion } from 'framer-motion'
import SectionWrapper from '../layout/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { SKILLS } from '../../data'

/* Individual skill pill with icon + hover glow */
function SkillPill({ name, Icon, color }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: `0 0 24px ${color}33` }}
      transition={{ duration: 0.25 }}
      className="glass flex flex-col items-center gap-2 p-4 hover:border-white/20 transition-colors duration-300"
    >
      <Icon size={26} style={{ color }} />
      <span className="text-[11px] tracking-widest uppercase text-muted font-medium">
        {name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading label="Arsenal" title="Technologies" />

      <div className="space-y-10">
        {SKILLS.map(({ category, items }, ci) => (
          <div key={category}>
            {/* Category label */}
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4 border-l-2 border-violet pl-3">
              {category}
            </p>

            {/* Pills grid */}
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: ci * 0.1 } },
              }}
            >
              {items.map(skill => (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
                  }}
                >
                  <SkillPill {...skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
