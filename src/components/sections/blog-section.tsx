
import SectionContainer from '@/components/shared/section-container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

const BlogSection = () => {
  return (
    <SectionContainer id="blog" className="bg-secondary/30">
      <Card className="shadow-lg">
        <CardContent className="p-6 sm:p-8 text-center">
          <h3 className="text-2xl font-semibold mb-6 font-headline">My Blog</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            I write about Machine Learning, AI, and the projects I'm working on. Check out my articles on Medium.
          </p>
          <Button asChild size="lg" className="btn-spacey">
            <Link href="https://medium.com/@gokulaix.dev" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-5 w-5" />
              Read on Medium
            </Link>
          </Button>
        </CardContent>
      </Card>
    </SectionContainer>
  );
};

export default BlogSection;
