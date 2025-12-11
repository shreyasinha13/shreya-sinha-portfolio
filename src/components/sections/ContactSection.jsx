import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import TiltCard from "../common/TiltCard";

const ContactSection = ({ isDarkMode }) => {
  const handleEmailClick = (e) => {
    e.preventDefault();

    const email = "shreyasinha1309@gmail.com";
    const subject = encodeURIComponent("Regarding opportunities / collaboration");
    const body = encodeURIComponent(
      "Hi Shreya,\n\nI came across your portfolio and would like to connect regarding...\n\nBest,\n"
    );

    // 1) Try default mail client
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    // 2) Fallback: open Gmail compose after a short delay
    setTimeout(() => {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
    }, 800);
  };

  return (
    <section
      id="contact"
      className="space-y-6 min-h-screen flex flex-col justify-center scroll-mt-24"
    >
      <SectionHeader label="07" title="Contact" isDarkMode={isDarkMode} />
      <TiltCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className={`border p-5 md:p-6 flex flex-col md:flex-row gap-6 md:gap-10 justify-between transition-shadow
          ${
            isDarkMode
              ? "border-white bg-white text-black hover:shadow-[0_0_0_2px_#ff2ea6]"
              : "border-black bg-black text-white hover:shadow-[0_0_0_2px_#ff2ea6]"
          }`}
        isDarkMode={isDarkMode}
      >
        <div className="space-y-3">
          <p
            className={`text-[11px] uppercase tracking-[0.3em] ${
              isDarkMode ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Open to
          </p>
          <p className="text-sm md:text-base">
            Internships, collaborations and roles where code is treated as a tool
            for clarity, not clutter.
          </p>
        </div>
        <div className="space-y-3 text-xs md:text-sm">
          <ContactRow
            icon={<Mail size={16} />}
            label="EMAIL"
            href="mailto:shreyasinha1309@gmail.com"
            value="shreyasinha1309@gmail.com"
            isDarkMode={isDarkMode}
            onClick={handleEmailClick}
          />
          <ContactRow
            icon={<Linkedin size={16} />}
            label="LINKEDIN"
            href="https://linkedin.com/in/shreyasinha13"
            value="/in/shreyasinha13"
            isDarkMode={isDarkMode}
          />
          <ContactRow
            icon={<Github size={16} />}
            label="GITHUB"
            href="https://github.com/shreyasinha13"
            value="@shreyasinha13"
            isDarkMode={isDarkMode}
          />
        </div>
      </TiltCard>
    </section>
  );
};

const ContactRow = ({ icon, label, href, value, isDarkMode, onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    target={href && label !== "EMAIL" ? "_blank" : undefined}
    rel={href && label !== "EMAIL" ? "noopener noreferrer" : undefined}
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

export default ContactSection;
