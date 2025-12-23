"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const contacts = [
    {
      icon: MapPin,
      title: "Casablanca",
      content: "N° 4 rue 2 Quartier Plaisance Vélodrome, Rue Ibn Hamdisse",
      link: null,
    },
    {
      icon: MapPin,
      title: "Rabat",
      content: "7 Rue Salsola 552, Riad Agdal",
      link: null,
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "0522360314",
      link: "tel:0522360314",
    },
    {
      icon: Mail,
      title: "Mail",
      content: "contact@dwp.ma",
      link: "mailto:contact@dwp.ma",
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Floating background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Contactez-nous
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            PARLONS DE VOTRE
            <br />
            <span className="text-primary">PROJET ENSEMBLE</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour transformer vos idées en réalité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="w-full group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-primary/20">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d415.434538516918!2d-7.650583!3d33.592944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d355bc80b305%3A0x2f239da4c85081ce!2sDWP!5e0!3m2!1sfr!2sus!4v1766433705688!5m2!1sfr!2sus"
                  width="100%"
                  height="550"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
              </div>

              {/* Location badge overlay */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium text-sm">Nos showrooms</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon
                const isHovered = hoveredIndex === index

                return (
                  <Card
                    key={index}
                    className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                      isHovered
                        ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                        : "border-transparent hover:border-primary/20"
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-3">
                        {/* Icon container with animated background */}
                        <div className={`relative flex-shrink-0 transition-all duration-300 w-fit ${
                          isHovered ? "scale-110" : ""
                        }`}>
                          <div className={`absolute inset-0 bg-primary rounded-xl transition-all duration-300 ${
                            isHovered ? "opacity-100 scale-110" : "opacity-10"
                          }`} />
                          <div className="relative p-3">
                            <Icon className={`h-5 w-5 transition-colors duration-300 ${
                              isHovered ? "text-white" : "text-primary"
                            }`} />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                            {contact.title}
                            {contact.link && (
                              <ArrowUpRight className={`h-4 w-4 transition-all duration-300 ${
                                isHovered ? "translate-x-1 -translate-y-1 text-primary" : "opacity-0"
                              }`} />
                            )}
                          </h3>
                          {contact.link ? (
                            <a
                              href={contact.link}
                              className="text-muted-foreground group-hover:text-primary transition-colors duration-300 break-all"
                            >
                              {contact.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground leading-relaxed">
                              {contact.content}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Animated bottom border */}
                      <div className={`h-1 bg-gradient-to-r from-primary to-primary/50 mt-4 rounded-full transition-all duration-300 origin-left ${
                        isHovered ? "scale-x-100" : "scale-x-0"
                      }`} />
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Additional info card */}
            <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Du lundi au vendredi : 9h00 - 18h00
                  <br />
                  Samedi : 9h00 - 13h00
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
