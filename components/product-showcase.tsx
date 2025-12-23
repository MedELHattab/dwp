"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowRight, Eye } from "lucide-react"

const products = [
  {
    name: "Projet Librairie Préface",
    image: "/Projet-Librairie-preface-IMG_0970-1170x658.jpg",
    description: "Design moderne et élégant pour espaces de lecture",
    category: "Aménagement commercial",
    link: "/products"
  },
  {
    name: "Bureaux Professionnels",
    image: "/IMG_8263-1170x658.webp",
    description: "Solutions d&apos;aménagement pour espaces de travail",
    category: "Bureaux & Espaces pros",
    link: "/products"
  },
  {
    name: "Architecture d&apos;Intérieur",
    image: "/BUREAUX-ARCHI-scaled-800x500.jpg",
    description: "Concepts architecturaux innovants",
    category: "Design d&apos;intérieur",
    link: "/products"
  },
]

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Nos Réalisations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projets d&apos;exception
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de nos projets les plus emblématiques et laissez-vous inspirer
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={product.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden border-none transition-all duration-500 ${
                index === activeIndex
                  ? "shadow-2xl scale-105 ring-2 ring-primary ring-offset-4"
                  : "shadow-lg hover:shadow-2xl hover:scale-102"
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-primary/90 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-white p-6">
                      <Eye className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-lg font-semibold mb-2">Voir le projet</p>
                      <p className="text-sm text-white/90">{product.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-white/90 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <Link href={product.link}>
                    <Button
                      size="sm"
                      className="bg-white text-foreground hover:bg-primary hover:text-white group/btn shadow-lg"
                    >
                      Découvrir
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Active Indicator */}
              {index === activeIndex && (
                <div className="absolute top-0 right-0 w-12 h-12">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-t-primary border-l-[48px] border-l-transparent" />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary h-2 w-12 rounded-full"
                  : "bg-gray-300 h-2 w-2 rounded-full hover:bg-gray-400 hover:w-8"
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link href="/realisations">
            <Button variant="outline" size="lg" className="group">
              Voir toutes nos réalisations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
