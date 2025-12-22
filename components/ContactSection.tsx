import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            CONTACTEZ NOS ÉQUIPES
            <br />
            POUR PLUS D&apos;INFORMATIONS.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d415.434538516918!2d-7.650583!3d33.592944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d355bc80b305%3A0x2f239da4c85081ce!2sDWP!5e0!3m2!1sfr!2sus!4v1766433705688!5m2!1sfr!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Casablanca</h3>
                    <p className="text-muted-foreground">
                      N° 4 rue 2 Quartier Plaisance Vélodrome, Rue Ibn Hamdisse
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rabat</h3>
                    <p className="text-muted-foreground">
                      7 Rue Salsola 552, Riad Agdal
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                    <a
                      href="tel:0522360314"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      0522360314
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mail</h3>
                    <a
                      href="mailto:contact@dwp.ma"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@dwp.ma
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
