import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { FiArrowUp } from 'react-icons/fi'
import Container from '@components/ui/Container'

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Features', path: '/features' },
    { name: 'Our Pricing', path: '/pricing' },
    { name: 'Latest News', path: '/blog' },
  ],
  support: [
    { name: "FAQ's", path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Condition', path: '/terms' },
    { name: 'Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
  ],
}

const socialLinks = [
  { icon: FiFacebook, href: '#', label: 'Facebook', color: 'hover:bg-[#3b5998]' },
  { icon: FiTwitter, href: '#', label: 'Twitter', color: 'hover:bg-[#1da1f2]' },
  { icon: FiInstagram, href: '#', label: 'Instagram', color: 'hover:bg-[#e4405f]' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
]

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#f7f9fc] text-[#6b7c93] relative">
      {/* Main Footer Content */}
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-7 bg-[#0B76EF] rounded-sm"></div>
                    <div className="w-1 h-5 bg-[#0B76EF] rounded-sm"></div>
                    <div className="w-1 h-9 bg-[#0B76EF] rounded-sm"></div>
                  </div>
                  <span className="text-2xl font-bold text-[#1a1a1a]">Versatile</span>
                </div>
              </Link>
              <p className="text-[#6b7c93] leading-relaxed mb-6">
               Atish Shinde
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-[#1a1a1a] font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-[#6b7c93] hover:text-[#0B76EF] transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-[#1a1a1a] font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-[#6b7c93] hover:text-[#0B76EF] transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address Column */}
            <div>
              <h4 className="text-[#1a1a1a] font-bold text-lg mb-6">Address</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 text-[#0B76EF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#6b7c93]">
                    27 Division St, New York, NY 10002, USA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiMail className="w-5 h-5 text-[#0B76EF] flex-shrink-0 mt-0.5" />
                  <a href="mailto:spet@gmail.com" className="text-[#6b7c93] hover:text-[#0B76EF] transition-colors">
                    Email: spet@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FiPhone className="w-5 h-5 text-[#0B76EF] flex-shrink-0 mt-0.5" />
                  <a href="tel:+13219847854" className="text-[#6b7c93] hover:text-[#0B76EF] transition-colors">
                    Phone: + (321) 984 754
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-full border-2 border-[#d1d9e6] flex items-center justify-center text-[#6b7c93] hover:text-white hover:border-transparent transition-all ${social.color}`}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-[#e0e6ed]">
        <Container>
          <div className="py-6 flex items-center justify-center">
            <p className="text-[#6b7c93] text-[15px]">
              © Website Design & Developed By Fox Aircomm Pvt Ltd | All Rights Reserved.{' '}
              <a 
                href="https://envytheme.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0B76EF] hover:underline font-medium"
              >
              </a>
            </p>
          </div>
        </Container>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center group z-40"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  )
}

export default Footer
