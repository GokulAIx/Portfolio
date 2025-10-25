import SectionContainer from '@/components/shared/section-container';
import ExperienceItem from '@/components/experience/experience-item';

const experienceData = [
  {
    title: "Quant AI Intern (Full Time)",
    company: "Fidura AI (Remote, India)",
    duration: "October 2025 – Present",
    responsibilities: [
      "Engineered 1 AI agent orchestrator using LangGraph to automate complex quantitative workflows, from research to simulated execution.",
      "Generated 5+ backend REST APIs (FastAPI) that allow the agent to connect to and control the financial tools.",
      "Integrated 4+ custom financial tools for strategy backtesting, simulated order placement, and calculating hedge ratios for risk management.",
    ],
  },
  {
    title: "Head Of Operations (Technical Internship, Full Time)",
    company: "Young Compete (Remote, India)",
    duration: "July 2024 – January 2025",
    responsibilities: [
      "Developed 3+ tech projects, including Prof Connect, enabling streamlined networking for 1,500+ students and teachers.",
      "Automated data scraping from 5 sources for the off-campus placements page, utilizing APIs, and improved access rate by 30%.",
      "Led a team to deliver technical solutions and organized events, focusing on user engagement and community building.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <SectionContainer id="experience" title="Professional Experience">
      <div className="space-y-8">
        {experienceData.map((exp) => (
          <ExperienceItem key={exp.title} {...exp} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
