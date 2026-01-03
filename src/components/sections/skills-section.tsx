
import SectionContainer from '@/components/shared/section-container';
import SkillCategory from '@/components/skills/skill-category';
import { Code2, Brain, Database, Cpu, Wrench, Sparkles } from 'lucide-react';

const skillsData = {
  coreBackend: {
    title: "Core Languages & Backend",
    items: ["Python", "FastAPI", "REST API Design", "SQL"],
    icon: <Code2 className="w-6 h-6" />
  },
  llmsAgents: {
    title: "LLMs & Agentic Systems",
    items: ["Agentic Workflows (LangGraph)", "Retrieval-Augmented Generation (RAG)", "LangChain", "LLM APIs (Gemini, OpenAI, Groq)", "Prompt Engineering", "RAG Evaluation (Ragas, TruLens)"],
    icon: <Sparkles className="w-6 h-6" />
  },
  retrievalVector: {
    title: "Retrieval & Vector Systems",
    items: ["Sentence-Transformers", "Vector Databases (ChromaDB / pgvector)", "Embedding Models"],
    icon: <Database className="w-6 h-6" />
  },
  mlDl: {
    title: "Machine Learning & Deep Learning",
    items: ["Supervised Learning", "Feature Engineering", "Transformer Architectures", "Fine-Tuning", "PyTorch"],
    icon: <Cpu className="w-6 h-6" />
  },
  mlTooling: {
    title: "ML and Data Tooling",
    items: ["NumPy", "Pandas", "Scikit-learn"],
    icon: <Wrench className="w-6 h-6" />
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
