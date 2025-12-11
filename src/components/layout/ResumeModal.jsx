import React from "react";
import { X } from "lucide-react";

const ResumeModal = ({ onClose, isDarkMode }) => {
  const handleOverlayClick = () => onClose();

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isDarkMode ? "bg-black/80" : "bg-white/80"
      } backdrop-blur-sm flex items-center justify-center`}
      onClick={handleOverlayClick}
    >
      <div
        className={`relative w-[95vw] md:w-[70vw] h-[80vh] flex flex-col border ${
          isDarkMode ? "bg-black border-white" : "bg-white border-black"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div
          className={`flex items-center justify-between px-4 py-2 border-b text-[11px] uppercase tracking-[0.25em] ${
            isDarkMode
              ? "border-white/40 text-gray-300"
              : "border-black/40 text-gray-700"
          }`}
        >
          <span>Résumé Preview</span>
          <span className="text-[10px]">
            Scroll &amp; use browser zoom (Ctrl + / Ctrl -)
          </span>
          <button
            onClick={onClose}
            className={`ml-4 p-1 border transition-colors shrink-0 ${
              isDarkMode
                ? "border-white/40 hover:bg-white hover:text-black"
                : "border-black/60 hover:bg-black hover:text-white"
            }`}
          >
            <X size={14} />
          </button>
        </div>

        {/* PDF iframe */}
        <div className="flex-1 bg-white overflow-hidden">
          <iframe
            title="Resume Preview"
            src="/Shreya_Sinha_Resume.pdf"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
