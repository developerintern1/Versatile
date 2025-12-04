import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown, FiShoppingCart } from 'react-icons/fi'
import Button from '@components/ui/Button'
import Container from '@components/ui/Container'

const navigation = [
  { 
    name: 'Home',
    path: '/', // added missing path
  },
  { 
    name: 'About', 
    path: '/about',
    hasDropdown: true,
    children: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'Testimonials', path: '/about#testimonials' },
    ]
  },
  { 
    name: 'Pages', 
    path: '/services',
    hasDropdown: true,
    children: [
      { name: 'Services', path: '/services' },
      { name: 'Projects', path: '/projects' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Team', path: '/team' },
    ]
  },
  { 
    name: 'Shop', 
    path: '/shop',
    hasDropdown: true,
    children: [
      { name: 'Products', path: '/shop' },
      { name: 'Cart', path: '/cart' },
      { name: 'Checkout', path: '/checkout' },
    ]
  },
  { 
    name: 'Blog', 
    path: '/blog',
    hasDropdown: true,
    children: [
      { name: 'Blog Grid', path: '/blog' },
      { name: 'Blog Details', path: '/blog/future-of-web-development' },
    ]
  },
  { name: 'Contact', path: '/contact' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [cartCount, setCartCount] = useState(2)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-3">
              <div className="flex items-center gap-1">
                <div className="w-1 h-7 bg-[#0B76EF] rounded-sm"></div>
                <div className="w-1 h-5 bg-[#0B76EF] rounded-sm"></div>
                <div className="w-1 h-9 bg-[#0B76EF] rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold text-[#1a1a1a]">Versatile</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            {navigation.map((item) => (
              <div
                key={item.name} // stable key
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={item.path || '/'} // fallback to '/'
                  className={({ isActive }) =>
                    `text-[15px] font-medium transition-colors flex items-center gap-1 py-2 ${
                      isActive
                        ? 'text-[#0B76EF]'
                        : 'text-[#4a5568] hover:text-[#0B76EF]'
                    }`
                  }
                >
                  {item.name}
                  {item.hasDropdown && (
                    <FiChevronDown 
                      size={13} 
                      className={`transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </NavLink>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-md shadow-xl py-2 border border-gray-100"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path || '/'}
                            className="block px-5 py-2.5 text-[14px] text-[#4a5568] hover:bg-[#f0f7ff] hover:text-[#0B76EF] transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Shopping Cart */}
            <Link to="/cart" className="relative p-2">
              <FiShoppingCart 
                size={20} 
                className="text-[#4a5568] hover:text-[#0B76EF] transition-colors cursor-pointer" 
              />
              {cartCount > 0 && (
                <span className="absolute -top-0 -right-0 w-4 h-4 bg-[#FF7A59] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Support Button */}
            <button className="px-5 py-2.5 text-[13px] font-semibold text-[#4a5568] hover:text-[#0B76EF] transition-colors border border-[#e2e8f0] rounded-md hover:border-[#0B76EF]">
              SUPPORT
            </button>

            {/* Login Button */}
            <Link 
              to="/login" 
              className="px-6 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5558e3] hover:to-[#7c4ee4] text-white text-[13px] font-semibold rounded-md transition-all shadow-sm hover:shadow-md"
            >
              LOGIN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#4a5568] hover:text-[#0B76EF] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <Container>
              <div className="py-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <NavLink
                      to={item.path || '/'}
                      onClick={() => setMobileMenuOpen(false)} // close menu on any link
                      className={({ isActive }) =>
                        `block py-2 text-base font-medium transition-colors ${
                          isActive
                            ? 'text-[#0B76EF]'
                            : 'text-[#4a5568] hover:text-[#0B76EF]'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                    {item.hasDropdown && item.children && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path || '/'}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-sm text-[#4a5568] hover:text-[#0B76EF]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3 border-t border-gray-100">
                  <Link 
                    to="/cart"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 py-2 text-base font-medium text-[#4a5568]"
                  >
                    <FiShoppingCart size={20} />
                    Cart ({cartCount})
                  </Link>
                  <button className="w-full px-4 py-2 text-sm font-semibold text-[#4a5568] border border-[#e2e8f0] rounded-md">
                    SUPPORT
                  </button>
                  <Link 
                    to="/login" 
                    className="block w-full px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white text-center text-sm font-semibold rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    LOGIN
                  </Link>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
