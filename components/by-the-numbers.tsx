"use client"

import React, { useEffect, useRef, useState } from "react"

function CountUp({ end, duration = 2000, className = "" }: { end: string | number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const to = Number(end) || 0
            const startTime = performance.now()

            const step = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1)
              const current = Math.floor(progress * to)
              setValue(current)
              if (progress < 1) requestAnimationFrame(step)
              else setValue(to)
            }

            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}

export function ByTheNumbers() {
  const stats = [
    {
      number: "200",
      label: "Project Completed",
      description:
        "Plus de 200 projets réussis, démontrant notre vaste expérience et portfolio.",
    },
    {
      number: "15",
      label: "Years of Expertise",
      description:
        "Avec 15 ans dans l'industrie, nous apportons une richesse de connaissances et de compétences à chaque projet.",
    },
    {
      number: "150",
      label: "Happy Clients",
      description:
        "Fiers de servir plus de 150 clients satisfaits qui nous ont fait confiance pour leurs besoins en design d'intérieur.",
    },
  ]

  return (
    <section className="bg-[#fffef2] py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-3 h-3 rounded-full bg-[#1f3630]" />
          <span className="text-sm font-semibold text-[#1f3630] uppercase tracking-wider">
            BY THE NUMBERS
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-10">
              {/* Large Number */}
              <div className="mb-8 flex items-baseline gap-3">
                <CountUp
                  end={stat.number}
                  duration={1800}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1f3630] leading-none"
                />
                <span className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#f3ac85] leading-none">+</span>
              </div>

              {/* Label */}
              <h3 className="text-xl md:text-2xl font-bold text-[#1f3630] mb-4">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-[#1f3630]/70 text-sm md:text-base leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
