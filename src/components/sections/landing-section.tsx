
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import SectionContainer from '@/components/shared/section-container';
import { Button } from '@/components/ui/button';

// Simple X logo SVG
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LandingSection = () => {
  return (
    <SectionContainer id="home" className="pt-20 md:pt-28 bg-gradient-to-br from-background to-secondary/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-primary/50">
            <Image
              src="/Profile-pic.jpg"
              alt="Gokul Sree Chandra"
              fill={true}
              style={{ objectFit: 'cover' }}
              data-ai-hint="profile photo"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 font-headline">
            Gokul Sree Chandra <span className="text-2xl sm:text-3xl text-primary/90 font-medium">@GokulAIx</span>
          </h1>
          <div className="flex flex-col items-center md:items-start mb-4">
            <p className="flex items-center gap-2 text-lg sm:text-xl text-primary">
              <span>⚡ ML/NLP Engineer in Progress</span>
            </p>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-md">
            The Mind Behind The Model.
          </p>

          <div className="mt-8 p-6 border border-border rounded-xl shadow-xl bg-secondary/50 max-w-md w-full mx-auto md:ml-0">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left text-foreground">
              My Socials
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/GokulAIx" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-7 w-7" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/gokulsreechandra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-7 w-7 text-blue-600 dark:text-blue-500" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://x.com/GokulAIx" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
                  <XIcon className="h-7 w-7" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:polavarapugokul@gmail.com" aria-label="Email">
                  <Mail className="h-7 w-7" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <Image
            src="/Progress-Bar.jpg" 
            alt="Progress Bar Visual"
            width={400}
            height={400}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="progress analytics"
            unoptimized={true} 
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default LandingSection;
