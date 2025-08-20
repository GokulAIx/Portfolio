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
          Hello, I’m Gokul Sree Chandra, an enthusiastic learner and practitioner in Natural Language Processing and Machine Learning. I’m currently pursuing a B.Tech in Computer Science Engineering at GITAM, with a deep interest in building language-aware AI systems.
        </p>
        <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-4">
          My journey began with a curiosity for how machines understand human language, which led me to explore NLP techniques like text classification, Transformers, and Retrieval-Augmented Generation (RAG). I’ve worked with libraries such as PyTorch, Scikit-learn, and Hugging Face, and continue to build projects that strengthen my skills.
        </p>
        <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-4">
          From participating in hackathons to collaborating with peers, I’m committed to becoming a skilled NLP engineer, one who can turn unstructured language into intelligent action.
        </p>
        <p className="text-lg sm:text-xl text-foreground leading-relaxed">
          Let’s connect if you’re working on AI/NLP projects or exploring innovative ideas in this space.
        </p>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
