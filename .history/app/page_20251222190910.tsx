"use client";
import { motion } from "framer-motion";
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
    <main className="h-screen w-full flex flex-col items-center justify-center">
      {!hasSeenIntro ? (
        <IntroAnimation onComplete={() => setHasSeenIntro(true)} />
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-12"
        >
          {/* LOGO */}
          <h1 className="text-3xl font-black tracking-tighter">
            MONO<span className="font-thin opacity-30">FRAME</span>
          </h1>

          {/* NAV - lowercase, spaced 10vw, matching fonts */}
          <nav className="flex items-center gap-[8vw]">
            {menuItems.map((item, i) => (
              <Link key={i} href={item.href} className="group">
                <span className="text-sm font-black tracking-tighter lowercase hover:opacity-40 transition-opacity">
                  {item.title[lang]}
                </span>
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </main>
  );
}