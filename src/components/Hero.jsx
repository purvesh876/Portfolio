import { useRef } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const heroRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js']

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 overflow-hidden"
    >
      {/* Static background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/20 via-transparent to-transparent" />
      
      {/* Simplified static orbs - removed heavy animations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl will-change-transform" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              className="inline-block text-sm md:text-base text-neutral-400 font-medium px-4 py-2 glass rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Hi, I'm
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] will-change-transform"
          >
            <span className="block gradient-text">Full Stack</span>
            <span className="block gradient-text-primary">Developer</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 text-balance leading-relaxed"
          >
            I build robust web applications and love turning ideas into reality.
            <br className="hidden md:block" />
            <span className="text-neutral-500">
              Passionate about clean code, elegant design, and meaningful user
              experiences.
            </span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5 + index * 0.08,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.08 }}
                className="px-5 py-2.5 glass rounded-full text-sm font-medium text-neutral-200 hover:text-white transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold hover:from-primary-500 hover:to-primary-400 transition-all"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 glass border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Simplified scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero