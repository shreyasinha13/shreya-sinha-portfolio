import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = ({ isDarkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // On mobile or reduced motion, skip the heavy 3D background
    if (isMobile || prefersReducedMotion) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const cubes = [];
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xff2ea6 : isDarkMode ? 0xffffff : 0x000000,
        wireframe: true,
      });
      const cube = new THREE.Mesh(geometry, material);

      cube.position.x = (Math.random() - 0.5) * 10;
      cube.position.y = (Math.random() - 0.5) * 10;
      cube.position.z = (Math.random() - 0.5) * 5;

      cube.userData.speedX = (Math.random() - 0.5) * 0.001;
      cube.userData.speedY = (Math.random() - 0.5) * 0.001;

      scene.add(cube);
      cubes.push(cube);
    }

    const animate = () => {
      requestAnimationFrame(animate);

      cubes.forEach((cube) => {
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;

        cube.position.x += cube.userData.speedX;
        cube.position.y += cube.userData.speedY;

        if (Math.abs(cube.position.x) > 6) cube.position.x *= -1;
        if (Math.abs(cube.position.y) > 6) cube.position.y *= -1;
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cubes.forEach((cube) => {
        cube.geometry.dispose();
        cube.material.dispose();
      });
      renderer.dispose();
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-30 pointer-events-none"
    />
  );
};

export default ThreeBackground;
