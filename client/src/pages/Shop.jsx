import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiStar } from 'react-icons/fi'
import Container from '@components/ui/Container'
import Button from '@components/ui/Button'
import Card from '@components/ui/Card'

const products = [
  {
    id: 1,
    name: 'Premium Website Template',
    price: 49,
    image: 'https://picsum.photos/seed/product1/400/400',
    category: 'Templates',
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: 'UI Kit Pro',
    price: 79,
    image: 'https://picsum.photos/seed/product2/400/400',
    category: 'UI Kits',
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Icon Pack Bundle',
    price: 29,
    image: 'https://picsum.photos/seed/product3/400/400',
    category: 'Icons',
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 4,
    name: 'React Component Library',
    price: 99,
    image: 'https://picsum.photos/seed/product4/400/400',
    category: 'Components',
    rating: 5.0,
    reviews: 67,
  },
  {
    id: 5,
    name: 'Figma Design System',
    price: 129,
    image: 'https://picsum.photos/seed/product5/400/400',
    category: 'Design Systems',
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 6,
    name: 'WordPress Theme',
    price: 59,
    image: 'https://picsum.photos/seed/product6/400/400',
    category: 'Templates',
    rating: 4.6,
    reviews: 92,
  },
]

const categories = ['All', 'Templates', 'UI Kits', 'Icons', 'Components', 'Design Systems']

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory)

  return (
    <>
      {/* Shop Hero */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6">Digital Products</h1>
            <p className="text-xl text-neutral-600">
              Premium templates, UI kits, and design resources to accelerate your projects.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Products */}
      <section className="section-padding bg-white">
        <Container>
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white text-primary text-xs font-medium rounded-full shadow-md">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            size={14}
                            className={`${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-neutral-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-neutral-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary">
                        ${product.price}
                      </span>
                      <Button
                        variant="primary"
                        icon={<FiShoppingCart />}
                        iconPosition="left"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Shop
