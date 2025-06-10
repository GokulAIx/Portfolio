import type React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon?: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <Card className={cn(
      "shadow-lg bg-secondary",
      "skill-card-animated-fire-hover" // Added class for fire hover effect
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-semibold font-headline">{title}</CardTitle>
        {icon && <div className="text-primary">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 bg-card text-primary hover:bg-card/90">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCategory;
