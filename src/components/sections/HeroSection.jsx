import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import TiltCard from "../common/TiltCard";

const HeroSection = ({ isDarkMode }) => (
  <section
    id="top"
    className="relative min-h-[calc(100vh-64px)] flex items-center scroll-mt-24"
  >
    <div className="w-full grid md:grid-cols-[2fr,1.2fr] gap-8 md:gap-12 items-start">
      {/* Left: glitchy name + intro with tilt */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 pt-10 md:pt-0"
      >
        <TiltCard className="inline-block relative" isDarkMode={isDarkMode}>
          <div className="absolute -inset-4 bg-[#ff2ea6]/5 border border-[#ff2ea6]/40 -z-10 blur-[1px]" />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.9] uppercase tracking-tight">
            <span
              className="glitch-text glitch-hover block"
              data-text={"Shreya\nSinha"}
            >
              Shreya
              <br />
              <span className="text-yellow-300">Sinha</span>
            </span>
          </h1>
        </TiltCard>

        <p
          className={`text-xs uppercase tracking-[0.35em] flex items-center gap-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <Zap size={12} className="text-[#ff2ea6]" />
          Software Engineer • Full-Stack • Machine Learning
        </p>

        <p
          className={`text-sm md:text-[15px] ${
            isDarkMode ? "text-gray-100" : "text-gray-900"
          } max-w-xl leading-relaxed`}
        >
          A developer who treats code like architecture: brutal, honest and
          functional. Building systems that are sharp, fast and
          unapologetically minimal.
        </p>

        <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.22em]">
  <HeroTag isDarkMode={isDarkMode}>Full-Stack Development</HeroTag>
  <HeroTag isDarkMode={isDarkMode}>Machine Learning</HeroTag>
  <HeroTag isDarkMode={isDarkMode}>Blockchain Experiments</HeroTag>
  <HeroTag isDarkMode={isDarkMode}>Automation</HeroTag>
</div>


        {/* Currently row */}
        <div className="mt-4 space-y-1 text-[11px] md:text-xs">
          <p
            className={`uppercase tracking-[0.28em] ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Currently
          </p>
          <ul
            className={`space-y-1 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            <li>• Practicing problem solving on Codeforces & LeetCode</li>
            <li>• Iterating on full-stack projects with auth & dashboards</li>
            <li>• Reading about system design & scalable APIs</li>
          </ul>
        </div>
      </motion.div>

      {/* Right: info card with tilt */}
      <TiltCard
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`
          mt-8 md:mt-0 border p-5 md:p-6 space-y-3 text-[11px]
          uppercase tracking-[0.22em] transition-colors
          ${
            isDarkMode
              ? "border-white bg-white text-black"
              : "border-black bg-black text-white"
          }
        `}
        isDarkMode={isDarkMode}
      >
        <div
          className={`flex justify-between border-b pb-2 ${
            isDarkMode ? "border-black" : "border-white"
          }`}
        >
          <span>Field</span>
          <span>Status</span>
        </div>
        <HeroRow
          label="Role"
          value="Software Engineer / Student"
          isDarkMode={isDarkMode}
        />
        <HeroRow
          label="Program"
          value="B.Tech CSE • VIT Vellore"
          isDarkMode={isDarkMode}
        />
        <HeroRow
          label="Interests"
          value="Web • Data • Systems"
          isDarkMode={isDarkMode}
        />
        <HeroRow
          label="Availability"
          value="Internships & Collabs"
          isDarkMode={isDarkMode}
        />
        <HeroRow
          label="Location"
          value="India • Remote-friendly"
          isDarkMode={isDarkMode}
        />
        <HeroRow
          label="Contact"
          value="shreyasinha1309@gmail.com"
          isEmail
          isDarkMode={isDarkMode}
        />
      </TiltCard>
    </div>

    {/* Scroll indicator */}
    <div
      className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      }`}
    >
      <span>Scroll</span>
      <motion.div
        className={`h-10 w-px ${
          isDarkMode ? "bg-white/70" : "bg-black/70"
        }`}
        animate={{ y: [0, 6, 0], opacity: [1, 0.6, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    </div>
  </section>
);

const HeroTag = ({ children, isDarkMode }) => (
  <motion.span
    whileHover={{ scale: 1.05, y: -1 }}
    className={`px-3 py-1 border transition-colors cursor-pointer
      ${
        isDarkMode
          ? "border-white bg-black hover:bg-white hover:text-black"
          : "border-black bg-white hover:bg-black hover:text-white"
      }
      focus:outline-none focus:ring-2 focus:ring-[#ff2ea6] focus:ring-offset-2 ${
        isDarkMode ? "focus:ring-offset-black" : "focus:ring-offset-white"
      }
    `}
    tabIndex={0}
  >
    {children}
  </motion.span>
);

const HeroRow = ({ label, value, isEmail, isDarkMode }) => (
  <div
    className={`flex justify-between border-b py-2 gap-4 ${
      isDarkMode ? "border-black" : "border-white"
    }`}
  >
    <span>{label}</span>
    <span
      className={`text-right ${
        isEmail ? "max-w-[80%]" : "max-w-[70%]"
      } break-words`}
    >
      {value}
    </span>
  </div>
);

export default HeroSection;
