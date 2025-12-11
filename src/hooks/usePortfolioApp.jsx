import { useEffect, useRef, useState } from "react";

const SECTION_ORDER = [
  "top",
  "about",
  "skills",
  "experience",
  "projects",
  "resume",
  "certifications",
  "contact",
];

export default function usePortfolioApp() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const [currentSection, setCurrentSection] = useState("top");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const [activeProject, setActiveProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);

  const audioRef = useRef(null);
  const keyAudioRef = useRef(null);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  /* ------------ LOADING SIMULATION ------------ */

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  /* ------------ SOUND HELPERS ------------ */

  const playClick = () => {
    if (!soundEnabled) return;
    const el = audioRef.current;
    if (!el) return;
    try {
      el.currentTime = 0;
      el.play();
    } catch {
      // ignore autoplay blocking
    }
  };

  const playClickEvenIfMuted = () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      el.currentTime = 0;
      el.play();
    } catch {
      // ignore
    }
  };

  const playKeySound = () => {
    if (!soundEnabled) return;
    const el = keyAudioRef.current;
    if (!el) return;
    try {
      el.currentTime = 0;
      el.play();
    } catch {
      // ignore
    }
  };

  /* ------------ SCROLLING TO SECTIONS (CENTERED) ------------ */

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (id === "experience") {
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const offsetFromTop = window.innerHeight * 0.3;

      window.scrollTo({
        top: elementTop - offsetFromTop,
        behavior: "smooth",
      });
    } else {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    playClick();
  };

  const goToRandomSection = () => {
    const nonTop = SECTION_ORDER.filter((id) => id !== "top");
    const random = nonTop[Math.floor(Math.random() * nonTop.length)];
    scrollToSection(random);
  };

  /* ------------ GLOBAL KEYBOARD SHORTCUTS ------------ */

  useEffect(() => {
    const handleKey = (e) => {
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (
        e.key.length === 1 ||
        e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "Enter" ||
        e.key === " "
      ) {
        playKeySound();
      }

      if (e.key === "Escape") {
        let handled = false;
        if (isProjectModalOpen) {
          setIsProjectModalOpen(false);
          handled = true;
        } else if (isResumeOpen) {
          setIsResumeOpen(false);
          handled = true;
        } else if (paletteOpen) {
          setPaletteOpen(false);
          handled = true;
        } else if (isShortcutsOpen) {
          setIsShortcutsOpen(false);
          handled = true;
        }
        if (handled) {
          e.preventDefault();
          return;
        }
      }

      if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
        playClickEvenIfMuted();
        return;
      }

      if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        setSoundEnabled((prev) => !prev);
        playClickEvenIfMuted();
        return;
      }

      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 0 && num < SECTION_ORDER.length) {
        e.preventDefault();
        const id = SECTION_ORDER[num];
        scrollToSection(id);
        return;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [
    soundEnabled,
    paletteOpen,
    isProjectModalOpen,
    isResumeOpen,
    isShortcutsOpen,
  ]);

  /* ------------ TRACK CURRENT SECTION FOR TERMINAL ------------ */

  useEffect(() => {
    const onScroll = () => {
      let bestId = "top";
      let bestDist = Infinity;

      SECTION_ORDER.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - window.innerHeight / 2);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      });

      setCurrentSection(bestId);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ------------ GLOBAL CLICK SOUND ------------ */

  useEffect(() => {
    const handleGlobalClick = () => {
      if (!soundEnabled) return;
      const el = audioRef.current;
      if (!el) return;

      try {
        el.currentTime = 0;
        el.play();
      } catch {
        // ignore autoplay blocking
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [soundEnabled]);

  /* ------------ MODAL HELPERS ------------ */

  const openProjectModal = (project) => {
    setActiveProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => setIsProjectModalOpen(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  const openShortcuts = () => setIsShortcutsOpen(true);
  const closeShortcuts = () => setIsShortcutsOpen(false);

  return {
    // state
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

    // setters / actions
    toggleTheme,
    setSoundEnabled,
    setPaletteOpen,
    openProjectModal,
    closeProjectModal,
    openResume,
    closeResume,
    openShortcuts,
    closeShortcuts,

    // helpers
    scrollToSection,
    goToRandomSection,
    playKeySound,
    playClickEvenIfMuted,

    // refs (for <audio>)
    audioRef,
    keyAudioRef,
  };
}
