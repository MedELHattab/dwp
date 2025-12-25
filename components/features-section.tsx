"use client"

import { Package, Award, Layers, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    id: "collapse-1",
    icon: Package,
    title: "Un large catalogue d&apos;articles",
    description:
      "Une infinité de choix pour personnaliser vos intérieurs & extérieurs. Du carrelage classique aux dernières tendances en matière de sanitaire, vous trouverez tout ce dont vous aurez besoin pour realiser vos projets.",
  },
  {
    id: "collapse-2",
    icon: Award,
    title: "Des produits conçus pour durer",
    description:
      "Notre catalogue regorge d&apos;articles de qualité supérieure, sélectionnés avec soin pour répondre à vos attentes les plus élevées. Des materiaux nobles aux finitions soignées, chaque produit est conçu pour durer.",
  },
  {
    id: "collapse-3",
    icon: Layers,
    title: "Disponibilité",
    description:
      "Grace à notre large catalogue, nous sommes en mesure de répondre à toutes vos demandes, même les plus spécifiques. N&apos;hesitez pas à solliciter nos experts pour vous aider à trouver les articles parfaits pour votre projet.",
  },
]

const partnerImages = [
  "lamatem.png",
  "OFPPT.png",
  "PWC.png",
  "Sans-titre-1.png",
  "STFA.png",
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Pourquoi nous choisir
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Notre engagement qualité
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions sur mesure pour tous vos projets d&apos;aménagement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <Card
                key={feature.id}
                className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full" />

                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                    <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {feature.description}
                  </p>

                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Continuous partners slider */}
        <div className="mt-12">
          <div className="overflow-hidden">
            <div className="flex marquee items-center">
              {[...partnerImages, ...partnerImages].map((img, idx) => (
                <img
                  key={idx}
                  src={`/partenaire/${img}`}
                  alt={`partenaire-${idx}`}
                  className="h-16 mx-8 object-contain inline-block"
                />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .marquee {
            gap: 2rem;
            animation: marquee 20s linear infinite;
            will-change: transform;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  )
}
