"use client"

import { TrendingUp, Users, Package, Target } from "lucide-react"

export function StatsSection() {
  const stats = [
    { value: "+10 000", label: "projets réalisés", icon: Target },
    { value: "15 ans", label: "d&apos;experience dans le secteur", icon: TrendingUp },
    { value: "+11", label: "partenaires", icon: Users },
    { value: "+1500", label: "articles & designs différents", icon: Package },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 text-white">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
            Nos résultats en chiffres
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            De petites réalisations aux projets de grandes envergures
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Forts de notre expérience sur plus de 10 000 projets, nous maîtrisons tous les aspects en matière de
            carrelage et de sanitaires.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/20"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="mt-6 text-white">
                  <div className="text-5xl md:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-white/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
