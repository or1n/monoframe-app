"use client";
import { AppProvider, useApp } from "@/context/AppContext";
import { Sun, Moon, Home as HomeIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

function PersistentUI({ children }: { children: React.ReactNode }) {
  const { lang, setLang, darkMode, setDarkMode } = useApp();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const fluidIcon = "clamp(18px, 2vw, 28px)";
  const fluidText = "clamp(10px, 1.2vw, 16px)";

  return (
    <body className="antialiased h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="fixed inset-[5%] md:inset-[8%] pointer-events-none flex flex-col items-center justify-between z-[100]">
        
        {/* TOP: Home Icon */}
        <div className="pointer-events-auto">
          {!isHome && (
            <Link href="/" className="hover:opacity-40 transition-opacity">
              <HomeIcon style={{ width: fluidIcon, height: fluidIcon }} strokeWidth={1.5} />
            </Link>
          )}
        </div>

        {/* BOTTOM: Toggles */}
        <div className="pointer-events-auto flex items-center gap-[10vw]">
          <button 
            onClick={() => setLang(lang === "en" ? "nl" : "en")}
            style={{ fontSize: fluidText }}
            className="tracking-[0.4em] font-black uppercase hover:opacity-40 w-[4em] text-center flex justify-center items-center"
          >
            {lang}
          </button>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="hover:opacity-40 w-[4em] flex justify-center items-center"
          >
            {darkMode ? 
              <Sun style={{ width: fluidIcon, height: fluidIcon }} strokeWidth={1.5} /> : 
              <Moon style={{ width: fluidIcon, height: fluidIcon }} strokeWidth={1.5} />
            }
          </button>
        </div>
      </div>

      <div className="h-full w-full relative z-20">{children}</div>
    </body>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const savedTheme = localStorage.getItem("mono-theme");
              if (savedTheme === "true" || (savedTheme === null && true)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })()
          `
        }} />
      </head>
      <AppProvider>
        <PersistentUI>{children}</PersistentUI>
      </AppProvider>
    </html>
  );
}