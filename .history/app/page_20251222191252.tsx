"use client";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import Link from "next/link";

export default function Home() {
  const { lang, setHasSeenIntro } = useApp();

  // Skip animation for now as requested
  setHasSeenIntro(true);

  const menuItems = [
    { title: { en: "photography", nl: "fotografie" }, href: "/photography" },
    { title: { en: "design", nl: "ontwerp" }, href: "/design" },
    { title: { en: "contact", nl: "contact" }, href: "/contact" },
  ];

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-24"> {/* INCREASED GAP TO 24 (6rem) */}
        
        {/* LOGO - CAPITALIZED & SANS */}
        <h1 className="text-4xl font-black tracking-tighter">
          MONO<span className="font-thin opacity-30">FRAME</span>
        </h1>

        {/* NAV - lowercase, spaced 10vw */}
        <nav className="flex items-center gap-[10vw]">
          {menuItems.map((item, i) => (
            <Link key={i} href={item.href} className="group flex flex-col items-center">
              {/* FIXED WIDTH CONTAINER FOR NAV TEXT PREVENTS TRANSLATION JUMPS */}
              <span className="text-sm font-black tracking-tighter lowercase hover:opacity-40 transition-opacity inline-block text-center min-w-[80px]">
                {item.title[lang]}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}