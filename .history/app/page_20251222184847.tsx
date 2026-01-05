"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<"en" | "nl">("en");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const menuItems = [
    { title: { en: "Photography", nl: "Fotografie" }, href: "/photography" },
    { title: { en: "Design", nl: "Ontwerp" }, href: "/design" },
    { title: { en: "Contact", nl: "Contact" }, href: "/contact" },
  ];

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-700">
      
      <AnimatePresence>
        {!introFinished && (
          <IntroAnimation onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>

      {introFinished && (
        <>
          {/* TOP NAVIGATION / CONTROLS */}
          <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50">
            {/* Logo area */}
            <div className="text-sm font-black tracking-widest">
              MONO<span className="font-thin">FRAME</span>
            </div>

            {/* Subtle Controls */}
            <div className="flex items-center gap-8">
              {/* Language Toggle */}
              <div className="group relative">
                <button 
                  onClick={() => setLang(lang === "en" ? "nl" : "en")}
                  className="text-xs font-medium tracking-widest opacity-50 hover:opacity-100 transition-opacity"
                >
                  {lang.toUpperCase()}
                </button>
                <span className="absolute -bottom-8 right-0 whitespace-nowrap text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none">
                  {lang === "en" ? "Change Language" : "Taal Wijzigen"}
                </span>
              </div>

              {/* Theme Toggle */}
              <div className="group relative">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="opacity-50 hover:opacity-100 transition-opacity"
                >
                  {darkMode ? <Sun size={14} /> : <Moon size={14} />}
                </button>
                <span className="absolute -bottom-8 right-0 whitespace-nowrap text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none">
                  {lang === "en" ? "Change Theme" : "Thema Wijzigen"}
                </span>
              </div>
            </div>
          </nav>

          {/* MAIN MENU CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-center gap-12"
          >
            <div className="flex flex-col gap-6">
              {menuItems.map((item, i) => (
                <Link key={i} href={item.href} className="group relative">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    <span className="text-5xl md:text-7xl font-light tracking-tighter block transition-all duration-500 group-hover:tracking-normal group-hover:scale-105">
                      {item.title[lang]}
                    </span>
                    {/* Visual 2025 "Frame" Element on hover */}
                    <div className="absolute inset-0 border border-black dark:border-white scale-110 opacity-0 group-hover:opacity-10 group-hover:scale-100 transition-all duration-700" />
                  </motion.div>
                </Link>
              ))}
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1.2 }}
              className="text-[10px] uppercase tracking-[0.5em] mt-4"
            >
              {lang === "en" ? "Orin Mons Studio" : "Orin Mons Studio"}
            </motion.p>
          </motion.div>
        </>
      )}
    </main>
  );
}