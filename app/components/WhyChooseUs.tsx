import { CheckCircle, Clock, Award, Shield, Users, Target, Zap, Globe } from "lucide-react"

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: CheckCircle,
      title: "100% Delivery Record",
      description: "Perfect track record of project completion and client satisfaction",
    },
    {
      icon: Clock,
      title: "Quick Turnaround Times",
      description: "Guaranteed fast response and efficient project execution",
    },
    {
      icon: Users,
      title: "Mining Sector Expertise",
      description: "Internal and outsourced specialists with deep industry knowledge",
    },
    {
      icon: Target,
      title: "Quality Service",
      description: "Reliable quality service delivery at competitive prices",
    },
    {
      icon: Award,
      title: "BBBEE Level 1",
      description: "100% Black Woman Owned enterprise contributing to transformation",
    },
    {
      icon: Shield,
      title: "Health & Safety Compliance",
      description: "100% committed to health and safety standards and regulations",
    },
    {
      icon: Globe,
      title: "QSME Support",
      description: "Backed by Qualifying Small & Medium Enterprise support organizations",
    },
    {
      icon: Zap,
      title: "Socio-Economic Development",
      description: "Embracing and contributing to community development initiatives",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Oratalesedi?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence, combined with our expertise and values, makes us the preferred partner for
            engineering and mining projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="bg-blue-500 p-4 rounded-full w-fit mx-auto mb-4">
                <advantage.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications and Compliance */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Certifications & Compliance</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We maintain the highest standards of quality, environmental management, and occupational health and
              safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">ISO</span>
              </div>
              <h4 className="font-semibold mb-2">ISO 9001</h4>
              <p className="text-sm text-gray-300">Quality Management System</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">ISO</span>
              </div>
              <h4 className="font-semibold mb-2">ISO 14001</h4>
              <p className="text-sm text-gray-300">Environmental Management</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">ISO</span>
              </div>
              <h4 className="font-semibold mb-2">ISO 45001</h4>
              <p className="text-sm text-gray-300">Occupational Health & Safety</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p className="text-gray-300">
              Fully compliant with Tax and Department of Labour requirements • CIDB Grade 4 Certified
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
