import { lazy, Suspense } from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import Hero from '../components/sections/Hero'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'

// Lazy-load heavy 3D canvas

export default function Home() {
  return (
    <PageWrapper>
      

      {/* Content above canvas */}
      <div className="relative z-10">
        <Hero />

        <div className="divider" />
        <Skills />

        <div className="divider" />
        <Projects />
      </div>
    </PageWrapper>
  )
}
