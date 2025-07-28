"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, FileText, MessageSquare, ArrowRight } from "lucide-react"

export default function Contact() {
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
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 relative bg-white dark:bg-blue-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4 drop-shadow">Contact Us</h2>
          <p className="text-xl text-black dark:text-blue-100 max-w-3xl mx-auto drop-shadow">
            Ready to discuss your next project? Get in touch with our team for expert consultation and competitive quotes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white dark:bg-blue-950/95 border border-gray-200 dark:border-blue-900 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-black dark:text-white drop-shadow">
                  <MapPin className="h-5 w-5 mr-2 text-oratalesedi-blue" />
                  Head Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-900 dark:text-blue-100 drop-shadow">
                  16 Lowe Street, Fransville
                  <br />
                  Emalahleni 1035
                  <br />
                  Mpumalanga Province
                  <br />
                  South Africa
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {/* Call Us Card */}
                  <div className="bg-white dark:bg-blue-950/95 rounded-2xl shadow-lg border border-gray-200 dark:border-blue-900 p-8 text-center flex flex-col items-center">
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                      <Phone className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Call Us</h3>
                    <p className="mb-2 text-base text-gray-700 dark:text-blue-100">Speak directly with our team</p>
                    <a href="tel:+27136560747" className="block text-lg font-bold text-blue-700 dark:text-blue-300 mb-4">+27 13 656 0747</a>
                                          <a href="tel:+27136560747" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-300">Call Now</a>
                  </div>
                  {/* Email Us Card */}
                  <div className="bg-white dark:bg-blue-950/95 rounded-2xl shadow-lg border border-gray-200 dark:border-blue-900 p-6 sm:p-8 text-center flex flex-col items-center min-w-0 max-w-xs mx-auto">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                      <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 leading-tight">Email Us</h3>
                    <p className="mb-1 sm:mb-2 text-sm sm:text-base text-gray-700 dark:text-blue-100 leading-snug">Send us a detailed message</p>
                    <a href="mailto:info@oratalesedi.co.za" className="block break-all text-base sm:text-lg font-bold text-blue-700 dark:text-blue-300 mb-2 sm:mb-4">info@oratalesedi.co.za</a>
                    <a href="mailto:info@oratalesedi.co.za" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow transition-colors duration-300 text-base sm:text-lg">Send Email</a>
                  </div>
                  {/* WhatsApp Card */}
                  <div className="bg-white dark:bg-blue-950/95 rounded-2xl shadow-lg border border-gray-200 dark:border-blue-900 p-8 text-center flex flex-col items-center">
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                      <MessageSquare className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
                    <p className="mb-2 text-base text-gray-700 dark:text-blue-100">Quick messaging support</p>
                    <a href="https://wa.me/27136560747" className="block text-lg font-bold text-blue-700 dark:text-blue-300 mb-4">+27 13 656 0747</a>
                    <a href="https://wa.me/27136560747" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-300">Message Us</a>
                  </div>
                </div>

            <Card className="bg-white dark:bg-blue-950/95 border border-gray-200 dark:border-blue-900 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-black dark:text-white drop-shadow">
                  <FileText className="h-5 w-5 mr-2 text-oratalesedi-blue" />
                  Company Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-900 dark:text-blue-100 drop-shadow">Registration:</span>
                  <span className="font-semibold text-black dark:text-white drop-shadow">2012/207614/07</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900 dark:text-blue-100 drop-shadow">CSD:</span>
                  <span className="font-semibold text-black dark:text-white drop-shadow">MAAA0174654</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900 dark:text-blue-100 drop-shadow">VAT:</span>
                  <span className="font-semibold text-black dark:text-white drop-shadow">4210274264</span>
                </div>
              </CardContent>
            </Card>

            <div className="bg-oratalesedi-black dark:bg-blue-950/95 border border-gray-200 dark:border-blue-900 p-6 rounded-2xl text-white shadow-lg">
              <h3 className="text-lg font-semibold mb-4 drop-shadow">Quick Actions</h3>
              <div className="space-y-3">
                <a href="/company-brochure.pdf.pdf" download className="w-full block">
                  <Button className="w-full bg-oratalesedi-blue text-white hover:bg-oratalesedi-blue-dark focus:outline-2 focus:outline-blue-600 drop-shadow">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Company Profile
                  </Button>
                </a>
                <Link href="/quote#quote-form">
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-oratalesedi-black bg-transparent focus:outline-2 focus:outline-blue-600 drop-shadow"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Request Detailed Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-white dark:bg-blue-950/95">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold text-black dark:text-white drop-shadow">Send us a Message</CardTitle>
              <CardDescription className="text-lg text-gray-900 dark:text-blue-100 drop-shadow">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-blue-100 mb-2 drop-shadow">
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-blue-100 mb-2 drop-shadow">
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
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 dark:text-blue-100 mb-2 drop-shadow">
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-blue-100 mb-2 drop-shadow">
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
                  <label htmlFor="service" className="block text-sm font-medium text-gray-900 dark:text-blue-100 mb-2 drop-shadow">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-oratalesedi-blue h-12 text-lg"
                  >
                    <option value="">Select a service</option>
                    <option value="mechanical">Mechanical Engineering</option>
                    <option value="civil">Civil Engineering</option>
                    <option value="industrial">Industrial Cleaning</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="consultation">General Consultation</option>
                    <option value="renewable">Renewable Energy</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-blue-100 mb-2 drop-shadow">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project requirements, timeline, and any specific details..."
                    rows={5}
                    className="h-32 text-lg border-2 border-gray-200 focus:border-oratalesedi-blue rounded-xl transition-all duration-300"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light text-white hover:from-oratalesedi-blue-dark hover:to-oratalesedi-blue font-bold text-lg py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-2 focus:outline-blue-600 drop-shadow"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              {/* Map Section */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Find Our Office</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Visit us at our head office in Emalahleni, Mpumalanga
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Map */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.1234567890123!2d29.12345678901234!3d-25.87654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDUyJzM1LjYiUyAyOcKwMDcnMzQuNiJF!5e0!3m2!1sen!2sza!4v1234567890123"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        title="Oratalesedi Office Location"
                      ></iframe>
                    </div>
                  </div>

                  {/* Getting Here Info */}
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Getting Here</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-medium">By Car:</span> Take N12 highway towards Witbank/Emalahleni. Exit at Lowe Street.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-medium">Parking:</span> Free on-site parking available.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
