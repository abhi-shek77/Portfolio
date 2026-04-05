import { lazy, Suspense, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/layout/Navbar'
import CustomCursor from './components/ui/CustomCursor'
import PageLoader from './components/ui/PageLoader'

// Lazy-loaded pages for performance
const Home    = lazy(() => import('./pages/Home'))
const About   = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App() {
  const location = useLocation()

  return (
    <>
      {/* Custom cursor overlay */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Animated page transitions */}
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/"        element={<Home />} />
            <Route path="/about"   element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  )
}
