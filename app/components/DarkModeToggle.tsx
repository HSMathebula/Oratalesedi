"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null // Avoid hydration mismatch

  const isDark = resolvedTheme === "dark"

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        border: isDark ? "2px solid #fff" : "2px solid #0a1e27",
        background: isDark ? "#0a1e27" : "#fff",
        color: isDark ? "#fff" : "#0a1e27",
        fontWeight: 600,
        fontSize: "1rem",
        cursor: "pointer",
        boxShadow: isDark ? "0 2px 8px rgba(10,30,39,0.15)" : "0 2px 8px rgba(0,0,0,0.08)",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        marginLeft: "1rem"
      }}
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
} 