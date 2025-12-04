import React from 'react'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiUsers, FiAward, FiSmile } from 'react-icons/fi'
import Container from '@components/ui/Container'

const defaultFacts = [
  {
    icon: FiTrendingUp,
    value: '10',
    suffix: 'K+',
    label: 'Projects Completed',
    color: 'from-primary to-blue-600',
  },
  {
    icon: FiUsers,
    value: '5',
    suffix: 'K+',
    label: 'Happy Clients',
    color: 'from-accent to-orange-600',
  },
  {
    icon: FiAward,
    value: '50',
    suffix: '+',
    label: 'Awards Won',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: FiSmile,
    value: '99',
    suffix: '%',
    label: 'Satisfaction Rate',
    color: 'from-purple-500 to-pink-600',
  },
]

const FunFacts = ({ facts = defaultFacts, background = 'light' }) => {
  const bgClass = background === 'dark' 
    ? 'bg-gradient-to-br from-neutral-900 to-neutral-800 text-white'
    : 'bg-gradient-to-br from-neutral-50 to-white'

  return (
    <section className={`section-padding ${bgClass}`}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${fact.color} flex items-center justify-center shadow-lg`}>
                <fact.icon size={32} className="text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <span className={background === 'dark' ? 'text-white' : 'text-neutral-900'}>
                  {fact.value}
                </span>
                <span className={background === 'dark' ? 'text-primary-300' : 'text-primary'}>
                  {fact.suffix}
                </span>
              </div>
              <p className={`text-sm md:text-base ${background === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {fact.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FunFacts
