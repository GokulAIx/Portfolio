import SectionContainer from '@/components/shared/section-container';
import ExperienceItem from '@/components/experience/experience-item';

const experienceData = [
  {
    title: "Head of Operations (Tech Internship)",
    company: "Young Compete",
    duration: "June 2024 – Jan 2025",
    responsibilities: [
      "Built Prof Connect platform for 1,500+ users",
      "Automated placement data scraping from 5+ sources",
      "Organized events and led technical teams",
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
