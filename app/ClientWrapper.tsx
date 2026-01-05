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
      {mounted && <CustomCursor />}
      
      <div className="min-h-screen w-full flex flex-col">
        {/* Header Navigation - Always visible at top */}
        <Header />
        
        {/* Main content area */}
        <main className="flex-1">{children}</main>
        
        {/* Footer - Always visible at bottom */}
        <Footer />
      </div>
    </body>
  );
}