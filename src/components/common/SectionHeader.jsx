import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ label, title, isDarkMode }) => (
  <div
    className={`
      flex items-center justify-between pb-2 border-b
      ${isDarkMode ? "border-white" : "border-black"}
    `}
  >
    <div className="flex items-center gap-4">
      <span
        className={`
          text-[11px] uppercase tracking-[0.28em]
          ${isDarkMode ? "text-gray-400" : "text-gray-600"}
        `}
      >
        {label}
      </span>
      <h2
        className={`
          text-xl md:text-2xl font-semibold uppercase
          ${isDarkMode ? "text-white" : "text-black"}
        `}
      >
        {title}
      </h2>
    </div>
    <motion.span
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="h-3 w-3 bg-[#ff2ea6]"
    />
  </div>
);

export default SectionHeader;
