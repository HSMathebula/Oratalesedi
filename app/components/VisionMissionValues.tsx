import { Target, Compass, Heart, Shield, Users, Award, Scale, Crown } from "lucide-react"

export default function VisionMissionValues() {
  const values = [
    { icon: Users, title: "Responsiveness", description: "Quick response to client needs and market demands" },
    { icon: Shield, title: "Integrity", description: "Honest and ethical business practices in all operations" },
    { icon: Scale, title: "Impartiality", description: "Fair and unbiased approach to all stakeholders" },
    { icon: Award, title: "Accountability", description: "Taking responsibility for our actions and results" },
    { icon: Heart, title: "Respect", description: "Treating all individuals with dignity and consideration" },
    { icon: Crown, title: "Leadership", description: "Leading by example in our industry and community" },
    { icon: Users, title: "Human Rights", description: "Upholding and protecting fundamental human rights" },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Vision, Mission & Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our guiding principles that drive excellence and sustainable growth in everything we do.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl mr-6 shadow-lg">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To preserve our company brand as reputable, sustainable and profitable supplier and employer enterprise
              that contributes to the socio-economic agenda of South Africa.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl mr-6 shadow-lg">
                <Compass className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Our Mission</h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                To conduct all our operations in a safe manner with consideration for best practices in the industry.
              </p>
              <p>
                To provide excellent service consistently & cost effectively to benefit our clients, employees and
                sub-contractors.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We are a values-based company and we believe that each person is because of the other. These values guide
              our daily operations and long-term strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl w-fit mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-3 text-lg">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
