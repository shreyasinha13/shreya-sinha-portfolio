import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactRow = ({ icon, label, href, value, isDarkMode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    className={`
      flex items-center gap-3 px-3 py-2 border transition-colors group
      ${
        isDarkMode
          ? "border-black hover:bg-black hover:text-white"
          : "border-white hover:bg-white hover:text-black"
      }
    `}
  >
    <div
      className={`
        p-1 border transition-colors
        ${
          isDarkMode
            ? "border-black bg-black text-white group-hover:bg-white group-hover:text-black"
            : "border-white bg-white text-black group-hover:bg-black group-hover:text-white"
        }
      `}
    >
      {icon}
    </div>

    <div className="flex-1 flex items-center justify-between text-[11px] gap-4">
      <span className="uppercase tracking-[0.22em] shrink-0">{label}</span>
      <span className="ml-1 whitespace-nowrap overflow-hidden text-ellipsis">
        {value}
      </span>
    </div>

    <ArrowUpRight size={14} className="shrink-0" />
  </motion.a>
);

export default ContactRow;
