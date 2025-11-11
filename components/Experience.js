'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const experienceData = [
  {
    company: 'T-Mobile – Amdocs',
    location: 'Plano, TX',
    role: 'Full-Stack Python Developer',
    period: 'Sep 2025 – Present',
    type: 'ACTIVE MISSION',
    achievements: [
      'Developed and maintained scalable REST APIs using Python FastAPI and Django, supporting enterprise identity and access management for 1M+ users',
      'Built full-stack applications with React frontend and Python backend, implementing real-time features with WebSockets and event-driven architecture',
      'Designed and optimized PostgreSQL database schemas and queries, improving API response times by 40% through efficient indexing and caching strategies',
      'Integrated OAuth2 authentication flows and JWT token management for secure API access across microservices',
      'Implemented automated testing with pytest and CI/CD pipelines, achieving 95% code coverage and ensuring 99.9% uptime',
    ],
    tags: ['Python', 'FastAPI', 'Django', 'React', 'PostgreSQL', 'OAuth2'],
  },
  {
    company: 'CDS Global – Hearst Company',
    location: 'USA',
    role: 'Full-Stack Python Developer',
    period: 'Apr 2025 – Sep 2025',
    type: 'COMPLETED MISSION',
    achievements: [
      'Built enterprise-scale web applications using Django REST Framework and React, serving 12 clients with role-based access control and multi-tenancy support',
      'Developed real-time event processing system with Python, AWS Lambda, and SQS, handling 100K+ events/day with sub-100ms latency',
      'Created RESTful APIs with comprehensive documentation using Swagger/OpenAPI, reducing integration time for clients by 60%',
      'Implemented data processing pipelines with Pandas and Celery for background tasks, processing 1M+ records daily',
      'Integrated Stripe payment processing and built custom admin dashboards with Django Admin and Chart.js',
    ],
    tags: ['Python', 'Django REST', 'React', 'AWS Lambda', 'PostgreSQL'],
  },
  {
    company: 'Lobaki',
    location: 'USA',
    role: 'Full-Stack Python Developer',
    period: 'Jan 2023 – Apr 2025',
    type: 'COMPLETED MISSION',
    achievements: [
      'Architected and developed full-stack VR content delivery platform using Python FastAPI backend and React frontend, supporting 50K+ concurrent users',
      'Built user authentication system with SSO integration (Okta), JWT tokens, and session management using Redis for scalable user sessions',
      'Developed RESTful APIs for content management, search functionality with Elasticsearch, and real-time analytics dashboard',
      'Implemented file upload system with Azure Blob Storage, image processing with Pillow, and video transcoding pipelines',
      'Created responsive admin panel with React and Material-UI, featuring drag-and-drop interfaces and real-time data updates via WebSockets',
    ],
    tags: ['Python', 'FastAPI', 'React', 'Redis', 'Elasticsearch', 'Azure'],
  },
  {
    company: 'ISSI (Information Systems Solutions Inc.)',
    location: 'India',
    role: 'Python Developer Intern',
    period: 'Jul 2020 – Dec 2022',
    type: 'COMPLETED MISSION',
    achievements: [
      'Developed microservices using Python Flask and FastAPI with PostgreSQL database, handling 5M+ daily transactions for financial applications',
      'Built data processing pipelines with Apache Kafka and Python consumers for real-time transaction monitoring and fraud detection',
      'Created web scraping tools with BeautifulSoup and Scrapy, automating data collection from 100+ sources daily',
      'Developed internal analytics dashboard using Flask, SQLAlchemy, and Plotly for data visualization, reducing manual reporting time by 80%',
      'Implemented automated testing suite with pytest and unittest, achieving 90% code coverage across all Python services',
    ],
    tags: ['Python', 'Flask', 'FastAPI', 'PostgreSQL', 'Kafka', 'Pandas'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-wasteland-black"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-wasteland-sand opacity-5 blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-wasteland-rust text-xl">&lt;MISSIONS&gt;</span>
            <div className="flex-1 h-px bg-gradient-to-r from-wasteland-rust to-transparent"></div>
          </div>
          <h2 className="font-orbitron text-5xl md:text-6xl font-black text-wasteland-sand mb-4">
            COMBAT EXPERIENCE
          </h2>
          <p className="font-mono text-gray-400 max-w-2xl">
            Battles fought across the digital wasteland. Each mission hardened the systems, 
            each deployment a victory against chaos.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className={`relative border-2 backdrop-blur-sm transition-all duration-300 ${
                  expandedIndex === index
                    ? 'border-wasteland-rust bg-wasteland-dark/50 shadow-[0_0_30px_rgba(232,106,51,0.3)]'
                    : 'border-wasteland-metal bg-wasteland-dark/20 hover:border-wasteland-rust/50'
                }`}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-wasteland-rust"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-wasteland-rust"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-wasteland-rust"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-wasteland-rust"></div>

                {/* Header - Always visible */}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Mission type badge */}
                      <div className="inline-block px-3 py-1 mb-3 bg-wasteland-rust/20 border border-wasteland-rust">
                        <span className="font-mono text-xs text-wasteland-rust tracking-wider">
                          {exp.type}
                        </span>
                      </div>
                      
                      <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-wasteland-sand mb-2 group-hover:text-wasteland-rust transition-colors">
                        {exp.company}
                      </h3>
                      
                      <div className="font-mono text-sm text-gray-400 mb-2">
                        {exp.role}
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-500">
                        <span className="flex items-center gap-2">
                          <span className="text-wasteland-rust">📍</span> {exp.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="text-wasteland-rust">⏱</span> {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-wasteland-rust text-2xl">
                      {expandedIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-wasteland-black border border-wasteland-metal text-xs font-mono text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>

                {/* Expandable Content */}
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-wasteland-metal pt-6">
                      <h4 className="font-mono text-wasteland-rust text-sm mb-4 tracking-wider">
                        MISSION OBJECTIVES ACHIEVED:
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                            className="flex gap-3 font-mono text-sm text-gray-300 leading-relaxed"
                          >
                            <span className="text-wasteland-rust mt-1 flex-shrink-0">▸</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-wasteland-sand text-xl">&lt;TRAINING&gt;</span>
            <div className="flex-1 h-px bg-gradient-to-r from-wasteland-sand to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-wasteland-metal bg-wasteland-dark/30 hover:border-wasteland-sand transition-all duration-300">
              <div className="text-wasteland-sand font-mono text-sm mb-2">MASTER OF SCIENCE</div>
              <h4 className="font-orbitron text-xl font-bold text-gray-200 mb-2">
                Information Systems
              </h4>
              <div className="font-mono text-sm text-gray-400">
                University of North Texas, Denton, TX
              </div>
              <div className="font-mono text-xs text-gray-500 mt-2">
                Aug 2022 – May 2024
              </div>
            </div>
            
            <div className="p-6 border-2 border-wasteland-metal bg-wasteland-dark/30 hover:border-wasteland-sand transition-all duration-300">
              <div className="text-wasteland-sand font-mono text-sm mb-2">BACHELOR OF TECHNOLOGY</div>
              <h4 className="font-orbitron text-xl font-bold text-gray-200 mb-2">
                Computer Science and Engineering
              </h4>
              <div className="font-mono text-sm text-gray-400">
                GITAM University, Andhra Pradesh, India
              </div>
              <div className="font-mono text-xs text-gray-500 mt-2">
                Aug 2018 – May 2022
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

