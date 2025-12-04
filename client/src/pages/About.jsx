import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/ui/Container'
import Team from '@components/sections/Team'
import Stats from '@components/sections/Stats'
import CTA from '@components/sections/CTA'

const About = () => {
  return (
    <>
      {/* About Hero */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6">About Spet</h1>
            <p className="text-xl text-neutral-600 mb-8">
              We're a passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences that drive real business results.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">Our Story</h2>
              <p className="text-neutral-600 mb-4">
                Founded in 2008, Spet has grown from a small startup to a leading digital agency serving clients worldwide. Our journey has been driven by a simple philosophy: combine creativity with technology to solve complex business challenges.
              </p>
              <p className="text-neutral-600 mb-4">
                Over the years, we've had the privilege of working with startups, Fortune 500 companies, and everything in between. Each project has taught us valuable lessons and helped us refine our approach to digital excellence.
              </p>
              <p className="text-neutral-600">
                Today, we're proud to be recognized as industry leaders, but we remain committed to the values that got us here: innovation, integrity, and an unwavering focus on our clients' success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/about1/600/400"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <Stats />

      {/* Values */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
              },
              {
                title: 'Integrity',
                description: 'Honesty and transparency are at the heart of every client relationship and project we undertake.',
              },
              {
                title: 'Excellence',
                description: 'We never settle for good enough. Our commitment is to deliver exceptional quality every time.',
              },
              {
                title: 'Collaboration',
                description: 'Great results come from great teamwork. We work closely with clients as true partners.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Team />
      <CTA
        title="Join Our Journey"
        subtitle="We're always looking for talented individuals to join our team. Explore career opportunities with us."
        primaryButtonText="View Careers"
        secondaryButtonText="Contact Us"
      />
    </>
  )
}

export default About
