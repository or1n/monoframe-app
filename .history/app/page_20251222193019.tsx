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
    <main className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* CENTER BRANDING - Scaling fluently with window size */}
      <div className="flex flex-col items-center gap-[5vw] text-center px-[5vw]">
        <h1 className="text-[12vw] font-black tracking-[0.3em] leading-none select-none">
          MONOFRAME
        </h1>
        <p className="text-[4vw] md:text-[2.5vw] font-light tracking-tighter italic lowercase opacity-80 select-none">
          {lang === "en" ? "coming soon" : "komt er binnenkort aan"}
        </p>
      </div>

      {/* CONTACT INFO - Fluidly anchored to the frame edges */}
      <div className="fixed bottom-[5%] md:bottom-[10%] w-full px-[5%] md:px-[10%] flex justify-between items-end pointer-events-none text-[1.5vw] md:text-[0.8vw] tracking-[0.2em] font-medium uppercase">
        
        {/* Email - Left */}
        <div className="pointer-events-auto">
          <a 
            href="mailto:info@monoframe.nl" 
            className="hover:opacity-40 transition-opacity pb-[0.5vh] border-b border-transparent hover:border-current"
          >
            info@monoframe.nl
          </a>
        </div>

        {/* Phone/WhatsApp - Right */}
        <div className="pointer-events-auto text-right">
          <a 
            href="tel:+31682750609" 
            className="hover:opacity-40 transition-opacity block mb-[0.5vh]"
          >
            +31 (0) 6 8275 0609
          </a>
          <a 
            href="https://wa.me/31682750609" 
            target="_blank" 
            className="hover:opacity-40 transition-opacity opacity-50 text-[1vw] md:text-[0.6vw]"
          >
            whatsapp
          </a>
        </div>
      </div>

    </main>
  );
}