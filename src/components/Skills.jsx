import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'JavaScript',
        'HTML/CSS',
      ],
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma', 'Testing'],
      color: 'from-green-500/20 to-emerald-500/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 md:py-40 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-primary-400">02.</span>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">
              Skills
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="skill-card glass rounded-2xl p-8 hover:glass-strong transition-all duration-300 group will-change-transform"
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.color} mb-6`} />
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:border-white/20 transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills