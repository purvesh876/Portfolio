import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description:
        'Leading frontend development initiatives, building scalable React applications, and mentoring junior developers. Responsible for architecture decisions and implementing best practices.',
      tags: ['React', 'TypeScript', 'Next.js'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      period: '2021 - 2023',
      description:
        'Developed and maintained full-stack web applications. Collaborated with cross-functional teams to deliver features that improved user engagement by 40%.',
      tags: ['Node.js', 'React', 'MongoDB'],
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2020 - 2021',
      description:
        'Built responsive websites and web applications. Learned industry best practices and contributed to multiple client projects.',
      tags: ['JavaScript', 'HTML/CSS', 'React'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary-600 mb-4" />
          <p className="text-lg text-neutral-600">
            A journey of growth, learning, and impactful contributions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block" />

                <div className="bg-neutral-50 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-neutral-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-neutral-500 font-medium mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white text-neutral-600 rounded-md text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
