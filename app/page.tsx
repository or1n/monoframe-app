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
  if (!mounted) return <div className="min-h-screen w-full bg-[var(--background)]" />;

  return (
    <main id="content" className="min-h-screen w-full flex items-center justify-center px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center gap-12 md:gap-16 text-center max-w-5xl"
      >
        <h1 className="text-[clamp(2.5rem,10vw,7rem)] font-black tracking-[0.25em] leading-tight select-none">
          MONOFRAME
        </h1>

        <p className="text-[clamp(1rem,2vw,1.5rem)] font-light tracking-[0.1em] italic lowercase opacity-60">
          {t("subtitle")}
        </p>
      </motion.div>
    </main>
  );
}