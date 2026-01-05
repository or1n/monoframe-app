"use client";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { useEffect } from "react";

export default function Home() {
  const { setHasSeenIntro } = useApp();

  useEffect(() => {
    setHasSeenIntro(true);
  }, [setHasSeenIntro]);

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center relative">
      
      {/* CENTER BRANDING */}
      <div className="flex flex-col items-center gap-24 md:gap-32 text-center px-6">
        <h1 className="text-5xl md:text-9xl font-black tracking-[0.3em] leading-none">
          MONOFRAME
        </h1>
        <p className="text-2xl md:text-4xl font-light tracking-tighter italic lowercase opacity-80">
          komt er binnenkort aan
        </p>
      </div>

      {/* CONTACT INFO - Placed at the edges of the frame */}
      <div className="fixed bottom-[5%] md:bottom-[10%] w-full px-[5%] md:px-[10%] flex justify-between items-end pointer-events-none text-[10px] tracking-[0.2em] font-medium uppercase">
        
        {/* Email - Left */}
        <div className="pointer-events-auto">
          <a 
            href="mailto:info@monoframe.nl" 
            className="hover:opacity-40 transition-opacity pb-1 border-b border-transparent hover:border-current"
          >
            info@monoframe.nl
          </a>
        </div>

        {/* Phone/WhatsApp - Right */}
        <div className="pointer-events-auto text-right">
          <a 
            href="tel:+31682750609" 
            className="hover:opacity-40 transition-opacity block mb-1"
          >
            +31 (0) 6 8275 0609
          </a>
          <a 
            href="https://wa.me/31682750609" 
            target="_blank" 
            className="hover:opacity-40 transition-opacity opacity-50 text-[8px]"
          >
            whatsapp
          </a>
        </div>
      </div>

    </main>
  );
}