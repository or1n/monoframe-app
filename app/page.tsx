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
    <main id="content" className="h-screen w-full flex flex-col items-center justify-center relative px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center gap-8 text-center"
      >
        <h1 className="text-[clamp(2.5rem,10vw,7rem)] font-black tracking-[0.25em] leading-tight select-none">
          MONOFRAME
        </h1>

        <p className="text-[clamp(1rem,2vw,1.5rem)] font-light tracking-[0.1em] italic lowercase opacity-60">
          {t("subtitle")}
        </p>

        <nav aria-label="Primary" className="mt-6">
          <ul className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <li>
              <a href="/photo" className="text-2xl md:text-4xl font-semibold tracking-widest">
                {t("photo")}
              </a>
            </li>
            <li>
              <a href="/design" className="text-2xl md:text-4xl font-semibold tracking-widest">
                {t("design")}
              </a>
            </li>
            <li>
              <a href="/creator" className="text-2xl md:text-4xl font-semibold tracking-widest">
                {t("creator")}
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-12 flex flex-col md:flex-row gap-6 md:gap-12 items-center text-sm md:text-base opacity-70">
          <a href={`mailto:${t("email")}`} className="hover:opacity-100 transition-opacity">
            {t("email")}
          </a>
          <span className="hidden md:inline">•</span>
          <a href="https://wa.me/31" className="hover:opacity-100 transition-opacity">
            WhatsApp
          </a>
        </div>
      </motion.div>
    </main>
  );
}