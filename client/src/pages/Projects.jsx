import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@components/ui/Container'
import CTA from '@components/sections/CTA'

const categories = ['All', 'Web Design', 'Mobile App', 'Branding', 'E-Commerce', 'Marketing']

const projects = [
  {
    id: 1,
    title: 'TechStart E-Commerce Platform',
    category: 'E-Commerce',
    image: 'https://picsum.photos/seed/project1/800/600',
    description: 'Complete e-commerce solution with custom payment integration and inventory management.',
    client: 'TechStart Inc',
    year: '2024',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 2,
    title: 'FitLife Mobile App',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/project2/800/600',
    description: 'Health and fitness tracking app with social features and personalized workout plans.',
    client: 'FitLife Studios',
    year: '2024',
    tags: ['React Native', 'Firebase', 'Health Kit'],
  },
  {
    id: 3,
    title: 'GreenEarth Rebranding',
    category: 'Branding',
    image: 'https://picsum.photos/seed/project3/800/600',
    description: 'Complete brand identity redesign including logo, color palette, and brand guidelines.',
    client: 'GreenEarth Solutions',
    year: '2023',
    tags: ['Branding', 'Logo Design', 'Brand Strategy'],
  },
  {
    id: 4,
    title: 'DataFlow SaaS Dashboard',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/project4/800/600',
    description: 'Modern analytics dashboard with real-time data visualization and reporting.',
    client: 'DataFlow Analytics',
    year: '2024',
    tags: ['React', 'D3.js', 'WebSocket', 'PostgreSQL'],
  },
  {
    id: 5,
    title: 'FoodHub Delivery Platform',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/project5/800/600',
    description: 'On-demand food delivery app with real-time tracking and multiple payment options.',
    client: 'FoodHub',
    year: '2023',
    tags: ['Flutter', 'Google Maps', 'Payment Gateway'],
  },
  {
    id: 6,
    title: 'Digital Marketing Campaign',
    category: 'Marketing',
    image: 'https://picsum.photos/seed/project6/800/600',
    description: 'Multi-channel marketing campaign resulting in 300% increase in conversions.',
    client: 'GrowthCo',
    year: '2024',
    tags: ['SEO', 'PPC', 'Social Media', 'Content'],
  },
  {
    id: 7,
    title: 'Fashion Boutique Website',
    category: 'E-Commerce',
    image: 'https://picsum.photos/seed/project7/800/600',
    description: 'Luxury fashion e-commerce site with advanced filtering and virtual try-on features.',
    client: 'Elegance Boutique',
    year: '2023',
    tags: ['Next.js', 'Shopify', 'AR Technology'],
  },
  {
    id: 8,
    title: 'Corporate Website Redesign',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/project8/800/600',
    description: 'Modern corporate website with CMS integration and multilingual support.',
    client: 'Global Enterprises',
    year: '2024',
    tags: ['WordPress', 'Custom Theme', 'Multilingual'],
  },
  {
    id: 9,
    title: 'Travel Booking App',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/project9/800/600',
    description: 'Comprehensive travel booking platform with flights, hotels, and activities.',
    client: 'TravelEasy',
    year: '2023',
    tags: ['React Native', 'API Integration', 'Booking System'],
  },
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <>
      {/* Projects Hero */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6">Our Projects</h1>
            <p className="text-xl text-neutral-600">
              Explore our portfolio of successful projects across various industries and platforms. Each project represents our commitment to excellence and innovation.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <Container>
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
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
                      Click to view details
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-600 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Have a Project in Mind?"
        subtitle="Let's work together to bring your vision to life. Contact us for a free consultation."
      />
    </>
  )
}

export default Projects
