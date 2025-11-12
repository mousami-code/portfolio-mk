'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-wasteland-black via-wasteland-dark to-wasteland-black"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-wasteland-rust opacity-5 blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-wasteland-rust text-xl">&lt;ABOUT&gt;</span>
            <div className="flex-1 h-px bg-gradient-to-r from-wasteland-rust to-transparent"></div>
          </div>
          <h2 className="font-orbitron text-5xl md:text-6xl font-black text-wasteland-sand mb-4">
            THE SURVIVORS PROFILE
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Main Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative p-8 border-2 border-wasteland-metal bg-wasteland-dark/30 backdrop-blur-sm">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-wasteland-rust"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-wasteland-rust"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-wasteland-rust"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-wasteland-rust"></div>
              
              <p className="font-mono text-gray-300 leading-relaxed mb-6">
                <span className="text-girly-pink font-bold">4+ years</span> crafting elegant, scalable full-stack applications! 
                Specialized in <span className="text-girly-lavender font-bold">Python development</span>, 
                <span className="text-girly-lavender font-bold"> REST APIs</span>, and <span className="text-girly-lavender font-bold">modern web applications</span> 💖
              </p>
              
              <p className="font-mono text-gray-300 leading-relaxed mb-6">
                From enterprise platforms to cutting-edge VR applications, I build 
                <span className="text-girly-pink font-bold"> production-ready solutions</span> that users love ✨ 
                My toolkit: <span className="text-girly-lavender">Python (Django, FastAPI, Flask)</span>, <span className="text-girly-lavender">React</span>, <span className="text-girly-lavender">PostgreSQL</span>, 
                powered by <span className="text-girly-lavender">AWS</span> and <span className="text-girly-lavender">Azure</span>!
              </p>
              
              <p className="font-mono text-gray-300 leading-relaxed">
                Currently exploring <span className="text-girly-pink font-bold">Agentic AI</span> and 
                <span className="text-girly-pink font-bold"> custom GPT integrations</span> with Python — building intelligent 
                applications that understand and delight users! 🤖💕
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-wasteland-dark/50 border border-wasteland-metal">
                <div className="text-wasteland-rust font-mono text-sm mb-2">LOCATION</div>
                <div className="font-orbitron text-lg text-gray-200">Texas, USA</div>
              </div>
              <div className="p-4 bg-wasteland-dark/50 border border-wasteland-metal">
                <div className="text-wasteland-rust font-mono text-sm mb-2">EDUCATION</div>
                <div className="font-orbitron text-lg text-gray-200">MS in IS</div>
              </div>
              <div className="p-4 bg-wasteland-dark/50 border border-wasteland-metal">
                <div className="text-wasteland-rust font-mono text-sm mb-2">CURRENT</div>
                <div className="font-orbitron text-lg text-gray-200">T-Mobile</div>
              </div>
              <div className="p-4 bg-wasteland-dark/50 border border-wasteland-metal">
                <div className="text-wasteland-rust font-mono text-sm mb-2">INTEREST</div>
                <div className="font-orbitron text-lg text-gray-200">Agentic AI</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="p-8 border-2 border-wasteland-rust bg-wasteland-dark/30 backdrop-blur-sm">
              <h3 className="font-orbitron text-2xl font-bold text-wasteland-sand mb-6 flex items-center gap-2">
                <span className="text-wasteland-rust">{'>'}</span> CORE COMPETENCIES
              </h3>
              
              <div className="space-y-6">
                {[
                  { 
                    category: 'PYTHON BACKEND',
                    skills: ['Django', 'FastAPI', 'Flask', 'SQLAlchemy', 'Celery', 'pytest']
                  },
                  { 
                    category: 'FRONTEND & UI',
                    skills: ['React', 'JavaScript', 'HTML/CSS', 'Material-UI', 'Tailwind', 'WebSockets']
                  },
                  { 
                    category: 'DATABASES',
                    skills: ['PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch', 'DynamoDB']
                  },
                  { 
                    category: 'APIs & INTEGRATION',
                    skills: ['REST APIs', 'GraphQL', 'OAuth2', 'JWT', 'Swagger/OpenAPI', 'Stripe']
                  },
                  { 
                    category: 'DATA & TOOLS',
                    skills: ['Pandas', 'NumPy', 'Kafka', 'AWS Lambda', 'Docker', 'Git']
                  },
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="text-girly-pink font-mono text-sm mb-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-girly-pink"></span>
                      {item.category}
                    </div>
                    <div className="flex flex-wrap gap-2 pl-4">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-girly-black border border-girly-purple/30 text-xs font-mono text-gray-400 hover:border-girly-pink hover:text-girly-pink transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="p-6 bg-gradient-to-br from-wasteland-rust/10 to-wasteland-sand/5 border border-wasteland-rust/50">
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-wasteland-rust">EMAIL:</span>
                  <a href="mailto:mousamikalidindi01@gmail.com" className="text-gray-300 hover:text-wasteland-sand transition-colors">
                    mousamikalidindi01@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-wasteland-rust">PHONE:</span>
                  <a href="tel:9409771702" className="text-gray-300 hover:text-wasteland-sand transition-colors">
                    940-977-1702
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-wasteland-rust">GITHUB:</span>
                  <a href="https://github.com/mousami-code" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-wasteland-sand transition-colors">
                    mousami-code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

