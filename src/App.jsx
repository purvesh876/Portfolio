import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BackgroundGrid, NoiseOverlay, GradientOrbs } from './components/BackgroundEffects'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  const [scrolled, setScrolled] = useState(false)

  // Use Lenis scroll event instead of window scroll
  const handleScroll = useCallback((scroll) => {
    setScrolled(scroll > 50)
  }, [])

  useSmoothScroll(handleScroll)

  return (
    <div className="min-h-screen relative">
      <BackgroundGrid />
      <NoiseOverlay />
      <GradientOrbs />
      <Navbar scrolled={scrolled} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App