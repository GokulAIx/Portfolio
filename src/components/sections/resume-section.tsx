import SectionContainer from '@/components/shared/section-container';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

const ResumeSection = () => {
  return (
    <SectionContainer id="resume" className="bg-secondary/30">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-6 font-headline">My Resume</h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Interested in learning more about my qualifications? Download my resume for a detailed overview.
        </p>
        <Button asChild size="lg">
          <Link href="#resume-link-placeholder" target="_blank" rel="noopener noreferrer"> {/* Replace with actual link */}
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Link>
        </Button>
      </div>
    </SectionContainer>
  );
};

export default ResumeSection;
