import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@components/ui/Container'
import Button from '@components/ui/Button'

const categories = ['All', 'Web Design', 'Mobile App', 'Branding', 'Marketing']

const defaultProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/project1/600/400',
    description: 'Modern online shopping experience',
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/project2/600/400',
    description: 'Health and wellness mobile solution',
  },
  {
    id: 3,
    title: 'Corporate Rebranding',
    category: 'Branding',
    image: 'https://picsum.photos/seed/project3/600/400',
    description: 'Complete brand identity refresh',
  },
  {
    id: 4,
    title: 'Digital Campaign',
    category: 'Marketing',
    image: 'https://picsum.photos/seed/project4/600/400',
    description: 'Multi-channel marketing strategy',
  },
  {
    id: 5,
    title: 'SaaS Dashboard',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/project5/600/400',
    description: 'Analytics and reporting platform',
  },
  {
    id: 6,
    title: 'Food Delivery App',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/project6/600/400',
    description: 'On-demand food ordering service',
  },
]

const Portfolio = ({ projects = defaultProjects }) => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Our Portfolio</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Explore our recent work and see how we've helped clients achieve their goals
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary-300 text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button to="/projects" variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}

export default Portfolio
