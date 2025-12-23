"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Main Navigation */}
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/DWP-logo.png"
              alt="DWP"
              width={140}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="relative text-sm font-semibold text-foreground hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full after:duration-300"
            >
              Accueil
            </Link>

            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                Qui sommes nous
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-3 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="py-2">
                  <Link
                    href="/about/presentation"
                    className="block px-5 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-l-3 border-transparent hover:border-primary"
                  >
                    Présentation de la marque
                  </Link>
                  <Link
                    href="/about/histoire"
                    className="block px-5 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-l-3 border-transparent hover:border-primary"
                  >
                    Histoire
                  </Link>
                  <Link
                    href="/about/valeurs"
                    className="block px-5 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-l-3 border-transparent hover:border-primary"
                  >
                    Valeurs
                  </Link>
                  <Link
                    href="/about/expertises"
                    className="block px-5 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-l-3 border-transparent hover:border-primary"
                  >
                    Expertises
                  </Link>
                  <Link
                    href="/about/equipe"
                    className="block px-5 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-l-3 border-transparent hover:border-primary"
                  >
                    Équipe
                  </Link>
                  <Link
                    href="/about/chiffres"
                    className="block px-5 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-l-3 border-transparent hover:border-primary"
                  >
                    Agence en chiffres
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/realisations"
              className="relative text-sm font-semibold text-foreground hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full after:duration-300"
            >
              Réalisations
            </Link>
            <Link
              href="/partenariats"
              className="relative text-sm font-semibold text-foreground hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full after:duration-300"
            >
              Partenariats
            </Link>
            <Link
              href="/temoignages"
              className="relative text-sm font-semibold text-foreground hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full after:duration-300"
            >
              Témoignages
            </Link>
            <Link
              href="/blog"
              className="relative text-sm font-semibold text-foreground hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full after:duration-300"
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button size="lg" className="font-semibold shadow-lg">
              Contactez-nous
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white shadow-lg">
          <nav className="container py-6 flex flex-col gap-1">
            <Link
              href="/"
              className="px-4 py-3 text-sm font-semibold hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>

            <div className="px-4 py-3">
              <p className="text-sm font-semibold mb-3 text-primary">Qui sommes nous</p>
              <div className="pl-4 flex flex-col gap-1 border-l-2 border-primary/20">
                <Link
                  href="/about/presentation"
                  className="px-3 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Présentation de la marque
                </Link>
                <Link
                  href="/about/histoire"
                  className="px-3 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Histoire
                </Link>
                <Link
                  href="/about/valeurs"
                  className="px-3 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Valeurs
                </Link>
                <Link
                  href="/about/expertises"
                  className="px-3 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Expertises
                </Link>
                <Link
                  href="/about/equipe"
                  className="px-3 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Équipe
                </Link>
                <Link
                  href="/about/chiffres"
                  className="px-3 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agence en chiffres
                </Link>
              </div>
            </div>

            <Link
              href="/realisations"
              className="px-4 py-3 text-sm font-semibold hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Réalisations
            </Link>
            <Link
              href="/partenariats"
              className="px-4 py-3 text-sm font-semibold hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partenariats
            </Link>
            <Link
              href="/temoignages"
              className="px-4 py-3 text-sm font-semibold hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Témoignages
            </Link>
            <Link
              href="/blog"
              className="px-4 py-3 text-sm font-semibold hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <div className="px-4 pt-4 mt-2 border-t">
              <Button size="lg" className="w-full font-semibold shadow-lg">
                Contactez-nous
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
