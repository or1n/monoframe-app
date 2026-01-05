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
          className={`w-5 h-5 rounded-full border-2 border-white/20 shadow-md hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white/50 ${
            colorTheme === p.key ? 'ring-2 ring-offset-2 ring-white/40 scale-110' : ''
          }`}
          style={{ background: p.color }}
        />
      ))}
    </div>
  );
}
