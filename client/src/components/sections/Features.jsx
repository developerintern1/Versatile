import React from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiShield, FiTrendingUp, FiUsers, FiAward, FiTarget } from 'react-icons/fi'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'

const defaultFeatures = [
  {
    icon: FiZap,
    title: 'Fast Performance',
    description: 'Lightning-fast load times and optimized performance for the best user experience.',
  },
  {
    icon: FiShield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security measures to protect your data and ensure reliability.',
  },
  {
    icon: FiTrendingUp,
    title: 'Scalable Solutions',
    description: 'Built to grow with your business, from startup to enterprise scale.',
  },
  {
    icon: FiUsers,
    title: 'Expert Team',
    description: 'Work with experienced professionals dedicated to your success.',
  },
  {
    icon: FiAward,
    title: 'Award Winning',
    description: 'Recognized excellence in design, development, and customer satisfaction.',
  },
  {
    icon: FiTarget,
    title: 'Goal Focused',
    description: 'Strategic approach aligned with your business objectives and KPIs.',
  },
]

const Features = ({ features = defaultFeatures, title = 'Why Choose Us', subtitle = 'We deliver exceptional value through our core competencies' }) => {
  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">{title}</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Features
