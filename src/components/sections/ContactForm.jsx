import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import Button from '../ui/Button'

export default function ContactForm() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [status, setStatus]   = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    // Simulate async send (replace with your backend / EmailJS / Formspree)
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')

    setTimeout(() => {
      setStatus(null)
      setForm({ name: '', email: '', message: '' })
    }, 3500)
  }

  const inputClass = `
    w-full bg-white/[0.04] border border-white/[0.08]
    text-ghost placeholder:text-muted text-base
    px-4 py-3 outline-none rounded-sm
    focus:border-violet/60 transition-colors duration-300
    font-raleway
  `

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="space-y-4"
    >
      {/* Name */}
      <div>
        <label className="block text-[12px] tracking-[0.25em] uppercase text-muted mb-2">
          Name
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-[12px] tracking-[0.25em] uppercase text-muted mb-2">
          Email
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-[12px] tracking-[0.25em] uppercase text-muted mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="pt-1">
        {status === 'sent' ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-base tracking-widest"
          >
            ✓ Message transmitted successfully.
          </motion.p>
        ) : (
          <Button
            type="submit"
            variant="primary"
            className={status === 'sending' ? 'opacity-70 pointer-events-none' : ''}
          >
            <FiSend size={14} />
            {status === 'sending' ? 'Transmitting...' : 'Send Message'}
          </Button>
        )}
      </div>
    </motion.form>
  )
}
