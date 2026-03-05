'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { WhyChooseSection } from '@/components/why-choose-section'
import { AboutSection } from '@/components/about-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CinematicIntro } from '@/components/cinematic-intro'

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      {!introComplete && <CinematicIntro onComplete={() => setIntroComplete(true)} />}
      <main>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
