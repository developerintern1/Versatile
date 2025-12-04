import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiSmartphone, FiShoppingCart, FiSearch, FiBarChart } from 'react-icons/fi'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import CTA from '@components/sections/CTA'

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices for optimal performance and scalability.',
    features: [
      'Frontend Development (React, Vue, Angular)',
      'Backend Development (Node.js, Python, PHP)',
      'API Development & Integration',
      'Database Design & Optimization',
      'Cloud Deployment & DevOps',
      'Performance Optimization',
    ],
    benefits: 'Fast, secure, and scalable web solutions tailored to your business needs.',
  },
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with users in mind, backed by research and data-driven insights.',
    features: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Responsive Design',
      'Design Systems',
      'Accessibility Compliance',
    ],
    benefits: 'Engaging experiences that delight users and drive conversions.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that users love.',
    features: [
      'iOS Development (Swift)',
      'Android Development (Kotlin)',
      'Cross-Platform (React Native, Flutter)',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
    ],
    benefits: 'Powerful mobile apps that engage users on their favorite devices.',
  },
  {
    icon: FiShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
    features: [
      'Custom Shopping Cart',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing',
      'Customer Management',
      'Analytics & Reporting',
    ],
    benefits: 'Increase sales with a seamless online shopping experience.',
  },
  {
    icon: FiSearch,
    title: 'SEO & Content Strategy',
    description: 'Improve your search rankings and drive organic traffic with proven SEO strategies.',
    features: [
      'On-Page SEO Optimization',
      'Technical SEO Audit',
      'Keyword Research',
      'Content Strategy',
      'Link Building',
      'Performance Tracking',
    ],
    benefits: 'Higher rankings, more traffic, and better ROI from organic search.',
  },
  {
    icon: FiBarChart,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies across multiple channels to grow your brand online.',
    features: [
      'Social Media Marketing',
      'PPC Advertising (Google Ads, Facebook)',
      'Email Marketing Campaigns',
      'Content Marketing',
      'Analytics & Reporting',
      'Conversion Rate Optimization',
    ],
    benefits: 'Measurable results that drive growth and maximize your marketing ROI.',
  },
]

const Services = () => {
  return (
    <>
      {/* Services Hero */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-neutral-600">
              Comprehensive digital solutions designed to help your business thrive in the modern world. From strategy to execution, we've got you covered.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="mb-4">{service.title}</h2>
                    <p className="text-lg text-neutral-600 mb-6">{service.description}</p>
                    <div className="bg-primary-50 rounded-xl p-6 mb-6">
                      <p className="text-primary-900 font-medium">{service.benefits}</p>
                    </div>
                    <Button variant="primary" size="lg">Learn More</Button>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card>
                      <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                              <span className="w-2 h-2 bg-primary rounded-full" />
                            </span>
                            <span className="text-neutral-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="section-padding bg-neutral-50">
        <Container>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We learn about your business, goals, and target audience.' },
              { step: '02', title: 'Strategy', description: 'We develop a comprehensive plan aligned with your objectives.' },
              { step: '03', title: 'Execution', description: 'Our team brings your vision to life with precision and care.' },
              { step: '04', title: 'Launch & Support', description: 'We deploy your solution and provide ongoing support.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="text-5xl font-bold text-primary-200 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to Start Your Project?"
        subtitle="Let's discuss how our services can help you achieve your business goals."
      />
    </>
  )
}

export default Services
