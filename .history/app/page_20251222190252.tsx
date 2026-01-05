"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import IntroAnimation from "@/components/IntroAnimation";
import Link from "next/link";

export default function Home() {
  const { lang, hasSeenIntro, setHasSeenIntro } = useApp();

  const menuItems = [
    { title: { en: "photography", nl: "fotografie" }, href: "/photography" },
    { title: { en: "design", nl: "ontwerp" }, href: "/design" },
    { title: { en: "contact", nl: "contact" }, href: "/contact" },
  ];

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-700">
      <AnimatePresence mode="wait">
        {!hasSeenIntro ? (
          <IntroAnimation key="intro" onComplete={() => setHasSeenIntro(true)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            {/* Logo Hopped Up */}
            <motion.h1 
              initial={{ y: 0 }}
              animate={{ y: -60 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl font-black tracking-tighter"
            >
              mono<span className="font-thin opacity-50">frame</span>
            </motion.h1>

            {/* Nav - lowercase, centered, 10vw apart */}
            <nav className="flex items-center gap-[10vw]">
              {menuItems.map((item, i) => (
                <Link key={i} href={item.href} className="group">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="text-sm font-black tracking-tighter hover:opacity-40 transition-opacity cursor-pointer"
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