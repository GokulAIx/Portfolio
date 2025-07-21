
'use client';

import { useState, useEffect, useRef } from 'react';
import { BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

const QUOTE_LINES = [
  "\"Training Artificial Networks",
  "with my Biological Neural Network!\""
];
const TOTAL_CHARS = QUOTE_LINES.join(" ").length;
const ANIMATION_DURATION = TOTAL_CHARS * 40; // 40ms per char

const TypewriterQuoteCard = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Reset animation if it's already completed
    if (lineIndex >= QUOTE_LINES.length) {
      const timer = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
        setDisplayedText("");
      }, 3000); // Pause for 3s before restarting
      return () => clearTimeout(timer); // Cleanup the timer
    }

    const typingInterval = setInterval(() => {
      if (charIndex < QUOTE_LINES[lineIndex].length) {
        setDisplayedText((prev) => prev + QUOTE_LINES[lineIndex][charIndex]);
        setCharIndex((prev) => prev + 1);

        // Play sound
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(error => {
            // Autoplay was prevented. This is common in modern browsers.
            // The user needs to interact with the page first.
            // We can log this for debugging but won't show an error to the user.
            console.warn("Typewriter sound autoplay was prevented.", error);
          });
        }

      } else {
        // Move to the next line
        if (lineIndex < QUOTE_LINES.length - 1) {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
          setDisplayedText((prev) => prev + "\n");
        } else {
          // End of all lines
          setLineIndex((prev) => prev + 1);
          clearInterval(typingInterval);
        }
      }
    }, 60); // Speed of typing

    return () => clearInterval(typingInterval);
  }, [charIndex, lineIndex]);

  return (
    <div
      className={cn(
        'relative flex h-[400px] w-full max-w-[600px] flex-col items-center justify-center rounded-lg bg-card/5 p-8 shadow-xl backdrop-blur-sm',
        'border border-primary/20',
        'quote-card-pulse-glow'
      )}
    >
      <div className="absolute top-10">
        <BrainCircuit className="h-16 w-16 text-primary animated-icon-float" />
      </div>

      <div className="relative w-full flex-grow flex flex-col items-center justify-center font-code text-center text-xl sm:text-2xl leading-relaxed text-slate-100 animated-text-glow">
        <pre className="font-code whitespace-pre-wrap">
          <span>{displayedText}</span>
          <span className="inline-block w-1 h-7 bg-slate-100 animate-pulse ml-1" aria-hidden="true"></span>
        </pre>
      </div>

      {/* Add an audio file named `typewriter-key.mp3` to your /public folder for this to work */}
      <audio ref={audioRef} src="/typewriter-key.mp3" preload="auto" />
    </div>
  );
};

export default TypewriterQuoteCard;
