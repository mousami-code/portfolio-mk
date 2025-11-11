'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiHome, FiUser, FiBriefcase, FiCode, FiFolder, FiMail, FiMenu, FiX, FiGithub, FiHeart } from 'react-icons/fi'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/', icon: FiHome },
    { name: 'About', href: '/about', icon: FiUser },
    { name: 'Experience', href: '/experience', icon: FiBriefcase },
    { name: 'Tech Stack', href: '/tech', icon: FiCode },
    { name: 'Projects', href: '/projects', icon: FiFolder },
    { name: 'Contact', href: '/contact', icon: FiMail },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 left-6 z-50 p-3 bg-girly-pink border-2 border-girly-purple rounded-lg shadow-lg hover:shadow-girly-purple/50 transition-all"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-girly-dark to-girly-black border-r-2 border-girly-purple/30 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } w-64 md:w-72`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo/Name */}
          <div className="mb-8">
            <Link href="/" className="block">
              <h1 className="font-orbitron text-2xl font-black mb-2">
                <span className="text-girly-pink">MOUSAMI</span>
                <br />
                <span className="text-girly-purple">KALIDINDI</span>
              </h1>
              <p className="font-mono text-xs text-girly-lavender flex items-center gap-2">
                <FiHeart size={12} className="text-girly-pink animate-pulse" />
                girly coder aesthetic
              </p>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg font-mono text-sm transition-all duration-300 group ${
                    isActive
                      ? 'bg-girly-pink text-girly-black shadow-lg shadow-girly-pink/30'
                      : 'text-gray-300 hover:bg-girly-purple/20 hover:text-girly-pink border border-transparent hover:border-girly-purple/30'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-girly-black' : 'text-girly-purple group-hover:text-girly-pink'} />
                  <span className="font-semibold tracking-wide">{item.name}</span>
                  {isActive && (
                    <span className="ml-auto w-2 h-2 bg-girly-black rounded-full animate-pulse"></span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Bottom Section - Social Links */}
          <div className="mt-auto pt-6 border-t border-girly-purple/30">
            <div className="space-y-3">
              <a
                href="https://github.com/mousami-code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-girly-pink transition-colors group"
              >
                <FiGithub size={18} className="group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs">GitHub</span>
              </a>
              
              <div className="px-4 py-2 bg-girly-purple/10 rounded-lg border border-girly-purple/30">
                <p className="font-mono text-xs text-girly-lavender mb-1">Status:</p>
                <p className="font-mono text-xs text-girly-mint flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-girly-mint rounded-full animate-pulse"></span>
                  Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-girly-pink opacity-5 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-girly-purple opacity-5 blur-[80px] rounded-full"></div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-30"
        ></div>
      )}
    </>
  )
}

