import React from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'

const defaultTeam = [
  {
    name: 'Alex Morgan',
    role: 'CEO & Founder',
    image: 'https://i.pravatar.cc/300?img=5',
    bio: 'Visionary leader with 15+ years in digital innovation',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Jessica Lee',
    role: 'Creative Director',
    image: 'https://i.pravatar.cc/300?img=9',
    bio: 'Award-winning designer passionate about user experiences',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Ryan Cooper',
    role: 'Lead Developer',
    image: 'https://i.pravatar.cc/300?img=7',
    bio: 'Full-stack expert building scalable solutions',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Maria Santos',
    role: 'Marketing Manager',
    image: 'https://i.pravatar.cc/300?img=10',
    bio: 'Data-driven marketer with proven growth strategies',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
]

const Team = ({ team = defaultTeam }) => {
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
          <h2 className="mb-4">Meet Our Team</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-neutral-400 hover:text-primary transition-colors">
                      <FiLinkedin size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-neutral-400 hover:text-primary transition-colors">
                      <FiTwitter size={18} />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-neutral-400 hover:text-primary transition-colors">
                      <FiGithub size={18} />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Team
