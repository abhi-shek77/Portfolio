import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

/* Typewriter words cycling through roles */
const ROLES = ['Web Developer', 'Full Stack Engineer', 'React Specialist', 'Node.js Developer']

function Typewriter() {
  const [index, setIndex]   = useState(0)
  const [text, setText]     = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[index]
    const speed   = deleting ? 45 : 80

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        // Pause then start deleting
        setTimeout(() => setDeleting(true), 1600)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setIndex(i => (i + 1) % ROLES.length)
        return
      }
      setText(prev =>
        deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <span className="text-violet-bright">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

/* Staggered container for child animations */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Radial glow behind content */}
      <div className="absolute inset-0 bg-radial-void pointer-events-none" />

      {/* Decorative rune ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute right-[8%] top-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 opacity-[0.04] pointer-events-none"
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="190" stroke="#9d5cf5" strokeWidth="1"/>
          <circle cx="200" cy="200" r="145" stroke="#9d5cf5" strokeWidth="0.6"/>
          <circle cx="200" cy="200" r="90"  stroke="#9d5cf5" strokeWidth="0.6"/>
          <line x1="200" y1="10"  x2="200" y2="390" stroke="#9d5cf5" strokeWidth="0.5"/>
          <line x1="10"  y1="200" x2="390" y2="200" stroke="#9d5cf5" strokeWidth="0.5"/>
          <line x1="66"  y1="66"  x2="334" y2="334" stroke="#9d5cf5" strokeWidth="0.5"/>
          <line x1="334" y1="66"  x2="66"  y2="334" stroke="#9d5cf5" strokeWidth="0.5"/>
          <polygon points="200,30 356,285 44,285"  stroke="#9d5cf5" strokeWidth="0.8" fill="none"/>
          <polygon points="200,370 44,115 356,115" stroke="#9d5cf5" strokeWidth="0.8" fill="none"/>
        </svg>
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center md:text-left"
      >
        <motion.p variants={item} className="text-violet-bright text-xs tracking-[0.38em] uppercase mb-5 font-raleway">
          Architect of the Digital Void
        </motion.p>

        <motion.h1
          variants={item}
          className="font-cinzel font-black text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-ghost mb-4 glow-text"
        >
          Abhishek<br />
          <span className="text-violet-bright">Dhiman.</span>
        </motion.h1>

        <motion.div variants={item} className="text-lg md:text-xl text-muted font-raleway font-light mb-6 h-8">
          <Typewriter />
        </motion.div>

        <motion.p
          variants={item}
          className="text-muted font-light leading-relaxed max-w-md mx-auto md:mx-0 mb-10 text-base md:text-base"
        >
          Navigating the space between clean architecture and immersive experience.
          I build things that work — and feel worth remembering.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link to="/contact">
            <Button variant="primary">Get In Touch</Button>
          </Link>
          <Link to="/#projects">
            <Button variant="ghost">View Work</Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted text-[12px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-9 bg-gradient-to-b from-violet-bright to-transparent origin-top"
        />
      </motion.div>
    </section>
  )
}
