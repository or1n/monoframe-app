"use client";

import { motion } from "framer-motion";
import useT from "@/hooks/useT";
import { useApp } from "@/context/AppContext";
import { useEffect, useState } from "react";

export default function Home() {
  const t = useT();
  const { setHasSeenIntro } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setHasSeenIntro(true);
    // intentionally set mounted after first render to avoid hydratation diffs
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, [setHasSeenIntro]);

  // Respect theme pre-hydration
  if (!mounted) return <div className="h-screen w-full bg-[var(--background)]" />;

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center relative px-6 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center gap-[6vh] text-center"
      >
        <h1 className="text-[clamp(2.5rem,10vw,7rem)] font-black tracking-[0.25em] leading-tight select-none">
          MONOFRAME
        </h1>

        <p className="text-[clamp(1rem,2vw,1.5rem)] font-light tracking-[0.1em] italic lowercase opacity-60">
          {t("subtitle")}
        </p>
      </motion.div>

      {/* Contact Info */}
      <div className="fixed bottom-[8%] w-full px-[8%] md:px-[12%] flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <a 
            href="mailto:info@monoframe.nl" 
            className="text-[clamp(10px,1.2vw,15px)] tracking-widest font-bold hover:opacity-40 transition-opacity"
            aria-label={t("emailLabel")}
          >
            info@monoframe.nl
          </a>
        </div>

        <div className="text-right flex flex-col items-end gap-1">
          <a 
            href="tel:+31682750609" 
            className="text-[clamp(10px,1.2vw,15px)] tracking-widest font-bold hover:opacity-40 transition-opacity"
            aria-label={t("callLabel")}
          >
            +31 (0) 6 8275 0609
          </a>
          <a 
            href="https://wa.me/31682750609" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[clamp(8px,1vw,12px)] opacity-40 tracking-[0.3em] font-bold hover:opacity-100 uppercase"
            aria-label={t("whatsapp")}
          >
            {t("whatsapp")}
          </a>
        </div>
      </div>
    </main>
  );
}