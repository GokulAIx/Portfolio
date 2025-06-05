import SectionContainer from '@/components/shared/section-container';
import ProjectCard from '@/components/projects/project-card';

const projectsData = [
  {
    title: "Sentiment Analysis on IMDB Dataset",
    description: "Built using PyTorch and Sentence Transformers. Achieved 80.24% accuracy on 50K reviews using transfer learning.",
    tools: ["PyTorch", "Sentence Transformers", "Numpy", "Pandas"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "text analysis",
    // githubLink: "Optional if public", // Omitted as per instruction
  },
  {
    title: "SkillCheck – AI Skill Evaluator",
    description: "Flask web app using Groq API to assess user skills and provide personalized feedback via LLM.",
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
