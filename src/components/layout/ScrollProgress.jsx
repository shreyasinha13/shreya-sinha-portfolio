import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress = ({ isDarkMode }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-1 ${
        isDarkMode ? "bg-black" : "bg-white"
      } z-[60] transition-colors duration-300`}
    >
      <motion.div
        className="h-full bg-[#ff2ea6]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
