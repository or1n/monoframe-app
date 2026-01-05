"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Timeline of the animation
    const times = [
      1000, // 0: Start delay
      2000, // 1: Show full name "Orin Nickolay Mons"
      1500, // 2: Isolate letters "O N M"
      1500, // 3: Reorder to "M N O" (Alphabet)
      1500, // 4: Morph to "MONO"
      1500, // 5: Add "FRAME"
      1000, // 6: Exit
    ];

    let currentTimeout: NodeJS.Timeout;
    
    const runSequence = async () => {
        // Simple sequential stepper
        for (let i = 0; i < times.length; i++) {
            await new Promise(r => setTimeout(r, times[i]));
            setStep(prev => prev + 1);
        }
        onComplete();
    };

    runSequence();

    return () => clearTimeout(currentTimeout);
  }, [onComplete]);

  // Animation variants for smooth text movement
  const textVar = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
      exit={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 1 }}
    >
      <div className="text-4xl md:text-6xl font-bold tracking-tight relative h-20 w-full flex justify-center items-center">
        <AnimatePresence mode="wait">
          
          {/* Step 1: Full Name */}
          {step === 1 && (
            <motion.div key="name" {...textVar} className="flex gap-2">
              <span>Orin</span>
              <span>Nickolay</span>
              <span>Mons</span>
            </motion.div>
          )}

          {/* Step 2: Highlight Initials (Dim others) */}
          {step === 2 && (
            <motion.div key="initials" className="flex gap-2">
              <span className="text-black dark:text-white">O</span><span className="opacity-20">rin</span>
              <span className="text-black dark:text-white">N</span><span className="opacity-20">ickolay</span>
              <span className="text-black dark:text-white">M</span><span className="opacity-20">ons</span>
            </motion.div>
          )}

          {/* Step 3: Extract & Reorder to Alphabet (M N O) */}
          {step === 3 && (
            <motion.div key="alphabet" {...textVar} className="flex gap-4 text-5xl md:text-7xl">
              <motion.span layoutId="m">M</motion.span>
              <motion.span layoutId="n">N</motion.span>
              <motion.span layoutId="o">O</motion.span>
            </motion.div>
          )}

          {/* Step 4: Morph to MONO (Duplicate O, Drop N) */}
          {step === 4 && (
            <motion.div key="mono" className="flex gap-1 text-5xl md:text-7xl">
              <motion.span layoutId="m">M</motion.span>
              <motion.span layoutId="o">O</motion.span>
              <motion.span layoutId="n">N</motion.span>
              <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>O</motion.span>
            </motion.div>
          )}

          {/* Step 5: Final Logo MONOFRAME */}
          {step >= 5 && (
            <motion.div key="final" className="flex items-center">
              <span className="text-5xl md:text-7xl font-black">MONO</span>
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="overflow-hidden whitespace-nowrap"
              >
                <span className="text-5xl md:text-7xl font-thin ml-1">FRAME</span>
              </motion.div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.div>
  );
}