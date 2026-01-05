"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-700 p-8">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <h1 className="text-xs uppercase tracking-[0.5em] mb-4 opacity-50">Under Construction</h1>
        <p className="text-4xl font-light tracking-tighter italic">Komt er binnenkort aan</p>
        <Link href="/" className="mt-12 block text-[10px] uppercase tracking-widest border-b border-current inline-block pb-1 hover:opacity-50 transition-opacity">
          Back Home
        </Link>
      </motion.div>
    </main>
  );
}