"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Award, Users, Calendar, Zap, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import StorySlideshow from "./StorySlideshow"

export default function ModernHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false)

  const slides = [
    {
      title: "Engineering Excellence",
      subtitle: "Mining & Construction Solutions",
      description: "Delivering world-class engineering services across South Africa's mining and construction sectors.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Renewable Energy",
      subtitle: "Sustainable Future Solutions",
      description: "Leading the transition to clean energy with innovative solar and renewable technology projects.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Industrial Innovation",
      subtitle: "Advanced Technology Integration",
      description: "Transforming industries with cutting-edge technology and sustainable engineering practices.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const services = [
    {
      name: "Mining Services",
      href: "/services/mining",
      description: "Comprehensive mining solutions and maintenance",
    },
    {
      name: "Construction Services",
      href: "/services/construction",
      description: "Civil engineering and construction projects",
    },
    {
      name: "Renewable Energy",
      href: "/services/renewable-energy",
      description: "Solar and sustainable energy solutions",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32"
      style={{
        backgroundImage: `url('/images/oratalesedi-hero-img.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/0 dark:bg-blue-900/30 pointer-events-none transition-colors duration-500"></div>
      {/* Bottom gradient for light mode only */}
      <div
        className="absolute bottom-0 left-0 w-full h-48 dark:hidden pointer-events-none"
        style={{
          background: 'linear-gradient(to top, white 10%, rgba(255, 255, 255, 0) 45%)'
        }}
      ></div>
      {/* Bottom gradient for dark mode only */}
      <div
        className="absolute bottom-0 left-0 w-full h-48 hidden dark:block pointer-events-none"
        style={{
          background: 'linear-gradient(to top,rgb(22, 37, 84) 15%, rgba(23,36,79,0) 50%)'
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-blue-900/60 backdrop-blur-sm border border-oratalesedi-blue/30 dark:border-blue-400/30 rounded-full px-6 py-3 shadow-lg dark:shadow-colored">
              <div className="w-2 h-2 bg-oratalesedi-blue dark:bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-oratalesedi-blue dark:text-white">100% Black Woman Owned • BBBEE Level 1</span>
            </div>
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-black dark:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <span className="bg-gradient-to-r from-oratalesedi-black via-oratalesedi-blue to-oratalesedi-blue-light bg-clip-text text-transparent dark:from-blue-200 dark:via-blue-400 dark:to-blue-600 dark:drop-shadow-[0_0_16px_rgba(59,130,246,0.4)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                  {slides[currentSlide].title}
                </span>
                <br />
                <span className="text-3xl lg:text-3xl font-bold text-oratalesedi-blue dark:text-blue-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                {slides[currentSlide].description}
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light text-white hover:from-oratalesedi-blue-dark hover:to-oratalesedi-blue shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-2 focus:outline-blue-600"
                  >
                    Explore Our Services
                    <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 bg-white dark:bg-blue-950 border border-gray-200 dark:border-blue-800 shadow-xl rounded-xl">
                  {services.map((service, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link
                        href={service.href}
                        className="flex flex-col items-center text-center p-4 hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-lg transition-colors duration-200 cursor-pointer"
                      >
                        <div className="font-semibold text-black dark:text-white mb-1">
                          {service.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-blue-200">
                          {service.description}
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsSlideshowOpen(true)}
                className="group border-2 border-oratalesedi-blue dark:border-blue-400 text-oratalesedi-blue dark:text-blue-400 hover:bg-oratalesedi-blue hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 bg-white/90 dark:bg-blue-900/60 focus:outline-2 focus:outline-blue-600"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { icon: Calendar, value: "12+", label: "Years" },
                { icon: Award, value: "150+", label: "Projects" },
                { icon: Users, value: "80+", label: "Team" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl mb-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-700 transition-colors duration-300 shadow-modern dark:shadow-colored">
                    <stat.icon className="h-6 w-6 text-oratalesedi-blue dark:text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-blue-100 dark:text-blue-200">{stat.value}</div>
                  <div className="text-sm text-blue-100 dark:text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Visual Content */}
          <div className="relative">
            <Card className="bg-white/90 dark:bg-blue-950/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 dark:border-blue-400/30">
              <CardContent>
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-black dark:text-blue-100">Company Overview</h3>
                    <div className="flex space-x-2">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide ? "bg-oratalesedi-blue w-8" : "bg-gray-300"
                          } focus:outline-2 focus:outline-blue-600`}
                          onClick={() => setCurrentSlide(index)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Registration", value: "2012/207614/07" },
                      { label: "CSD Number", value: "MAAA0174654" },
                      { label: "VAT Number", value: "4210274264" },
                      { label: "CIDB Grade", value: "Level 4" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-gray-800 dark:text-blue-200 font-medium">{item.label}</span>
                        <span className="text-oratalesedi-blue dark:text-blue-400 font-bold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-950 rounded-2xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-oratalesedi-blue dark:bg-blue-400 rounded-full flex items-center justify-center shadow-modern dark:shadow-colored">
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-blue-100">ISO Certified</h4>
                        <p className="text-sm text-gray-800 dark:text-blue-200">9001, 14001, 45001 Standards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Story Slideshow */}
      <StorySlideshow 
        isOpen={isSlideshowOpen} 
        onClose={() => setIsSlideshowOpen(false)} 
      />
    </section>
  )
}
