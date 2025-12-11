
import SectionContainer from '@/components/shared/section-container';
import SkillCategory from '@/components/skills/skill-category';
import { Code2, Brain, Lightbulb, Cpu, MessageSquareText, Sparkles } from 'lucide-react';

const skillsData = {
  languages: {
    title: "Programming Languages",
    items: ["Python", "SQL", "Joins", "Subqueries", "Window Functions", "Indexing", "Query Optimization"],
    icon: <Code2 className="w-6 h-6" />
  },
  genAI: {
    title: "GenAI and LLMs",
    items: ["LangChain", "LangGraph", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "Hugging Face", "Transformers", "LLM APIs (Google Gemini, Groq, OpenAI)", "Flask-based AI Deployment"],
    icon: <Sparkles className="w-6 h-6" />
  },
  deepLearning: {
    title: "Deep Learning",
    items: ["Transformer Architecture", "Encoder-Decoder Models", "Fine-Tuning", "Neural Network Architectures", "Activation Functions", "Loss Functions", "Optimization (PyTorch)"],
    icon: <Cpu className="w-6 h-6" />
  },
  machineLearning: {
    title: "Machine Learning",
    items: ["Supervised Learning (Regression, Classification)", "Regularization (L1 & L2)", "Feature Engineering", "Model Evaluation (Cross-validation, Accuracy, Precision, Recall, F1)", "Data Preprocessing (Normalization, Standardization, Missing Data Handling)", "Probability & Statistics"],
    icon: <Lightbulb className="w-6 h-6" />
  },
  nlp: {
    title: "Natural Language Processing",
    items: ["Sentence Transformers (Embedding Generation)", "Tokenization", "TF-IDF", "Bag of Words", "Stemming", "Lemmatization", "Text Classification", "Summarization"],
    icon: <MessageSquareText className="w-6 h-6" />
  },
  frameworks: {
    title: "Libraries/Frameworks",
    items: ["PyTorch", "Scikit-learn", "Numpy", "Pandas (Data Cleaning)", "NLTK", "Sentence Transformers", "Flask", "FastAPI"],
    icon: <Brain className="w-6 h-6" />
  },
};

const SkillsSection = () => {
  return (
    <SectionContainer id="skills" title="My Skills" titleClassName="text-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
