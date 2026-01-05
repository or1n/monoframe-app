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
    <main className="h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Wrapped in a fixed-size container to prevent layout shifts */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center w-full"
      >
        <div className="flex flex-col items-center gap-32">
          <h1 className="text-6xl md:text-9xl font-black tracking-[0.4em] leading-none">
            MONOFRAME
          </h1>

          <p className="text-3xl md:text-5xl font-light tracking-tighter italic lowercase leading-none">
            {lang === "en" ? "coming soon" : "komt er binnenkort aan"}
          </p>
        </div>
      </motion.div>
    </main>
  );
}