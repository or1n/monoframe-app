"use client";
import React from "react";
import { useApp } from "@/context/AppContext";

const PALETTES: { key: string; color: string; label: string }[] = [
  { key: "default", color: "#0ea5a4", label: "Default" },
  { key: "indigo", color: "#6366f1", label: "Indigo" },
  { key: "coral", color: "#fb7185", label: "Coral" },
  { key: "amber", color: "#f59e0b", label: "Amber" },
  { key: "teal", color: "#14b8a6", label: "Teal" },
  { key: "rose", color: "#f43f5e", label: "Rose" },
];

export default function PalettePicker() {
  const { colorTheme, setColorTheme } = useApp();

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Color theme picker">
      {PALETTES.map((p) => (
        <button
          key={p.key}
          onClick={() => setColorTheme(p.key)}
          aria-label={`Select ${p.label} color theme`}
          aria-pressed={colorTheme === p.key}
          title={`${p.label} theme`}
          style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: p.color,
            border: colorTheme === p.key ? '2px solid currentColor' : '1px solid rgba(128,128,128,0.2)',
            opacity: colorTheme === p.key ? 1 : 0.6,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            transform: colorTheme === p.key ? 'scale(1.1)' : 'scale(1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = colorTheme === p.key ? '1' : '0.6'}
        />
      ))}
    </div>
  );
}
