
import { cn } from '@/lib/utils';

const QuoteCard = () => {
  return (
    <div
      className={cn(
        'flex h-[400px] w-full max-w-[600px] items-center justify-center rounded-lg bg-card/5 p-8 shadow-xl backdrop-blur-sm',
        'border border-primary/20',
        'contact-form-fire-border' // Re-using an existing cool animation
      )}
    >
      <p className="font-code text-center text-xl sm:text-2xl leading-relaxed text-slate-100"
         style={{ textShadow: '0 0 4px hsl(var(--primary)/0.8), 0 0 12px hsl(var(--primary)/0.5), 0 0 25px hsl(var(--primary)/0.3)' }}>
        "Training Artificial Networks
        <br />
        with my Biological Neural Network!"
      </p>
    </div>
  );
};

export default QuoteCard;
