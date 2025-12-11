import React from "react";
import { Terminal } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

const Header = ({ scrollToSection, isDarkMode, currentSection }) => {
  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        isDarkMode ? "border-white bg-black/95" : "border-black bg-white/95"
      } backdrop-blur-sm transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] flex items-center gap-2">
            <Terminal size={16} className="text-[#ff2ea6]" />
            Portfolio
          </span>
          <span
            className={`text-xs md:text-sm uppercase tracking-[0.25em] ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Shreya Sinha
          </span>
        </div>

        <nav className="hidden md:flex gap-6 text-[11px] uppercase tracking-[0.25em]">
          {NAV_ITEMS.map((item) => {
            const isActive = currentSection === item.id;

            const baseClasses =
              "relative transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff2ea6] focus:ring-offset-2 group";
            const colorClasses = isActive
              ? " text-[#ff2ea6]"
              : ` hover:text-[#ff2ea6] ${
                  isDarkMode ? "text-gray-200" : "text-gray-800"
                }`;
            const offsetClass = isDarkMode
              ? " focus:ring-offset-black"
              : " focus:ring-offset-white";

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${baseClasses}${colorClasses}${offsetClass}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[1px] transition-all ${
                    isActive ? "w-full bg-[#ff2ea6]" : "w-0 bg-[#ff2ea6]"
                  } group-hover:w-full`}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
