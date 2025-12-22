"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Projet Librairie Préface",
    image: "/Projet-Librairie-preface-IMG_0970-1170x658.jpg",
    description: "Design moderne et élégant pour espaces de lecture",
    link: "/products"
  },
  {
    name: "Bureaux Professionnels",
    image: "/IMG_8263-1170x658.webp",
    description: "Solutions d'aménagement pour espaces de travail",
    link: "/products"
  },
  {
    name: "Architecture d'Intérieur",
    image: "/BUREAUX-ARCHI-scaled-800x500.jpg",
    description: "Concepts architecturaux innovants",
    link: "/products"
  },
]

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length)
    }, 6000) // Change every 6 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de nos produits les plus populaires
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.name}
              className={`group overflow-hidden transition-all duration-500 ${
                index === activeIndex
                  ? "shadow-2xl scale-105 border-primary"
                  : "shadow-lg hover:shadow-xl"
              }`}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                    <p className="text-sm text-white/90 mb-4">{product.description}</p>
                    <Link href={product.link}>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="group/btn"
                      >
                        Voir les produits
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary w-12"
                  : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
