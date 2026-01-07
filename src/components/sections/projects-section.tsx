
import SectionContainer from '@/components/shared/section-container';
import ProjectCard from '@/components/projects/project-card';

const projectsData = [
  {
    title: "Not-Jarvis (V1) - Stateful AI Agent Framework",
    description: "Built a stateful, multi-turn AI agent using LangGraph with an iterative single-step planning loop, executing one action per iteration with explicit completion checks. • Designed a hybrid Python + LLM architecture where Python performs deterministic URL extraction and normalization, achieving zero URL hallucination and duplicate action prevention. • Implemented persistent conversation memory (PostgreSQL checkpointer), Server-Sent Events (SSE) streaming, and schema-validated planning (Pydantic) to ensure reliable, debuggable agent execution.",
    tools: ["Python", "FastAPI", "LangGraph", "LangChain", "Gemini API", "PostgreSQL (Supabase)", "Pydantic"],
    imageUrl: "/Not-Jarvis.jpg",
    imageHint: "AI agent",
    githubLink: "https://github.com/GokulAIx/Not-Jarvis",
    demoLink: "https://www.youtube.com/watch?v=1vU_-1AaM0A",
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
    title: "VidQuery – AI YouTube Video Assistant",
    description: "Engineered a RAG-powered app with LangChain, ChromaDB, and FastAPI to process video transcripts and deliver context-aware answers. Allows users to instantly get answers from a YouTube video, and includes an interactive Streamlit UI.",
    tools: ["LangChain", "ChromaDB", "FastAPI", "Streamlit", "Gemini Flash", "RAG"],
    imageUrl: "/VidQuery.jpg",
    imageHint: "video query",
    githubLink: "https://github.com/GokulAIx/VidQuery",
    demoLink: "https://gokulaix-vidquery.streamlit.app/",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7365933549864091649/",
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
        <div className="flex flex-nowrap gap-6 lg:gap-8 py-2"> {/* Added py-2 for a little vertical padding for scrollbar */}
          {projectsData.map((project) => (
            <div key={project.title} className="flex-shrink-0 w-80 md:w-96"> {/* Wrapper for fixed width */}
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
