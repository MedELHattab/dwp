"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Coastal Harmony",
    image: "/YROLmfdQa2zqlwGcAWrlPhNRVk.avif",
    categories: ["RESIDENTIAL", "SINGLE HOME"],
    description: "The Masterpiece Exhibition Gallery project entailed the design and development of an art gallery that showcases contemporary and classic artworks.",
  },
  {
    title: "Modern Chic",
    image: "/fOckIjkgOR7dMVJ4RMB6RsXNzSE.avif",
    categories: ["COMMERCIAL", "SHOWROOM"],
    description: "A modern showroom design that blends elegance with functionality, creating an inspiring retail experience.",
  },
  {
    title: "Masterpiece Exhibition Gallery",
    image: "/BUREAUX-ARCHI-scaled-800x500.jpg",
    categories: ["SPECIALIZED", "EXHIBITION SPACE"],
    description: "The Masterpiece Exhibition Gallery project entailed the design and development of an art gallery that showcases contemporary and classic artworks.",
  },
]

export function ProductCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#fffef2] py-20">
      <div className="container mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky top-20 mb-12"
            style={{
              zIndex: index + 1,
            }}
          >
            <div className="grid lg:grid-cols-[280px_1fr_400px] gap-8 items-start bg-[#fffef2] py-8">
              {/* Categories - Left Side */}
              <div className="flex flex-wrap gap-3">
                {project.categories.map((category, catIndex) => (
                  <button
                    key={catIndex}
                    className="px-4 py-2 border-2 border-[#1f3630]/20 text-[#1f3630] text-sm font-medium rounded-full hover:bg-[#1f3630] hover:text-white transition-all duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Image - Center */}
              <div
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* View Project Button */}
                <div
                  className={`absolute bottom-8 left-8 right-8 transition-all duration-300 ${
                    hoveredIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <Button
                    size="lg"
                    className="w-auto bg-white hover:bg-white/90 text-[#1f3630] rounded-full px-8 group/btn"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Content - Right Side */}
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold text-[#1f3630] leading-tight">
                  {project.title}
                </h3>
                <p className="text-[#1f3630]/70 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
