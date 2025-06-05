
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[]; // Keep prop name as tools for broader reusability, label is changed
  imageUrl: string;
  imageHint: string;
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tools, imageUrl, imageHint, githubLink, demoLink }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="relative w-full h-48 mb-4 rounded-t-md overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill={true}
            style={{ objectFit: 'cover' }}
            data-ai-hint={imageHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Provide sizes for responsive images with fill
          />
        </div>
        <CardTitle className="text-xl font-semibold font-headline">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground min-h-[3rem]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Tech Used:</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="px-2 py-0.5 bg-accent/50 text-primary hover:bg-accent/70">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto pt-0">
        <div className="flex gap-2 w-full">
          {githubLink && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
          {demoLink && (
            <Button variant="default" size="sm" asChild className="flex-1">
              <Link href={demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
