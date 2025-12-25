import { useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with modern architecture and scalable design patterns.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSockets'],
      link: '#',
      featured: true,
    },
    {
      title: 'Analytics Dashboard',
      description:
        'A comprehensive analytics dashboard with data visualization, custom reports, and real-time metrics tracking for business intelligence.',
      technologies: ['React', 'D3.js', 'Express', 'Redis'],
      link: '#',
      featured: false,
    },
    {
      title: 'Social Media Platform',
      description:
        'A social networking platform with feed management, real-time messaging, and content sharing capabilities.',
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Socket.io'],
      link: '#',
      featured: false,
    },
    {
      title: 'Learning Management System',
      description:
        'An educational platform for online courses with video streaming, progress tracking, and interactive assessments.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS S3'],
      link: '#',
      featured: false,
    },
    {
      title: 'Weather Forecast App',
      description:
        'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      link: '#',
      featured: false,
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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Projects
          </h2>
          <div className="h-1 w-20 bg-primary-600 mb-4" />
          <p className="text-lg text-neutral-600 max-w-2xl">
            A selection of projects I've worked on, showcasing my skills and
            passion for building impactful solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-neutral-700">
                    {project.featured ? 'Featured' : 'Project'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 group-hover:gap-2 gap-1 transition-all"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
