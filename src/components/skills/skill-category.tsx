import type React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon?: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-secondary">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-semibold font-headline">{title}</CardTitle>
        {icon && <div className="text-primary">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 bg-accent/50 text-primary hover:bg-accent/70">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCategory;