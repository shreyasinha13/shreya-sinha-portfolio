import React from "react";
import { motion } from "framer-motion";

const FloatingObjects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        >
          <div
            className="w-12 h-12 border-2 border-[#ff2ea6] opacity-20"
            style={{
              transform: `rotate3d(1, 1, 1, ${i * 45}deg)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingObjects;
