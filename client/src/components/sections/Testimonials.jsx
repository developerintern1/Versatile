import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'

const defaultTestimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    image: 'https://i.pravatar.cc/150?img=1',
    content: 'Working with this team has been an absolute pleasure. They delivered beyond our expectations and the results speak for themselves.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
    image: 'https://i.pravatar.cc/150?img=2',
    content: 'The attention to detail and professionalism is outstanding. Our website traffic has increased by 300% since launch.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, Creative Studio',
    image: 'https://i.pravatar.cc/150?img=3',
    content: 'I highly recommend their services. They transformed our vision into reality with exceptional quality and support.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'CTO, DataFlow',
    image: 'https://i.pravatar.cc/150?img=4',
    content: 'Best decision we made for our digital transformation. The technical expertise and project management were top-notch.',
    rating: 5,
  },
]

const Testimonials = ({ testimonials = defaultTestimonials }) => {
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
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default Testimonials
