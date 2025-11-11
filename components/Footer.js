'use client'

import { motion } from 'framer-motion'
import { FiZap, FiHeart, FiCode } from 'react-icons/fi'
import { SiCursor } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t-2 border-girly-purple/30 bg-gradient-to-b from-transparent to-girly-dark/50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-girly-pink blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-girly-lavender blur-[100px] animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - About */}
          <div>
            <h3 className="font-orbitron text-xl font-bold text-girly-pink mb-4">
              MOUSAMI KALIDINDI
            </h3>
            <p className="font-mono text-sm text-gray-400 leading-relaxed">
              Full-Stack Python Developer crafting elegant solutions with Django, FastAPI, and React 💖✨
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h3 className="font-orbitron text-lg font-bold text-girly-purple mb-4">
              QUICK LINKS
            </h3>
            <div className="space-y-2 font-mono text-sm">
              <a href="/" className="block text-gray-400 hover:text-girly-pink transition-colors">
                → Home
              </a>
              <a href="/about" className="block text-gray-400 hover:text-girly-pink transition-colors">
                → About
              </a>
              <a href="/experience" className="block text-gray-400 hover:text-girly-pink transition-colors">
                → Experience
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-girly-pink transition-colors">
                → Projects
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-girly-pink transition-colors">
                → Contact
              </a>
            </div>
          </div>

          {/* Right - Connect */}
          <div>
            <h3 className="font-orbitron text-lg font-bold text-girly-lavender mb-4">
              LET'S CONNECT
            </h3>
            <div className="space-y-2 font-mono text-sm">
              <a 
                href="mailto:mousamikalidindi01@gmail.com" 
                className="block text-gray-400 hover:text-girly-pink transition-colors"
              >
                ✉️ mousamikalidindi01@gmail.com
              </a>
              <a 
                href="tel:9409771702" 
                className="block text-gray-400 hover:text-girly-pink transition-colors"
              >
                📱 +1 (940) 977-1702
              </a>
              <a 
                href="https://github.com/mousami-code" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-girly-pink transition-colors"
              >
                💻 github.com/mousami-code
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-girly-purple to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="font-mono text-sm text-gray-500">
            © 2025 Mousami Kalidindi. All rights reserved.
          </div>

          {/* Made with Love */}
          <div className="font-mono text-sm text-gray-500 flex items-center gap-2">
            Made with <FiHeart className="text-girly-pink animate-pulse" /> & <FiCode className="text-girly-purple" />
          </div>
        </div>

        {/* Extra sparkle */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-girly-purple/10 border border-girly-purple/30 rounded-full">
            <span className="text-xs font-mono text-gray-400">
              ✨ Full-Stack Python Developer ✨ React ✨ Django ✨ FastAPI ✨ AWS ✨
            </span>
          </div>
        </div>
      </div>

      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-girly-pink via-girly-purple to-girly-lavender animate-shimmer bg-[length:200%_auto]"></div>
    </footer>
  )
}

