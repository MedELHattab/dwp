import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
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
        <ProductCategories />
        <FeaturesSection />
        <ProductShowcase />
        <StatsSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
