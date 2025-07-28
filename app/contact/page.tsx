"use client"

import type React from "react"
import { useState } from "react"
import ModernHeader from "../components/ModernHeader"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, FileText, MessageSquare, ArrowRight, Building, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const offices = [
    {
      name: "Head Office - Emalahleni",
      address: "16 Lowe Street, Fransville, Emalahleni 1035, Mpumalanga Province, South Africa",
      phone: "+27 76 996 3322",
      email: "info@oratalesedi.co.za",
      type: "primary",
    },
    {
      name: "Middelburg Office",
      address: "Mining District, Middelburg, Mpumalanga Province, South Africa",
      phone: "+27 76 996 3322",
      email: "middelburg@oratalesedi.co.za",
      type: "secondary",
    },
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+27 76 996 3322",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      contact: "info@oratalesedi.co.za",
      action: "Send Email",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick messaging support",
      contact: "+27 76 996 3322",
      action: "Message Us",
    },
  ]

  return (
    <main className="min-h-screen">
      <ModernHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative" style={{
        backgroundImage: `url('/images/oratalesedi-hero-img.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/40 dark:bg-blue-950/80 pointer-events-none transition-colors duration-500"></div>
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
            background: 'linear-gradient(to top,rgb(23, 37, 84) 15%, rgba(23,36,79,0) 50%)'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-oratalesedi-blue rounded-full"></div>
              <span className="text-sm font-medium text-oratalesedi-blue dark:text-blue-400">Contact Us</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-black dark:text-white mb-6 drop-shadow">
              Get In
              <span className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light bg-clip-text text-transparent">
                {" "}
                Touch
              </span>
              <br />
              <span className="text-3xl lg:text-4xl">With Our Team</span>
            </h1>
            <p className="text-xl text-black dark:text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Ready to discuss your next project? Get in touch with our team for expert consultation and competitive
              quotes across South Africa.
            </p>
          </div>

          {/* Quick Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">{method.title}</h3>
                  <p className="text-gray-700 dark:text-blue-200 text-sm mb-3">{method.description}</p>
                  <p className="text-oratalesedi-blue font-semibold mb-4">{method.contact}</p>
                  <Button size="sm" className="bg-oratalesedi-blue text-white hover:bg-oratalesedi-blue-dark">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white dark:bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Our Offices</h2>
                <p className="text-gray-800 dark:text-blue-100 mb-8">
                  Strategically located in the heart of South Africa's mining region to better serve our clients.
                </p>
              </div>

              {offices.map((office, index) => (
                <Card key={index} className={`${office.type === "primary" ? "border-oratalesedi-blue border-2" : ""}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="h-5 w-5 mr-2 text-oratalesedi-blue" />
                      {office.name}
                      {office.type === "primary" && (
                        <span className="ml-2 bg-oratalesedi-blue text-white px-2 py-1 rounded-full text-xs">
                          Primary
                        </span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-1" />
                        <span className="text-gray-700 dark:text-blue-200">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="text-gray-700 dark:text-blue-200">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="text-gray-700 dark:text-blue-200">{office.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-oratalesedi-blue" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-blue-200">Monday - Friday:</span>
                      <span className="font-semibold text-black dark:text-white">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-blue-200">Saturday:</span>
                      <span className="font-semibold text-black dark:text-white">8:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-blue-200">Sunday:</span>
                      <span className="font-semibold text-black dark:text-white">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-blue-200">Emergency:</span>
                      <span className="font-semibold text-oratalesedi-blue dark:text-blue-400">24/7 Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-oratalesedi-blue" />
                    Company Registration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-blue-200">Registration:</span>
                    <span className="font-semibold text-black dark:text-white">2012/207614/07</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-blue-200">CSD:</span>
                    <span className="font-semibold text-black dark:text-white">MAAA0174654</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-blue-200">VAT:</span>
                    <span className="font-semibold text-black dark:text-white">4210274264</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-blue-200">CIDB Grade:</span>
                    <span className="font-semibold text-oratalesedi-blue dark:text-blue-400">Level 4</span>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-oratalesedi-black dark:bg-blue-950 p-6 rounded-2xl text-white">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-oratalesedi-blue text-white hover:bg-oratalesedi-blue-dark">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Company Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-oratalesedi-black bg-transparent"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Schedule Site Visit
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-2xl border-0 bg-white dark:bg-blue-950/90">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold text-black dark:text-white">Send us a Message</CardTitle>
                <CardDescription className="text-lg text-gray-700 dark:text-blue-200">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="h-12 text-lg border-2 border-gray-200 focus:border-oratalesedi-blue rounded-xl transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        className="h-12 text-lg border-2 border-gray-200 focus:border-oratalesedi-blue rounded-xl transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="h-12 text-lg border-2 border-gray-200 focus:border-oratalesedi-blue rounded-xl transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+27 XX XXX XXXX"
                        className="h-12 text-lg border-2 border-gray-200 focus:border-oratalesedi-blue rounded-xl transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-oratalesedi-blue h-12 text-lg transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="mining">Mining Services</option>
                      <option value="construction">Construction & Civil Engineering</option>
                      <option value="renewable">Renewable Energy</option>
                      <option value="industrial">Industrial Cleaning</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your project requirements, timeline, location in South Africa, and any specific details..."
                      rows={6}
                      className="text-lg border-2 border-gray-200 focus:border-oratalesedi-blue rounded-xl transition-all duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light text-white hover:from-oratalesedi-blue-dark hover:to-oratalesedi-blue font-bold text-lg py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
