import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with modern architecture and scalable design patterns.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      featured: true,
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSockets'],
      link: '#',
      featured: true,
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Analytics Dashboard',
      description:
        'A comprehensive analytics dashboard with data visualization, custom reports, and real-time metrics tracking for business intelligence.',
      technologies: ['React', 'D3.js', 'Express', 'Redis'],
      link: '#',
      featured: false,
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'Social Media Platform',
      description:
        'A social networking platform with feed management, real-time messaging, and content sharing capabilities.',
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Socket.io'],
      link: '#',
      featured: false,
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      title: 'Learning Management System',
      description:
        'An educational platform for online courses with video streaming, progress tracking, and interactive assessments.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS S3'],
      link: '#',
      featured: false,
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      title: 'Weather Forecast App',
      description:
        'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      link: '#',
      featured: false,
      gradient: 'from-teal-500/20 to-cyan-500/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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
      id="projects"
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
            <span className="text-sm font-mono text-primary-400">04.</span>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">
              Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <p className="text-lg text-neutral-400 max-w-2xl">
            A selection of projects I've worked on, showcasing my skills and
            passion for building impactful solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative will-change-transform"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass rounded-2xl overflow-hidden h-full flex flex-col hover:glass-strong transition-all duration-300 relative">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}
                />

                {/* Project preview area */}
                <div className="relative h-48 bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-2 border-white/10 rounded-lg rotate-12" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 glass-strong rounded-full text-xs font-medium text-primary-400">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded text-xs font-medium hover:border-primary-500/50 hover:text-primary-400 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-primary-400 hover:text-primary-300 group-hover:gap-2 gap-1 transition-all"
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects