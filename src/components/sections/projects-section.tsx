
import SectionContainer from '@/components/shared/section-container';
import ProjectCard from '@/components/projects/project-card';

const projectsData = [
  {
    title: "Sentiment Analysis on IMDB Dataset",
    description: "Used the pre-trained Sentence-Transformer (all-MiniLM-L6-v2) to generate sentence embeddings and built a fully connected PyTorch neural network to classify reviews as positive or negative. Processed 50,000 IMDB reviews and achieved 80.24% test accuracy, demonstrating transfer learning’s effectiveness in sentiment analysis.",
    tools: ["Python", "PyTorch", "sentence-transformers", "Neural Networks"],
    imageUrl: "/Sentiment-Analysis.jpg",
    imageHint: "text analysis",
    githubLink: "https://github.com/Gokul-sc/PROJECTS",
  },
  {
    title: "SkillCheck – AI Skill Evaluator",
    description: "Developed SkillCheck, a Flask-based web application utilizing Groq API to evaluate user skills and improving learning outcomes. Integrated a Large Language Model (LLM) via Groq API, providing personalized AI-driven feedback, enabling learners to optimize their study approach 100% of the time. Used Flask for backend, Pandas for data preprocessing, Groq API for LLM integration.",
    tools: ["Flask", "Groq API", "LLM", "Python"],
    imageUrl: "/SkillCheck.png",
    imageHint: "skills assessment",
    githubLink: "https://github.com/Gokul-sc/SkillCheck",
  },
  // Example projects for testing horizontal scroll:
  {
    title: "E-commerce Platform Backend",
    description: "Designed and implemented a scalable backend for an e-commerce platform using Node.js, Express, and MongoDB, featuring product management, user authentication, and order processing.",
    tools: ["Node.js", "Express", "MongoDB", "JWT"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    githubLink: "https://github.com/Gokul-sc/",
  },
  {
    title: "Weather Dashboard App",
    description: "A React-based web application that fetches and displays real-time weather data from a third-party API, featuring dynamic updates and a user-friendly interface.",
    tools: ["React", "API Integration", "CSS"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "weather forecast",
    demoLink: "#",
  }
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
