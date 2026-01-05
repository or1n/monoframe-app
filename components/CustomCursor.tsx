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
    <div
      aria-hidden
      style={{ left: pos.x - 10, top: pos.y - 10 }}
      className="pointer-events-none fixed w-5 h-5 rounded-full bg-[var(--accent)] opacity-90 transform-gpu transition-transform ease-linear"
    />
  );
}
