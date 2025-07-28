"use client"

import React from "react"
import { useState } from "react"
import { Building, Settings, Zap, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ModernServices() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 0,
      category: "Mining Services",
      icon: Settings,
      color: "blue",
      href: "/services/mining",
      description: "Comprehensive mining solutions for optimal operational efficiency",
      services: [
        "Underground & Above ground Belt Conveyor Cleaning",
        "Mining Equipment Maintenance & Repair",
        "Industrial Cleaning & Maintenance Services",
        "HP Jetting and ACC Fins Cleaning",
        "Equipment Installation & Commissioning",
      ],
      features: ["24/7 Support", "Certified Technicians", "Safety Compliant", "Cost Effective"],
    },
    {
      id: 1,
      category: "Construction",
      icon: Building,
      color: "blue-light",
      href: "/services/construction",
      description: "Modern construction solutions with sustainable practices",
      services: [
        "Civil Engineering Projects",
        "Building Maintenance & Renovation",
        "Wastewater Treatment Infrastructure",
        "Construction Project Management",
        "Structural Engineering Solutions",
      ],
      features: ["CIDB Grade 4", "Project Management", "Quality Assured", "Timely Delivery"],
    },
    {
      id: 2,
      category: "Renewable Energy",
      icon: Zap,
      color: "blue-dark",
      href: "/services/renewable-energy",
      description: "Leading the future with clean energy solutions",
      services: [
        "Solar Energy System Design & Installation",
        "Renewable Energy Infrastructure Development",
        "Energy Efficiency Consulting",
        "Sustainable Technology Implementation",
        "Grid Integration Solutions",
      ],
      features: ["Green Technology", "Energy Savings", "Sustainable", "Future Ready"],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-oratalesedi-blue to-oratalesedi-blue-light",
        text: "text-oratalesedi-blue",
        border: "border-blue-200",
        light: "bg-blue-50",
      },
      "blue-light": {
        bg: "from-oratalesedi-blue-light to-blue-400",
        text: "text-oratalesedi-blue-light",
        border: "border-blue-300",
        light: "bg-blue-100",
      },
      "blue-dark": {
        bg: "from-oratalesedi-blue-dark to-oratalesedi-blue",
        text: "text-oratalesedi-blue-dark",
        border: "border-blue-800",
        light: "bg-blue-900/10",
      },
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="services" className="py-24 relative bg-white dark:bg-blue-950">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-blue-200 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-oratalesedi-blue rounded-full"></div>
            <span className="text-sm font-medium text-oratalesedi-blue">Our Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-black dark:text-white mb-6 drop-shadow">
            Comprehensive
            <span className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light bg-clip-text text-transparent dark:from-blue-200 dark:to-blue-400">
              {" "}
              Solutions
            </span>
          </h2>
          <p className="text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed drop-shadow">
            From mining operations to renewable energy, we deliver excellence across multiple industries with innovative
            solutions and proven expertise.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 focus:outline-2 focus:outline-blue-600 ${
                activeService === index
                  ? `bg-gradient-to-r ${getColorClasses(service.color).bg} text-white shadow-lg`
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              <service.icon className="h-5 w-5" />
              <span>{service.category}</span>
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4 drop-shadow">{services[activeService].category}</h3>
              <p className="text-lg text-gray-900 dark:text-blue-100 leading-relaxed mb-8 drop-shadow">
                {services[activeService].description}
              </p>
            </div>

            {/* Service List */}
            <div className="space-y-4">
              {services[activeService].services.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${getColorClasses(services[activeService].color).bg} flex items-center justify-center mt-0.5`}
                  >
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-black dark:text-white font-medium group-hover:text-oratalesedi-blue dark:group-hover:text-blue-400 transition-colors duration-200 drop-shadow">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {services[activeService].features.map((feature, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 bg-white dark:bg-blue-950/90 text-black dark:text-white rounded-full text-sm font-medium border ${getColorClasses(services[activeService].color).border}`}
                >
                  {feature}
                </span>
              ))}
            </div>

            <Link href={services[activeService].href}>
              <Button
                size="lg"
                className={`bg-gradient-to-r ${getColorClasses(services[activeService].color).bg} text-white hover:shadow-xl transition-all duration-300 group focus:outline-2 focus:outline-blue-600 drop-shadow mt-6`}
              >
                Learn More About {services[activeService].category}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* Service Visual */}
          <div className="relative">
            <Card className="bg-white dark:bg-blue-950/90 backdrop-blur-xl border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${getColorClasses(services[activeService].color).bg} rounded-2xl shadow-lg`}
                  >
                    {React.createElement(services[activeService].icon, {
                      className: "h-10 w-10 text-white",
                    })}
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-black dark:text-white mb-2 drop-shadow">
                      {services[activeService].category}
                    </h4>
                    <p className="text-gray-900 dark:text-blue-100 drop-shadow">Professional services tailored to your specific requirements</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black dark:text-white drop-shadow">100%</div>
                      <div className="text-sm text-gray-900 dark:text-blue-100 drop-shadow">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black dark:text-white drop-shadow">24/7</div>
                      <div className="text-sm text-gray-900 dark:text-blue-100 drop-shadow">Support</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
