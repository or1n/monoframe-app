"use client";
import React from "react";
import { useApp } from "@/context/AppContext";
import { Sun, Moon } from "lucide-react";
import dynamic from "next/dynamic";
import useT from "@/hooks/useT";

const PalettePicker = dynamic(() => import("@/components/PalettePicker"), {
  ssr: false,
});

export default function Footer() {
  const { lang, setLang, darkMode, setDarkMode } = useApp();
  const t = useT();

  return (
    <footer className="w-full py-6 px-6 md:py-8 md:px-12">
      <div className="grid grid-cols-3 items-center gap-4">
        {/* LEFT: Email (centered within section) */}
        <div className="flex justify-center">
          <a 
            href="mailto:info@monoframe.nl" 
            className="text-sm font-bold hover:opacity-60 transition-opacity" 
            aria-label={lang === 'en' ? 'Email' : 'E-mail'}
          >
            info@monoframe.nl
          </a>
        </div>

        {/* CENTER: Controls (Language + Dark/Light + Palette) */}
        <div className="flex items-center justify-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "nl" : "en")}
            className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase hover:opacity-60 transition-opacity"
            aria-label={lang === "en" ? t("switchToDutch") : t("switchToEnglish")}
          >
            {lang === "en" ? "NL" : "EN"}
          </button>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 hover:opacity-60 transition-opacity"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <Sun width={18} height={18} strokeWidth={1.5} />
            ) : (
              <Moon width={18} height={18} strokeWidth={1.5} />
            )}
          </button>

          {/* Palette Picker */}
          <div className="scale-90">
            <PalettePicker />
          </div>
        </div>

        {/* RIGHT: Phone (centered within section) */}
        <div className="flex justify-center">
          <a 
            href="https://wa.me/31682750609" 
            className="text-sm font-bold hover:opacity-60 transition-opacity text-center" 
            aria-label="WhatsApp"
          >
            +31 (0) 6 8275 0609
          </a>
        </div>
      </div>
    </footer>
  );
}
