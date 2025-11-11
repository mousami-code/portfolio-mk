import { Orbitron } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata = {
  title: 'Mousami Kalidindi | Wasteland Engineer',
  description: 'Full-stack cloud engineer specializing in distributed systems, microservices, and infrastructure automation',
  keywords: 'DevOps, Cloud Engineer, Full-Stack Developer, AWS, Azure, Java, Python, Node.js',
}

import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import VisitorCounter from '../components/VisitorCounter'
import AnimatedBackground from '../components/AnimatedBackground'
import MagicalEffects from '../components/MagicalEffects'
import MatrixRain from '../components/MatrixRain'
import GamingEffects from '../components/GamingEffects'
import InteractiveParticles from '../components/InteractiveParticles'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className={`${orbitron.variable} bg-girly-black text-gray-100 antialiased overflow-x-hidden relative`}>
        <AnimatedBackground />
        <MatrixRain />
        <MagicalEffects />
        <InteractiveParticles />
        <GamingEffects />
        <VisitorCounter />
        <Sidebar />
        <main className="md:ml-72 min-h-screen relative z-20">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

