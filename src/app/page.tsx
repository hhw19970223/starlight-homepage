import {
  Header,
  Footer,
  HeroSection,
  SolutionsSection,
  PlatformsSection,
  FeaturesSection,
  CTASection,
  ContactSection,
} from "@/components"

export default function Home() {
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
    </>
  )
}
