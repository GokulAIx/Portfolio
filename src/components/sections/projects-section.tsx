
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
  // Add more projects here if needed to test scrolling
  // Example:
  // {
  //   title: "Another Project",
  //   description: "Description for another project to make the content taller.",
  //   tools: ["React", "Node.js", "MongoDB"],
  //   imageUrl: "https://placehold.co/600x400.png",
  //   imageHint: "placeholder project",
  //   githubLink: "https://github.com/Gokul-sc/",
  // },
  // {
  //   title: "Yet Another Project",
  //   description: "This is a description for yet another project, further increasing the content height to ensure scrolling is visible.",
  //   tools: ["Next.js", "Tailwind CSS", "TypeScript"],
  //   imageUrl: "https://placehold.co/600x400.png",
  //   imageHint: "web app",
  //   demoLink: "#",
  // }
];

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects" title="My Projects">
      <div className="border border-border rounded-lg p-4 md:p-6 max-h-[70vh] overflow-y-auto shadow-inner bg-card/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
