import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 md:py-40 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono text-primary-400">01.</span>
              <h2 className="text-4xl md:text-6xl font-bold gradient-text">
                About Me
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-lg md:text-xl text-neutral-300 leading-relaxed"
          >
            <p className="text-neutral-200">
              I'm a passionate full-stack developer with a deep interest in
              creating elegant solutions to complex problems. My journey in
              software development began with curiosity and has evolved into a
              dedicated pursuit of craftsmanship in code.
            </p>
            <p className="text-neutral-400">
              I specialize in building scalable web applications using modern
              technologies. What drives me is not just writing code, but
              understanding the why behind every decision and crafting
              experiences that resonate with users.
            </p>
            <p className="text-neutral-400">
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and continuously learning to
              stay at the forefront of web development.
            </p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex gap-6"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-primary-500/50 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <div className="flex-1 h-px bg-gradient-to-l from-primary-500/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About