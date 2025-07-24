"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import DarkModeToggle from "./DarkModeToggle"

export default function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const handleScroll = () => setIsScrolled(window.scrollY > 50)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) return null

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 dark:bg-blue-950/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-blue-800/50" 
          : "bg-transparent"
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light text-white py-3 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+27 76 996 3322</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="font-medium">info@oratalesedi.co.za</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold border border-white/30">
              100% BWO • BBBEE Level 1
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="relative group">
              <Image
                src="/images/oratalesedi-logo.png"
                alt="Oratalesedi Trading & Projects"
                width={320}
                height={120}
                className="h-14 w-auto transition-all duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-bold text-lg transition-all duration-300
                  ${isScrolled 
                    ? "text-oratalesedi-black dark:text-white" 
                    : "text-oratalesedi-black dark:text-white drop-shadow-lg"
                  }
                  hover:text-oratalesedi-blue dark:hover:text-blue-300
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-oratalesedi-blue focus-visible:ring-offset-2
                  group
                `}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light rounded-full transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/quote">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-oratalesedi-blue text-oratalesedi-blue hover:bg-oratalesedi-blue hover:text-white transition-all duration-300 bg-white/90 backdrop-blur-sm font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Quote
              </Button>
            </Link>
            <Link href="/brochure">
              <Button
                size="lg"
                className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light text-white hover:from-oratalesedi-blue-dark hover:to-oratalesedi-blue shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold px-6 py-3 rounded-xl hover:scale-105"
              >
                Download Profile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled
                ? "text-oratalesedi-black hover:bg-gray-100 bg-white/80 backdrop-blur-sm shadow-lg"
                : "text-white hover:bg-white/10 bg-white/20 backdrop-blur-sm shadow-lg"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-200/20 bg-white/95 dark:bg-blue-950/95 backdrop-blur-xl rounded-b-2xl shadow-2xl mt-2">
            <nav className="flex flex-col space-y-4 pt-6 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-bold text-lg text-oratalesedi-black dark:text-blue-100 hover:text-oratalesedi-blue dark:hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-oratalesedi-blue focus-visible:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Link href="/quote">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-oratalesedi-blue text-oratalesedi-blue bg-transparent hover:bg-oratalesedi-blue hover:text-white font-semibold"
                  >
                    Get Quote
                  </Button>
                </Link>
                <Link href="/brochure">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light text-white font-semibold"
                  >
                    Download Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <DarkModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
