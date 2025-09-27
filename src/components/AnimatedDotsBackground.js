import React, { useEffect } from 'react';
import './AnimatedDotsBackground.css';

const AnimatedDotsBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("dots-canvas");
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Now let's add the animated version
    let mouseX = -1000;
    let mouseY = -1000;

    const colors = ["#000000", "#111111", "#222222"]; // Using black shades

    const dots = Array.from({ length: 50 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      size: 3 + Math.random() * 3,
      color: colors[i % colors.length],
      originalVx: (Math.random() - 0.5) * 1,
      originalVy: (Math.random() - 0.5) * 1,
    }));

    dots.forEach((dot) => {
      dot.originalVx = dot.vx;
      dot.originalVy = dot.vy;
    });

    const drawDot = (dot) => {
      const { x, y, size } = dot;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = "#000000";
      ctx.shadowColor = "#000000";
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawConnection = (dot1, dot2, distance) => {
      const maxDistance = 120;
      const opacity = Math.max(0, 1 - distance / maxDistance);

      ctx.beginPath();
      ctx.moveTo(dot1.x, dot1.y);
      ctx.lineTo(dot2.x, dot2.y);
      ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * 0.6})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const dx = dot.x - mouseX;
        const dy = dot.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 100;

        if (distance < repulsionRadius && distance > 0) {
          const force = (repulsionRadius - distance) / repulsionRadius;
          const repulsionStrength = 3;
          dot.vx += (dx / distance) * force * repulsionStrength;
          dot.vy += (dy / distance) * force * repulsionStrength;
        } else {
          dot.vx += (dot.originalVx - dot.vx) * 0.02;
          dot.vy += (dot.originalVy - dot.vy) * 0.02;
        }

        dot.vx *= 0.98;
        dot.vy *= 0.98;

        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx *= -1;
          dot.originalVx *= -1;
        }
        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vy *= -1;
          dot.originalVy *= -1;
        }

        dot.x = Math.max(0, Math.min(canvas.width, dot.x));
        dot.y = Math.max(0, Math.min(canvas.height, dot.y));
      });

      // Draw connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            drawConnection(dots[i], dots[j], distance);
          }
        }
      }

      // Draw dots
      dots.forEach(drawDot);

      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div style={{ 
      position: "fixed", 
      top: 0, 
      left: 0, 
      width: "100vw", 
      height: "100vh", 
      zIndex: 0,
      pointerEvents: "none",
      background: "transparent",
      filter: "blur(0px)",
      opacity: 0.9
    }}>
      <canvas 
        id="dots-canvas" 
        className="animated-dots-canvas" 
        style={{ 
          background: "transparent",
          border: "none",
          width: "100%",
          height: "100%"
        }} 
      />
    </div>
  );
};

export default AnimatedDotsBackground;