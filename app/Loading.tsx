"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#F2F2F2] dark:bg-[#121212]">
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-2xl font-black tracking-tighter text-[#121212] dark:text-[#F2F2F2]"
      >
        M
      </motion.span>
    </div>
  );
}