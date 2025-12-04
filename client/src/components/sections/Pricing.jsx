import React from 'react'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'

const defaultPlans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small projects and startups',
    features: [
      '5 Projects',
      'Basic Support',
      '10GB Storage',
      'Community Access',
      'Basic Analytics',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Ideal for growing businesses',
    features: [
      'Unlimited Projects',
      'Priority Support',
      '100GB Storage',
      'Advanced Analytics',
      'Custom Integrations',
      'Team Collaboration',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large-scale operations',
    features: [
      'Unlimited Everything',
      '24/7 Dedicated Support',
      'Unlimited Storage',
      'Advanced Security',
      'Custom Solutions',
      'SLA Guarantee',
      'Training & Onboarding',
    ],
    popular: false,
  },
]

const Pricing = ({ plans = defaultPlans }) => {
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
          <h2 className="mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <Card className={`h-full flex flex-col ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-neutral-900">${plan.price}</span>
                    <span className="text-neutral-600 ml-2">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FiCheck className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Pricing
