"use client";
import { useApp } from "@/context/AppContext";
import { motion } from "framer-motion";

export default function Page() {
  const { lang } = useApp();

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-[10px] tracking-[0.5em] uppercase opacity-30 mb-2">
          {lang === "en" ? "under construction" : "in afwachting"}
        </h1>
        <p className="text-4xl font-light tracking-tighter italic lowercase">
          {lang === "en" ? "coming soon" : "komt er binnenkort aan"}
        </p>
      </motion.div>
    </main>
  );
}