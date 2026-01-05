"use client";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { useEffect } from "react";

export default function Home() {
  const { lang, setHasSeenIntro } = useApp();

  useEffect(() => {
    setHasSeenIntro(true);
  }, [setHasSeenIntro]);

  const fluidContact = "clamp(9px, 1vw, 15px)";
  const fluidSub = "clamp(7px, 0.7vw, 11px)";

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center relative px-6">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center gap-[8vh] text-center"
      >
        <h1 className="text-[clamp(2.2rem,9vw,6.5rem)] font-black tracking-[0.25em] leading-tight select-none">
          MONOFRAME
        </h1>

        <p className="text-[clamp(1rem,2.5vw,1.8rem)] font-light tracking-tighter italic lowercase opacity-70">
          {lang === "en" ? "coming soon" : "komt er binnenkort aan"}
        </p>
      </motion.div>

      <div className="fixed bottom-[5%] md:bottom-[8%] w-full px-[8%] md:px-[10%] flex justify-between items-end pointer-events-none">
        
        <div className="pointer-events-auto">
          <a href="mailto:info@monoframe.nl" style={{ fontSize: fluidContact }} className="tracking-widest font-bold hover:opacity-40 transition-opacity">
            info@monoframe.nl
          </a>
        </div>

        <div className="pointer-events-auto text-right flex flex-col items-end">
          <a href="tel:+31682750609" style={{ fontSize: fluidContact }} className="tracking-widest font-bold hover:opacity-40 transition-opacity">
            +31 (0) 6 8275 0609
          </a>
          <a href="https://wa.me/31682750609" target="_blank" style={{ fontSize: fluidSub }} className="opacity-50 tracking-[0.3em] font-bold hover:opacity-100 uppercase mt-1">
            whatsapp
          </a>
        </div>
      </div>
    </main>
  );
}