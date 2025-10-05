import { useEffect, useState } from 'react';
import TypingText from './TypingText';

interface EndSectionProps {
  isActive: boolean;
}

function EndSection({ isActive }: EndSectionProps) {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setStartTyping(false);
    }
  }, [isActive]);

  return (
    <section className="h-screen w-full flex items-center justify-center bg-earth">
      <div className="text-center">
        {startTyping && (
          <TypingText
            text={`Thank you for reading,\nNori wishes you a great day!`}
            className="text-3xl md:text-5xl font-light text-white leading-relaxed"
            showCursor={true}
          />
        )}
      </div>
    </section>
  );
}

export default EndSection;
