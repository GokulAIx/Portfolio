import SectionContainer from '@/components/shared/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { BookMarked } from 'lucide-react';
import Link from 'next/link';

const certifications = [
  { name: "IBM – Databases and SQL for Data Science", issuerLogo: "IBM", link: "https://www.credly.com/badges/ff106da2-2c8b-404a-97db-25f720751b53" },
  { name: "Google AI Essentials – Coursera", issuerLogo: "Google", link: "https://www.coursera.org/account/accomplishments/verify/9V0R9FFSRM36?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
  { name: "AI for Everyone – deeplearning.ai", issuerLogo: "deeplearning.ai", link: "https://www.coursera.org/account/accomplishments/verify/VS2PUCRUY0S1?utm_source=android&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
];

const CertificationsSection = () => {
  return (
    <SectionContainer id="certifications" title="Certifications" className="dark">
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center text-md">
                <BookMarked className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>
                  <span className="font-medium">{cert.name}</span>
                  <span className="text-muted-foreground text-sm"> - {' '}
                    {cert.link ? (
                      <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="font-medium underline text-[hsl(var(--highlight-yellow))]">
                        {cert.issuerLogo}
                      </Link>
                    ) : (
                      <span className="font-medium underline text-[hsl(var(--highlight-yellow))]">{cert.issuerLogo}</span>
                    )}
                  </span>
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
