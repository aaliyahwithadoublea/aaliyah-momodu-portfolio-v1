import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
  onComplete,
}: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const currentIndexRef = useRef(0);
  const onCompleteRef = useRef(onComplete);

  // Update the ref when onComplete changes
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setIsTyping(true);
        currentIndexRef.current = 0; // Reset index when starting
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setIsTyping(true);
      currentIndexRef.current = 0; // Reset index when starting
    }
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    // Reset index when starting to type
    currentIndexRef.current = 0;
    setDisplayedText("");

    const timer = setInterval(() => {
      if (currentIndexRef.current < text.length) {
        setDisplayedText(text.slice(0, currentIndexRef.current + 1));
        currentIndexRef.current++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, isTyping]);

  return { displayedText, isTyping };
}
