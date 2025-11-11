'use client'

export default function GamingEffects() {
  return (
    <>
      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 107, 157, 0.1) 2px, rgba(255, 107, 157, 0.1) 4px)',
            animation: 'scanline 8s linear infinite'
          }}
        ></div>
      </div>

      {/* Corner UI Elements */}
      <div className="fixed top-4 left-4 z-40 pointer-events-none hidden md:block">
        <div className="relative">
          {/* Top-left corner decoration */}
          <div className="w-20 h-20 border-t-4 border-l-4 border-girly-pink animate-pulse"></div>
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-girly-pink rounded-full shadow-[0_0_10px_rgba(255,107,157,0.8)]"></div>
        </div>
      </div>

      <div className="fixed top-4 right-4 z-40 pointer-events-none hidden md:block">
        <div className="relative">
          {/* Top-right corner decoration */}
          <div className="w-20 h-20 border-t-4 border-r-4 border-girly-purple animate-pulse"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-girly-purple rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 z-40 pointer-events-none hidden md:block">
        <div className="relative">
          {/* Bottom-left corner decoration */}
          <div className="w-20 h-20 border-b-4 border-l-4 border-girly-lavender animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-girly-lavender rounded-full shadow-[0_0_10px_rgba(224,179,255,0.8)]"></div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-40 pointer-events-none hidden md:block">
        <div className="relative">
          {/* Bottom-right corner decoration */}
          <div className="w-20 h-20 border-b-4 border-r-4 border-girly-mint animate-pulse"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-girly-mint rounded-full shadow-[0_0_10px_rgba(180,248,200,0.8)]"></div>
        </div>
      </div>

      {/* Holographic Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div 
          className="w-full h-full perspective-1000"
          style={{
            background: `
              linear-gradient(90deg, transparent 0%, rgba(255, 107, 157, 0.1) 50%, transparent 100%),
              linear-gradient(0deg, transparent 0%, rgba(192, 132, 252, 0.1) 50%, transparent 100%)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>
      </div>

      {/* Vignette Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(26, 22, 37, 0.3) 100%)'
        }}
      ></div>

      {/* Animated Border Glow */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-girly-pink to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-girly-purple to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-girly-lavender to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-girly-mint to-transparent animate-pulse"></div>
      </div>

      {/* Floating HUD Elements */}
      <div className="fixed top-20 right-8 z-40 pointer-events-none hidden lg:block">
        <div className="relative p-4 border border-girly-pink/50 bg-girly-dark/30 backdrop-blur-sm">
          <div className="text-xs font-mono text-girly-pink mb-1">SYSTEM STATUS</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-girly-mint rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-girly-mint">ONLINE</span>
          </div>
          <div className="mt-2 text-xs font-mono text-gray-400">
            <div>FPS: 60</div>
            <div>PING: 12ms</div>
          </div>
          
          {/* Animated bars */}
          <div className="mt-2 space-y-1">
            <div className="h-1 bg-girly-black overflow-hidden">
              <div className="h-full bg-girly-pink animate-pulse" style={{width: '80%'}}></div>
            </div>
            <div className="h-1 bg-girly-black overflow-hidden">
              <div className="h-full bg-girly-purple animate-pulse" style={{width: '95%'}}></div>
            </div>
            <div className="h-1 bg-girly-black overflow-hidden">
              <div className="h-full bg-girly-lavender animate-pulse" style={{width: '70%'}}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes gridMove {
          0% { transform: perspective(1000px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(1000px) rotateX(60deg) translateY(50px); }
        }
      `}</style>
    </>
  )
}

