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
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-24"
      >
        <h1 className="text-6xl md:text-9xl font-black tracking-[0.4em]">
          MONOFRAME
        </h1>

        <div className="text-center">
          <p className="text-3xl md:text-5xl font-light tracking-tighter italic lowercase">
            {lang === "en" ? "coming soon" : "komt er binnenkort aan"}
          </p>
        </div>
      </motion.div>
    </main>
  );
}