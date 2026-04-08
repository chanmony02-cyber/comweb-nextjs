// src/pages/Contact/components/NetworkBackground.jsx

import { useEffect, useRef } from "react";

// Canvas uses hex directly — Tailwind cannot reach the canvas API.
// These match the project design tokens exactly.
const COLORS = {
  nodeFill: "#2A8CD5",   // primary-blue
  nodeStroke: "#9FCCFF", // sky-accent
  line: "#2A8CD5",       // primary-blue
  glow: "#9FCCFF",       // sky-accent
  mouseLine: "#9FCCFF",  // sky-accent for mouse connections
};

const CONFIG = {
  nodeCount: 60,
  maxDistance: 160,       // node-to-node connection distance
  mouseDistance: 200,     // mouse-to-node connection distance
  mouseRepelRadius: 80,   // radius where nodes get pushed away from cursor
  mouseRepelForce: 0.06,  // strength of repel push
  returnForce: 0.008,     // how fast nodes drift back to original velocity
  nodeSpeed: 0.4,
  nodeRadiusMin: 1.5,
  nodeRadiusMax: 4,
  lineOpacityMax: 0.35,
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "0,0,0";
}

function createNode(width, height) {
  const angle = Math.random() * Math.PI * 2;
  const speed = (Math.random() * 0.5 + 0.2) * CONFIG.nodeSpeed;
  const vx = Math.cos(angle) * speed;
  const vy = Math.sin(angle) * speed;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx,
    vy,
    baseVx: vx, // original velocity to drift back to
    baseVy: vy,
    radius: Math.random() * (CONFIG.nodeRadiusMax - CONFIG.nodeRadiusMin) + CONFIG.nodeRadiusMin,
    opacity: Math.random() * 0.5 + 0.5,
  };
}

export function NetworkBackground({ className = "" }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 }); // off-screen by default

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const nodeRgb    = hexToRgb(COLORS.nodeFill);
    const strokeRgb  = hexToRgb(COLORS.nodeStroke);
    const lineRgb    = hexToRgb(COLORS.line);
    const glowRgb    = hexToRgb(COLORS.glow);
    const mouseRgb   = hexToRgb(COLORS.mouseLine);

    // ── Resize ──────────────────────────────────────────────
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      nodesRef.current = Array.from({ length: CONFIG.nodeCount }, () =>
        createNode(canvas.width, canvas.height)
      );
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Mouse tracking ───────────────────────────────────────
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // ── Draw loop ────────────────────────────────────────────
    const draw = () => {
      const { width, height } = canvas;
      const mouse = mouseRef.current;
      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;

      // Update node positions + mouse repel
      nodes.forEach((node) => {
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.mouseRepelRadius && dist > 0) {
          // Push node away from cursor
          const force = (1 - dist / CONFIG.mouseRepelRadius) * CONFIG.mouseRepelForce;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }

        // Gently drift velocity back toward the original base velocity
        node.vx += (node.baseVx - node.vx) * CONFIG.returnForce;
        node.vy += (node.baseVy - node.vy) * CONFIG.returnForce;

        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > width)  { node.vx *= -1; node.baseVx *= -1; }
        if (node.y < 0 || node.y > height) { node.vy *= -1; node.baseVy *= -1; }
      });

      // ── Draw node-to-node connections ──────────────────────
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.maxDistance) {
            const opacity = (1 - dist / CONFIG.maxDistance) * CONFIG.lineOpacityMax;

            // Soft glow
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${glowRgb}, ${opacity * 0.15})`;
            ctx.lineWidth = 3;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Main line
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineRgb}, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // ── Draw mouse-to-node connections ─────────────────────
      nodes.forEach((node) => {
        const dx   = node.x - mouse.x;
        const dy   = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.mouseDistance) {
          const opacity = (1 - dist / CONFIG.mouseDistance) * 0.6;

          // Bright glow line toward cursor
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${mouseRgb}, ${opacity * 0.25})`;
          ctx.lineWidth = 4;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();

          // Crisp line
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${mouseRgb}, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      // ── Draw cursor dot ────────────────────────────────────
      if (mouse.x > 0 && mouse.y > 0) {
        const cursorGrd = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 20
        );
        cursorGrd.addColorStop(0, `rgba(${mouseRgb}, 0.4)`);
        cursorGrd.addColorStop(1, `rgba(${mouseRgb}, 0)`);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = cursorGrd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${mouseRgb}, 0.9)`;
        ctx.fill();
      }

      // ── Draw nodes ─────────────────────────────────────────
      nodes.forEach((node) => {
        // Outer glow
        const grd = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 4
        );
        grd.addColorStop(0, `rgba(${strokeRgb}, ${node.opacity * 0.3})`);
        grd.addColorStop(1, `rgba(${strokeRgb}, 0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeRgb}, ${node.opacity})`;
        ctx.fill();

        // Node ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${strokeRgb}, ${node.opacity * 0.6})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
