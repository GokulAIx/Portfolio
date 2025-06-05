
import SectionContainer from '@/components/shared/section-container';
import SkillCategory from '@/components/skills/skill-category';
import { Code2, Brain, Lightbulb, Cpu, MessageSquareText } from 'lucide-react';

const skillsData = {
  languages: {
    title: "Programming Languages",
    items: ["Python", "SQL (MySQL, SQLite)", "Joins", "Subqueries", "Window Functions", "Indexing", "Query Optimization"],
    icon: <Code2 className="w-6 h-6" />
  },
  frameworks: {
    title: "Libraries/Frameworks",
    items: ["PyTorch", "Scikit-learn", "Numpy", "Pandas (Data Cleaning)", "NLTK", "Sentence Transformers", "Flask", "Matplotlib", "Seaborn"],
    icon: <Brain className="w-6 h-6" />
  },
  machineLearning: {
    title: "Machine Learning",
    items: [
      "Supervised Learning (Linear/Logistic Regression)", 
      "Regularization (L1 & L2)", 
      "Feature Engineering", 
      "Linear Algebra", 
      "Probability", 
      "Statistics", 
      "Data Preprocessing (Normalization, Standardization, Missing Data Handling)"
    ],
    icon: <Lightbulb className="w-6 h-6" />
  },
  deepLearning: {
    title: "Deep Learning",
    items: ["Neural Network Architectures", "Activation Functions", "Loss Functions", "Optimization (PyTorch)"],
    icon: <Cpu className="w-6 h-6" />
  },
  nlp: {
    title: "Natural Language Processing",
    items: ["Tokenization", "Bag of Words", "TF-IDF", "Stemming", "Lemmatization (NLTK)", "Sentence Transformers (Embedding Generation)"],
    icon: <MessageSquareText className="w-6 h-6" />
  }
};

const SkillsSection = () => {
  return (
    <SectionContainer id="skills" title="My Skills" titleClassName="text-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {Object.values(skillsData).map(category => (
          <SkillCategory 
            key={category.title} 
            title={category.title} 
            skills={category.items} 
            icon={category.icon} 
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
