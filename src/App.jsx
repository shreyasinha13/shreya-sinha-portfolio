import React from "react";

import Header from "./components/layout/Header";
import CommandPalette from "./components/layout/CommandPalette";
import TerminalStrip from "./components/layout/TerminalStrip";

import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/About";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ResumeSection from "./components/sections/ResumeSection";
import CertificationsSection from "./components/sections/CertificationsSection";
import ContactSection from "./components/sections/ContactSection";

import LoadingScreen from "./components/layout/LoadingScreen";
import ThreeBackground from "./components/layout/ThreeBackground";
import ParticleField from "./components/layout/ParticleField";
import FloatingObjects from "./components/layout/FloatingObjects";
import ScrollProgress from "./components/layout/ScrollProgress";
import GlobalStyles from "./components/layout/GlobalStyles";
import ProjectDetailsModal from "./components/layout/ProjectDetailsModal";
import ResumeModal from "./components/layout/ResumeModal";
import ShortcutsModal from "./components/layout/ShortcutsModal";

import usePortfolioApp from "./hooks/usePortfolioApp";

const App = () => {
  const {
    isDarkMode,
    loading,
    loadProgress,
    currentSection,
    soundEnabled,
    paletteOpen,
    activeProject,
    isProjectModalOpen,
    isResumeOpen,
    isShortcutsOpen,

    toggleTheme,
    setSoundEnabled,
    setPaletteOpen,
    openProjectModal,
    closeProjectModal,
    openResume,
    closeResume,
    openShortcuts,
    closeShortcuts,

    scrollToSection,
    goToRandomSection,
    playKeySound,
    playClickEvenIfMuted,

    audioRef,
    keyAudioRef,
  } = usePortfolioApp();

  if (loading) {
    return <LoadingScreen progress={loadProgress} isDarkMode={isDarkMode} />;
  }

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } relative overflow-x-hidden transition-colors duration-300`}
    >
      <GlobalStyles isDarkMode={isDarkMode} />

      {/* 3D Background + FX */}
      <ThreeBackground isDarkMode={isDarkMode} />
      <ParticleField isDarkMode={isDarkMode} />
      <FloatingObjects isDarkMode={isDarkMode} />

      {/* Background grid */}
      <div className="fixed inset-0 brutalist-grid opacity-60 pointer-events-none" />

      {/* Scroll progress bar */}
      <ScrollProgress isDarkMode={isDarkMode} />

      {/* Header */}
      <Header
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
        currentSection={currentSection}
      />

      {/* Command palette */}
      {paletteOpen && (
        <CommandPalette
          onClose={() => setPaletteOpen(false)}
          onSelect={(id) => {
            scrollToSection(id);
            setPaletteOpen(false);
          }}
          onTypeSound={playKeySound}
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
          onToggleSound={() =>
            setSoundEnabled((prev) => !prev)
          }
          onRandomSection={goToRandomSection}
          onOpenShortcuts={openShortcuts}
        />
      )}

      {/* Project modal */}
      {isProjectModalOpen && activeProject && (
        <ProjectDetailsModal
          project={activeProject}
          onClose={closeProjectModal}
          isDarkMode={isDarkMode}
        />
      )}

      {/* Resume modal */}
      {isResumeOpen && (
        <ResumeModal onClose={closeResume} isDarkMode={isDarkMode} />
      )}

      {/* Shortcuts modal */}
      {isShortcutsOpen && (
        <ShortcutsModal onClose={closeShortcuts} isDarkMode={isDarkMode} />
      )}

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-24 md:pb-28 space-y-16 md:space-y-24 relative z-10">
        <HeroSection isDarkMode={isDarkMode} />
        <AboutSection isDarkMode={isDarkMode} />
        <SkillsSection isDarkMode={isDarkMode} />
        <ExperienceSection isDarkMode={isDarkMode} />
        <ProjectsSection
          onProjectClick={openProjectModal}
          isDarkMode={isDarkMode}
        />
        <ResumeSection onOpenResume={openResume} isDarkMode={isDarkMode} />
        <CertificationsSection isDarkMode={isDarkMode} />
        <ContactSection isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <footer
        className={`border-t ${
          isDarkMode ? "border-white" : "border-black"
        } mt-6 mb-9 relative z-10 transition-colors duration-300`}
      >
        <div
          className={`max-w-6xl mx-auto px-4 md:px-6 py-2 flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] uppercase tracking-[0.22em] ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <span>© 2025 • Shreya Sinha</span>
          <span>Built with React • Three.js • Brutalist edition</span>
        </div>
      </footer>

      {/* Terminal strip at bottom */}
      <TerminalStrip
        currentSection={currentSection}
        soundEnabled={soundEnabled}
        toggleSound={() => {
          setSoundEnabled((prev) => !prev);
          playClickEvenIfMuted();
        }}
        isDarkMode={isDarkMode}
        toggleTheme={() => {
          toggleTheme();
          playClickEvenIfMuted();
        }}
      />

      {/* Sounds */}
      <audio ref={audioRef} src="/click.mp3" />
      <audio ref={keyAudioRef} src="/key.mp3" />
    </div>
  );
};

export default App;
