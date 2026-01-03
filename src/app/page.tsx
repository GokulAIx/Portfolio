import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import LandingSection from '@/components/sections/landing-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import ProjectsSection from '@/components/sections/projects-section';
import BlogSection from '@/components/sections/blog-section';
import ExperienceSection from '@/components/sections/experience-section';
import AchievementsSection from '@/components/sections/achievements-section';
import CertificationsSection from '@/components/sections/certifications-section';
import ResumeSection from '@/components/sections/resume-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      <Navbar />
      <main className="flex-grow">
        <LandingSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ExperienceSection />
        <AchievementsSection />
        <CertificationsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
