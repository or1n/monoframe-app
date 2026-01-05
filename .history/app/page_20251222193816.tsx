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
    <main className="h-screen w-full flex flex-col items-center justify-center relative px-6">
      
      <div className="flex flex-col items-center gap-12 md:gap-16 text-center">
        {/* LOGO: Scalable but capped at a tasteful size (approx 50% width max) */}
        <h1 className="text-[clamp(2.5rem,10vw,7rem)] font-black tracking-[0.25em] leading-tight select-none">
          MONOFRAME
        </h1>

        {/* SUBTEXT: Fluid but readable */}
        <p className="text-[clamp(1.2rem,3vw,2rem)] font-light tracking-tighter italic lowercase opacity-70">
          {lang === "en" ? "coming soon" : "komt er binnenkort aan"}
        </p>
      </div>

      {/* CONTACT INFO: Anchored to frame edges with standard small-text sizing */}
      <div className="fixed bottom-[5%] md:bottom-[10%] w-full px-[8%] md:px-[12%] flex justify-between items-end pointer-events-none">
        
        <div className="pointer-events-auto flex flex-col items-start gap-1">
          <a href="mailto:info@monoframe.nl" className="text-[10px] md:text-xs tracking-widest font-bold hover:opacity-40">
            info@monoframe.nl
          </a>
        </div>

        <div className="pointer-events-auto text-right flex flex-col items-end gap-1">
          <a href="tel:+31682750609" className="text-[10px] md:text-xs tracking-widest font-bold hover:opacity-40">
            +31 (0) 6 8275 0609
          </a>
          <a href="https://wa.me/31682750609" target="_blank" className="text-[8px] opacity-50 tracking-widest hover:opacity-100">
            whatsapp
          </a>
        </div>
      </div>

    </main>
  );
}