import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useSmoothScroll = (onScroll) => {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduced for better performance
      smoothTouch: false,
      infinite: false,
    })

    lenisRef.current = lenis
    window.lenis = lenis // Make Lenis available globally for scrollTo

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Optimized RAF loop with throttling
    let rafId
    function raf(time) {
      lenis.raf(time)
      ScrollTrigger.update(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Scroll callback for external use (e.g., navbar state) - throttled
    let scrollHandler
    if (onScroll) {
      let ticking = false
      scrollHandler = (e) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            onScroll(e.scroll)
            ticking = false
          })
          ticking = true
        }
      }
      lenis.on('scroll', scrollHandler)
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (scrollHandler) {
        lenis.off('scroll', scrollHandler)
      }
      lenis.off('scroll', ScrollTrigger.update)
      lenis.destroy()
      if (window.lenis) delete window.lenis
    }
  }, [onScroll])

  return lenisRef.current
}