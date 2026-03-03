import SectionContainer from '@/components/shared/section-container';
import ProjectCard from '@/components/projects/project-card';

const projectsData = [
  {
    title: "Agent Breaker – Adversarial Testing Framework for AI Agents - PyPI Package",
    description: "Built a Chaos Monkey-style adversarial testing framework that automatically probes AI agents for prompt-injection and goal-hijacking vulnerabilities using domain-aware attack generation. • Implemented runtime agent introspection to auto-detect tools and capabilities, enabling targeted attack payload generation and plug-and-play testing for LangGraph applications. • Designed a behavioral evaluation engine with negation-aware rule analysis and CLI reporting to identify security failures such as data leakage, role acceptance, and unauthorized actions.",
    tools: ["Python", "Pydantic", "Typer CLI", "PyPI", "Security"],
    imageUrl: "https://picsum.photos/seed/agentbreaker/800/600",
    imageHint: "security testing",
    githubLink: "https://github.com/GokulAIx/Agent-Breaker",
    demoLink: "https://www.youtube.com/watch?v=UKaW80ka2Ws",
    pypiLink: "https://pypi.org/project/agent-breaker/",
  },
  {
    title: "Not-Jarvis - Stateful AI Agent Framework",
    description: "Built a stateful, multi-turn AI agent using LangGraph with an iterative single-step planning loop, executing one action per iteration with explicit completion checks. • Designed a hybrid Python + LLM architecture where Python performs deterministic URL extraction and normalization, achieving zero URL hallucination and duplicate action prevention. • Implemented persistent conversation memory (PostgreSQL checkpointer), Server-Sent Events (SSE) streaming, and schema-validated planning (Pydantic) to ensure reliable, debuggable agent execution.",
    tools: ["Python", "FastAPI", "LangGraph", "LangChain", "Gemini API", "PostgreSQL", "Pydantic"],
    imageUrl: "/Not-Jarvis.png",
    imageHint: "AI agent",
    githubLink: "https://github.com/GokulAIx/Not-Jarvis",
    demoLink: "https://www.youtube.com/watch?v=1vU_-1AaM0A",
  },
  {
    title: "VidQuery - Low-Latency RAG System for Long-Form Video QA",
    description: "Designed and built a sub-5s latency RAG system for long-form YouTube videos, implementing URL-based transcript caching to reduce compute costs and latency for repeated queries. Implemented hybrid dense + keyword search with multi-query retrieval while enforcing strict top-k and token caps to keep LLM context small and cost-efficient.",
    tools: ["Python", "LangChain", "Gemini", "Hugging Face", "Sentence-Transformers", "ChromaDB"],
    imageUrl: "/VidQuery.jpg",
    imageHint: "video query",
    githubLink: "https://github.com/GokulAIx/VidQuery",
    demoLink: "https://youtu.be/e6TZ7XHZ3ek",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7365933549864091649/",
  },
  {
    title: "Blaze - AI Web Page Summarizer and ChatBot - Chrome Extension",
    description: "A multi-functional AI browser extension providing instant summarization and enabling users to ask in-depth questions about any webpage’s content. This tool leverages a custom-built RAG pipeline and a Python/Flask API to deliver precise, AI-driven insights directly in the browser. Implemented Map-Reduce for efficient Web-Page summarization, and ChromaDB for Vector Store.",
    tools: ["Python", "LangChain", "Google Gemini", "Hugging Face", "ChromaDB", "JavaScript"],
    imageUrl: "/Blaze V2.jpg",
    imageHint: "web summarizer",
    demoLink: "https://www.linkedin.com/feed/update/urn:li:activity:7371006942615580672/",
    githubLink: "https://github.com/GokulAIx/Blaze",
  },
  {
    title: "Sentiment Analysis on IMDB Dataset",
    description: "Used the pre-trained Sentence-Transformer (all-MiniLM-L6-v2) to generate sentence embeddings and built a fully connected PyTorch neural network to classify reviews as positive or negative. Processed 50,000 IMDB reviews and achieved 80.24% test accuracy, demonstrating transfer learning’s effectiveness in sentiment analysis.",
    tools: ["Python", "PyTorch", "sentence-transformers", "Neural Networks"],
    imageUrl: "/Sentiment-Analysis.jpg",
    imageHint: "sentiment analysis chart",
    githubLink: "https://github.com/Gokul-sc/PROJECTS",
    demoLink: "https://gokulaix-sentiment-analysis.streamlit.app/",
  },
  {
    title: "SkillCheck – AI Skill Evaluator",
    description: "Developed SkillCheck, a Flask-based web application utilizing Groq API to evaluate user skills and improving learning outcomes. Integrated a Large Language Model (LLM) via Groq API, providing personalized AI-driven feedback, enabling learners to optimize their study approach 100% of the time. Used Flask for backend, Pandas for data preprocessing, Groq API for LLM integration.",
    tools: ["Flask", "Groq API", "LLM", "Python"],
    imageUrl: "/SkillCheck.png",
    imageHint: "skills assessment",
    githubLink: "https://github.com/Gokul-sc/SkillCheck",
  },
];

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects" title="My Projects">
      <div className="border border-border rounded-lg p-4 md:p-6 overflow-x-auto shadow-inner bg-card/50">
        <div className="flex flex-nowrap gap-6 lg:gap-8 py-2">
          {projectsData.map((project) => (
            <div key={project.title} className="flex-shrink-0 w-80 md:w-96">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;