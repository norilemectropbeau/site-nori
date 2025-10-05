import { useEffect, useState } from 'react';
import TypingText from './TypingText';

interface SkillSectionProps {
  isActive: boolean;
}

function SkillSection({ isActive }: SkillSectionProps) {
  const [showTitle, setShowTitle] = useState(false);
  const [showSkill1, setShowSkill1] = useState(false);
  const [showSkill2, setShowSkill2] = useState(false);
  const [showSkill3, setShowSkill3] = useState(false);
  const [showSkill4, setShowSkill4] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer1 = setTimeout(() => setShowTitle(true), 200);
      const timer2 = setTimeout(() => setShowSkill1(true), 1500);
      const timer3 = setTimeout(() => setShowSkill2(true), 2300);
      const timer4 = setTimeout(() => setShowSkill3(true), 3100);
      const timer5 = setTimeout(() => setShowSkill4(true), 3900);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    } else {
      setShowTitle(false);
      setShowSkill1(false);
      setShowSkill2(false);
      setShowSkill3(false);
      setShowSkill4(false);
    }
  }, [isActive]);

  return (
    <section className="h-screen w-full flex items-center justify-center bg-earth">
      <div className="w-full max-w-3xl px-8">
        <div className="text-center mb-12">
          {showTitle && (
            <TypingText
              text="Skills"
              className="text-5xl md:text-6xl font-light outlined-text"
              showCursor={false}
            />
          )}
        </div>

        <div className="border-2 border-white rounded-3xl bg-transparent backdrop-blur-sm p-12 mx-auto w-full md:w-3/5">
          <div className="space-y-6 text-center">
            {showSkill1 && (
              <TypingText
                text="Design"
                className="text-2xl font-light outlined-text"
                showCursor={false}
              />
            )}
            {showSkill2 && (
              <TypingText
                text="FPS Player"
                className="text-2xl font-light outlined-text"
                showCursor={false}
              />
            )}
            {showSkill3 && (
              <TypingText
                text="Mathematic Crack"
                className="text-2xl font-light outlined-text"
                showCursor={false}
              />
            )}
            {showSkill4 && (
              <TypingText
                text="Prison Break Lover"
                className="text-2xl font-light outlined-text"
                showCursor={false}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
