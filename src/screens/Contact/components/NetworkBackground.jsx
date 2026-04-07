"use client";

import { useEffect, useRef } from "react";

// Canvas uses hex directly because Tailwind cannot style the canvas API.
// These values match the project tokens used in the old implementation.
const COLORS = {
  nodeFill: "#2A8CD5",
  nodeStroke: "#9FCCFF",
  line: "#2A8CD5",
  glow: "#9FCCFF",
  mouseLine: "#9FCCFF",
};

const CONFIG = {
  nodeCount: 60,
  maxDistance: 160,
  mouseDistance: 200,
  mouseRepelRadius: 80,
  mouseRepelForce: 0.06,
  returnForce: 0.008,
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
    baseVx: vx,
    baseVy: vy,
    radius:
      Math.random() * (CONFIG.nodeRadiusMax - CONFIG.nodeRadiusMin) +
      CONFIG.nodeRadiusMin,
    opacity: Math.random() * 0.5 + 0.5,
  };
}

export function NetworkBackground({ className = "" }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const nodeRgb = hexToRgb(COLORS.nodeFill);
    const strokeRgb = hexToRgb(COLORS.nodeStroke);
    const lineRgb = hexToRgb(COLORS.line);
    const glowRgb = hexToRgb(COLORS.glow);
    const mouseRgb = hexToRgb(COLORS.mouseLine);

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      nodesRef.current = Array.from({ length: CONFIG.nodeCount }, () =>
        createNode(canvas.width, canvas.height),
      );
    };

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

    const draw = () => {
      const { width, height } = canvas;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;

      nodes.forEach((node) => {
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.mouseRepelRadius && dist > 0) {
          const force =
            (1 - dist / CONFIG.mouseRepelRadius) * CONFIG.mouseRepelForce;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }

        node.vx += (node.baseVx - node.vx) * CONFIG.returnForce;
        node.vy += (node.baseVy - node.vy) * CONFIG.returnForce;

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) {
          node.vx *= -1;
          node.baseVx *= -1;
        }

        if (node.y < 0 || node.y > height) {
          node.vy *= -1;
          node.baseVy *= -1;
        }
      });

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.maxDistance) {
            const opacity =
              (1 - dist / CONFIG.maxDistance) * CONFIG.lineOpacityMax;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(${glowRgb}, ${opacity * 0.15})`;
            ctx.lineWidth = 3;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineRgb}, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.mouseDistance) {
          const opacity = (1 - dist / CONFIG.mouseDistance) * 0.6;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(${mouseRgb}, ${opacity * 0.25})`;
          ctx.lineWidth = 4;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();

          ctx.beginPath();
          ctx.strokeStyle = `rgba(${mouseRgb}, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      if (mouse.x > 0 && mouse.y > 0) {
        const cursorGrd = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          20,
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

      nodes.forEach((node) => {
        const grd = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 4,
        );
        grd.addColorStop(0, `rgba(${strokeRgb}, ${node.opacity * 0.3})`);
        grd.addColorStop(1, `rgba(${strokeRgb}, 0)`);

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeRgb}, ${node.opacity})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${strokeRgb}, ${node.opacity * 0.6})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

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
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
