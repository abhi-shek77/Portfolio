import { motion } from 'framer-motion'

/**
 * Button variants:
 *   "primary" — filled violet with glow
 *   "ghost"   — transparent with violet border
 */
export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
  type = 'button',
}) {
  const base = `
    inline-flex items-center gap-2
    px-7 py-3 text-xs font-semibold
    tracking-[0.18em] uppercase
    transition-all duration-300
    font-raleway
  `
  const styles = {
    primary: `
      ${base}
      bg-violet text-white
      shadow-glow
      hover:bg-violet-bright hover:shadow-glow-lg hover:-translate-y-0.5
    `,
    ghost: `
      ${base}
      border border-violet/50 text-lilac
      hover:border-violet-bright hover:text-ghost hover:-translate-y-0.5
    `,
  }

  const El = motion[href ? 'a' : 'button']
  const props = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { type, onClick }

  return (
    <El
      {...props}
      whileTap={{ scale: 0.97 }}
      className={`${styles[variant]} ${className}`}
    >
      {children}
    </El>
  )
}
