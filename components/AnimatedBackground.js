'use client'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-girly-pink opacity-20 blur-[120px] rounded-full animate-float"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-girly-purple opacity-15 blur-[100px] rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-girly-lavender opacity-10 blur-[130px] rounded-full animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-girly-mint opacity-10 blur-[110px] rounded-full animate-float"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255, 107, 157, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255, 107, 157, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-girly-black/50 to-girly-black"></div>
    </div>
  )
}

