"use client";
import { AppProvider, useApp } from "@/context/AppContext";
import { Sun, Moon, Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

function PersistentUI({ children }: { children: React.ReactNode }) {
  const { lang, setLang, darkMode, setDarkMode } = useApp();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <body className="antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-700 h-screen overflow-hidden">
      
      {/* 10% FRAME UI */}
      <div className="fixed inset-[5%] md:inset-[10%] pointer-events-none flex flex-col items-center justify-between z-[100]">
        
        {/* TOP: Home Icon */}
        <div className="pointer-events-auto">
          {!isHome && (
            <Link href="/" className="hover:opacity-40 transition-opacity">
              <HomeIcon size={24} strokeWidth={1.5} className="text-black dark:text-white" />
            </Link>
          )}
        </div>

        {/* BOTTOM: Toggles spaced 10% width apart */}
        <div className="pointer-events-auto flex items-center gap-[10vw]">
          <button 
            onClick={() => setLang(lang === "en" ? "nl" : "en")}
            className="text-[12px] tracking-[0.5em] font-black uppercase hover:opacity-40 transition-opacity w-8 text-center"
          >
            {lang}
          </button>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="hover:opacity-40 transition-opacity w-8 flex justify-center"
          >
            {darkMode ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
          </button>
        </div>
      </div>

      <div className="h-full w-full">{children}</div>
    </body>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AppProvider>
        <PersistentUI>{children}</PersistentUI>
      </AppProvider>
    </html>
  );
}