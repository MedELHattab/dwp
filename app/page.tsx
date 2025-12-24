import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ByTheNumbers } from "@/components/by-the-numbers"
import { ProductCategories } from "@/components/product-categories"
import { FeaturesSection } from "@/components/features-section"
import { ProductShowcase } from "@/components/product-showcase"
import { StatsSection } from "@/components/stats-section"
import { ContactSection } from "@/components/ContactSection"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ByTheNumbers />
        <ProductCategories />
        <FeaturesSection />
        <ProductShowcase />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
