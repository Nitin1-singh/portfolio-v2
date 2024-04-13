import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/project/ProjectSection";

export default function HeroSectionWrapper() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}