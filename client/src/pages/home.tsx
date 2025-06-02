import { Helmet } from 'react-helmet';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>OptiFlows | Workflow Automation Agency</title>
        <meta name="description" content="OptiFlows helps businesses streamline their operations through intelligent automation and process optimization solutions. Transform your business efficiency today." />
        <meta name="keywords" content="workflow automation, business process optimization, digital transformation, custom software integration, data analytics" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
