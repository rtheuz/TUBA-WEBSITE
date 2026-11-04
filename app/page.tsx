import { SmoothScroll } from '@/components/smooth-scroll'
import { CinematicCurtainProvider } from '@/components/cinematic-curtain'
import { CinematicHUD } from '@/components/cinematic-hud'
import { CinematicAtmosphere } from '@/components/cinematic-atmosphere'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { EstimatorSection } from '@/components/estimator-section'
import { WhyChooseSection } from '@/components/why-choose-section'
import { AboutSection } from '@/components/about-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { LaserDivider } from '@/components/ui/laser-divider'

export default function Home() {
  return (
    <SmoothScroll>
      <CinematicCurtainProvider>
        <CinematicAtmosphere />
        <CinematicHUD />
        <main className="min-h-screen bg-[#030712] text-white relative selection:bg-cyan-500 selection:text-black">
          <Navbar />
          <HeroSection />
          <LaserDivider glowColor="cyan" />
          <ServicesSection />
          <EstimatorSection />
          <LaserDivider glowColor="amber" />
          <WhyChooseSection />
          <AboutSection />
          <PortfolioSection />
          <ContactSection />
          <Footer />
          <WhatsAppButton />
        </main>
      </CinematicCurtainProvider>
    </SmoothScroll>
  )
}
