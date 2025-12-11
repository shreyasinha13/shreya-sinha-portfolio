import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const LoadingScreen = ({ progress, isDarkMode }) => (
  <div
    className={`fixed inset-0 ${
      isDarkMode ? "bg-black" : "bg-white"
    } z-[100] flex items-center justify-center transition-colors duration-300`}
  >
    <div className="space-y-8 text-center">
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative w-32 h-32 mx-auto"
      >
        <div
          className={`absolute inset-0 border-4 ${
            isDarkMode ? "border-white" : "border-black"
          } animate-spin-slow`}
        />
        <div className="absolute inset-4 border-4 border-[#ff2ea6] animate-spin-reverse" />
        <div
          className={`absolute inset-8 ${
            isDarkMode ? "bg-white" : "bg-black"
          } flex items-center justify-center`}
        >
          <span
            className={`${
              isDarkMode ? "text-black" : "text-white"
            } text-4xl font-bold`}
          >
            SS
          </span>
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em]">
          <Terminal size={16} className="text-[#ff2ea6] animate-pulse" />
          <span>Initializing System</span>
        </div>

        {/* Progress Bar */}
        <div
          className={`w-64 h-2 border ${
            isDarkMode ? "border-white bg-black" : "border-black bg-white"
          } mx-auto`}
        >
          <motion.div
            className="h-full bg-[#ff2ea6]"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div
          className={`text-[10px] uppercase tracking-[0.3em] ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {Math.floor(progress)}% Complete
        </div>
      </motion.div>

      {/* Glitch Effect */}
      <motion.div
        animate={{
          opacity: [1, 0.5, 1],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-[10px] uppercase tracking-[0.5em] text-[#ff2ea6]"
      >
        Loading Assets...
      </motion.div>
    </div>
  </div>
);

export default LoadingScreen;
