'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Using Formspree - replace YOUR_FORM_ID with actual ID from formspree.io
      const response = await fetch('https://formspree.io/f/xanypozn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitting(false)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      setIsSubmitting(false)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-girly-black via-girly-dark to-girly-black"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-girly-pink opacity-5 blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-girly-pink"></div>
            <span className="font-mono text-girly-pink text-xl">&lt;CONTACT&gt;</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-girly-pink"></div>
          </div>
          <h2 className="font-orbitron text-5xl md:text-6xl font-black bg-gradient-to-r from-girly-pink via-girly-purple to-girly-lavender bg-clip-text text-transparent mb-4 animate-shimmer bg-[length:200%_auto]">
            LETS CONNECT ✨
          </h2>
          <p className="font-mono text-gray-400 max-w-2xl mx-auto">
            Ready to build something amazing? Lets connect and engineer the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Terminal-style info box */}
            <div className="p-8 border-2 border-girly-pink bg-girly-dark/50 backdrop-blur-sm font-mono shadow-[0_0_30px_rgba(255,107,157,0.3)]">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-girly-pink/30">
                <span className="text-girly-pink">$</span>
                <span className="text-gray-400">cat contact_info.txt</span>
                <span className="terminal-cursor ml-auto">|</span>
              </div>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="text-girly-pink text-sm mb-2 flex items-center gap-2">
                    <FiMail />
                    <span>EMAIL_ADDRESS:</span>
                  </div>
                  <a 
                    href="mailto:mousamikalidindi01@gmail.com"
                    className="text-gray-300 hover:text-girly-lavender transition-colors pl-6 block"
                  >
                    mousamikalidindi01@gmail.com
                  </a>
                </div>

                <div className="group">
                  <div className="text-girly-pink text-sm mb-2 flex items-center gap-2">
                    <FiPhone />
                    <span>PHONE_NUMBER:</span>
                  </div>
                  <a 
                    href="tel:9409771702"
                    className="text-gray-300 hover:text-girly-lavender transition-colors pl-6 block"
                  >
                    +1 (940) 977-1702
                  </a>
                </div>

                <div className="group">
                  <div className="text-girly-pink text-sm mb-2 flex items-center gap-2">
                    <FiGithub />
                    <span>GITHUB_PROFILE:</span>
                  </div>
                  <a 
                    href="https://github.com/mousami-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-girly-lavender transition-colors pl-6 block"
                  >
                    github.com/mousami-code
                  </a>
                </div>

                <div className="group">
                  <div className="text-girly-pink text-sm mb-2">
                    <span>LOCATION:</span>
                  </div>
                  <div className="text-gray-300 pl-6">
                    Texas, USA 🌵
                  </div>
                </div>

                <div className="group">
                  <div className="text-girly-pink text-sm mb-2">
                    <span>STATUS:</span>
                  </div>
                  <div className="text-girly-mint pl-6 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-girly-mint rounded-full animate-pulse shadow-[0_0_10px_rgba(180,248,200,0.8)]"></span>
                    AVAILABLE FOR OPPORTUNITIES 💼
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-girly-pink/30">
                <div className="text-girly-pink text-sm">$ █</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/mousami-code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-4 border-2 border-wasteland-metal bg-wasteland-dark/30 hover:border-wasteland-rust hover:bg-wasteland-rust/10 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <FiGithub className="text-2xl text-gray-400 group-hover:text-wasteland-rust transition-colors" />
                <span className="font-mono text-sm text-gray-400 group-hover:text-wasteland-rust transition-colors">
                  GitHub
                </span>
              </a>
              
              <a
                href="mailto:mousamikalidindi01@gmail.com"
                className="flex-1 p-4 border-2 border-wasteland-metal bg-wasteland-dark/30 hover:border-wasteland-rust hover:bg-wasteland-rust/10 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <FiMail className="text-2xl text-gray-400 group-hover:text-wasteland-rust transition-colors" />
                <span className="font-mono text-sm text-gray-400 group-hover:text-wasteland-rust transition-colors">
                  Email
                </span>
              </a>
            </div>

            {/* Quote */}
            <div className="p-6 border-l-4 border-wasteland-rust bg-wasteland-dark/30">
              <p className="font-mono text-sm text-gray-400 italic leading-relaxed">
                In the world of code, only the resilient systems survive. 
                Lets build infrastructure that stands the test of time.
              </p>
              <p className="font-mono text-xs text-wasteland-rust mt-3">
                — Mousami Kalidindi
              </p>
            </div>
          </motion.div>

          {/* Right: Terminal Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative p-8 border-2 border-wasteland-sand bg-wasteland-dark/50 backdrop-blur-sm">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-wasteland-sand/30">
                <span className="text-wasteland-sand">$</span>
                <span className="font-mono text-gray-400">send_message.sh</span>
                <span className="terminal-cursor ml-auto text-wasteland-sand">|</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono text-sm text-wasteland-sand mb-2 block flex items-center gap-2">
                    <span>{'>'}</span> YOUR_NAME:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-wasteland-black border-2 border-wasteland-metal font-mono text-gray-300 focus:border-wasteland-sand focus:outline-none transition-colors placeholder-gray-600"
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label className="font-mono text-sm text-wasteland-sand mb-2 block flex items-center gap-2">
                    <span>{'>'}</span> YOUR_EMAIL:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-wasteland-black border-2 border-wasteland-metal font-mono text-gray-300 focus:border-wasteland-sand focus:outline-none transition-colors placeholder-gray-600"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="font-mono text-sm text-wasteland-sand mb-2 block flex items-center gap-2">
                    <span>{'>'}</span> MESSAGE:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-wasteland-black border-2 border-wasteland-metal font-mono text-gray-300 focus:border-wasteland-sand focus:outline-none transition-colors resize-none placeholder-gray-600"
                    placeholder="Type your message here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-wasteland-sand border-2 border-wasteland-sand font-orbitron font-bold text-wasteland-black tracking-wider hover:bg-transparent hover:text-wasteland-sand transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⚙</span>
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <FiSend className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-girly-mint/20 border border-girly-mint"
                  >
                    <p className="font-mono text-sm text-girly-mint flex items-center gap-2">
                      <span>✓</span> Message sent successfully! 💕
                    </p>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500"
                  >
                    <p className="font-mono text-sm text-red-400 flex items-center gap-2">
                      <span>✗</span> Failed to send. Please try again!
                    </p>
                  </motion.div>
                )}
              </form>

              {/* Terminal footer */}
              <div className="mt-6 pt-6 border-t border-wasteland-sand/30">
                <div className="font-mono text-sm text-gray-500">
                  <span className="text-wasteland-sand">$</span> Awaiting input<span className="terminal-cursor">|</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block py-6 px-12 border-t border-b border-wasteland-metal">
            <p className="font-mono text-sm text-gray-500 mb-2">
              Engineered with passion in the digital wasteland
            </p>
            <p className="font-orbitron text-lg font-bold">
              <span className="text-wasteland-rust">MOUSAMI</span>
              <span className="text-gray-600 mx-2">|</span>
              <span className="text-wasteland-sand">KALIDINDI</span>
            </p>
            <p className="font-mono text-xs text-gray-600 mt-2">
              © 2025 - Built to survive
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

