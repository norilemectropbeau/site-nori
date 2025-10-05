import { useEffect, useState } from 'react';
import TypingText from './TypingText';

interface ReseauxSectionProps {
  isActive: boolean;
}

function ReseauxSection({ isActive }: ReseauxSectionProps) {
  const [showTitle, setShowTitle] = useState(false);
  const [showLink1, setShowLink1] = useState(false);
  const [showLink2, setShowLink2] = useState(false);
  const [showLink3, setShowLink3] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer1 = setTimeout(() => setShowTitle(true), 200);
      const timer2 = setTimeout(() => setShowLink1(true), 1500);
      const timer3 = setTimeout(() => setShowLink2(true), 2500);
      const timer4 = setTimeout(() => setShowLink3(true), 3500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    } else {
      setShowTitle(false);
      setShowLink1(false);
      setShowLink2(false);
      setShowLink3(false);
    }
  }, [isActive]);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('iseeyouagainn');
  };

  return (
    <section className="h-screen w-full flex items-center justify-center bg-earth">
      <div className="w-full max-w-3xl px-8">
        <div className="text-center mb-12">
          {showTitle && (
            <TypingText
              text="Réseaux"
              className="text-5xl md:text-6xl font-light outlined-text"
              showCursor={false}
            />
          )}
        </div>

        <div className="border-2 border-white rounded-3xl bg-transparent backdrop-blur-sm p-12 mx-auto w-full md:w-3/5">
          <div className="space-y-6">
            {showLink1 && (
              <div>
                <a
                  href="https://x.com/onlykneelgod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-light outlined-text hover:brightness-125 transition-all block"
                >
                  <TypingText
                    text="Twitter : https://x.com/onlykneelgod"
                    className="text-xl font-light outlined-text"
                    showCursor={false}
                  />
                </a>
              </div>
            )}
            {showLink2 && (
              <div
                onClick={handleCopyDiscord}
                className="cursor-pointer hover:brightness-125 transition-all"
              >
                <TypingText
                  text="Discord (to copy) : iseeyouagainn"
                  className="text-xl font-light outlined-text"
                  showCursor={false}
                />
              </div>
            )}
            {showLink3 && (
              <div>
                <a
                  href="https://behance.net/norigraph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-light outlined-text hover:brightness-125 transition-all block"
                >
                  <TypingText
                    text="Behance (Portfolio) : https://behance.net/norigraph"
                    className="text-xl font-light outlined-text"
                    showCursor={false}
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReseauxSection;
