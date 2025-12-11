import React from "react";
import { X } from "lucide-react";

const shortcuts = [
  { keys: "0 – 7", desc: "Jump to sections (Hero → Contact)" },
  { keys: "Ctrl + K", desc: "Open command palette" },
  { keys: "M", desc: "Toggle sound on/off" },
  { keys: "Esc", desc: "Close modals / palette" },
  { keys: "T (in palette)", desc: "Toggle theme" },
  { keys: "R (in palette)", desc: "Surprise me (random section)" },
  { keys: "S (in palette)", desc: "Show this shortcuts window" },
];

const ShortcutsModal = ({ onClose, isDarkMode }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${
        isDarkMode ? "bg-black/80" : "bg-white/80"
      } backdrop-blur-sm flex items-center justify-center`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-md mx-4 border ${
          isDarkMode ? "bg-black border-white" : "bg-white border-black"
        } p-6 space-y-4`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-1 border transition-colors cursor-pointer ${
            isDarkMode
              ? "border-white/40 hover:bg-white hover:text-black"
              : "border-black/40 hover:bg-black hover:text-white"
          }`}
        >
          <X size={16} />
        </button>

        <h3 className="text-lg font-semibold uppercase tracking-[0.25em]">
          Keyboard Shortcuts
        </h3>
        <p
          className={`text-xs ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          For when you feel like treating this portfolio like a terminal.
        </p>

        <ul className="space-y-2 text-sm">
          {shortcuts.map((s) => (
            <li key={s.keys} className="flex items-start gap-3">
              <span
                className={`
                  inline-flex items-center justify-center px-2 py-1 text-[11px]
                  border uppercase tracking-[0.18em]
                  ${
                    isDarkMode
                      ? "border-white text-white"
                      : "border-black text-black"
                  }
                `}
              >
                {s.keys}
              </span>
              <span
                className={isDarkMode ? "text-gray-100" : "text-gray-900"}
              >
                {s.desc}
              </span>
            </li>
          ))}
        </ul>

        <p
          className={`text-[10px] uppercase tracking-[0.3em] pt-2 ${
            isDarkMode ? "text-gray-500" : "text-gray-600"
          }`}
        >
          Press Esc or click outside to close.
        </p>
      </div>
    </div>
  );
};

export default ShortcutsModal;
