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
    <div className="flex items-center gap-3">
      {PALETTES.map((p) => (
        <button
          key={p.key}
          onClick={() => setColorTheme(p.key)}
          aria-label={`Select ${p.label} theme`}
          className={`w-6 h-6 rounded-full border-2 border-white/10 shadow-sm focus:outline-none ${colorTheme===p.key? 'ring-2 ring-offset-2 ring-white/30':''}`}
          style={{ background: p.color }}
        />
      ))}
    </div>
  );
}
