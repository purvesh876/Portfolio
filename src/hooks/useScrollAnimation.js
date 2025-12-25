import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  })

  useEffect(() => {
    const element = elementRef.current || inViewRef.current
    if (inView && element) {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }
  }, [inView, inViewRef])

  return { ref: inViewRef, inView }
}

export const useParallax = (speed = 0.5) => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        yPercent: -50 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, [speed])

  return ref
}
