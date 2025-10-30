import React from "react";
import { SiteNav } from "@/components/SiteNav";
import { HeroSection } from "@/components/HeroSection";
import { WhoWeServe } from "@/components/WhoWeServe";
import { SystemAndParentJourney } from "@/components/SystemAndParentJourney";
import { FounderMessage } from "@/components/FounderMessage";
import { CreedSection } from "@/components/CreedSection";
import { FAQSection } from "@/components/FAQSection";
import { CoachPitch } from "@/components/CoachPitch";
import { FacilitySection } from "@/components/FacilitySection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased flex flex-col">
      <SiteNav />
      <HeroSection />
      <WhoWeServe />
      <SystemAndParentJourney />
      <FounderMessage />
      <CreedSection />
      <FAQSection />
      <CoachPitch />
      <FacilitySection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
