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
    <body className="antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-700 font-sans h-screen overflow-hidden">
      
      {/* 10% FRAME CONTAINER */}
      <div className="fixed inset-[5%] md:inset-[10%] pointer-events-none border border-transparent flex flex-col items-center justify-between z-50">
        
        {/* TOP: Home Button */}
        <div className="pointer-events-auto">
          {!isHome && (
            <Link href="/" className="hover:opacity-40 transition-opacity">
              <HomeIcon size={18} strokeWidth={1.5} className="text-black dark:text-white" />
            </Link>
          )}
        </div>

        {/* BOTTOM: Global Toggles */}
        <div className="pointer-events-auto flex items-center gap-12">
          <button 
            onClick={() => setLang(lang === "en" ? "nl" : "en")}
            className="text-[10px] tracking-[0.4em] font-black uppercase hover:opacity-40 transition-opacity"
          >
            {lang}
          </button>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="hover:opacity-40 transition-opacity"
          >
            {darkMode ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
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