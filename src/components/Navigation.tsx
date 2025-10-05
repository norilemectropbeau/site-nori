interface NavigationProps {
  activeSection: number;
  setActiveSection: (index: number) => void;
}

function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const sections = ['Home', 'Skill', 'Réseaux', 'End'];

  return (
    <nav className="fixed top-8 right-8 z-50 flex gap-6">
      {sections.map((section, index) => (
        <button
          key={section}
          onClick={() => setActiveSection(index)}
          className="relative text-white text-sm font-light tracking-wide transition-opacity hover:opacity-80"
        >
          {section}
          <div
            className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
              activeSection === index ? 'w-full' : 'w-0'
            }`}
          />
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
