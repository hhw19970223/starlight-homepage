import { Header } from "@/components/organisms/Header"
import { HeroSection } from "@/components/organisms/HeroSection"
import { OnboardingSection } from "@/components/organisms/OnboardingSection"
import { PlatformsSection } from "@/components/organisms/PlatformsSection"
import { StatsSection } from "@/components/organisms/StatsSection"
import { QualitySection } from "@/components/organisms/QualitySection"
import { CaseStudySection } from "@/components/organisms/CaseStudySection"
import { WhySection } from "@/components/organisms/WhySection"
import { HotListSection } from "@/components/organisms/HotListSection"
import { SolutionsSection } from "@/components/organisms/SolutionsSection"
import { ContactSection } from "@/components/organisms/ContactSection"
import { Footer } from "@/components/organisms/Footer"
import { FloatingButtons } from "@/components/molecules"
import { RoleModal } from "@/components/organisms/RoleModal"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <OnboardingSection />
        <PlatformsSection />
        <StatsSection />
        <QualitySection />
        <CaseStudySection />
        <WhySection />
        <HotListSection />
        <SolutionsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
      <RoleModal />
    </>
  )
}
