import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/ui/Container'
import Button from '@components/ui/Button'

const Hero = ({
  title = 'Build Amazing Digital Experiences',
  subtitle = 'We create innovative solutions that help businesses grow and succeed in the digital world.',
  ctaPrimary = 'Get Started',
  ctaSecondary = 'Learn More',
  ctaPrimaryLink = '/contact',
  ctaSecondaryLink = '/about',
  backgroundImage,
  illustration,
}) => {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-primary-50 overflow-hidden">
      <Container>
        <div className="section-padding flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 text-balance">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button to={ctaPrimaryLink} variant="primary" size="lg">
                {ctaPrimary}
              </Button>
              <Button to={ctaSecondaryLink} variant="outline" size="lg">
                {ctaSecondary}
              </Button>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="aspect-square max-w-lg mx-auto relative">
              {backgroundImage ? (
                <img
                  src={backgroundImage}
                  alt="Hero"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-3xl shadow-2xl flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-20">
                    {illustration || 'SPET'}
                  </span>
                </div>
              )}
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
