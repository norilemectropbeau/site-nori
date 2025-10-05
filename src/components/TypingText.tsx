import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  className?: string;
  showCursor?: boolean;
  speed?: number;
}

function TypingText({ text, className = '', showCursor = false, speed = 80 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (showCursor && currentIndex === text.length) {
      setShowBlinkingCursor(true);
      const cursorTimer = setTimeout(() => {
        setShowBlinkingCursor(false);
      }, 2000);

      return () => clearTimeout(cursorTimer);
    }
  }, [currentIndex, text, showCursor, speed]);

  return (
    <div className={className}>
      {displayedText.split('\n').map((line, index) => (
        <div key={index}>
          {line}
          {index === displayedText.split('\n').length - 1 && showBlinkingCursor && (
            <span className="animate-blink">|</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default TypingText;
