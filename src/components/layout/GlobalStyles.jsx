import React from "react";

const GlobalStyles = ({ isDarkMode }) => (
  <style>{`
    .brutalist-grid {
      background-image:
        linear-gradient(to right, ${
          isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"
        } 1px, transparent 1px),
        linear-gradient(to bottom, ${
          isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"
        } 1px, transparent 1px);
      background-size: 40px 40px;
    }

    .glitch-text {
      position: relative;
      white-space: pre-line;
    }
    .glitch-text::before,
    .glitch-text::after {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.7;
      mix-blend-mode: screen;
      pointer-events: none;
      white-space: pre-line;
    }
    .glitch-text::before {
      color: #ff2ea6;
      transform: translate(-2px, -1px);
    }

    .glitch-text::after {
      color: #ff0066;
      transform: translate(2px, 1px);
    }
    .glitch-hover:hover::before,
    .glitch-hover:hover::after {
      animation: glitch 400ms infinite;
    }
    @keyframes glitch {
      0% { clip-path: inset(5% 0 75% 0); transform: translate(1px, -1px); }
      20% { clip-path: inset(15% 0 55% 0); transform: translate(-2px, 2px); }
      40% { clip-path: inset(35% 0 35% 0); transform: translate(2px, -1px); }
      60% { clip-path: inset(55% 0 15% 0); transform: translate(-1px, 1px); }
      80% { clip-path: inset(75% 0 5% 0); transform: translate(1px, 1px); }
      100% { clip-path: inset(0 0 0 0); transform: translate(0,0); }
    }

    @keyframes spin-slow {
      to { transform: rotate(360deg); }
    }
    @keyframes spin-reverse {
      to { transform: rotate(-360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 3s linear infinite;
    }
    .animate-spin-reverse {
      animation: spin-reverse 2s linear infinite;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: ${isDarkMode ? "#000" : "#fff"};
      border-left: 1px solid ${isDarkMode ? "#fff" : "#000"};
    }
    ::-webkit-scrollbar-thumb {
      background: #ff2ea6;
      border: 1px solid ${isDarkMode ? "#fff" : "#000"};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${isDarkMode ? "#fff" : "#000"};
    }
  `}</style>
);

export default GlobalStyles;
