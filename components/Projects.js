'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projectsData = [
  {
    title: 'Enterprise Identity & Access Management',
    description: 'Engineered Linux-based microservices supporting enterprise identity workflows with 99.9% uptime. Integrated LDAP authentication and OAuth2 security across distributed systems.',
    tech: ['AWS', 'Linux', 'OAuth2', 'LDAP', 'Jenkins CI/CD'],
    type: 'Cloud Infrastructure',
    impact: '99.9% uptime, SOC 2 compliant',
  },
  {
    title: 'Real-Time Event Processing Pipeline',
    description: 'Built AWS-based microservices architecture handling real-time events with sub-100ms response time using SQS, Lambda, and DynamoDB.',
    tech: ['AWS Lambda', 'SQS', 'DynamoDB', 'Java Spring Boot'],
    type: 'Microservices',
    impact: 'Sub-100ms response time',
  },
  {
    title: 'Directory Service Backend Integration',
    description: 'Designed and optimized directory-service-integrated backends for 12 enterprise clients, improving access-control reliability and security.',
    tech: ['Java Spring Boot', 'Docker', 'Terraform', 'RBAC'],
    type: 'Backend Engineering',
    impact: '12 enterprise clients, near-zero downtime',
  },
  {
    title: 'VR Content Delivery Platform',
    description: 'Led infrastructure automation and identity integration for VR platforms using Azure AD IAM. Rebuilt authentication pipelines with FastAPI and Django REST.',
    tech: ['Azure', 'FastAPI', 'Django', 'Okta SSO', 'React'],
    type: 'Full-Stack Platform',
    impact: '70% reduction in rollback incidents',
  },
  {
    title: 'Media CDN Migration',
    description: 'Migrated large-scale media services to Azure Blob Storage and CDN, improving resilience and lowering latency by 28%.',
    tech: ['Azure Blob', 'CDN', 'Python', 'Linux'],
    type: 'Cloud Migration',
    impact: '28% latency reduction',
  },
  {
    title: 'High-Volume Transaction System',
    description: 'Built microservices with PostgreSQL and Kafka supporting 5M+ daily transactions. Deployed containerized workloads using GitLab CI/CD and Kubernetes.',
    tech: ['Java', 'Kafka', 'PostgreSQL', 'Kubernetes', 'GitLab'],
    type: 'Distributed Systems',
    impact: '5M+ daily transactions',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-wasteland-black"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wasteland-rust opacity-5 blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-wasteland-rust text-xl">&lt;ACHIEVEMENTS&gt;</span>
            <div className="flex-1 h-px bg-gradient-to-r from-wasteland-rust to-transparent"></div>
          </div>
          <h2 className="font-orbitron text-5xl md:text-6xl font-black text-wasteland-sand mb-4">
            BATTLE VICTORIES
          </h2>
          <p className="font-mono text-gray-400 max-w-2xl">
            Major systems built, deployed, and surviving in production. Each project a testament to engineering excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-6 border-2 border-wasteland-metal bg-wasteland-dark/30 backdrop-blur-sm hover:border-wasteland-rust transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,106,51,0.3)] flex flex-col">
                {/* Project Type Badge */}
                <div className="inline-block self-start px-3 py-1 mb-4 bg-wasteland-rust/20 border border-wasteland-rust">
                  <span className="font-mono text-xs text-wasteland-rust tracking-wider">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-xl font-bold text-wasteland-sand mb-3 group-hover:text-wasteland-rust transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-sm text-gray-400 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="mb-4 p-3 bg-wasteland-black/50 border-l-2 border-wasteland-sand">
                  <div className="font-mono text-xs text-wasteland-sand mb-1">IMPACT:</div>
                  <div className="font-mono text-sm text-gray-300">{project.impact}</div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-wasteland-black border border-wasteland-metal text-xs font-mono text-gray-500 group-hover:border-wasteland-rust/50 group-hover:text-gray-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute top-0 left-0 w-2 h-0 bg-wasteland-rust group-hover:h-full transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-0 bg-wasteland-rust group-hover:h-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 border-2 border-wasteland-rust bg-gradient-to-br from-wasteland-rust/10 to-wasteland-sand/5 backdrop-blur-sm">
            <FiGithub className="text-6xl text-wasteland-rust mx-auto mb-4" />
            <h3 className="font-orbitron text-2xl font-bold text-wasteland-sand mb-4">
              MORE ON GITHUB
            </h3>
            <p className="font-mono text-sm text-gray-400 mb-6 max-w-md">
              Explore more projects, contributions, and open-source work on my GitHub profile.
            </p>
            <a
              href="https://github.com/mousami-code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-wasteland-rust border-2 border-wasteland-rust font-orbitron font-bold tracking-wider hover:bg-transparent hover:text-wasteland-rust transition-all duration-300 group"
            >
              VIEW GITHUB PROFILE
              <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Interested in Agentic AI Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="p-8 border-2 border-wasteland-sand bg-wasteland-dark/30 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="font-orbitron text-2xl font-bold text-wasteland-sand mb-4">
                EXPLORING AGENTIC AI
              </h3>
              <p className="font-mono text-sm text-gray-400 leading-relaxed">
                Currently diving deep into <span className="text-wasteland-sand font-bold">Agentic AI systems</span> and 
                <span className="text-wasteland-sand font-bold"> custom GPT solutions</span>. Building intelligent agents that can 
                reason, plan, and execute tasks autonomously. The next frontier of automation in the digital wasteland.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

