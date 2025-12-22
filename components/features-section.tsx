"use client"

import { useState } from "react"
import { Package, Award, Layers } from "lucide-react"

const features = [
  {
    id: "collapse-1",
    icon: Package,
    title: "Un large catalogue d'articles",
    description:
      "Une infinité de choix pour personnaliser vos intérieurs & extérieurs. Du carrelage classique aux dernières tendances en matière de sanitaire, vous trouverez tout ce dont vous aurez besoin pour realiser vos projets.",
  },
  {
    id: "collapse-2",
    icon: Award,
    title: "Des produits conçus pour durer",
    description:
      "Notre catalogue regorge d'articles de qualité supérieure, sélectionnés avec soin pour répondre à vos attentes les plus élevées. Des materiaux nobles aux finitions soignées, chaque produit est conçu pour durer.",
  },
  {
    id: "collapse-3",
    icon: Layers,
    title: "Disponibilité",
    description:
      "Grace à notre large catalogue, nous sommes en mesure de répondre à toutes vos demandes, même les plus spécifiques. N'hesitez pas à solliciter nos experts pour vous aider à trouver les articles parfaits pour votre projet.",
  },
]

export function FeaturesSection() {
  const [activeId, setActiveId] = useState("collapse-1")

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            const isActive = activeId === feature.id

            return (
              <div key={feature.id} className="group cursor-pointer" onClick={() => setActiveId(feature.id)}>
                <div
                  className={`p-8 rounded-lg transition-all ${isActive ? "bg-primary text-primary-foreground shadow-lg" : "bg-background hover:shadow-md"}`}
                >
                  <Icon className={`h-12 w-12 mb-4 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${isActive ? "text-primary-foreground/90" : "text-muted-foreground"}`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
