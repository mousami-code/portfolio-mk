'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = 'Engineering reliability in a digital wasteland_'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Rust overlay effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-girly-pink opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-girly-purple opacity-10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Main name - huge and metallic */}
          <motion.h1 
            className="font-orbitron text-7xl md:text-9xl font-black mb-6 tracking-wider"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-girly-pink via-girly-purple to-girly-lavender bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,107,157,0.5)] neon-glow">
              MOUSAMI
            </span>
            <br />
            <span className="bg-gradient-to-r from-girly-lavender via-girly-purple to-girly-pink bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(192,132,252,0.5)] neon-glow">
              KALIDINDI
            </span>
          </motion.h1>
          
          {/* Subtitle with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mb-8"
          >
            <p className="font-mono text-girly-pink text-xl md:text-2xl tracking-widest glitch-text">
              {text}<span className="terminal-cursor">|</span>
            </p>
          </motion.div>
          
          {/* Role badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {['PYTHON DEVELOPER', 'FULL-STACK ENGINEER', 'API ARCHITECT', 'WEB DEV 💖'].map((role, index) => (
              <span
                key={index}
                className="px-4 py-2 border-2 border-girly-pink bg-girly-dark/50 backdrop-blur-sm font-mono text-sm tracking-wider hover:bg-girly-pink/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,107,157,0.6)]"
              >
                {role}
              </span>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-girly-pink border-2 border-girly-pink font-orbitron font-bold text-lg tracking-wider overflow-hidden hover:shadow-[0_0_30px_rgba(255,107,157,0.8)] transition-all duration-300"
            >
              <span className="relative z-10 text-girly-black">LETS CONNECT ✨</span>
              <div className="absolute inset-0 bg-girly-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-black">
                LETS CONNECT ✨
              </span>
            </a>
            
            <a
              href="/experience"
              className="px-8 py-4 border-2 border-girly-lavender bg-transparent font-orbitron font-bold text-lg tracking-wider hover:bg-girly-lavender/10 hover:shadow-[0_0_30px_rgba(224,179,255,0.6)] transition-all duration-300"
            >
              VIEW EXPERIENCE
            </a>
          </motion.div>
          
          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: 'YEARS EXPERIENCE', value: '4+' },
              { label: 'COMPANIES', value: '4' },
              { label: 'TECH STACK', value: '20+' },
              { label: 'UPTIME', value: '99.9%' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-girly-dark/30 border border-girly-purple/30 backdrop-blur-sm hover:border-girly-pink transition-colors duration-300 hover:shadow-[0_0_20px_rgba(255,107,157,0.3)]"
              >
                <div className="text-4xl font-orbitron font-black text-girly-lavender mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-gray-400 tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-girly-pink rounded-full flex justify-center shadow-[0_0_20px_rgba(255,107,157,0.5)]">
              <div className="w-1 h-3 bg-girly-pink rounded-full mt-2 animate-pulse"></div>
            </div>
          </motion.div>
    </section>
  )
}

