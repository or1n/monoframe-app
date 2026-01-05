"use client";
import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Main dot */}
      <div
        aria-hidden
        style={{ left: pos.x - 6, top: pos.y - 6 }}
        className="pointer-events-none fixed w-3 h-3 rounded-full bg-[var(--accent)] opacity-90 transform-gpu transition-transform ease-linear z-[9999]"
      />
      
      {/* Outer ring */}
      <div
        aria-hidden
        style={{ left: pos.x - 12, top: pos.y - 12 }}
        className="pointer-events-none fixed w-6 h-6 border border-[var(--accent)] rounded-full opacity-50 transform-gpu transition-transform ease-linear z-[9999]"
      />
    </>
  );
}
