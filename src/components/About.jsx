import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary-600 mb-8" />

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              I'm a passionate full-stack developer with a deep interest in
              creating elegant solutions to complex problems. My journey in
              software development began with curiosity and has evolved into a
              dedicated pursuit of craftsmanship in code.
            </p>
            <p>
              I specialize in building scalable web applications using modern
              technologies. What drives me is not just writing code, but
              understanding the why behind every decision and crafting
              experiences that resonate with users.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and continuously learning to
              stay at the forefront of web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
