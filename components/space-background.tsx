"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  size: number
  color: string
  speed: number
}

export default function SpaceBackground({ theme }: { theme: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let stars: Star[] = []
    let mouseX = 0
    let mouseY = 0

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Track mouse movement for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.01
      mouseY = (e.clientY - window.innerHeight / 2) * 0.01
    }

    // Create stars
    const createStars = () => {
      stars = []
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 1000)

      for (let i = 0; i < starCount; i++) {
        const colors =
          theme === "dark"
            ? ["#ffffff", "#f3f3f3", "#d9d9ff", "#8a9cf9", "#ffd6e0", "#d68cff"]
            : ["#ffffff", "#f3f3f3", "#d9d9ff", "#8a9cf9", "#ffd6e0", "#d68cff"]

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.5 + 0.2,
        })
      }
    }

    // Draw a single star
    const drawStar = (star: Star) => {
      const x = star.x + mouseX * (star.z * 0.001)
      const y = star.y + mouseY * (star.z * 0.001)

      // Calculate size based on z-position (perspective)
      const scaledSize = (star.size * (1000 - star.z)) / 1000

      // Draw star with glow effect
      ctx.globalAlpha = (1000 - star.z) / 1000

      // Glow effect
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, scaledSize * 4)
      gradient.addColorStop(0, star.color)
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, scaledSize * 2, 0, Math.PI * 2)
      ctx.fill()

      // Core of the star
      ctx.fillStyle = star.color
      ctx.beginPath()
      ctx.arc(x, y, scaledSize, 0, Math.PI * 2)
      ctx.fill()

      // Occasional twinkle effect
      if (Math.random() > 0.99) {
        ctx.globalAlpha = Math.random() * 0.5 + 0.5
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(x, y, scaledSize * 1.5, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
    }

    // Draw nebula/cosmic cloud
    const drawNebula = () => {
      const nebulaCount = 3

      for (let i = 0; i < nebulaCount; i++) {
        const x = canvas.width / 2 + Math.cos(Date.now() * 0.0001 + i) * canvas.width * 0.3
        const y = canvas.height / 2 + Math.sin(Date.now() * 0.0001 + i) * canvas.height * 0.3

        const colors = [
          "rgba(138, 43, 226, 0.05)", // purple
          "rgba(75, 0, 130, 0.05)", // indigo
          "rgba(123, 104, 238, 0.05)", // blue
          "rgba(148, 0, 211, 0.05)", // violet
        ]

        // Create nebula
        const size = Math.min(canvas.width, canvas.height) * 0.5
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size)

        gradient.addColorStop(0, colors[i % colors.length])
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Draw shooting stars occasionally
    const drawShootingStar = () => {
      if (Math.random() > 0.99) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height * 0.5
        const length = Math.random() * 150 + 50
        const angle = (Math.random() * Math.PI) / 4 + Math.PI / 4

        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length)
        ctx.stroke()

        // Gradient for the trail
        const gradient = ctx.createLinearGradient(x, y, x + Math.cos(angle) * length, y + Math.sin(angle) * length)
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)")
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.strokeStyle = gradient
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length)
        ctx.stroke()
      }
    }

    // Update star positions
    const updateStars = () => {
      stars.forEach((star) => {
        // Move stars closer (z decreases)
        star.z -= star.speed

        // Reset stars that get too close
        if (star.z <= 0) {
          star.z = 1000
          star.x = Math.random() * canvas.width
          star.y = Math.random() * canvas.height
        }
      })
    }

    // Main animation function
    const animate = () => {
      // Create a dark background
      ctx.fillStyle = theme === "dark" ? "rgb(4, 6, 22)" : "rgb(8, 10, 40)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw cosmic elements
      drawNebula()

      // Draw all stars
      stars.forEach(drawStar)

      // Draw occasional shooting stars
      drawShootingStar()

      // Update star positions
      updateStars()

      // Continue animation
      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    window.addEventListener("resize", setCanvasSize)
    window.addEventListener("mousemove", handleMouseMove)
    setCanvasSize()
    createStars()
    animate()

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", setCanvasSize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme]) // Rerun effect when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{
        pointerEvents: "none",
      }}
    />
  )
}
