'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiEye, FiUsers } from 'react-icons/fi'

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Get or initialize visitor count
    const storedVisitors = localStorage.getItem('portfolio-visitors')
    const hasVisited = localStorage.getItem('portfolio-visited')

    if (!hasVisited) {
      // New visitor
      const newCount = storedVisitors ? parseInt(storedVisitors) + 1 : 1
      setVisitors(newCount)
      localStorage.setItem('portfolio-visitors', newCount.toString())
      localStorage.setItem('portfolio-visited', 'true')
    } else {
      // Returning visitor
      setVisitors(storedVisitors ? parseInt(storedVisitors) : 0)
    }
  }, [])

  return (
    <>
      {/* Visitor Counter Widget */}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: isVisible ? 0 : 300, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed bottom-32 right-6 z-50"
      >
        <div className="relative">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-girly-pink rounded-full flex items-center justify-center text-xs text-white hover:bg-girly-purple transition-colors shadow-lg"
          >
            {isVisible ? '×' : '👁️'}
          </button>

          {isVisible && (
            <div className="bg-gradient-to-br from-girly-dark to-girly-black border-2 border-girly-pink rounded-2xl p-6 backdrop-blur-lg shadow-[0_0_40px_rgba(255,107,157,0.5)] min-w-[180px]">
              {/* Visitors Count */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <FiEye className="text-girly-lavender text-2xl animate-pulse" />
                  <span className="font-mono text-sm text-gray-400">VISITORS</span>
                </div>
                <motion.div 
                  className="font-orbitron text-5xl font-black text-transparent bg-gradient-to-r from-girly-pink to-girly-lavender bg-clip-text mb-4"
                  key={visitors}
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  {visitors.toLocaleString()}
                </motion.div>

                {/* Fun Stats */}
                <div className="pt-4 border-t border-girly-purple/30">
                  <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-500">
                    <FiUsers />
                    <span>{Math.floor(visitors * 0.7)} unique</span>
                  </div>
                </div>
              </div>

              {/* Decorative corner dots */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-girly-pink rounded-full animate-pulse"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-girly-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-girly-lavender rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 bg-girly-mint rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          )}

          {/* Collapsed state */}
          {!isVisible && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-gradient-to-br from-girly-pink to-girly-purple rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_30px_rgba(255,107,157,0.8)] transition-all border-2 border-white"
              onClick={() => setIsVisible(true)}
            >
              <div className="text-center">
                <FiEye className="text-white text-2xl mx-auto animate-pulse" />
                <div className="text-white text-xs font-bold mt-1">{visitors}</div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  )
}

