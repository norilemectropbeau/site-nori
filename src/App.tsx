import { useEffect, useState, useRef } from 'react';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import SkillSection from './components/SkillSection';
import ReseauxSection from './components/ReseauxSection';
import EndSection from './components/EndSection';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      e.preventDefault();

      if (e.deltaY > 0 && activeSection < 3) {
        setIsScrolling(true);
        setActiveSection(activeSection + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        setIsScrolling(true);
        setActiveSection(activeSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeSection, isScrolling]);

  useEffect(() => {
    if (isScrolling) {
      const timer = setTimeout(() => {
        setIsScrolling(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isScrolling]);

  useEffect(() => {
    sectionsRef.current[activeSection]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [activeSection]);

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="snap-y snap-mandatory h-screen overflow-y-auto">
        <div
          ref={(el) => {
            if (el) sectionsRef.current[0] = el;
          }}
          className="snap-start"
        >
          <HomeSection />
        </div>

        <div
          ref={(el) => {
            if (el) sectionsRef.current[1] = el;
          }}
          className="snap-start"
        >
          <SkillSection isActive={activeSection === 1} />
        </div>

        <div
          ref={(el) => {
            if (el) sectionsRef.current[2] = el;
          }}
          className="snap-start"
        >
          <ReseauxSection isActive={activeSection === 2} />
        </div>

        <div
          ref={(el) => {
            if (el) sectionsRef.current[3] = el;
          }}
          className="snap-start"
        >
          <EndSection isActive={activeSection === 3} />
        </div>
      </div>
    </div>
  );
}

export default App;
