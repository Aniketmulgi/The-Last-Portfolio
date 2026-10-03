import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BootScreen from "./components/common/BootScreen";
import ProjectModal from "./components/modals/ProjectModal";
import TerminalModal from "./components/modals/TerminalModal";
import HeroSection from "./pages/HeroSection";
import IdentitySection from "./pages/IdentitySection";
import ArsenalSection from "./pages/ArsenalSection";
import ArchivesSection from "./pages/ArchivesSection";
import JourneySection from "./pages/JourneySection";
import TransmissionSection from "./pages/TransmissionSection";
import { profile, terminalCommands } from "./data/portfolioData";
import { scrollToSection, formatTime } from "./utils/helpers";

function App() {
  // Application state
  const [booted, setBooted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [time, setTime] = useState(new Date());

  // Initialization: boot timer, live clock, and mouse cursor tracker
  useEffect(() => {
    const bootTimer = setTimeout(() => setBooted(true), 2600);
    const clock = setInterval(() => setTime(new Date()), 1000);
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);
    return () => {
      clearTimeout(bootTimer);
      clearInterval(clock);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  // Formatted live timestamp for navbar
  const formattedTime = useMemo(() => formatTime(time), [time]);

  // Handle smooth scroll navigation and close mobile menu
  const handleNavigate = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  // Process terminal CLI command inputs
  const handleRunCommand = (e) => {
    if (e.key !== "Enter") return;
    const command = terminalInput.trim().toLowerCase();
    if (terminalCommands[command]) {
      handleNavigate(terminalCommands[command]);
    }
    setTerminalInput("");
  };

  if (!booted) return <BootScreen />;

  return (
    <div className="app">
      {/* Visual overlays & glowing cursor */}
      <div className="scanlines" />
      <div className="noise" />
      <div className="cursor" style={{ left: cursor.x, top: cursor.y }} />

      {/* Navigation header */}
      <Navbar
        profile={profile}
        formattedTime={formattedTime}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavigate={handleNavigate}
      />

      {/* Main content sections */}
      <main>
        <HeroSection profile={profile} onNavigate={handleNavigate} />
        <IdentitySection profile={profile} />
        <ArsenalSection onOpenTerminal={() => setTerminalOpen(true)} />
        <ArchivesSection onSelectProject={setSelectedProject} />
        <JourneySection />
        <TransmissionSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {terminalOpen && (
        <TerminalModal
          value={terminalInput}
          setValue={setTerminalInput}
          onKeyDown={handleRunCommand}
          onClose={() => setTerminalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;