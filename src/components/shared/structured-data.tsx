'use client';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "P Gokul Sree Chandra",
    "url": "https://gokulsreechandra.dev",
    "jobTitle": "AI Systems Engineer",
    "alumniOf": "GITAM University",
    "sameAs": [
      "https://github.com/GokulAIx",
      "https://www.linkedin.com/in/gokulsreechandra/",
      "https://x.com/GokulAIx",
      "https://medium.com/@gokulaix"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Agentic Workflows",
      "Retrieval-Augmented Generation",
      "Backend API Development",
      "Machine Learning",
      "Python",
      "FastAPI"
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
