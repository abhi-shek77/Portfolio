import { motion } from 'framer-motion'
import PageWrapper from '../components/layout/PageWrapper'
import SectionWrapper from '../components/layout/SectionWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import Terminal from '../components/ui/Terminal'
import { EDUCATION } from '../data'
import { HiAcademicCap } from 'react-icons/hi2'
import { FiMapPin } from 'react-icons/fi'

export default function About() {
  return (
    <PageWrapper>
      <div className="pt-24 min-h-screen relative z-10">
        <SectionWrapper>
          <SectionHeading label="About" title="Who I Am" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — bio + terminal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-muted leading-relaxed font-light">
                I'm a web developer from the hills of Himachal Pradesh, driven by the craft of
                building things that work beautifully. From pixel-perfect interfaces to robust
                server-side systems — I operate across the full spectrum of the web.
              </p>
              <p className="text-muted leading-relaxed font-light">
                My approach is deliberate: clean code, thoughtful architecture, and experiences
                worth remembering. Every line is intentional. Every project is an opportunity
                to push what's possible on the web.
              </p>

              <div className="flex items-center gap-2 text-muted text-base">
                <FiMapPin className="text-violet-bright" size={14} />
                <span>Himachal Pradesh, India</span>
              </div>

              {/* Terminal mini interaction */}
              <div className="pt-4">
                <p className="text-[12px] tracking-[0.3em] uppercase text-muted mb-3">
                  // Interactive Terminal
                </p>
                <Terminal />
              </div>
            </motion.div>

            {/* Right — education cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              <p className="text-[12px] tracking-[0.3em] uppercase text-muted mb-6">
                // Academic Scrolls
              </p>

              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.short}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.15, duration: 0.5 }}
                >
                  <GlassCard glow className="relative overflow-hidden">
                    {/* Accent bar */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-bright to-violet/20" />
                    <div className="pl-5">
                      <div className="flex items-start gap-3 mb-2">
                        <HiAcademicCap className="text-violet-bright mt-0.5 shrink-0" size={18} />
                        <div>
                          <p className="text-ghost font-semibold text-base">{edu.degree}</p>
                          <p className="text-violet-bright text-xs tracking-widest uppercase mt-0.5">{edu.short}</p>
                        </div>
                      </div>
                      <p className="text-muted text-base ml-7">{edu.school}</p>
                      <p className="text-muted/60 text-xs ml-7 mt-1">{edu.location}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  { num: '10+', label: 'Technologies' },
                  { num: 'Full', label: 'Stack' },
                  { num: '∞',   label: 'Curiosity' },
                ].map(s => (
                  <GlassCard key={s.label} className="text-center py-5">
                    <p className="font-cinzel font-black text-2xl text-violet-bright">{s.num}</p>
                    <p className="text-[12px] tracking-widest uppercase text-muted mt-1">{s.label}</p>
                  </GlassCard>
                ))}
              </div>
            </motion.div>

          </div>
        </SectionWrapper>
      </div>
    </PageWrapper>
  )
}
