"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X} from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      {/* <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+212661051115" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+212 661-051115</span>
            </a>
            <a
              href="mailto:info@dwp.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">info@dwp.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/DWP-logo.png"
              alt="DWP"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </Link>
            <div className="group relative">
              <button className="text-sm font-medium hover:text-primary transition-colors">Qui sommes nous</button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/about/presentation" className="block px-4 py-2 text-sm hover:bg-accent">
                  Présentation de la marque
                </Link>
                <Link href="/about/histoire" className="block px-4 py-2 text-sm hover:bg-accent">
                  Histoire
                </Link>
                <Link href="/about/valeurs" className="block px-4 py-2 text-sm hover:bg-accent">
                  Valeurs
                </Link>
                <Link href="/about/expertises" className="block px-4 py-2 text-sm hover:bg-accent">
                  Expertises
                </Link>
                <Link href="/about/equipe" className="block px-4 py-2 text-sm hover:bg-accent">
                  Équipe
                </Link>
                <Link href="/about/chiffres" className="block px-4 py-2 text-sm hover:bg-accent">
                  Agence en chiffres
                </Link>
              </div>
            </div>
            <Link href="/realisations" className="text-sm font-medium hover:text-primary transition-colors">
              Réalisations
            </Link>
            <Link href="/partenariats" className="text-sm font-medium hover:text-primary transition-colors">
              Partenariats
            </Link>
            <Link href="/temoignages" className="text-sm font-medium hover:text-primary transition-colors">
              Témoignages
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container py-4 flex flex-col gap-2">
            <Link href="/" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md">
              Accueil
            </Link>
            <div className="px-4 py-2">
              <p className="text-sm font-medium mb-2">Qui sommes nous</p>
              <div className="pl-4 flex flex-col gap-1">
                <Link href="/about/presentation" className="px-2 py-1 text-sm hover:bg-accent rounded-md">
                  Présentation de la marque
                </Link>
                <Link href="/about/histoire" className="px-2 py-1 text-sm hover:bg-accent rounded-md">
                  Histoire
                </Link>
                <Link href="/about/valeurs" className="px-2 py-1 text-sm hover:bg-accent rounded-md">
                  Valeurs
                </Link>
                <Link href="/about/expertises" className="px-2 py-1 text-sm hover:bg-accent rounded-md">
                  Expertises
                </Link>
                <Link href="/about/equipe" className="px-2 py-1 text-sm hover:bg-accent rounded-md">
                  Équipe
                </Link>
                <Link href="/about/chiffres" className="px-2 py-1 text-sm hover:bg-accent rounded-md">
                  Agence en chiffres
                </Link>
              </div>
            </div>
            <Link href="/realisations" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md">
              Réalisations
            </Link>
            <Link href="/partenariats" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md">
              Partenariats
            </Link>
            <Link href="/temoignages" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md">
              Témoignages
            </Link>
            <Link href="/blog" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md">
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
