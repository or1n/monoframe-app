"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  // Speed: Every 600ms-800ms it moves to the next stage
  useEffect(() => {
    const sequence = [800, 800, 600, 600, 800, 800]; 
    let timeout: NodeJS.Timeout;

    if (stage < sequence.length) {
      timeout = setTimeout(() => setStage(stage + 1), sequence[stage]);
    } else {
      onComplete();
    }
    return () => clearTimeout(timeout);
  }, [stage, onComplete]);

  const stages = [
    "Orin Nickolay Mons", // 0
    "Orin N. Mons",       // 1
    "ONM",                // 2
    "ONOM",               // 3
    "MONO",               // 4
    "MONOFRAME"           // 5
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black"
    >
      <motion.h1 
        key={stage}
        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
        transition={{ duration: 0.4, ease: "circOut" }}
        className="text-[8vw] md:text-[5vw] font-black tracking-tighter uppercase"
      >
        {stages[stage]}
      </motion.h1>
    </motion.div>
  );
}