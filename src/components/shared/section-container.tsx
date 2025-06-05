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
      className={cn('py-16 sm:py-20 md:py-24', className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {title && (
          <h2 className={cn('text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center font-headline', titleClassName)}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
