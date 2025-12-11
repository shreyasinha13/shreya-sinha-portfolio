import React, { useEffect, useRef } from "react";

const ParticleField = ({ isDarkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeAndReset = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = isDarkMode ? "#000000" : "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    resizeAndReset();

    const particles = [];
    const baseCount = 50;
    const particleCount =
      isMobile || prefersReducedMotion ? Math.floor(baseCount / 2) : baseCount;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeAndReset);

    let animationId;

    const drawConnections = !isMobile && !prefersReducedMotion;

    const animate = () => {
      ctx.fillStyle = isDarkMode
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100 && distance > 0 && !prefersReducedMotion) {
          const force = (100 - distance) / 100;
          p.vx += (dx / distance) * force * 0.05;
          p.vy += (dy / distance) * force * 0.05;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        p.vx *= 0.99;
        p.vy *= 0.99;

        ctx.fillStyle =
          i % 2 === 0
            ? "#ff2ea6"
            : isDarkMode
            ? "#ffffff"
            : "#000000";
        ctx.fillRect(p.x, p.y, p.size, p.size);

        if (!drawConnections) return;

        particles.forEach((p2, j) => {
          if (i !== j) {
            const dx2 = p.x - p2.x;
            const dy2 = p.y - p2.y;
            const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);

            if (dist < 100) {
              ctx.strokeStyle = `rgba(255, 46, 166, ${1 - dist / 100})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeAndReset);
      if (animationId) cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-40 pointer-events-none"
    />
  );
};

export default ParticleField;
