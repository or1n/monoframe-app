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
    <footer className="w-full border-t border-current/10" role="contentinfo" style={{background: 'var(--background)'}}>
      <div className="py-8 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-4 max-w-7xl mx-auto">
          {/* LEFT: Email */}
          <div className="flex justify-center md:justify-start">
            <a 
              href="mailto:info@monoframe.nl" 
              className="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity"
              style={{fontWeight: 500}}
              aria-label={lang === 'en' ? 'Email us at info@monoframe.nl' : 'Stuur een e-mail naar info@monoframe.nl'}
            >
              info@monoframe.nl
            </a>
          </div>

          {/* CENTER: Controls */}
          <div className="flex items-center justify-center gap-6">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "nl" : "en")}
              className="text-xs tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity"
              style={{fontWeight: 600, letterSpacing: '0.15em'}}
              aria-label={lang === "en" ? t("switchToDutch") : t("switchToEnglish")}
              title={lang === "en" ? "Switch to Dutch" : "Wissel naar Engels"}
            >
              {lang === "en" ? "NL" : "EN"}
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="opacity-70 hover:opacity-100 transition-opacity"
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
            <PalettePicker />
          </div>

          {/* RIGHT: Phone */}
          <div className="flex justify-center md:justify-end">
            <a 
              href="https://wa.me/31682750609" 
              className="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity"
              style={{fontWeight: 500}}
              aria-label={lang === 'en' ? 'Contact us on WhatsApp at +31 6 8275 0609' : 'Neem contact met ons op via WhatsApp op +31 6 8275 0609'}
              title="WhatsApp"
            >
              {t("phone")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
