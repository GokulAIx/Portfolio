
import SectionContainer from '@/components/shared/section-container';
import { UserCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center md:text-left bg-card p-8 rounded-xl shadow-lg max-h-[60vh] overflow-y-auto">
        <div className="flex justify-center md:hidden mb-6">
           <UserCircle className="w-16 h-16 text-primary" />
        </div>
        <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-4">
          My approach to AI engineering has evolved from writing code that works to thinking about systems that continue to work under real-world constraints. Through hands-on experience building production-facing AI pipelines and backend services, I’ve learned to prioritize reliability, observability, and controlled failure over one-off solutions.
        </p>
        <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-4">
          When I work on a system, I consistently think through:
        </p>
        <ul className="list-disc list-inside text-lg sm:text-xl text-foreground leading-relaxed mb-4 space-y-2">
            <li>What is the most likely way this can fail?</li>
            <li>How would we detect and diagnose it in production?</li>
            <li>What is the simplest rollback or recovery path?</li>
        </ul>
        <p className="text-lg sm:text-xl text-foreground leading-relaxed">
          My current work spans AI-driven workflows, backend API development (FastAPI), and agent-based systems, with a focus on connecting machine learning components to reliable, well-structured services that can be used in real applications.
        </p>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
