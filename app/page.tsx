import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { ContactSection } from '@/components/contact-section'
import { Navigation } from '@/components/navigation'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse [animation-delay:4s]" />
      </div>

      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
