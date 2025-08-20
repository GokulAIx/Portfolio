
import SectionContainer from '@/components/shared/section-container';
import ProjectCard from '@/components/projects/project-card';

const projectsData = [
  {
    title: "Blaze - AI Web Page Summarizer",
    description: "Developed a full-stack AI Chrome extension with a Python/Flask back-end to summarize webpages using the Google Gemini API. Engineered a Map-Reduce strategy with LangChain to handle long documents and managed API rate limits with intelligent request handling.",
    tools: ["LangChain", "Google Gemini API", "JavaScript", "Python", "Flask"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "web summarizer",
    demoLink: "https://www.linkedin.com/feed/update/urn:li:activity:7363034410851446784/",
  },
  {
    title: "PN Junction Lab",
    description: "PN Junction Lab is a web-based simulation tool that allows users to study the characteristics of PN junction diodes. It provides a virtual laboratory environment where users can perform experiments, analyze data, and visualize the behavior of diodes under different conditions.",
    tools: ["React", "Chart.js", "SCSS"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "electronics simulation",
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
