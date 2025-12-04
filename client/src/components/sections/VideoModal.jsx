import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'
import Modal from '@components/ui/Modal'
import Container from '@components/ui/Container'

const VideoModal = ({ 
  videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  thumbnailImage = 'https://picsum.photos/seed/video/1200/600',
  title = 'Watch Our Story',
  subtitle = 'See how we transform ideas into reality'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{title}</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={thumbnailImage}
              alt="Video thumbnail"
              className="w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-3xl" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-primary transition-colors"
              >
                <FiPlay size={40} className="text-primary group-hover:text-white ml-2 transition-colors" />
              </motion.div>
            </div>

            {/* Pulse Animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 bg-white rounded-full animate-ping opacity-20" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Video Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="xl"
      >
        <div className="aspect-video">
          <iframe
            src={videoUrl}
            title="Video"
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  )
}

export default VideoModal
