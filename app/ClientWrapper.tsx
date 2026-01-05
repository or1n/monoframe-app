"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // intentionally set mounted after first client render to avoid
    // hydration diffs when browser extensions modify the DOM.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <body className="antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header Navigation */}
      <Header />

      {mounted && <CustomCursor />}

      <div className="min-h-screen w-full relative z-20 flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </body>
  );
}