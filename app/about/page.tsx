import ModernHeader from "../components/ModernHeader"
import Footer from "../components/Footer"
import { Award, Users, MapPin, Calendar, Target, Compass, CheckCircle, Globe, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const achievements = [
    { icon: Calendar, value: "2012", label: "Founded", color: "blue" },
    { icon: Users, value: "80+", label: "Team Members", color: "blue-light" },
    { icon: Award, value: "56+", label: "Projects Completed", color: "blue-dark" },
    { icon: MapPin, value: "4", label: "CIDB Grade", color: "blue" },
  ]

  const values = [
    {
      icon: Users,
      title: "Responsiveness",
      description: "Quick response to client needs and market demands",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest and ethical business practices in all operations",
    },
    {
      icon: CheckCircle,
      title: "Accountability",
      description: "Taking responsibility for our actions and results",
    },
    {
      icon: Award,
      title: "Respect",
      description: "Treating all individuals with dignity and consideration",
    },
    {
      icon: Globe,
      title: "Leadership",
      description: "Leading by example in our industry and community",
    },
    {
      icon: Zap,
      title: "Human Rights",
      description: "Upholding and protecting fundamental human rights",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-oratalesedi-blue to-oratalesedi-blue-light",
      "blue-light": "from-oratalesedi-blue-light to-blue-400",
      "blue-dark": "from-oratalesedi-blue-dark to-oratalesedi-blue",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <main className="min-h-screen">
      <ModernHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-oratalesedi-blue rounded-full"></div>
              <span className="text-sm font-medium text-oratalesedi-blue dark:text-blue-400">About Oratalesedi</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-black dark:text-white mb-6">
              Engineering
              <span className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light bg-clip-text text-transparent">
                {" "}
                Excellence
              </span>
              <br />
              <span className="text-3xl lg:text-4xl">Since 2012</span>
            </h1>
            <p className="text-xl text-gray-800 dark:text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A proud South African Qualifying Small Enterprise (QSE) and BBBEE Level 1 contributor, founded and
              registered with CIPC on November 21st, 2012.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group bg-white dark:bg-blue-950/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${getColorClasses(achievement.color)} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-black dark:text-white mb-1">{achievement.value}</div>
                  <div className="text-sm text-gray-700 dark:text-blue-200">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white dark:bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-black dark:text-white mb-6">Our Foundation</h2>
                <div className="space-y-4 text-gray-800 dark:text-blue-100 leading-relaxed">
                  <p>
                    Oratalesedi Trading & Projects (Pty) Ltd is fully compliant with ISO 9001, 14001, and 45001
                    international standards as well as Tax and Department of Labour local requirements in South Africa.
                  </p>
                  <p>
                    We are a service-focused and customer-centric enterprise driven by high service standards and
                    complete customer satisfaction. Our focus is primarily on providing services to the South African
                    mining & petrochemical industries.
                  </p>
                  <p>
                    We have strategically positioned our offices in the mining centers of Witbank and Middelburg,
                    Mpumalanga province to better serve our clients across South Africa.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/50 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-oratalesedi-blue dark:text-blue-400 mb-2">ISO Certified</h4>
                  <p className="text-sm text-oratalesedi-blue dark:text-blue-300">9001, 14001, 45001</p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-xl border border-blue-300 dark:border-blue-700">
                  <h4 className="font-semibold text-oratalesedi-blue-dark dark:text-blue-400 mb-2">BBBEE Level 1</h4>
                  <p className="text-sm text-oratalesedi-blue-dark dark:text-blue-300">100% BWO Enterprise</p>
                </div>
              </div>
            </div>

            {/* Leadership Card */}
            <div className="relative">
              <Card className="bg-white dark:bg-blue-950/90 backdrop-blur-xl border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 bg-gradient-to-br from-oratalesedi-blue to-oratalesedi-blue-light rounded-2xl flex items-center justify-center shadow-lg">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-black dark:text-white mb-2">Mrs. Nkoadi Thelma Ngcobo</h4>
                      <p className="text-oratalesedi-blue dark:text-blue-400 font-semibold mb-4">Managing Director</p>
                      <p className="text-gray-700 dark:text-blue-200 text-sm leading-relaxed">
                        Over fifteen years of corporate experience spanning administration, customer services, and
                        contract management. An astute project manager with extensive networks in the South African
                        power generation and mining sectors.
                      </p>
                    </div>

                    <div className="flex justify-center space-x-4 pt-4">
                      <span className="bg-blue-100 dark:bg-blue-900/50 text-oratalesedi-blue dark:text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                        Project Management
                      </span>
                      <span className="bg-blue-50 dark:bg-blue-900/50 text-oratalesedi-blue-light dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                        Industry Networks
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50 dark:bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Vision, Mission & Values</h2>
            <p className="text-xl text-gray-800 dark:text-blue-100 max-w-3xl mx-auto">
              Our guiding principles that drive excellence and sustainable growth in South Africa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="group bg-white dark:bg-blue-950/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">Our Vision</h3>
                    <p className="text-gray-800 dark:text-blue-100 leading-relaxed">
                      To preserve our company brand as reputable, sustainable and profitable supplier and employer
                      enterprise that contributes to the socio-economic agenda of South Africa.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white dark:bg-blue-950/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-oratalesedi-blue-light to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Compass className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">Our Mission</h3>
                    <p className="text-gray-800 dark:text-blue-100 leading-relaxed">
                      To conduct all our operations in a safe manner with consideration for best practices in the
                      industry while providing excellent service consistently & cost effectively to benefit our clients,
                      employees and sub-contractors across South Africa.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="bg-white dark:bg-blue-950/90 rounded-3xl p-10 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4">Our Core Values</h3>
              <p className="text-gray-800 dark:text-blue-100 max-w-2xl mx-auto">
                We are a values-based company operating in South Africa, and we believe that each person is because of
                the other.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light p-4 rounded-2xl w-fit mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-black dark:text-white mb-3">{value.title}</h4>
                  <p className="text-gray-700 dark:text-blue-200 leading-relaxed text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
