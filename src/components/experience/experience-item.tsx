import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, duration, responsibilities }) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold font-headline">{title}</CardTitle>
          <Briefcase className="w-6 h-6 text-primary" />
        </div>
        <CardDescription className="text-base text-muted-foreground">
          {company} | <span className="italic">{duration}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1 text-sm text-foreground">
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExperienceItem;
