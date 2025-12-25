import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const achievements = [
    {
      title: 'Hackathon Winner',
      description: 'First place in a 48-hour web development hackathon',
      year: '2023',
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to popular open-source projects',
      year: '2022 - Present',
    },
    {
      title: 'Technical Speaker',
      description: 'Presented at multiple tech meetups and conferences',
      year: '2023',
    },
    {
      title: 'Certified Developer',
      description: 'AWS Certified Solutions Architect and React Developer',
      year: '2022',
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Achievements
          </h2>
          <div className="h-1 w-20 bg-primary-600 mb-4" />
          <p className="text-lg text-neutral-600">
            Milestones and accomplishments in my professional journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-neutral-50 to-white p-8 rounded-xl border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {achievement.title}
                </h3>
                <span className="text-sm text-neutral-500 font-medium">
                  {achievement.year}
                </span>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
