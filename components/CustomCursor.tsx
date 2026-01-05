"use client";
import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calcScale = () => {
      const dim = Math.max(window.innerWidth, window.innerHeight);
      // Scale cursor size based on viewport, clamped for consistency
      const next = Math.min(1.4, Math.max(0.85, dim / 1440));
      setScale(next);
    };
    calcScale();
    window.addEventListener("resize", calcScale, { passive: true });
    return () => window.removeEventListener("resize", calcScale);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    // Hide default cursor while our custom cursor is active
    document.body.classList.add("no-default-cursor");
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-default-cursor");
    };
  }, []);

  return (
    <>
      {(() => {
        const innerSize = 8 * scale; // base 8px
        const outerSize = 22 * scale; // base 22px
        const innerOffset = innerSize / 2;
        const outerOffset = outerSize / 2;
      {/* Main dot */}
        return (
          <>
            <div
              aria-hidden
              style={{ left: pos.x - innerOffset, top: pos.y - innerOffset, width: innerSize, height: innerSize }}
              className="pointer-events-none fixed rounded-full bg-[var(--accent)] opacity-90 transform-gpu transition-transform ease-linear z-[9999] shadow-[0_0_12px_var(--accent)]"
            />
            
            {/* Outer ring */}
            <div
              aria-hidden
              style={{ left: pos.x - outerOffset, top: pos.y - outerOffset, width: outerSize, height: outerSize }}
              className="pointer-events-none fixed border border-[var(--accent)] rounded-full opacity-60 transform-gpu transition-transform ease-linear z-[9999] shadow-[0_0_18px_var(--accent)]"
            />
          </>
        );
      })()}
    </>
  );
}
