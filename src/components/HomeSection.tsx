import { useEffect, useState } from 'react';
import TypingText from './TypingText';

function HomeSection() {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-screen w-full flex items-center justify-center bg-earth">
      <div className="text-center">
        {startTyping && (
          <TypingText
            text="Welcome to Nori's Website"
            className="text-4xl md:text-6xl font-light text-white"
            showCursor={true}
          />
        )}
      </div>
    </section>
  );
}

export default HomeSection;
