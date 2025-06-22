import { Helmet } from 'react-helmet';
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ProblemSection } from "@/components/home/problem-section";
import { SolutionSection } from "@/components/home/solution-section";
import { NicheBenefitsSection } from "@/components/home/niche-benefits-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ContactSection } from "@/components/home/contact-section";
import { FloatingContactButton } from "@/components/ui/floating-contact-button";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AI Voice Agents for Healthcare | Automate Patient Communication</title>
        <meta name="description" content="Custom AI voice agents for dentistry, concierge care, and weight loss clinics. Reduce administrative burden, improve patient experience, and grow your practice with HIPAA-compliant automation." />
        <meta name="keywords" content="AI voice agents, healthcare automation, dental practice automation, concierge care, weight loss clinic, patient communication, HIPAA compliant, appointment scheduling" />
      </Helmet>
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <NicheBenefitsSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContactButton />
    </>
  );
}
