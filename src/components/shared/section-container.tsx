
import type React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
  titleClassName?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, title, className, children, titleClassName }) => {
  return (
    <section
      id={id}
      className={cn(
        'py-10 sm:py-12 md:py-14 border-b border-border/60', // Reduced padding, added bottom border
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {title && (
          <h2 className={cn('text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center font-headline', titleClassName)}> {/* Adjusted title margin slightly */}
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
