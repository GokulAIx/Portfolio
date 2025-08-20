
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  imageUrl: string;
  imageHint: string;
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tools, imageUrl, imageHint, githubLink, demoLink }) => {
  return (
    <Card className={cn(
      "group flex flex-col h-full overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 project-card-animated-dark-energy-hover"
    )}>
      <CardHeader>
        <div className="relative w-full h-48 mb-4 rounded-t-md overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill={true}
            style={{ objectFit: 'cover' }}
            data-ai-hint={imageHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardTitle className="text-xl font-semibold font-headline">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground min-h-[3rem] rounded-md p-1 -m-1 transition-all duration-300 group-hover:ring-2 group-hover:ring-[hsl(var(--highlight-yellow)/0.6)]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4 rounded-md p-2 -m-2 transition-all duration-300 group-hover:ring-2 group-hover:ring-[hsl(var(--highlight-yellow)/0.6)]">
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Tech Used:</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="px-2 py-0.5 bg-card text-primary hover:bg-card/90">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto pt-0">
        <div className="flex flex-col gap-2 w-full">
          {demoLink && (
            <Button variant="default" size="sm" asChild className="flex-1">
              <Link href={demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> 
                {title === 'Blaze - AI web page Summarizer' ? 'Demo Video on Linkedin' : 'Live Demo'}
              </Link>
            </Button>
          )}
          {githubLink && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
