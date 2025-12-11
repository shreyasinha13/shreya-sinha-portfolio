import React from "react";
import SectionHeader from "../common/SectionHeader";
import TiltCard from "../common/TiltCard";

const SKILL_GROUPS = [
  {
    title: "Languages",
    items: [
      { name: "Java", level: "Deep" },
      { name: "Python", level: "Deep" },
      { name: "C/C++", level: "Comfortable" },
      { name: "JavaScript", level: "Comfortable" },
      { name: "HTML/CSS", level: "Comfortable" },
    ],
  },
  {
    title: "Frameworks & Tools",
    items: [
      { name: "React", level: "Comfortable" },
      { name: "Node.js", level: "Comfortable" },
      { name: "Spring Boot", level: "Working" },
      { name: "REST APIs", level: "Comfortable" },
      { name: "Git", level: "Comfortable" },
    ],
  },
  {
    title: "Data & ML",
    items: [
      { name: "Pandas", level: "Deep" },
      { name: "NumPy", level: "Comfortable" },
      { name: "Scikit-learn", level: "Comfortable" },
      { name: "Matplotlib", level: "Working" },
      { name: "Seaborn", level: "Working" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "SQL", level: "Comfortable" },
      { name: "NoSQL", level: "Working" },
      { name: "MongoDB", level: "Working" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "GitHub Actions (CI/CD)", level: "Working" },
      { name: "n8n Workflow Automation", level: "Working" },
      { name: "AWS (S3 / Amplify Free Tier)", level: "Working" },
      { name: "Docker", level: "Working" },
    ],
  },
];

const SkillsSection = ({ isDarkMode }) => (
  <section
    id="skills"
    className="space-y-6 pt-16 pb-40 scroll-mt-24"
  >

    <SectionHeader
      label="02"
      title="Technical Skills"
      isDarkMode={isDarkMode}
    />

    <p
      className={`text-xs md:text-sm max-w-2xl leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-800"
        }`}
    >
      A quick, honest map of where I’m most productive. Levels are{" "}
      <span className="font-semibold text-[#ff2ea6]">self-assessed</span>{" "}
      based on projects, internships and hands-on practice.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {SKILL_GROUPS.map((group) => (
        <TiltCard
          key={group.title}
          className={`
            border p-3 md:p-4 space-y-2 text-xs
            ${isDarkMode
              ? "border-white bg-black hover:shadow-[0_0_0_2px_#ff2ea6]"
              : "border-black bg-white hover:shadow-[0_0_0_2px_#ff2ea6]"
            }
            transition-shadow
          `}
          isDarkMode={isDarkMode}
        >
          <div className="flex items-center justify-between">
            <h3 className="uppercase text-[10px] md:text-[11px] tracking-[0.28em]">
              {group.title}
            </h3>
            <div className="h-2.5 w-2.5 bg-[#ff2ea6]" />
          </div>

          <ul className="space-y-1">
            {group.items.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between gap-2"
              >
                <span className="truncate">{item.name}</span>
                <span
                  className={`
                    text-[9px] uppercase tracking-[0.18em] whitespace-nowrap
                    ${isDarkMode ? "text-gray-300" : "text-gray-700"
                    }
                  `}
                >
                  {item.level}
                </span>
              </li>
            ))}
          </ul>
        </TiltCard>
      ))}
    </div>
  </section>
);

export default SkillsSection;
