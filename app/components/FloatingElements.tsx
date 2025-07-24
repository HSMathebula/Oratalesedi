"use client"

import { useEffect, useState } from "react"

export default function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cursor Follower */}
      <div
        className="absolute w-4 h-4 bg-blue-500/20 rounded-full blur-sm transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />

      {/* Floating Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-10"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + i * 8}%`,
            animation: `float ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <div
            className={`w-${4 + (i % 3) * 2} h-${4 + (i % 3) * 2} bg-gradient-to-br from-blue-500/30 to-purple-500/30 ${
              i % 3 === 0 ? "rounded-full" : i % 3 === 1 ? "rounded-lg" : "rotate-45"
            }`}
          />
        </div>
      ))}
    </div>
  )
}
