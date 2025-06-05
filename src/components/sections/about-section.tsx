import SectionContainer from '@/components/shared/section-container';
import { UserCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center md:text-left bg-card p-8 rounded-xl shadow-lg">
        <div className="flex justify-center md:hidden mb-6">
           <UserCircle className="w-16 h-16 text-primary" />
        </div>
        <p className="text-lg sm:text-xl text-foreground leading-relaxed">
          I’m Gokul, a Computer Science undergrad passionate about building ML/NLP solutions that solve real-world problems. Currently exploring Deep Learning and NLP, I enjoy contributing to technical projects, competing in hackathons, and learning new technologies. Outside tech, I’m fascinated by space, Japanese culture, and self-growth.
        </p>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
