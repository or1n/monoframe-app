"use client";
import { useApp } from "@/context/AppContext";
import { motion } from "framer-motion";

export default function DesignPage() {
  const { lang } = useApp();

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="text-center">
        {/* 2x Bigger Headline */}
        <h1 className="text-xl md:text-2xl tracking-[0.8em] uppercase font-black text-black dark:text-white mb-6">
          {lang === "en" ? "under construction" : "in afwachting"}
        </h1>
        {/* Solid White italic text */}
        <p className="text-5xl md:text-7xl font-light tracking-tighter italic lowercase text-black dark:text-white">
          {lang === "en" ? "coming soon" : "komt er binnenkort aan"}
        </p>
      </div>
    </main>
  );
}