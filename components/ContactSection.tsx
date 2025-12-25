"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 md:py-32 bg-[#1f3630]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                EMAIL
              </div>
              <a href="mailto:contact@dwp.ma" className="text-white text-lg font-medium hover:text-primary transition-colors">
                contact@dwp.ma
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                PHONE
              </div>
              <a href="tel:0522360314" className="text-white text-lg font-medium hover:text-primary transition-colors">
                0522360314
              </a>
            </div>

            {/* Office */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                OFFICE
              </div>
              <p className="text-white text-lg font-medium leading-relaxed">
                N° 4 rue 2 Quartier Plaisance Vélodrome, Rue Ibn Hamdisse, Casablanca
              </p>
            </div>

            {/* Opening Hours */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                OPENING HOURS
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-white/60" />
                    <span>Dimanche</span>
                  </div>
                  <span className="text-white/60">Fermé</span>
                </div>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-white/60" />
                    <span>Lundi - Vendredi</span>
                  </div>
                  <span className="text-white/90">9h00 - 18h00</span>
                </div>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-white/60" />
                    <span>Samedi</span>
                  </div>
                  <span className="text-white/90">9h00 - 13h00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="bg-white border-none shadow-2xl">
            <CardContent className="p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f3630] mb-4">
                Demandez un devis gratuit
              </h2>
              <p className="text-[#1f3630]/70 mb-8 leading-relaxed">
                Contactez-nous immédiatement pour obtenir un devis personnalisé de l&apos;un de nos conseillers. Appelez-nous ou remplissez le formulaire ci-dessous !
              </p>

              <form className="space-y-6">
                {/* Name and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1f3630] uppercase tracking-wider mb-2">
                      NOM
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1f3630] uppercase tracking-wider mb-2">
                      TÉLÉPHONE
                    </label>
                    <input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#1f3630] uppercase tracking-wider mb-2">
                    E-MAIL
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-semibold text-[#1f3630] uppercase tracking-wider mb-2">
                    TYPE DE PROJET
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer">
                    <option>Sélectionner...</option>
                    <option>Résidentiel</option>
                    <option>Commercial</option>
                    <option>Bureaux</option>
                    <option>Architecture</option>
                  </select>
                </div>
               
                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#1f3630] hover:bg-[#1f3630]/90 text-white text-lg py-6"
                >
                  Envoyer la demande
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
