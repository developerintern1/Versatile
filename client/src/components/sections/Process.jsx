import React from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiTarget, FiCode, FiZap } from 'react-icons/fi'
import Container from '@components/ui/Container'

const defaultSteps = [
  {
    icon: FiSearch,
    number: '01',
    title: 'Research & Discovery',
    description: 'We dive deep into understanding your business, goals, target audience, and competitive landscape.',
  },
  {
    icon: FiTarget,
    number: '02',
    title: 'Strategy & Planning',
    description: 'We create a comprehensive roadmap aligned with your objectives and industry best practices.',
  },
  {
    icon: FiCode,
    number: '03',
    title: 'Design & Development',
    description: 'Our expert team brings your vision to life with cutting-edge design and robust development.',
  },
  {
    icon: FiZap,
    number: '04',
    title: 'Launch & Optimize',
    description: 'We deploy your project and continuously optimize for peak performance and user satisfaction.',
  },
]

const Process = ({ steps = defaultSteps }) => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Our Process</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery every time
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" 
               style={{ width: '75%', margin: '0 12.5%' }} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Number Circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg relative z-10">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-50" />
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-xl flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Process
