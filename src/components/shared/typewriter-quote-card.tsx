
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
    // This effect handles resetting the animation after it's done.
    if (lineIndex >= QUOTE_LINES.length) {
      const timer = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
        setDisplayedText("");
      }, 3000); // Pause for 3s before restarting
      return () => clearTimeout(timer);
    }

    // This effect handles the typing animation itself.
    const typingInterval = setInterval(() => {
      let currentLine = QUOTE_LINES[lineIndex];
      
      // If we've finished the current line
      if (charIndex >= currentLine.length) {
        // If there are more lines to type
        if (lineIndex < QUOTE_LINES.length - 1) {
          setLineIndex(prev => prev + 1);
          setCharIndex(0);
          setDisplayedText(prev => prev + "\n");
        } else {
          // All lines are typed, stop the interval and trigger the reset effect
          setLineIndex(prev => prev + 1);
          clearInterval(typingInterval);
        }
        return;
      }
      
      // Add the next character
      setDisplayedText(prev => prev + currentLine[charIndex]);
      setCharIndex(prev => prev + 1);

      // Play sound for the character
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Rewind to the start
        audioRef.current.play().catch(error => {
          console.warn("Typewriter sound autoplay was prevented.", error);
        });
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
