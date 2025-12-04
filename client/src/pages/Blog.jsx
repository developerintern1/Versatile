import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiClock, FiUser, FiArrowRight } from 'react-icons/fi'
import Container from '@components/ui/Container'
import Button from '@components/ui/Button'

const blogPosts = [
  {
    id: 1,
    slug: 'future-of-web-development',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
    image: 'https://picsum.photos/seed/blog1/800/600',
    category: 'Web Development',
    author: 'Alex Morgan',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    slug: 'ux-design-principles',
    title: '10 Essential UX Design Principles for Better User Experience',
    excerpt: 'Learn the fundamental principles that make great user experiences and how to apply them to your projects.',
    image: 'https://picsum.photos/seed/blog2/800/600',
    category: 'Design',
    author: 'Jessica Lee',
    date: 'Dec 12, 2024',
    readTime: '7 min read',
  },
  {
    id: 3,
    slug: 'mobile-app-performance',
    title: 'Optimizing Mobile App Performance: Best Practices',
    excerpt: 'Discover proven techniques to improve your mobile app performance and deliver lightning-fast experiences.',
    image: 'https://picsum.photos/seed/blog3/800/600',
    category: 'Mobile Development',
    author: 'Ryan Cooper',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
  },
  {
    id: 4,
    slug: 'digital-marketing-strategies',
    title: 'Digital Marketing Strategies That Actually Work in 2024',
    excerpt: 'Explore data-driven marketing strategies that are delivering real results for businesses today.',
    image: 'https://picsum.photos/seed/blog4/800/600',
    category: 'Marketing',
    author: 'Maria Santos',
    date: 'Dec 8, 2024',
    readTime: '8 min read',
  },
  {
    id: 5,
    slug: 'react-best-practices',
    title: 'React Best Practices: Writing Clean and Maintainable Code',
    excerpt: 'Master React development with these best practices for writing scalable and maintainable applications.',
    image: 'https://picsum.photos/seed/blog5/800/600',
    category: 'Web Development',
    author: 'Ryan Cooper',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
  },
  {
    id: 6,
    slug: 'seo-guide-2024',
    title: 'The Complete SEO Guide for 2024: From Basics to Advanced',
    excerpt: 'Everything you need to know about SEO in 2024, including the latest algorithm updates and strategies.',
    image: 'https://picsum.photos/seed/blog6/800/600',
    category: 'SEO',
    author: 'Maria Santos',
    date: 'Dec 3, 2024',
    readTime: '12 min read',
  },
]

const Blog = () => {
  return (
    <>
      {/* Blog Hero */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6">Blog & Insights</h1>
            <p className="text-xl text-neutral-600">
              Stay updated with the latest trends, tips, and insights from the world of digital technology and design.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12"
          >
            <div>
              <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4">
                Featured Post
              </span>
              <h2 className="mb-4">{blogPosts[0].title}</h2>
              <p className="text-neutral-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-6 mb-6 text-sm text-neutral-600">
                <span className="flex items-center gap-2">
                  <FiUser size={16} />
                  {blogPosts[0].author}
                </span>
                <span className="flex items-center gap-2">
                  <FiClock size={16} />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <Button
                to={`/blog/${blogPosts[0].slug}`}
                variant="primary"
                icon={<FiArrowRight />}
                iconPosition="right"
              >
                Read Article
              </Button>
            </div>
            <div>
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white text-primary text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3 text-sm text-neutral-600">
                    <span className="flex items-center gap-1">
                      <FiUser size={14} />
                      {post.author}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Read More <FiArrowRight className="ml-1" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Blog
