"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Hero() {
  const videoRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return

      const element = videoRef.current
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top

      // Calculate progress based on element position
      // Video starts appearing when it enters viewport
      const progress = Math.max(0, Math.min(1, 1 - elementTop / windowHeight))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative bg-[#fffef2] overflow-hidden overflow-x-hidden">
      {/* Hero Text Section */}
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-[1200px] w-full mx-auto">
          {/* Large Typography */}
          <h1 className="text-[#1f3630] font-bold leading-[0.95] mb-8">
            <span className="block text-[clamp(3rem,8vw,9rem)]">
              Your Ideas,
            </span>
            <span className="block text-[clamp(3rem,8vw,9rem)]">
              Our Creative{" "}
              <span className="italic font-normal">Twist</span>
            </span>
          </h1>

          {/* Description and CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-12">
            <p className="text-lg md:text-xl text-[#1f3630]/70 max-w-md leading-relaxed">
              Avec un engagement envers la durabilité et les solutions innovantes, nous créons des espaces beaux et fonctionnels qui résistent à l&apos;épreuve du temps.
            </p>

            <Button
              size="lg"
              className="bg-[#1f3630] hover:bg-[#1f3630]/90 text-white px-8 py-6 text-base group"
            >
              Découvrir nos projets
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Review/Rating */}
          <div className="mt-16 flex items-start gap-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-[#f3ac85]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#1f3630]/60 leading-relaxed italic">
                &quot;J&apos;étais sceptique quant aux services de design virtuel, mais leur forfait e-design était complet et parfaitement adapté à mes besoins.&quot; - Tony M.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section with Scroll Animation */}
      <div
        ref={videoRef}
        className="container mx-auto px-6 pb-20 md:pb-32"
        style={{
          opacity: scrollProgress,
          transform: `scale(${0.8 + scrollProgress * 0.2})`,
          transition: "opacity 0.1s ease-out, transform 0.1s ease-out"
        }}
      >
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/mSsTg3IQcSmGsgmBbKnv84RbHUw.mp4" type="video/mp4" />
          </video>

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#f3ac85]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-[#ff7738]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
