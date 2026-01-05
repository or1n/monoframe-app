"use client";
import { useApp } from "@/context/AppContext";
import { motion } from "framer-motion";

export default function PhotographyPage() {
  const { lang } = useApp();

  return (
    <main className="min-h-screen pt-32 p-8 flex flex-col items-center">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-[10px] tracking-[0.5em] uppercase opacity-30 mb-8">
          {lang === "en" ? "Under Construction" : "In Afwachting"}
        </h1>
        <p className="text-4xl font-light tracking-tighter italic">
          {lang === "en" ? "Coming Soon" : "Komt er binnenkort aan"}
        </p>
      </motion.div>
    </main>
  );
}