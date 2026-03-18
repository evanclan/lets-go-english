import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import PrincipalSection from "@/components/PrincipalSection";
import FeaturesSection from "@/components/FeaturesSection";
import CoursesSection from "@/components/CoursesSection";
import EikenJrSection from "@/components/EikenJrSection";
import TeachersSection from "@/components/TeachersSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <PrincipalSection />
      <FeaturesSection />
      <CoursesSection />
      <EikenJrSection />
      <TeachersSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
