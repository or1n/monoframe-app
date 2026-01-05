"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import IntroAnimation from "@/components/IntroAnimation";
import Link from "next/link";

export default function Home() {
  const { lang, hasSeenIntro, setHasSeenIntro } = useApp();

  const menuItems = [
    { title: { en: "PHOTOGRAPHY", nl: "FOTOGRAFIE" }, href: "/photography" },
    { title: { en: "DESIGN", nl: "ONTWERP" }, href: "/design" },
    { title: { en: "CONTACT", nl: "CONTACT" }, href: "/contact" },
  ];

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {!hasSeenIntro ? (
          <IntroAnimation key="intro" onComplete={() => setHasSeenIntro(true)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-16"
          >
            {/* The Logo - Hopped up from center */}
            <motion.h1 
              initial={{ y: 20 }}
              animate={{ y: -40 }}
              className="text-2xl font-black tracking-tighter"
            >
              MONO<span className="font-thin text-zinc-400">FRAME</span>
            </motion.h1>

            {/* Nav - Single line, clean 2025 design */}
            <nav className="flex items-center gap-8 md:gap-16">
              {menuItems.map((item, i) => (
                <Link key={i} href={item.href} className="group overflow-hidden">
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="text-xs md:text-sm font-medium tracking-[0.4em] block transition-all group-hover:tracking-[0.6em] group-hover:italic"
                  >
                    {item.title[lang]}
                  </motion.span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}