import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMG_8263-1170x658.webp"
          alt="Bureaux professionnels"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Un univers d&apos;inspiration
          <br />
          et de possibilités
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-balance opacity-90">
          Découvrez notre collection exceptionnelle de carrelage et sanitaires pour sublimer vos espaces
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base">
            Voir nos produits
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
          >
            Nos showrooms
          </Button>
        </div>
      </div>
    </section>
  )
}
