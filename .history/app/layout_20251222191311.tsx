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
      
      {/* 10% FRAME CONTAINER - This handles the scale-able safe zone */}
      <div className="fixed inset-[5%] md:inset-[10%] pointer-events-none flex flex-col items-center justify-between z-[100]">
        
        {/* TOP: Home Button (Only on sub-pages) */}
        <div className="pointer-events-auto flex justify-center">
          {!isHome && (
            <Link href="/" className="hover:opacity-40 transition-opacity flex items-center justify-center w-10 h-10">
              <HomeIcon size={18} strokeWidth={1.5} className="text-black dark:text-white" />
            </Link>
          )}
        </div>

        {/* BOTTOM: Global Toggles - Anchored for translation stability */}
        <div className="pointer-events-auto flex items-center gap-12">
          <button 
            onClick={() => setLang(lang === "en" ? "nl" : "en")}
            className="w-8 text-[10px] tracking-[0.4em] font-black uppercase hover:opacity-40 transition-opacity text-center"
          >
            {lang}
          </button>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="w-8 flex items-center justify-center hover:opacity-40 transition-opacity"
          >
            {darkMode ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="h-full w-full overflow-hidden">
        {children}
      </div>
    </body>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>MONOFRAME</title>
      </head>
      <AppProvider>
        <PersistentUI>{children}</PersistentUI>
      </AppProvider>
    </html>
  );
}