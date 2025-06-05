import SectionContainer from '@/components/shared/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { BookMarked } from 'lucide-react'; // Using BookMarked for certifications

const certifications = [
  { name: "IBM – Databases and SQL for Data Science", issuerLogo: "IBM" },
  { name: "Google AI Essentials – Coursera", issuerLogo: "Google" },
  { name: "AI for Everyone – deeplearning.ai", issuerLogo: "deeplearning.ai" },
];

const CertificationsSection = () => {
  return (
    <SectionContainer id="certifications" title="Certifications">
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center text-md">
                <BookMarked className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>
                  <span className="font-medium">{cert.name}</span>
                  <span className="text-muted-foreground text-sm"> - {cert.issuerLogo}</span>
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </SectionContainer>
  );
};

export default CertificationsSection;
