import {
  Header,
  Footer,
  HeroSection,
  AboutSection,
  ContactSection,
} from "@/components"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
