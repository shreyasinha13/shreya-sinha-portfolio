import React from "react";
import { Code } from "lucide-react";
import TiltCard from "../common/TiltCard";
import SectionHeader from "../common/SectionHeader";

const ProjectsSection = ({ onProjectClick, isDarkMode }) => (
  <section
    id="projects"
    className="space-y-6 min-h-screen flex flex-col justify-center scroll-mt-24"
  >
    <SectionHeader
      label="04"
      title="Selected Projects"
      isDarkMode={isDarkMode}
    />
    <div className="grid md:grid-cols-3 gap-5">
      <ProjectCard
        title="Blockchain-Based Reputation System"
        period="Jul 2025 – Nov 2025"
        tech="Solidity • Python • Truffle • Web3.py"
        points={[
          "Decentralised reputation engine for 10+ federated learning clients on Ethereum.",
          "Smart contract tracks client behaviour and adjusts reputation scores based on model updates.",
          "Simulated attacks (data poisoning) to show how malicious clients are down-weighted.",
        ]}
        details={{
          whatItDoes: [
            "On-chain reputation engine for federated learning clients.",
            "Reputation scores updated after each training round based on model behaviour.",
            "Malicious clients are automatically down-weighted in aggregation.",
          ],
          whatILearned: [
            "Designing incentive-compatible smart contracts for ML systems.",
            "Working with Solidity, Truffle and Web3.py for rapid prototyping.",
            "Handling adversarial behaviour and data-poisoning scenarios.",
          ],
        }}
        onClick={onProjectClick}
        isDarkMode={isDarkMode}
      />
      <ProjectCard
        title="Blogging Application"
        period="Jun 2024 – Jul 2024"
        tech="MongoDB • Express • React • Node.js"
        points={[
          "Full-stack blog platform with JWT auth, protected routes and role-based access.",
          "Responsive React UI with live preview, tag filters and search.",
          "Optimised MongoDB schemas for posts, comments and users.",
        ]}
        details={{
          whatItDoes: [
            "End-to-end blogging platform with authentication and author roles.",
            "Live preview editor and tag-based navigation.",
            "Searchable archive with pagination and filters.",
          ],
          whatILearned: [
            "Structuring MERN apps with clean separation of concerns.",
            "Implementing JWT-based authentication and refresh tokens.",
            "Designing MongoDB schemas for relational-style queries.",
          ],
        }}
        onClick={onProjectClick}
        isDarkMode={isDarkMode}
      />
      <ProjectCard
        title="Diabetes Prediction System"
        period="Nov 2024 – Jan 2025"
        tech="Python • Pandas • Scikit-learn"
        points={[
          "Trained ML model on PIMA dataset with ~85% accuracy after feature engineering.",
          "Compared multiple algorithms and tuned hyperparameters for performance.",
          "Explained feature importance to make predictions interpretable for non-technical users.",
        ]}
        details={{
          whatItDoes: [
            "Binary classification model to predict diabetes risk.",
            "Feature-engineered pipeline with scaling, imputation and model selection.",
            "Simple UI/notebook-style interface for clinicians/stakeholders.",
          ],
          whatILearned: [
            "Evaluating ML models with proper train/validation splits.",
            "Using GridSearchCV / RandomizedSearchCV for hyperparameter tuning.",
            "Communicating model results and feature importance to non-technical people.",
          ],
        }}
        onClick={onProjectClick}
        isDarkMode={isDarkMode}
      />
    </div>
  </section>
);

const ProjectCard = ({
  title,
  period,
  tech,
  points,
  details,
  onClick,
  isDarkMode,
}) => (
  <TiltCard
    className={`border ${
      isDarkMode
        ? "border-white bg-black hover:shadow-[0_0_0_2px_#ff2ea6]"
        : "border-black bg-white hover:shadow-[0_0_0_2px_#ff2ea6]"
    } p-4 flex flex-col gap-3 transition-shadow cursor-pointer`}
    onClick={() => onClick({ title, period, tech, points, ...details })}
    isDarkMode={isDarkMode}
  >
    <div className="flex items-start justify-between gap-2">
      <div className="flex items-center gap-2">
        <div
          className={`p-1 border ${
            isDarkMode
              ? "border-white bg-white text-black"
              : "border-black bg-black text-white"
          }`}
        >
          <Code size={18} />
        </div>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <span
        className={`text-[10px] uppercase tracking-[0.2em] ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        } text-right`}
      >
        {period}
      </span>
    </div>
    <p className="text-[10px] uppercase tracking-[0.22em] text-[#ff2ea6]">
      {tech}
    </p>
    <ul className="space-y-1 text-xs">
      {points.map((p) => (
        <li key={p} className="flex gap-2">
          <span className="mt-[1px]">—</span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
    <p
      className={`text-[10px] uppercase tracking-[0.22em] ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      } pt-1`}
    >
      Click for details
    </p>
  </TiltCard>
);

export default ProjectsSection;
