import React from "react";
import { X } from "lucide-react";

const ProjectDetailsModal = ({ project, onClose, isDarkMode }) => {
  const handleOverlayClick = () => onClose();

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isDarkMode ? "bg-black/80" : "bg-white/80"
      } backdrop-blur-sm flex items-center justify-center`}
      onClick={handleOverlayClick}
    >
      <div
        className={`relative max-w-2xl w-full mx-4 p-6 md:p-8 space-y-4 text-sm md:text-base border ${
          isDarkMode
            ? "bg-black border-white text-white"
            : "bg-white border-black text-black"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-1 border transition-colors ${
            isDarkMode
              ? "border-white/40 hover:bg-white hover:text-black"
              : "border-black/40 hover:bg-black hover:text-white"
          }`}
        >
          <X size={16} />
        </button>

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.3em] text-[#ff2ea6]">
            {project.period}
          </p>
          <h3 className="text-lg md:text-2xl font-semibold">
            {project.title}
          </h3>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#ff2ea6]">
            {project.tech}
          </p>
        </div>

        {project.whatItDoes && (
          <div className="space-y-2">
            <p
              className={`text-[11px] uppercase tracking-[0.28em] ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              What it does
            </p>
            <ul className="space-y-1 text-sm">
              {project.whatItDoes.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-[#ff2ea6] mt-[2px]">▸</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.whatILearned && (
          <div className="space-y-2">
            <p
              className={`text-[11px] uppercase tracking-[0.28em] ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              What I learned
            </p>
            <ul className="space-y-1 text-sm">
              {project.whatILearned.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-[#ff2ea6] mt-[2px]">▸</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p
          className={`text-[10px] uppercase tracking-[0.3em] pt-2 ${
            isDarkMode ? "text-gray-500" : "text-gray-600"
          }`}
        >
          Press{" "}
          <span className={isDarkMode ? "text-white" : "text-black"}>
            Esc
          </span>{" "}
          or click outside the window to close.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
