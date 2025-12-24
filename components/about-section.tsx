import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="bg-[#fffef2] py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Left label column */}
          <div className="md:w-1/6 flex items-center md:items-start">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#1f3630] mr-4" />
              <span className="text-sm font-semibold text-[#1f3630] uppercase tracking-wider">
                ABOUT US
              </span>
            </div>
          </div>

          {/* Main large content */}
          <div className="md:flex-1">
            <p className="text-base md:text-lg lg:text-xl text-[#1f3630] leading-relaxed mb-8">
              Fondée en 2010, notre entreprise a débuté comme une petite équipe de passionnés de design avec de grands rêves. Chez DWP, nous ne créons pas seulement de beaux espaces – nous créons des histoires et réalisons des rêves ! Notre équipe passionnée adore transformer des pièces ordinaires en expériences extraordinaires, mêlant créativité et une touche de fantaisie.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#1f3630] font-semibold text-base border-b-2 border-[#1f3630] pb-1 hover:gap-3 transition-all duration-300"
            >
              KNOW MORE
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
