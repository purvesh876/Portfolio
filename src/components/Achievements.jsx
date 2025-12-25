import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Achievements = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const achievements = [
    {
      title: 'Hackathon Winner',
      description: 'First place in a 48-hour web development hackathon',
      year: '2023',
      color: 'from-blue-500/20 to-cyan-500/20',
      icon: '🏆',
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to popular open-source projects',
      year: '2022 - Present',
      color: 'from-purple-500/20 to-pink-500/20',
      icon: '💻',
    },
    {
      title: 'Technical Speaker',
      description: 'Presented at multiple tech meetups and conferences',
      year: '2023',
      color: 'from-green-500/20 to-emerald-500/20',
      icon: '🎤',
    },
    {
      title: 'Certified Developer',
      description: 'AWS Certified Solutions Architect and React Developer',
      year: '2022',
      color: 'from-orange-500/20 to-red-500/20',
      icon: '🎓',
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-32 md:py-40 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-primary-400">05.</span>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">
              Achievements
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <p className="text-lg text-neutral-400">
            Milestones and accomplishments in my professional journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative will-change-transform"
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass rounded-2xl p-8 hover:glass-strong transition-all duration-300 relative overflow-hidden">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{achievement.icon}</span>
                      <h3 className="text-2xl font-semibold text-white">
                        {achievement.title}
                      </h3>
                    </div>
                    <span className="text-sm text-neutral-400 font-mono">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements