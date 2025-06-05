import SectionContainer from '@/components/shared/section-container';
import ExperienceItem from '@/components/experience/experience-item';

const experienceData = [
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
