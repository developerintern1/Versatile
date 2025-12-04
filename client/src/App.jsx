import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from '@components/layout/Layout'
import Home from '@pages/Home'
import About from '@pages/About'
import Services from '@pages/Services'
import Projects from '@pages/Projects'
import Blog from '@pages/Blog'
import BlogPost from '@pages/BlogPost'
import Contact from '@pages/Contact'
import Shop from '@pages/Shop'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'

function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  // Refresh AOS on route change so animations re-run on navigation
  useEffect(() => {
    AOS.refresh()
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
