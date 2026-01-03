
import { cn } from '@/lib/utils';

const QuoteCard = () => {
  return (
    <div
      className={cn(
        'flex h-[400px] w-full max-w-[600px] flex-col items-center justify-center rounded-lg bg-card/5 p-8 shadow-xl backdrop-blur-sm',
        'border border-primary/20',
        'quote-card-pulse-glow' 
      )}
    >
      <div className="relative w-full flex-grow flex flex-col items-center justify-center">
        <p className="font-code text-center text-xl sm:text-2xl leading-relaxed text-slate-100 animated-text-glow">
          "Building intelligent AI systems
          <br />
          with reliable backend foundations."
        </p>
      </div>
    </div>
  );
};

export default QuoteCard;
