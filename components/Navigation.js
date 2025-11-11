'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'TECH', href: '#tech' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-wasteland-black/95 backdrop-blur-md border-b border-wasteland-metal shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="font-orbitron font-black text-2xl tracking-wider group">
            <span className="text-wasteland-rust group-hover:text-wasteland-sand transition-colors">
              MK
            </span>
            <span className="text-wasteland-sand group-hover:text-wasteland-rust transition-colors">
              .DEV
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 font-mono text-sm tracking-wider text-gray-300 hover:text-wasteland-rust transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-wasteland-rust group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="https://github.com/mousami-code"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2 border-2 border-wasteland-rust bg-transparent font-mono text-sm tracking-wider hover:bg-wasteland-rust/20 transition-all duration-300"
            >
              GITHUB
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-wasteland-rust text-3xl"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-wasteland-black border-t border-wasteland-metal"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 font-mono text-lg tracking-wider text-gray-300 hover:text-wasteland-rust hover:bg-wasteland-dark/50 transition-all border-l-2 border-transparent hover:border-wasteland-rust"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://github.com/mousami-code"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 px-4 border-2 border-wasteland-rust bg-transparent font-mono text-lg tracking-wider hover:bg-wasteland-rust/20 transition-all text-center"
              >
                GITHUB
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

