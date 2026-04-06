import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { damping: 28, stiffness: 200 })
  const springY = useSpring(mouseY, { damping: 28, stiffness: 200 })

  const isHovering = useRef(false)

  useEffect(() => {
    // Detect touch device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }

    checkMobile()

    if (isMobile) return // 

    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const onEnter = () => { isHovering.current = true }
    const onLeave = () => { isHovering.current = false }

    window.addEventListener('mousemove', move)

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-violet-bright rounded-full pointer-events-none z-[9999]"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border border-violet/50"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}