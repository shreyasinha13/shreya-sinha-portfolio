import React from "react";
import { motion } from "framer-motion";
import TiltCard from "../common/TiltCard";
import HighText from "../common/HighText";
import SectionHeader from "../common/SectionHeader";

const AboutSection = ({ isDarkMode }) => (
  <section
    id="about"
    className="space-y-6 min-h-screen flex flex-col justify-center scroll-mt-24"
  >
    <SectionHeader label="01" title="About" isDarkMode={isDarkMode} />
    <div className="grid md:grid-cols-[2.2fr,1.2fr] gap-8 md:gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className={`space-y-4 text-sm md:text-base ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        <p>
          I'm a{" "}
          <HighText>
            final-year Computer Science student at VIT Vellore
          </HighText>{" "}
          who enjoys building things that are very real: automated workflows,
          full-stack applications and systems that stand up to messy data.
        </p>
        <p>
          My work at <HighText>Indian Oil Corporation Limited</HighText>{" "}
          involved taking a slow, error-prone reporting process and tearing it
          down to its core, then rebuilding it with Python automation. Result:
          dramatically faster reports and zero manual chaos.
        </p>
        <p>
          I experiment with{" "}
          <HighText>blockchain-backed federated learning</HighText> and{" "}
          <HighText>machine learning on real datasets</HighText>, because I like
          understanding not just APIs, but the systems underneath.
        </p>
      </motion.div>

      <TiltCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`space-y-3 border ${
          isDarkMode ? "border-white bg-black" : "border-black bg-white"
        } p-5 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300`}
        isDarkMode={isDarkMode}
      >
        <AboutRow
          label="Mode"
          value="Builder • Learner • Collaborator"
          isDarkMode={isDarkMode}
        />
        <AboutRow
          label="Stack"
          value="Java • Python • JS • React • Node"
          isDarkMode={isDarkMode}
        />
        <AboutRow
          label="Domains"
          value="Web • Automation • ML • Blockchain"
          isDarkMode={isDarkMode}
        />
        <AboutRow
          label="Works Best With"
          value="Teams that ship and iterate"
          isDarkMode={isDarkMode}
        />
      </TiltCard>
    </div>
  </section>
);

const AboutRow = ({ label, value, isDarkMode }) => (
  <div
    className={`flex justify-between border-b ${
      isDarkMode ? "border-white" : "border-black"
    } py-2 gap-4`}
  >
    <span>{label}</span>
    <span className="text-right max-w-[60%] break-words">{value}</span>
  </div>
);

export default AboutSection;
