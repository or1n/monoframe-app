"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import { Moon, Sun, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<"en" | "nl">("en");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const menuItems = [
    { title: { en: "Photography", nl: "Fotografie" }, href: "/photography" },
    { title: { en: "Design", nl: "Ontwerp" }, href: "/design" },
    { title: { en: "Contact", nl: "Contact" }, href: "/contact" },
  ];

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center">
      
      <AnimatePresence>
        {!introFinished && (
          <IntroAnimation onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>

      {introFinished && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="w-full max-w-6xl mx-auto px-6"
        >
          {/* Top Logo */}
          <div className="absolute top-10 left-10">
            <span className="text-xl font-black tracking-tighter">MONO<span className="font-thin">FRAME</span></span>
          </div>

          {/* Controls - Bottom Right */}
          <div className="fixed bottom-10 right-10 flex flex-col items-end gap-6 z-50">
             <button 
              onClick={() => setLang(lang === "en" ? "nl" : "en")}
              className="text-xs font-bold tracking-widest border-b border-current pb-1"
            >
              {lang === "en" ? "NL" : "EN"}
            </button>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 hover:scale-110 transition-transform"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>

          {/* Menu Selection */}
          <nav className="flex flex-col gap-4">
            {menuItems.map((item, i) => (
              <Link key={i} href={item.href} className="group overflow-hidden">
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col"
                >
                  <span className="text-6xl md:text-8xl font-bold tracking-tighter transition-all duration-500 group-hover:italic group-hover:translate-x-4">
                    {item.title[lang]}
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ml-5">
                    {lang === "en" ? "View Projects" : "Bekijk Projecten"}
                  </span>
                </motion.div>
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </main>
  );
}