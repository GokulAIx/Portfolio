
import SectionContainer from '@/components/shared/section-container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';
import Link from 'next/link';

const ResumeSection = () => {
  return (
    <SectionContainer id="resume" className="bg-secondary/30">
      <Card className="shadow-lg">
        <CardContent className="p-6 sm:p-8 text-center">
          <h3 className="text-2xl font-semibold mb-6 font-headline">My Resume</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Interested in learning more about my qualifications? Download my resume for a detailed overview.
          </p>
          <Button asChild size="lg">
            {/* 
              Ensure your resume PDF is named "Gokul-Resume.pdf" 
              and placed in the "public" folder of your project.
              The 'download' attribute is removed to let the browser handle the file.
            */}
            <Link href="/Gokul-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
          </Button>
        </CardContent>
      </Card>
    </SectionContainer>
  );
};

export default ResumeSection;
