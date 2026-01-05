"use client";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { lang, setHasSeenIntro } = useApp();

  // Ensuring intro is skipped for now as requested
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
      <div className="flex flex-col items-center gap-32"> {/* High gap for 2025 look */}
        
        {/* LOGO - CAPITALIZED BLACK WEIGHT SANS */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black tracking-tighter"
        >
          MONO<span className="font-thin opacity-30">FRAME</span>
        </motion.h1>

        {/* NAV - Lowercase, anchored centers to prevent jumping */}
        <nav className="flex items-center gap-[10vw]">
          {menuItems.map((item, i) => (
            <Link key={i} href={item.href} className="group">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                className="text-sm font-black tracking-tighter lowercase hover:opacity-40 transition-opacity inline-block text-center min-w-[100px]"
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