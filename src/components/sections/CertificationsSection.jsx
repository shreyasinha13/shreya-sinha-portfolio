import React from "react";
import { Award } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import TiltCard from "../common/TiltCard";

const CertificationsSection = ({ isDarkMode }) => (
  <section
    id="certifications"
    className="space-y-6 min-h-screen flex flex-col justify-center scroll-mt-24"
  >
    <SectionHeader
      label="06"
      title="Certifications"
      isDarkMode={isDarkMode}
    />
    <div className="grid md:grid-cols-2 gap-5">
      <CertCard
        title="Full Stack Web Development in Java"
        org="Imarticus"
        period="June 2024 – July 2024"
        description="Built a full-stack web solution using Java, React, MySQL, MongoDB and RESTful APIs with containerised deployment."
        isDarkMode={isDarkMode}
      />
      <CertCard
        title="Data Science and AI Professional"
        org="KICT"
        period="Jan 2025 – May 2025"
        description="Worked with supervised and unsupervised learning on real datasets, focusing on evaluation and interpretability."
        isDarkMode={isDarkMode}
      />
    </div>
  </section>
);

const CertCard = ({ title, org, period, description, isDarkMode }) => (
  <TiltCard
    className={`border ${
      isDarkMode
        ? "border-white bg-black hover:shadow-[0_0_0_2px_#ff2ea6]"
        : "border-black bg-white hover:shadow-[0_0_0_2px_#ff2ea6]"
    } p-5 space-y-3 transition-shadow`}
    isDarkMode={isDarkMode}
  >
    <div className="flex items-start gap-3">
      <div
        className={`p-2 border ${
          isDarkMode
            ? "border-white bg-white text-black"
            : "border-black bg-black text-white"
        }`}
      >
        <Award size={18} />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p
          className={
            isDarkMode
              ? "text-xs text-gray-300"
              : "text-xs text-gray-800"
          }
        >
          {org}
        </p>
        <p
          className={`text-[10px] uppercase tracking-[0.22em] ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {period}
        </p>
      </div>
    </div>
    <p
      className={
        isDarkMode ? "text-xs text-gray-100" : "text-xs text-gray-900"
      }
    >
      {description}
    </p>
  </TiltCard>
);

export default CertificationsSection;
