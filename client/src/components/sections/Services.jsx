import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiSmartphone, FiShoppingCart, FiSearch, FiBarChart } from 'react-icons/fi'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'

const defaultServices = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    features: ['React & Node.js', 'API Integration', 'Database Design'],
  },
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love to interact with.',
    features: ['User Research', 'Wireframing', 'Prototyping'],
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['React Native', 'Flutter', 'App Store Deploy'],
  },
  {
    icon: FiShoppingCart,
    title: 'E-Commerce',
    description: 'Complete e-commerce solutions with payment integration and inventory management.',
    features: ['Shopping Cart', 'Payment Gateway', 'Order Management'],
  },
  {
    icon: FiSearch,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic to your website.',
    features: ['On-Page SEO', 'Technical SEO', 'Content Strategy'],
  },
  {
    icon: FiBarChart,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your online presence.',
    features: ['Social Media', 'PPC Campaigns', 'Analytics'],
  },
]

const Services = ({ services = defaultServices }) => {
  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4 flex-1">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full">Learn More</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
