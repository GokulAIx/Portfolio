'use client';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "P Gokul Sree Chandra",
    "alternateName": "GokulAIx",
    "url": "https://gokulsreechandra.dev",
    "jobTitle": "AI Systems Engineer",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "GITAM University"
    },
    "sameAs": [
      "https://github.com/GokulAIx",
      "https://www.linkedin.com/in/gokulsreechandra/",
      "https://x.com/GokulAIx",
      "https://medium.com/@gokulaix"
    ],
    "description": "P Gokul Sree Chandra is an AI Engineer from India specializing in Agentic Systems, Machine Learning, and Backend API development.",
    "knowsAbout": [
      "Artificial Intelligence",
      "Agentic Workflows",
      "Retrieval-Augmented Generation",
      "Backend API Development",
      "Machine Learning",
      "Generative AI",
      "Python",
      "FastAPI",
      "LangGraph"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
