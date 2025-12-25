import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description:
        'Leading frontend development initiatives, building scalable React applications, and mentoring junior developers. Responsible for architecture decisions and implementing best practices.',
      tags: ['React', 'TypeScript', 'Next.js'],
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      period: '2021 - 2023',
      description:
        'Developed and maintained full-stack web applications. Collaborated with cross-functional teams to deliver features that improved user engagement by 40%.',
      tags: ['Node.js', 'React', 'MongoDB'],
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2020 - 2021',
      description:
        'Built responsive websites and web applications. Learned industry best practices and contributed to multiple client projects.',
      tags: ['JavaScript', 'HTML/CSS', 'React'],
      color: 'from-green-500/20 to-emerald-500/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 md:py-40 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-primary-400">03.</span>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">
              Experience
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <p className="text-lg text-neutral-400">
            A journey of growth, learning, and impactful contributions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-primary-500/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-neutral-950 shadow-lg hidden md:block z-10" />

                <motion.div
                  className={`glass rounded-2xl p-8 hover:glass-strong transition-all duration-300 relative overflow-hidden group will-change-transform`}
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-neutral-400 font-mono mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-neutral-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 text-neutral-300 rounded-lg text-sm font-medium hover:border-primary-500/50 hover:text-primary-400 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience