"use client";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { useEffect } from "react";

export default function Home() {
  const { lang, setHasSeenIntro } = useApp();

  useEffect(() => {
    setHasSeenIntro(true);
  }, [setHasSeenIntro]);

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      {/* 3x Spacing between Logo and Subtext */}
      <div className="flex flex-col items-center gap-32">
        
        {/* LOGO: Massive, Solid, Wide Spacing */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-black tracking-[0.3em] text-black dark:text-white"
        >
          MONOFRAME
        </motion.h1>

        {/* SUBTEXT: Coming Soon centered below */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-3xl md:text-5xl font-light tracking-tighter italic lowercase text-black dark:text-white">
            {lang === "en" ? "coming soon" : "komt er binnenkort aan"}
          </p>
        </motion.div>
      </div>
    </main>
  );
}