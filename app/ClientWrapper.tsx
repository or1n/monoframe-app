"use client";
import { useApp } from "@/context/AppContext";
import { Sun, Moon, Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const PalettePicker = dynamic(() => import("@/components/PalettePicker"), { ssr: false });

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const { lang, setLang, darkMode, setDarkMode } = useApp();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const fluidIcon = "clamp(18px, 2vw, 28px)";
  const fluidText = "clamp(10px, 1.2vw, 16px)";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // intentionally set mounted after first client render to avoid
    // hydration diffs when browser extensions modify the DOM.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <body className="antialiased h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {mounted && (
        <div className="fixed inset-[5%] md:inset-[8%] pointer-events-none flex flex-col items-center justify-between z-[100]">
          {/* TOP: Home Icon */}
          <div className="pointer-events-auto">
            {!isHome && (
              <Link 
                href="/" 
                className="hover:opacity-40 transition-opacity"
                aria-label={lang === "en" ? "Back to home" : "Terug naar home"}
              >
                <HomeIcon 
                  width={fluidIcon}
                  height={fluidIcon}
                  strokeWidth={1.5} 
                  aria-hidden="true" 
                />
              </Link>
            )}
          </div>

          {/* BOTTOM: Toggles */}
          <div className="pointer-events-auto flex items-center gap-6 md:gap-[10vw]">
            <div className="hidden md:block"> <PalettePicker /> </div>
            <div className="md:hidden"> <PalettePicker /> </div>
            
            <button 
              onClick={() => setLang(lang === "en" ? "nl" : "en")}
              style={{ fontSize: fluidText }}
              className="tracking-[0.4em] font-black uppercase hover:opacity-40 w-[4em] text-center flex justify-center items-center"
              aria-label={lang === "en" ? "Switch to Dutch" : "Wissel naar Engels"}
            >
              {lang}
            </button>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="hover:opacity-40 w-[4em] flex justify-center items-center"
              aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? 
                <Sun 
                  width={fluidIcon}
                  height={fluidIcon}
                  strokeWidth={1.5} 
                  aria-hidden="true" 
                /> : 
                <Moon 
                  width={fluidIcon}
                  height={fluidIcon}
                  strokeWidth={1.5} 
                  aria-hidden="true" 
                />
              }
            </button>
          </div>
        </div>
      )}

      {mounted && <CustomCursor />}

      <div className="h-full w-full relative z-20 flex flex-col">
        <div className="flex-1">{children}</div>
        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>
    </body>
  );
}