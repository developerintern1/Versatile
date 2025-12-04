import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiClock, FiUser, FiCalendar, FiArrowLeft, FiShare2 } from 'react-icons/fi'
import Container from '@components/ui/Container'
import Button from '@components/ui/Button'

// Mock data - replace with API call
const blogPost = {
  title: 'The Future of Web Development: Trends to Watch in 2024',
  excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
  content: `
    <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with web applications.</p>
    
    <h2>1. AI-Powered Development Tools</h2>
    <p>Artificial Intelligence is revolutionizing the way developers write code. Tools like GitHub Copilot and ChatGPT are becoming essential companions in the development process, helping developers write better code faster and catch bugs before they become problems.</p>
    
    <h2>2. Progressive Web Apps (PWAs)</h2>
    <p>PWAs continue to bridge the gap between web and native applications. With improved offline capabilities, push notifications, and app-like experiences, PWAs are becoming the go-to solution for businesses looking to reach users across all platforms.</p>
    
    <h2>3. WebAssembly Growth</h2>
    <p>WebAssembly (Wasm) is enabling high-performance applications in the browser. From gaming to video editing, Wasm is opening up new possibilities for web-based applications that were previously only possible with native apps.</p>
    
    <h2>4. Serverless Architecture</h2>
    <p>Serverless computing is simplifying backend development and reducing infrastructure costs. Platforms like AWS Lambda, Vercel, and Netlify are making it easier than ever to build and deploy scalable applications.</p>
    
    <h2>5. Enhanced Security Measures</h2>
    <p>With increasing cyber threats, security is becoming a top priority. Zero-trust architecture, advanced authentication methods, and automated security testing are becoming standard practices.</p>
    
    <h2>Conclusion</h2>
    <p>The future of web development is bright and full of possibilities. By staying informed about these trends and continuously learning, developers can build better, faster, and more secure applications for tomorrow's web.</p>
  `,
  image: 'https://picsum.photos/seed/blog1/1200/600',
  category: 'Web Development',
  author: 'Alex Morgan',
  authorImage: 'https://i.pravatar.cc/150?img=5',
  date: 'December 15, 2024',
  readTime: '5 min read',
  tags: ['Web Development', 'Trends', 'Technology', 'AI'],
}

const relatedPosts = [
  {
    id: 2,
    slug: 'ux-design-principles',
    title: '10 Essential UX Design Principles',
    image: 'https://picsum.photos/seed/blog2/400/300',
    category: 'Design',
  },
  {
    id: 3,
    slug: 'mobile-app-performance',
    title: 'Optimizing Mobile App Performance',
    image: 'https://picsum.photos/seed/blog3/400/300',
    category: 'Mobile Development',
  },
  {
    id: 5,
    slug: 'react-best-practices',
    title: 'React Best Practices',
    image: 'https://picsum.photos/seed/blog5/400/300',
    category: 'Web Development',
  },
]

const BlogPost = () => {
  const { slug } = useParams()

  return (
    <>
      {/* Article Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-neutral-50 to-primary-50">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-primary hover:text-primary-600 mb-6 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to Blog
            </Link>
            
            <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4">
              {blogPost.category}
            </span>
            
            <h1 className="mb-6">{blogPost.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-neutral-600">
              <div className="flex items-center gap-3">
                <img
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium text-neutral-900">{blogPost.author}</div>
                  <div className="text-sm">Author</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <FiCalendar size={16} />
                <span>{blogPost.date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <FiClock size={16} />
                <span>{blogPost.readTime}</span>
              </div>
              
              <button className="ml-auto flex items-center gap-2 text-primary hover:text-primary-600 transition-colors">
                <FiShare2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <Container size="default">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full rounded-3xl shadow-2xl"
          />
        </Container>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-neutral-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h3 className="text-sm font-semibold text-neutral-700 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-neutral-50 rounded-2xl">
            <div className="flex items-start gap-6">
              <img
                src={blogPost.authorImage}
                alt={blogPost.author}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">About {blogPost.author}</h3>
                <p className="text-neutral-600 mb-4">
                  Experienced developer and technology enthusiast with a passion for creating innovative web solutions. Specializing in modern JavaScript frameworks and best practices.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-primary hover:text-primary-600">Twitter</a>
                  <a href="#" className="text-primary hover:text-primary-600">LinkedIn</a>
                  <a href="#" className="text-primary hover:text-primary-600">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default BlogPost
