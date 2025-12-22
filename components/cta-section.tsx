"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const words = ["salle de bain", "maison", "cuisine", "projets", "restaurant", "piscine", "térasse"]

export function CtaSection() {
  const [currentWord, setCurrentWord] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance">
          Votre partenaire pour réaliser votre{" "}
          <span className="inline-block min-w-[200px] text-left border-b-4 border-primary-foreground/30 pb-2">
            {words[currentWord]}
          </span>
        </h2>
        <Button size="lg" variant="secondary" onClick={() => setCurrentWord((prev) => (prev + 1) % words.length)}>
          Contactez-nous
        </Button>
      </div>
    </section>
  )
}
