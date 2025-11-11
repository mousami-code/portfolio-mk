'use client'

import { useEffect, useRef } from 'react'

export default function MagicalEffects() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let effects = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Floating Hearts
    class Heart {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + 30
        this.size = Math.random() * 20 + 10
        this.speedY = -(Math.random() * 1.5 + 0.5)
        this.speedX = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.3 + 0.2
        this.rotation = Math.random() * 360
        this.rotationSpeed = (Math.random() - 0.5) * 2
      }

      update() {
        this.y += this.speedY
        this.x += this.speedX
        this.rotation += this.rotationSpeed

        if (this.y < -30 || this.x < -30 || this.x > canvas.width + 30) {
          this.reset()
        }
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate((this.rotation * Math.PI) / 180)
        ctx.globalAlpha = this.opacity

        // Draw heart shape
        ctx.fillStyle = '#ff6b9d'
        ctx.beginPath()
        const topCurveHeight = this.size * 0.3
        ctx.moveTo(0, topCurveHeight)
        // Top left curve
        ctx.bezierCurveTo(
          0, 0,
          -this.size / 2, 0,
          -this.size / 2, topCurveHeight
        )
        // Bottom left curve
        ctx.bezierCurveTo(
          -this.size / 2, (this.size + topCurveHeight) / 2,
          0, (this.size + topCurveHeight) / 1.3,
          0, this.size
        )
        // Bottom right curve
        ctx.bezierCurveTo(
          0, (this.size + topCurveHeight) / 1.3,
          this.size / 2, (this.size + topCurveHeight) / 2,
          this.size / 2, topCurveHeight
        )
        // Top right curve
        ctx.bezierCurveTo(
          this.size / 2, 0,
          0, 0,
          0, topCurveHeight
        )
        ctx.fill()
        ctx.restore()
      }
    }

    // Sparkles
    class Sparkle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 2
        this.speedY = (Math.random() - 0.5) * 2
        this.life = 100
        this.maxLife = 100
        this.twinkle = Math.random() * Math.PI * 2
        this.twinkleSpeed = 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life -= 0.5
        this.twinkle += this.twinkleSpeed

        if (this.life <= 0) {
          this.reset()
        }
      }

      draw() {
        const opacity = (this.life / this.maxLife) * (Math.sin(this.twinkle) * 0.5 + 0.5)
        ctx.globalAlpha = opacity

        // Draw sparkle as a star
        ctx.fillStyle = '#e0b3ff'
        ctx.save()
        ctx.translate(this.x, this.y)
        
        // Four-pointed star
        ctx.beginPath()
        for (let i = 0; i < 4; i++) {
          ctx.lineTo(0, -this.size)
          ctx.rotate(Math.PI / 4)
          ctx.lineTo(0, -this.size / 2)
          ctx.rotate(Math.PI / 4)
        }
        ctx.closePath()
        ctx.fill()

        // Add glow
        ctx.globalAlpha = opacity * 0.3
        ctx.beginPath()
        ctx.arc(0, 0, this.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = '#c084fc'
        ctx.fill()
        
        ctx.restore()
      }
    }

    // Shooting Stars
    class ShootingStar {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height / 2
        this.length = Math.random() * 80 + 40
        this.speed = Math.random() * 10 + 5
        this.angle = Math.PI / 4
        this.life = 100
        this.maxLife = 100
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed
        this.life -= 2

        if (this.life <= 0 || this.x > canvas.width || this.y > canvas.height) {
          // Don't reset immediately, wait random time
          if (Math.random() < 0.01) {
            this.reset()
          }
        }
      }

      draw() {
        if (this.life <= 0) return

        const opacity = this.life / this.maxLife
        ctx.globalAlpha = opacity

        const gradient = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        )
        gradient.addColorStop(0, '#ff89c2')
        gradient.addColorStop(0.5, '#c084fc')
        gradient.addColorStop(1, 'transparent')

        ctx.strokeStyle = gradient
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        )
        ctx.stroke()

        // Add glow
        ctx.globalAlpha = opacity * 0.5
        ctx.strokeStyle = '#ffd6e8'
        ctx.lineWidth = 6
        ctx.stroke()
      }
    }

    // Create effects
    for (let i = 0; i < 15; i++) {
      effects.push(new Heart())
    }
    for (let i = 0; i < 50; i++) {
      effects.push(new Sparkle())
    }
    for (let i = 0; i < 3; i++) {
      effects.push(new ShootingStar())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      effects.forEach(effect => {
        effect.update()
        effect.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}

