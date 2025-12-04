import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/ui/Container'

const defaultStats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '250+', label: 'Happy Clients' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
]

const Stats = ({ stats = defaultStats }) => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-700 text-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-primary-100 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Stats
