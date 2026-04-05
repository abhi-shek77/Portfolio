import { motion } from 'framer-motion'
import PageWrapper from '../components/layout/PageWrapper'
import SectionWrapper from '../components/layout/SectionWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import ContactForm from '../components/sections/ContactForm'
import { SOCIAL_LINKS } from '../data'
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'

const CONTACT_INFO = [
  { Icon: FiMail,    label: 'Email',    value: SOCIAL_LINKS.email,    href: `mailto:${SOCIAL_LINKS.email}` },
  { Icon: FiGithub,  label: 'GitHub',   value: 'github.com/abhi-shek77', href: SOCIAL_LINKS.github },
  { Icon: FiLinkedin,label: 'LinkedIn', value: 'linkedin.com/in/abhishek-dhiman-0645a1246', href: SOCIAL_LINKS.linkedin },
  { Icon: FiMapPin,  label: 'Location', value: 'Himachal Pradesh, India', href: null },
]

export default function Contact() {
  return (
    <PageWrapper>
      <div className="pt-24 min-h-screen relative z-10">
        <SectionWrapper>
          <SectionHeading label="Contact" title="Let's Connect" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted font-light leading-relaxed mb-10">
                Have a project in mind, want to collaborate, or just want to say hello?
                I'm reachable — drop a message or find me on the platforms below.
              </p>

              <div className="space-y-3">
                {CONTACT_INFO.map(({ Icon, label, value, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
                  >
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 glass border-white/[0.06] hover:border-violet/30 transition-colors duration-300 group"
                      >
                        <div className="w-9 h-9 glass flex items-center justify-center shrink-0 group-hover:border-violet/40 transition-colors">
                          <Icon size={15} className="text-violet-bright" />
                        </div>
                        <div>
                          <p className="text-[12px] tracking-widest uppercase text-muted">{label}</p>
                          <p className="text-ghost text-base mt-0.5 group-hover:text-lilac transition-colors">{value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 glass border-white/[0.06]">
                        <div className="w-9 h-9 glass flex items-center justify-center shrink-0">
                          <Icon size={15} className="text-violet-bright" />
                        </div>
                        <div>
                          <p className="text-[12px] tracking-widest uppercase text-muted">{label}</p>
                          <p className="text-ghost text-base mt-0.5">{value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </SectionWrapper>
      </div>
    </PageWrapper>
  )
}
