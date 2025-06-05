import SectionContainer from '@/components/shared/section-container';
import ProjectCard from '@/components/projects/project-card';

const projectsData = [
  {
    title: "Sentiment Analysis on IMDB Dataset",
    description: "Used the pre-trained Sentence-Transformer (all-MiniLM-L6-v2) to generate sentence embeddings and built a fully connected PyTorch neural network to classify reviews as positive or negative. Processed 50,000 IMDB reviews and achieved 80.24% test accuracy, demonstrating transfer learning’s effectiveness in sentiment analysis.",
    tools: ["Python", "PyTorch", "sentence-transformers", "Neural Networks"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "text analysis",
    githubLink: "https://github.com/Gokul-sc/PROJECTS",
  },
  {
    title: "SkillCheck – AI Skill Evaluator",
    description: "Developed SkillCheck, a Flask-based web application utilizing Groq API to evaluate user skills and improving learning outcomes. Integrated a Large Language Model (LLM) via Groq API, providing personalized AI-driven feedback, enabling learners to optimize their study approach 100% of the time. Used Flask for backend, Pandas for data preprocessing, Groq API for LLM integration.",
    tools: ["Flask", "Groq API", "LLM", "Python", "HTML", "CSS"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "skills assessment",
    githubLink: "https://github.com/Gokul-sc/SkillCheck",
  },
];

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
