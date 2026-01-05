"use client";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { lang, setHasSeenIntro } = useApp();

  useEffect(() => {
    setHasSeenIntro(true);
  }, [setHasSeenIntro]);

  const menuItems = [
    { title: { en: "photography", nl: "fotografie" }, href: "/photography" },
    { title: { en: "design", nl: "ontwerp" }, href: "/design" },
    { title: { en: "contact", nl: "contact" }, href: "/contact" },
  ];

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      {/* 3x Room between Logo and Nav (gap-64) */}
      <div className="flex flex-col items-center gap-64">
        
        {/* LOGO: 2x Bigger, Solid White, High Letter Spacing */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-7xl md:text-9xl font-black tracking-[0.2em] text-black dark:text-white"
        >
          MONOFRAME
        </motion.h1>

        {/* NAV: Bold, White, Lowercase, 10vw Spacing */}
        <nav className="flex items-center gap-[10vw]">
          {menuItems.map((item, i) => (
            <Link key={i} href={item.href}>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                className="text-lg font-black tracking-tighter lowercase hover:opacity-40 transition-opacity text-black dark:text-white"
              >
                {item.title[lang]}
              </motion.span>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}