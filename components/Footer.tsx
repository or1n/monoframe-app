"use client";
import React from "react";
import PalettePicker from "@/components/PalettePicker";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { lang } = useApp();

  return (
    <footer className="w-full py-6 px-6 md:px-12 flex items-center justify-between text-sm opacity-90">
      <div>
        <a href="mailto:info@monoframe.nl" className="font-bold" aria-label={lang === 'en' ? 'Email' : 'E-mail'}>
          info@monoframe.nl
        </a>
      </div>

      <div className="flex items-center gap-4">
        <PalettePicker />
      </div>
    </footer>
  );
}
