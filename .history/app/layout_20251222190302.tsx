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
    <body className="antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-700">
      
      {/* Top Center Home Icon - White/Black based on theme */}
      {!isHome && (
        <nav className="fixed top-12 left-1/2 -translate-x-1/2 z-[100]">
          <Link href="/" className="hover:opacity-40 transition-opacity">
            <HomeIcon size={20} strokeWidth={1.5} className="text-black dark:text-white" />
          </Link>
        </nav>
      )}

      {children}

      {/* Toggles - Forced to front with z-[100] */}
      <footer className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-16">
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
          {darkMode ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
        </button>
      </footer>
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