"use client"

import type React from "react"

import { useState } from "react"
import ModernHeader from "../components/ModernHeader"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, FileText, Clock, CheckCircle, ArrowRight, Building, Settings, Zap } from "lucide-react"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    projectType: "",
    projectScope: "",
    timeline: "",
    budget: "",
    company: "",
    contactPerson: "",
    email: "",
    phone: "",
    location: "",
    description: "",
    urgency: "standard",
  })

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote request submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const serviceTypes = [
    {
      id: "mining",
      name: "Mining Services",
      icon: Settings,
      description: "Underground & Above ground Belt Conveyor Cleaning, Mining Equipment Maintenance",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "construction",
      name: "Construction",
      icon: Building,
      description: "Civil Engineering Projects, Building Maintenance, Infrastructure Development",
      color: "from-green-500 to-green-600",
    },
    {
      id: "renewable",
      name: "Renewable Energy",
      icon: Zap,
      description: "Solar Energy Solutions, Renewable Energy Infrastructure, Energy Efficiency",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const budgetRanges = [
    "R100,000 - R500,000",
    "R500,000 - R1,000,000",
    "R1,000,000 - R5,000,000",
    "R5,000,000 - R10,000,000",
    "R10,000,000+",
    "To be discussed",
  ]

  return (
    <main className="min-h-screen">
      <ModernHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 rounded-full px-6 py-2 mb-6">
              <Calculator className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Request Quote</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-black dark:text-white mb-6">
              Get Your
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Project Quote
              </span>
              <br />
              <span className="text-3xl lg:text-4xl">In 3 Simple Steps</span>
            </h1>
            <p className="text-xl text-gray-800 dark:text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Tell us about your project requirements and receive a detailed, competitive quote within 24 hours from our
              expert team.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                      step <= currentStep
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step < currentStep ? <CheckCircle className="h-6 w-6" /> : step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`flex-1 h-2 mx-4 rounded-full transition-all duration-300 ${
                        step < currentStep ? "bg-gradient-to-r from-blue-500 to-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm font-medium">
              <span className={currentStep >= 1 ? "text-blue-600" : "text-gray-500"}>Project Details</span>
              <span className={currentStep >= 2 ? "text-blue-600" : "text-gray-500"}>Company Info</span>
              <span className={currentStep >= 3 ? "text-blue-600" : "text-gray-500"}>Review & Submit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-20 bg-white dark:bg-blue-950">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white dark:bg-blue-950/90">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-black dark:text-white">
                Step {currentStep} of {totalSteps}
              </CardTitle>
              <CardDescription className="text-lg text-gray-700 dark:text-blue-200">
                {currentStep === 1 && "Tell us about your project requirements"}
                {currentStep === 2 && "Provide your company and contact information"}
                {currentStep === 3 && "Review your information and submit your request"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Project Details */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-6">
                        What type of service do you need?
                      </label>
                      <div className="grid md:grid-cols-3 gap-6">
                        {serviceTypes.map((service) => (
                          <div
                            key={service.id}
                            className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                              formData.projectType === service.id
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/50 shadow-lg"
                                : "border-gray-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600"
                            }`}
                            onClick={() => setFormData({ ...formData, projectType: service.id })}
                          >
                            <div className={`bg-gradient-to-r ${service.color} p-4 rounded-lg w-fit mb-4`}>
                              <service.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-black dark:text-white mb-2">{service.name}</h3>
                            <p className="text-gray-700 dark:text-blue-200 text-sm">{service.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectScope" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                          Project Scope
                        </label>
                        <select
                          id="projectScope"
                          name="projectScope"
                          value={formData.projectScope}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                        >
                          <option value="">Select project scope</option>
                          <option value="small">Small Scale (Local/Regional)</option>
                          <option value="medium">Medium Scale (Provincial)</option>
                          <option value="large">Large Scale (National)</option>
                          <option value="enterprise">Enterprise Level</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                          Expected Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (Within 1 month)</option>
                          <option value="short">Short term (1-3 months)</option>
                          <option value="medium">Medium term (3-6 months)</option>
                          <option value="long">Long term (6+ months)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                        Estimated Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                        Project Description
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Please provide detailed information about your project requirements, specific needs, and any special considerations..."
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Company Information */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                          Company Name *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>

                      <div>
                        <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                          Contact Person *
                        </label>
                        <Input
                          id="contactPerson"
                          name="contactPerson"
                          type="text"
                          required
                          value={formData.contactPerson}
                          onChange={handleChange}
                          placeholder="Full name"
                          className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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
                          className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+27 XX XXX XXXX"
                          className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                        Project Location
                      </label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, Province, South Africa"
                        className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                        Quote Urgency
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                      >
                        <option value="standard">Standard (24-48 hours)</option>
                        <option value="urgent">Urgent (Within 24 hours)</option>
                        <option value="asap">ASAP (Same day if possible)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3: Review */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div className="bg-gray-50 dark:bg-blue-900/50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-4">Review Your Quote Request</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-700 dark:text-blue-200 mb-2">Project Information</h4>
                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-medium text-gray-800 dark:text-blue-100">Service Type:</span>{" "}
                              <span className="text-gray-700 dark:text-blue-200">{serviceTypes.find((s) => s.id === formData.projectType)?.name || "Not selected"}</span>
                            </p>
                            <p>
                              <span className="font-medium text-gray-800 dark:text-blue-100">Scope:</span>{" "}
                              <span className="text-gray-700 dark:text-blue-200">{formData.projectScope || "Not specified"}</span>
                            </p>
                            <p>
                              <span className="font-medium text-gray-800 dark:text-blue-100">Timeline:</span>{" "}
                              <span className="text-gray-700 dark:text-blue-200">{formData.timeline || "Not specified"}</span>
                            </p>
                            <p>
                              <span className="font-medium text-gray-800 dark:text-blue-100">Budget:</span>{" "}
                              <span className="text-gray-700 dark:text-blue-200">{formData.budget || "Not specified"}</span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 dark:text-blue-200 mb-2">Contact Information</h4>
                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-medium text-gray-800 dark:text-blue-100">Company:</span>{" "}
                              <span className="text-gray-700 dark:text-blue-200">{formData.company || "Not provided"}</span>
                            </p>
                            <p>
                              <span className="font-medium text-gray-800 dark:text-blue-100">Contact:</span>{" "}
                              <span className="text-gray-700 dark:text-blue-200">{formData.contactPerson || "Not provided"}</span>
                            </p>
                            <p>
                              <span className="font-medium text-gray-800 dark:text-blue-100">Email:</span>{" "}
                              <span className="text-gray-700 dark:text-blue-200">{formData.email || "Not provided"}</span>
                            </p>
                            <p>
                              <span className="font-medium text-gray-800 dark:text-blue-100">Phone:</span>{" "}
                              <span className="text-gray-700 dark:text-blue-200">{formData.phone || "Not provided"}</span>
                            </p>
                            <p>
                              <span className="font-medium text-gray-800 dark:text-blue-100">Location:</span>{" "}
                              <span className="text-gray-700 dark:text-blue-200">{formData.location || "Not specified"}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      {formData.description && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-700 dark:text-blue-200 mb-2">Project Description</h4>
                          <p className="text-sm text-gray-700 dark:text-blue-200 bg-white dark:bg-blue-900 p-3 rounded-lg">{formData.description}</p>
                        </div>
                      )}
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">What happens next?</h4>
                          <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                            <li>• Our team will review your requirements within 2 hours</li>
                            <li>• You'll receive a detailed quote within 24-48 hours</li>
                            <li>• We'll schedule a consultation call to discuss your project</li>
                            <li>• Upon approval, we'll begin project planning immediately</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="px-8 py-3 text-lg bg-transparent"
                  >
                    Previous
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 px-8 py-3 text-lg"
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 px-8 py-3 text-lg"
                    >
                      Submit Quote Request
                      <FileText className="ml-2 h-5 w-5" />
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Why Choose Oratalesedi?</h2>
            <p className="text-xl text-gray-800 dark:text-blue-100 max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, reliability, and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Proven Track Record",
                description: "Over R70M in successfully completed projects across South Africa",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Clock,
                title: "Fast Response Time",
                description: "24-hour quote turnaround and immediate project consultation",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Badge,
                title: "Certified Excellence",
                description: "ISO 9001, 14001, 45001 certified with CIDB Grade 4 rating",
                color: "from-purple-500 to-purple-600",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-blue-950/90">
                <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-full w-fit mx-auto mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-700 dark:text-blue-200">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
