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
    <footer className="w-full py-6 px-6 md:py-8 md:px-12 relative z-40 bg-[var(--background)]" role="contentinfo">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-4">
        {/* LEFT: Email (centered within section) */}
        <div className="flex justify-center md:justify-start">
          <a 
            href="mailto:info@monoframe.nl" 
            className="text-sm font-bold hover:opacity-60 transition-opacity" 
            aria-label={lang === 'en' ? 'Email us at info@monoframe.nl' : 'Stuur een e-mail naar info@monoframe.nl'}
          >
            info@monoframe.nl
          </a>
        </div>

        {/* CENTER: Controls (Language + Dark/Light + Palette) */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "nl" : "en")}
            className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase hover:opacity-60 transition-opacity border border-current/20 rounded"
            aria-label={lang === "en" ? t("switchToDutch") : t("switchToEnglish")}
            title={lang === "en" ? "Switch to Dutch" : "Wissel naar Engels"}
          >
            {lang === "en" ? "NL" : "EN"}
          </button>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 hover:opacity-60 transition-opacity border border-current/20 rounded"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <Sun width={18} height={18} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Moon width={18} height={18} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>

          {/* Palette Picker */}
          <div className="flex items-center">
            <PalettePicker />
          </div>
        </div>

        {/* RIGHT: Phone (centered within section) */}
        <div className="flex justify-center md:justify-end">
          <a 
            href="https://wa.me/31682750609" 
            className="text-sm font-bold hover:opacity-60 transition-opacity text-center" 
            aria-label={lang === 'en' ? 'Contact us on WhatsApp at +31 6 8275 0609' : 'Neem contact met ons op via WhatsApp op +31 6 8275 0609'}
            title="WhatsApp"
          >
            +31 (0) 6 8275 0609
          </a>
        </div>
      </div>
    </footer>
  );
}
