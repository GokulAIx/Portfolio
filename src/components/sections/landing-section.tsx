import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, Sparkles, Cpu } from 'lucide-react';
import SectionContainer from '@/components/shared/section-container';
import { Button } from '@/components/ui/button';

const LandingSection = () => {
  return (
    <SectionContainer id="home" className="pt-20 md:pt-28 bg-gradient-to-br from-background to-secondary/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-primary/50">
            <Image
              src="https://placehold.co/300x300.png"
              alt="Gokul Sree Chandra"
              fill={true}
              style={{ objectFit: 'cover' }}
              data-ai-hint="profile person"
              priority // Good to add for LCP images
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 font-headline">
            Gokul Sree Chandra
          </h1>
          <div className="flex items-center gap-2 text-lg sm:text-xl text-primary mb-4">
            <Sparkles className="w-5 h-5" />
            <span>AI/ML</span>
            <span className="text-foreground/50">|</span>
            <Cpu className="w-5 h-5" />
            <span>NLP Enthusiast</span>
            <span className="text-foreground/50">|</span>
            <span>Tech Explorer</span>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-md">
            Turning data into intelligent systems. Always learning, always building.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/Gokul-sc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/gokulsreechandra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:polavarapugokul@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <Image
            src="https://placehold.co/500x500.png"
            alt="Abstract AI art"
            width={400}
            height={400}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="abstract technology"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default LandingSection;
