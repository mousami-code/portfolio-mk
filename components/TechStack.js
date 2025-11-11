'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  SiJavascript, SiPython, SiJava, SiTypescript, SiHtml5, SiCss3,
  SiReact, SiNextdotjs, SiDjango, SiSpring, SiExpress, SiFastapi,
  SiAmazonaws, SiMicrosoftazure, SiDocker, SiKubernetes, SiTerraform,
  SiPostgresql, SiMongodb, SiRedis, SiKafka,
  SiGit, SiGithub, SiGitlab, SiJenkins, SiPrometheus,
  SiLinux, SiNodedotjs
} from 'react-icons/si'

const techStackData = [
  {
    category: 'LANGUAGES',
    icon: '💻',
    color: 'rust',
    items: [
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'Python', icon: SiPython, level: 90 },
      { name: 'Java', icon: SiJava, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'SQL', icon: null, level: 85 },
      { name: 'HTML/CSS', icon: SiHtml5, level: 90 },
    ],
  },
  {
    category: 'FRAMEWORKS & LIBRARIES',
    icon: '⚙️',
    color: 'sand',
    items: [
      { name: 'Spring Boot', icon: SiSpring, level: 90 },
      { name: 'Django', icon: SiDjango, level: 85 },
      { name: 'FastAPI', icon: SiFastapi, level: 85 },
      { name: 'Node.js', icon: SiNodedotjs, level: 90 },
      { name: 'Express', icon: SiExpress, level: 85 },
      { name: 'React', icon: SiReact, level: 80 },
    ],
  },
  {
    category: 'CLOUD & INFRASTRUCTURE',
    icon: '☁️',
    color: 'rust',
    items: [
      { name: 'AWS', icon: SiAmazonaws, level: 95 },
      { name: 'Azure', icon: SiMicrosoftazure, level: 85 },
      { name: 'Docker', icon: SiDocker, level: 90 },
      { name: 'Kubernetes', icon: SiKubernetes, level: 80 },
      { name: 'Terraform', icon: SiTerraform, level: 80 },
      { name: 'Linux', icon: SiLinux, level: 90 },
    ],
  },
  {
    category: 'DATABASES & MESSAGING',
    icon: '💾',
    color: 'sand',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
      { name: 'DynamoDB', icon: SiAmazonaws, level: 80 },
      { name: 'MongoDB', icon: SiMongodb, level: 75 },
      { name: 'Redis', icon: SiRedis, level: 80 },
      { name: 'Kafka', icon: SiKafka, level: 85 },
      { name: 'SQS', icon: SiAmazonaws, level: 85 },
    ],
  },
  {
    category: 'DEVOPS & TOOLS',
    icon: '🛠️',
    color: 'rust',
    items: [
      { name: 'Git', icon: SiGit, level: 95 },
      { name: 'Jenkins', icon: SiJenkins, level: 85 },
      { name: 'GitLab CI/CD', icon: SiGitlab, level: 85 },
      { name: 'Prometheus', icon: SiPrometheus, level: 80 },
      { name: 'CloudWatch', icon: SiAmazonaws, level: 85 },
      { name: 'GitHub Actions', icon: SiGithub, level: 80 },
    ],
  },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredItem, setHoveredItem] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  const categories = ['ALL', ...techStackData.map(cat => cat.category)]

  const filteredData = selectedCategory === 'ALL' 
    ? techStackData 
    : techStackData.filter(cat => cat.category === selectedCategory)

  return (
    <section id="tech" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wasteland-black via-wasteland-dark to-wasteland-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wasteland-rust opacity-5 blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-wasteland-rust"></div>
            <span className="font-mono text-wasteland-rust text-xl">&lt;ARSENAL&gt;</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-wasteland-rust"></div>
          </div>
          <h2 className="font-orbitron text-5xl md:text-6xl font-black text-wasteland-sand mb-4">
            WEAPONS OF CHOICE
          </h2>
          <p className="font-mono text-gray-400 max-w-2xl mx-auto">
            The tools that survive the wasteland. Battle-tested, production-hardened technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 font-mono text-sm tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-wasteland-rust text-wasteland-black border-2 border-wasteland-rust shadow-[0_0_20px_rgba(232,106,51,0.6)]'
                  : 'bg-wasteland-dark border-2 border-wasteland-metal text-gray-400 hover:border-wasteland-rust hover:text-wasteland-rust'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {filteredData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className={`font-orbitron text-2xl font-bold ${
                  category.color === 'rust' ? 'text-wasteland-rust' : 'text-wasteland-sand'
                }`}>
                  {category.category}
                </h3>
                <div className={`flex-1 h-px ${
                  category.color === 'rust' 
                    ? 'bg-gradient-to-r from-wasteland-rust to-transparent' 
                    : 'bg-gradient-to-r from-wasteland-sand to-transparent'
                }`}></div>
              </div>

              {/* Tech Items Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.items.map((item, itemIndex) => {
                  const Icon = item.icon
                  const isHovered = hoveredItem === `${categoryIndex}-${itemIndex}`
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                      onHoverStart={() => setHoveredItem(`${categoryIndex}-${itemIndex}`)}
                      onHoverEnd={() => setHoveredItem(null)}
                      className="group relative"
                    >
                      <div 
                        className={`relative p-6 bg-wasteland-dark border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                          isHovered
                            ? category.color === 'rust'
                              ? 'border-wasteland-rust shadow-[0_0_30px_rgba(232,106,51,0.6)]'
                              : 'border-wasteland-sand shadow-[0_0_30px_rgba(249,211,66,0.6)]'
                            : 'border-wasteland-metal hover:border-wasteland-rust/50'
                        }`}
                      >
                        {/* Corner accents */}
                        {isHovered && (
                          <>
                            <div className={`absolute top-0 left-0 w-2 h-2 ${
                              category.color === 'rust' ? 'bg-wasteland-rust' : 'bg-wasteland-sand'
                            }`}></div>
                            <div className={`absolute top-0 right-0 w-2 h-2 ${
                              category.color === 'rust' ? 'bg-wasteland-rust' : 'bg-wasteland-sand'
                            }`}></div>
                            <div className={`absolute bottom-0 left-0 w-2 h-2 ${
                              category.color === 'rust' ? 'bg-wasteland-rust' : 'bg-wasteland-sand'
                            }`}></div>
                            <div className={`absolute bottom-0 right-0 w-2 h-2 ${
                              category.color === 'rust' ? 'bg-wasteland-rust' : 'bg-wasteland-sand'
                            }`}></div>
                          </>
                        )}
                        
                        {/* Icon */}
                        <div className="flex flex-col items-center justify-center">
                          {Icon ? (
                            <Icon className={`text-5xl mb-3 transition-all duration-300 ${
                              isHovered
                                ? category.color === 'rust'
                                  ? 'text-wasteland-rust scale-110'
                                  : 'text-wasteland-sand scale-110'
                                : 'text-gray-400'
                            }`} />
                          ) : (
                            <div className={`text-5xl mb-3 font-orbitron font-black ${
                              isHovered
                                ? category.color === 'rust'
                                  ? 'text-wasteland-rust'
                                  : 'text-wasteland-sand'
                                : 'text-gray-400'
                            }`}>
                              SQL
                            </div>
                          )}
                          
                          {/* Name */}
                          <div className={`font-mono text-xs text-center transition-colors duration-300 ${
                            isHovered ? 'text-gray-200' : 'text-gray-500'
                          }`}>
                            {item.name}
                          </div>
                        </div>

                        {/* Skill level bar */}
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-0 left-0 right-0 h-1 bg-wasteland-black"
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.level}%` }}
                              transition={{ duration: 0.5 }}
                              className={`h-full ${
                                category.color === 'rust' ? 'bg-wasteland-rust' : 'bg-wasteland-sand'
                              }`}
                            ></motion.div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="p-8 border-2 border-wasteland-metal bg-wasteland-dark/30 backdrop-blur-sm">
            <h4 className="font-orbitron text-xl font-bold text-wasteland-sand mb-4 text-center">
              SPECIALIZED SKILLS & CERTIFICATIONS
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'OAuth2 / LDAP Authentication',
                'SOC 2 Compliance',
                'Microservices Architecture',
                'Event-Driven Systems',
                'Blue/Green Deployments',
                'System Monitoring & Alerting',
                'Infrastructure as Code',
                'Role-Based Access Control (RBAC)',
                'CI/CD Pipeline Design',
                'Cloud Cost Optimization',
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-wasteland-black border border-wasteland-metal text-sm font-mono text-gray-400 hover:border-wasteland-rust hover:text-wasteland-rust transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

