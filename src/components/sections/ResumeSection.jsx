import React from "react";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "../common/TiltCard";
import SectionHeader from "../common/SectionHeader";

const ResumeSection = ({ onOpenResume, isDarkMode }) => (
  <section
    id="resume"
    className="space-y-6 min-h-[60vh] flex flex-col justify-center scroll-mt-24"
  >
    <SectionHeader label="05" title="Mini Résumé" isDarkMode={isDarkMode} />
    <TiltCard
      className={`border ${
        isDarkMode
          ? "border-white bg-black hover:shadow-[0_0_0_2px_#ff2ea6]"
          : "border-black bg-white hover:shadow-[0_0_0_2px_#ff2ea6]"
      } p-5 md:p-8 space-y-6 transition-shadow`}
      isDarkMode={isDarkMode}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column: Education + focus areas */}
        <div className="space-y-4">
          <div>
            <p
              className={`text-[11px] uppercase tracking-[0.3em] ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Education
            </p>
            <div className="mt-2 text-sm md:text-base">
              <p className="font-semibold">
                B.Tech in Computer Science &amp; Engineering
              </p>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                VIT Vellore
              </p>
            </div>
          </div>

          <div>
            <p
              className={`text-[11px] uppercase tracking-[0.3em] ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Focus Areas
            </p>
            <ul className="mt-2 space-y-1 text-sm md:text-base">
              <li>Full-stack web development</li>
              <li>Machine learning &amp; data pipelines</li>
              <li>Blockchain experiments &amp; smart contracts</li>
            </ul>
          </div>
        </div>

        {/* Right column: Snapshot + stack */}
        <div className="space-y-4">
          <div>
            <p
              className={`text-[11px] uppercase tracking-[0.3em] ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Snapshot
            </p>
            <ul className="mt-2 space-y-1 text-sm md:text-base">
              <li>Hands-on work automating financial reports at IOCL.</li>
              <li>Projects in MERN, ML, and blockchain-backed FL.</li>
              <li>Comfortable shipping and iterating in teams.</li>
            </ul>
          </div>

          <div>
            <p
              className={`text-[11px] uppercase tracking-[0.3em] ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Core Stack
            </p>
            <p className="mt-2 text-sm md:text-base">
              Java, Python, JavaScript, React, Node.js, SQL/NoSQL, Git
            </p>
          </div>
        </div>
      </div>

      {/* Buttons row */}
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          onClick={onOpenResume}
          className={`px-4 py-2 border text-xs md:text-sm uppercase tracking-[0.22em] flex items-center gap-2 ${
            isDarkMode
              ? "border-white bg-white text-black hover:bg-black hover:text-white"
              : "border-black bg-black text-white hover:bg-white hover:text-black"
          } transition-colors`}
        >
          <span>View Résumé</span>
          <ArrowUpRight size={14} />
        </button>

        <a
          href="/Shreya_Sinha_Resume.pdf"
          download
          className={`px-4 py-2 border text-[11px] md:text-xs uppercase tracking-[0.22em] ${
            isDarkMode
              ? "border-white/70 text-white hover:bg-white hover:text-black"
              : "border-black/70 text-black hover:bg-black hover:text-white"
          } transition-colors`}
        >
          Download PDF
        </a>
      </div>
    </TiltCard>
  </section>
);

export default ResumeSection;
