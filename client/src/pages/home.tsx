import { Helmet } from 'react-helmet';
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ProblemSection } from "@/components/home/problem-section";
import { SolutionSection } from "@/components/home/solution-section";
import { NicheBenefitsSection } from "@/components/home/niche-benefits-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { ContactSection } from "@/components/home/contact-section";
import { FloatingContactButton } from "@/components/ui/floating-contact-button";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Custom AI Voice Agents for Healthcare | Streamlined Operations</title>
        <meta name="description" content="We design and build custom AI voice agents for dentistry, concierge care, and weight loss clinics. HIPAA-compliant solutions to reduce administrative burden and enhance patient experience." />
        <meta name="keywords" content="custom AI voice agents, healthcare automation, dental practice automation, concierge care, weight loss clinic, patient communication, HIPAA compliant, workflow automation agency" />
      </Helmet>
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <NicheBenefitsSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContactButton />
    </>
  );
}
