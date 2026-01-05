"use client";
import { useApp } from "@/context/AppContext";
import { motion } from "framer-motion";

export default function Page() {
  const { lang } = useApp();

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-[10px] tracking-[0.5em] uppercase opacity-30 mb-2 font-black">
          {lang === "en" ? "under construction" : "in afwachting"}
        </h1>
        <p className="text-4xl font-light tracking-tighter italic lowercase">
          {lang === "en" ? "coming soon" : "komt er binnenkort aan"}
        </p>
      </div>
    </main>
  );
}