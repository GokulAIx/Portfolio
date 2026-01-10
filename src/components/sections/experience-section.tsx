
import SectionContainer from '@/components/shared/section-container';
import ExperienceItem from '@/components/experience/experience-item';

const experienceData = [
  {
    title: "Quant AI Intern (Full Time)",
    company: "Fidura AI (Remote, India)",
    duration: "October 2025 – Present",
    responsibilities: [
      "Designed and owned a production-grade RAG extraction pipeline converting tender PDFs into 19 schema-validated fields, using hybrid retrieval (sentence-transformers + pgvector), Docling/PyMuPDF ingestion, bounded-concurrency LLM execution, and page-level provenance for traceability.",
      "Built an agent-orchestrated supply-chain knowledge graph system that dynamically constructs end-to-end origin-to-destination networks (producers, processors, logistics, regulators, distributors), provides source-backed news summaries per node, an aggregated graph-level supply-chain health report with drill-down capability, and supports natural-language querying across the entire supply chain.",
      "Architected and implemented a LangGraph-based agent orchestration system to automate quantitative workflows from research to simulated execution.",
      "Built and maintained 5+ FastAPI services exposing AI agents and financial tools as external APIs, handling request validation, concurrency, and downstream integrations.",
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
