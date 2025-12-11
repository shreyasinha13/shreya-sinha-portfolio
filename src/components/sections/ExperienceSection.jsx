import React from "react";
import { Briefcase } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import TiltCard from "../common/TiltCard";
import HighText from "../common/HighText";

const ExperienceSection = ({ isDarkMode }) => (
  <section
    id="experience"
    className="space-y-6 py-16 scroll-mt-24"
  >
    <SectionHeader label="03" title="Experience" isDarkMode={isDarkMode} />

    <TiltCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`
        border p-5 md:p-6 space-y-4 transition-shadow
        ${
          isDarkMode
            ? "border-white bg-black hover:shadow-[0_0_0_2px_#ff2ea6]"
            : "border-black bg-white hover:shadow-[0_0_0_2px_#ff2ea6]"
        }
      `}
      isDarkMode={isDarkMode}
    >
      <div className="flex gap-4 items-start">
        <div
          className={`p-2 border ${
            isDarkMode
              ? "border-white bg-white text-black"
              : "border-black bg-black text-white"
          }`}
        >
          <Briefcase size={20} />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl font-semibold">Software Intern</h3>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Indian Oil Corporation Limited • Ahmedabad, Gujarat
          </p>
          <p
            className={`text-xs uppercase tracking-[0.25em] ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            June 2025 – July 2025
          </p>
        </div>
      </div>

      <ul className="space-y-2 text-sm leading-relaxed">
        <li className="flex gap-2">
          <span className="text-[#ff2ea6] mt-[2px]">▸</span>
          <span>
            Automated Revenue Budget Availability Reports using Python (pandas,
            openpyxl), cutting processing time by{" "}
            <HighText>~95%</HighText> and eliminating manual Excel work.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-[#ff2ea6] mt-[2px]">▸</span>
          <span>
            Increased reporting accuracy from{" "}
            <HighText>90% → 100%</HighText> by standardising validation and
            error checks.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-[#ff2ea6] mt-[2px]">▸</span>
          <span>
            Delivered weekly distribution-ready reports with dynamic filenames,
            improving visibility for finance stakeholders.
          </span>
        </li>
      </ul>
    </TiltCard>
  </section>
);

export default ExperienceSection;
