import React from "react";
import { Sun, Moon } from "lucide-react";

const sectionLabel = {
  top: "HERO",
  about: "ABOUT",
  skills: "SKILLS",
  experience: "EXPERIENCE",
  projects: "PROJECTS",
  resume: "RESUME",
  certifications: "CERTIFICATIONS",
  contact: "CONTACT",
};

const TerminalStrip = ({
  currentSection,
  soundEnabled,
  toggleSound,
  isDarkMode,
  toggleTheme,
}) => (
  <div
    className={`fixed bottom-0 left-0 right-0 z-40 border-t ${
      isDarkMode
        ? "border-[#ff2ea6]/40 bg-black/95"
        : "border-[#ff2ea6]/60 bg-white/95"
    } text-[#ff2ea6] font-mono text-[11px] px-4 py-2 flex items-center gap-3 transition-colors duration-300`}
  >
    <span className="truncate">
      shreya@portfolio:~$ section =&gt;{" "}
      {sectionLabel[currentSection] || "HERO"}
    </span>
    <span
      className={`hidden md:inline ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      } flex-1 ml-4 truncate`}
    >
      [0] Hero • [1] About • [2] Skills • [3] Exp • [4] Projects • [5] Resume •
      [6] Certs • [7] Contact • [M] Mute • [Ctrl+K] Command Palette
    </span>
    <button
      onClick={toggleTheme}
      className={`
        px-2 py-0.5 border text-[#ff2ea6] uppercase tracking-[0.18em]
        flex items-center gap-1.5 transition-colors cursor-pointer
        ${
          isDarkMode
            ? "border-[#ff2ea6]/60 bg-black hover:bg-[#ff2ea6] hover:text-black"
            : "border-[#ff2ea6]/80 bg-white hover:bg-[#ff2ea6] hover:text-white"
        }
        focus:outline-none focus:ring-2 focus:ring-[#ff2ea6] focus:ring-offset-2 ${
          isDarkMode ? "focus:ring-offset-black" : "focus:ring-offset-white"
        }
      `}
      title="Toggle theme"
    >
      {isDarkMode ? <Sun size={12} /> : <Moon size={12} />}
      <span className="hidden sm:inline">
        {isDarkMode ? "LIGHT" : "DARK"}
      </span>
    </button>
    <button
      onClick={toggleSound}
      className={`
        px-2 py-0.5 border text-[#ff2ea6] uppercase tracking-[0.18em]
        transition-colors cursor-pointer
        ${
          isDarkMode
            ? "border-[#ff2ea6]/60 bg-black hover:bg-[#ff2ea6] hover:text-black"
            : "border-[#ff2ea6]/80 bg-white hover:bg-[#ff2ea6] hover:text-white"
        }
        focus:outline-none focus:ring-2 focus:ring-[#ff2ea6] focus:ring-offset-2 ${
          isDarkMode ? "focus:ring-offset-black" : "focus:ring-offset-white"
        }
      `}
    >
      SND: {soundEnabled ? "ON" : "OFF"}
    </button>
  </div>
);

export default TerminalStrip;
