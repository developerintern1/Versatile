import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/ui/Container'
import Button from '@components/ui/Button'

const CTA = ({
  title = 'Ready to Get Started?',
  subtitle = "Let's create something amazing together. Contact us today for a free consultation.",
  primaryButtonText = 'Start Your Project',
  secondaryButtonText = 'Schedule a Call',
  primaryButtonLink = '/contact',
  secondaryButtonLink = '/about',
}) => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-700 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-white mb-6">{title}</h2>
          <p className="text-xl text-primary-100 mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to={primaryButtonLink}
              variant="accent"
              size="lg"
            >
              {primaryButtonText}
            </Button>
            <Button
              to={secondaryButtonLink}
              className="bg-white text-primary hover:bg-primary-50"
              size="lg"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTA
