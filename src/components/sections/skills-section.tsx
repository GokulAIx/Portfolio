import SectionContainer from '@/components/shared/section-container';
import SkillCategory from '@/components/skills/skill-category';
import SkillEvaluatorForm from '@/components/skills/skill-evaluator-form';
import { Code2, Brain, Database, Wrench, Lightbulb } from 'lucide-react';

const skillsData = {
  languages: {
    title: "Languages",
    items: ["Python", "SQL (MySQL, SQLite)", "C"],
    icon: <Code2 className="w-6 h-6" />
  },
  frameworks: {
    title: "Frameworks/Libraries",
    items: ["PyTorch", "Scikit-learn", "Numpy", "Pandas", "Matplotlib", "Seaborn", "NLTK", "Sentence Transformers", "Flask"],
    icon: <Brain className="w-6 h-6" />
  },
  concepts: {
    title: "Concepts",
    items: ["Neural Networks", "Transfer Learning", "Feature Engineering", "Data Preprocessing", "Statistics", "Linear Algebra"],
    icon: <Lightbulb className="w-6 h-6" />
  },
  tools: {
    title: "Tools",
    items: ["Git", "Figma", "MySQL", "Linux", "DaVinci Resolve"],
    icon: <Wrench className="w-6 h-6" />
  }
};

const SkillsSection = () => {
  return (
    <SectionContainer id="skills" title="My Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <SkillCategory title={skillsData.languages.title} skills={skillsData.languages.items} icon={skillsData.languages.icon} />
        <SkillCategory title={skillsData.frameworks.title} skills={skillsData.frameworks.items} icon={skillsData.frameworks.icon} />
        <SkillCategory title={skillsData.concepts.title} skills={skillsData.concepts.items} icon={skillsData.concepts.icon} />
        <SkillCategory title={skillsData.tools.title} skills={skillsData.tools.items} icon={skillsData.tools.icon} />
      </div>
      <SkillEvaluatorForm />
    </SectionContainer>
  );
};

export default SkillsSection;
