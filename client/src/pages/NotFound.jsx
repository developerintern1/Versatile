import React from 'react'
import { motion } from 'framer-motion'
import { FiHome, FiArrowLeft } from 'react-icons/fi'
import Container from '@components/ui/Container'
import Button from '@components/ui/Button'

const NotFound = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50 min-h-screen flex items-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-9xl font-bold text-primary mb-4">404</div>
          <h1 className="mb-6">Page Not Found</h1>
          <p className="text-xl text-neutral-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/"
              variant="primary"
              size="lg"
              icon={<FiHome />}
              iconPosition="left"
            >
              Go Home
            </Button>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              icon={<FiArrowLeft />}
              iconPosition="left"
            >
              Go Back
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default NotFound
