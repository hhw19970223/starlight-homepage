import { Header } from "@/components/organisms/Header"
import { HeroSection } from "@/components/organisms/HeroSection"
import { SolutionsSection } from "@/components/organisms/SolutionsSection"
import { PlatformsSection } from "@/components/organisms/PlatformsSection"
import { FeaturesSection } from "@/components/organisms/FeaturesSection"
import { CTASection } from "@/components/organisms/CTASection"
import { ContactSection } from "@/components/organisms/ContactSection"
import { Footer } from "@/components/organisms/Footer"
import { ScrollToTop } from "@/components/molecules"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <PlatformsSection />
        <FeaturesSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
