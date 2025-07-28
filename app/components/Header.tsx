"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white sticky top-0 z-50 shadow-2xl backdrop-blur-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-3 border-b border-blue-500/20">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+27 13 656 0747</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@oratalesedi.co.za</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="bg-blue-500 text-black px-2 py-1 rounded text-xs font-semibold">
              BBBEE Level 1 - 100% BWO
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src="/images/oratalesedi-logo.png"
              alt="Oratalesedi Trading & Projects"
              width={320}
              height={120}
              className="h-20 w-auto brightness-110 contrast-125"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative hover:text-blue-400 transition-all duration-300 font-medium text-lg group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex space-x-4">
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black bg-transparent"
            >
              Request Quote
            </Button>
            <Button className="bg-blue-500 text-black hover:bg-blue-600">Download Profile</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-blue-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-blue-500 text-blue-500 bg-transparent">
                  Request Quote
                </Button>
                <Button className="bg-blue-500 text-black hover:bg-blue-600">Download Profile</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
