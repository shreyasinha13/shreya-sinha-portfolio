import React, { useEffect, useState } from "react";

const baseCommands = [
  { id: "top", label: "Go to Hero", hint: "0", type: "section" },
  { id: "about", label: "Go to About", hint: "1", type: "section" },
  { id: "skills", label: "Go to Skills", hint: "2", type: "section" },
  { id: "experience", label: "Go to Experience", hint: "3", type: "section" },
  { id: "projects", label: "Go to Projects", hint: "4", type: "section" },
  { id: "resume", label: "Go to Résumé", hint: "5", type: "section" },
  {
    id: "certifications",
    label: "Go to Certifications",
    hint: "6",
    type: "section",
  },
  { id: "contact", label: "Go to Contact", hint: "7", type: "section" },

  // Extra "easter egg" / utility commands
  {
    id: "__toggle_theme",
    label: "Toggle theme (light/dark)",
    hint: "T",
    type: "action",
  },
  {
    id: "__toggle_sound",
    label: "Toggle sound on/off",
    hint: "M",
    type: "action",
  },
  {
    id: "__random_section",
    label: "Surprise me (random section)",
    hint: "R",
    type: "action",
  },
  {
    id: "__shortcuts",
    label: "Show keyboard shortcuts",
    hint: "S",
    type: "action",
  },
];

const CommandPalette = ({
  onClose,
  onSelect,
  onTypeSound,
  isDarkMode,
  onToggleTheme,
  onToggleSound,
  onRandomSection,
  onOpenShortcuts,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = baseCommands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (filtered.length === 0) setSelectedIndex(0);
    else if (selectedIndex >= filtered.length)
      setSelectedIndex(filtered.length - 1);
  }, [filtered.length, selectedIndex]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const runCommand = (cmd) => {
    if (!cmd) return;
    if (cmd.type === "section") {
      onSelect(cmd.id);
      onClose();
      return;
    }

    // Actions
    if (cmd.id === "__toggle_theme" && onToggleTheme) {
      onToggleTheme();
    } else if (cmd.id === "__toggle_sound" && onToggleSound) {
      onToggleSound();
    } else if (cmd.id === "__random_section" && onRandomSection) {
      onRandomSection();
    } else if (cmd.id === "__shortcuts" && onOpenShortcuts) {
      onOpenShortcuts();
    }

    onClose();
  };

  const handleKeyDown = (e) => {
    e.stopPropagation();

    if (
      onTypeSound &&
      (e.key.length === 1 || e.key === "Backspace" || e.key === "Delete")
    ) {
      onTypeSound();
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (filtered.length === 0) return;
      setSelectedIndex((prev) =>
        prev + 1 < filtered.length ? prev + 1 : 0
      );
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (filtered.length === 0) return;
      setSelectedIndex((prev) =>
        prev - 1 >= 0 ? prev - 1 : filtered.length - 1
      );
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      runCommand(filtered[selectedIndex]);
      return;
    }

    const key = e.key.toUpperCase();

    // Number hints for sections
    const num = parseInt(e.key, 10);
    if (!isNaN(num)) {
      const idx = filtered.findIndex((c) => c.hint === String(num));
      if (idx !== -1) {
        e.preventDefault();
        setSelectedIndex(idx);
        runCommand(filtered[idx]);
        return;
      }
    }

    // Letter hints for actions (T, M, R, S)
    if (["T", "M", "R", "S"].includes(key)) {
      const idx = filtered.findIndex((c) => c.hint === key);
      if (idx !== -1) {
        e.preventDefault();
        setSelectedIndex(idx);
        runCommand(filtered[idx]);
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isDarkMode ? "bg-black/70" : "bg-white/70"
      } backdrop-blur-sm flex items-start justify-center pt-24`}
      onClick={onClose}
    >
      <div
        className={`w-full max-w-md ${
          isDarkMode ? "bg-black border-white" : "bg-white border-black"
        } border shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`border-b ${
            isDarkMode ? "border-white/40" : "border-black/40"
          } px-4 py-2 flex items-center justify-between`}
        >
          <span
            className={`text-[11px] uppercase tracking-[0.25em] ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Command Palette
          </span>
          <span
            className={`text-[10px] ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Esc to close
          </span>
        </div>
        <div
          className={`px-4 py-2 border-b ${
            isDarkMode ? "border-white/20" : "border-black/20"
          }`}
        >
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (onTypeSound) onTypeSound();
            }}
            onKeyDown={handleKeyDown}
            className={`w-full ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            } text-sm outline-none ${
              isDarkMode ? "placeholder:text-gray-500" : "placeholder:text-gray-600"
            }`}
            placeholder="Type: projects, skills, theme, sound..."
          />
        </div>
        <div className="max-h-64 overflow-y-auto">
          {filtered.map((cmd, index) => (
            <button
              key={cmd.id}
              onClick={() => runCommand(cmd)}
              onMouseEnter={() => setSelectedIndex(index)}
              className={
                "w-full text-left px-4 py-2 text-sm flex justify-between items-center transition-colors cursor-pointer " +
                (index === selectedIndex
                  ? isDarkMode
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : isDarkMode
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white")
              }
            >
              <span>{cmd.label}</span>
              <span
                className={`text-[10px] ${
                  index === selectedIndex
                    ? isDarkMode
                      ? "text-gray-600"
                      : "text-gray-400"
                    : "text-gray-400"
                }`}
              >
                {cmd.hint}
              </span>
            </button>
          ))}
          {filtered.length === 0 && (
            <div
              className={`px-4 py-3 text-xs ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              No commands match &quot;{query}&quot;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
