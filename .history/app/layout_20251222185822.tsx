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
    <body className="antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-700 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      {/* Top Navigation - Home Icon only on subpages */}
      {!isHome && (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
          <Link href="/" className="opacity-40 hover:opacity-100 transition-opacity">
            <HomeIcon size={18} strokeWidth={1.5} />
          </Link>
        </nav>
      )}

      {children}

      {/* Global Bottom Controls */}
      <footer className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-12 pointer-events-auto">
        <button 
          onClick={() => setLang(lang === "en" ? "nl" : "en")}
          className="group relative text-[10px] tracking-[0.3em] font-medium uppercase opacity-40 hover:opacity-100 transition-opacity"
        >
          {lang}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            {lang === "en" ? "Change Language" : "Taal Wijzigen"}
          </span>
        </button>

        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="group relative opacity-40 hover:opacity-100 transition-opacity"
        >
          {darkMode ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
             {lang === "en" ? "Toggle Theme" : "Thema Wijzigen"}
          </span>
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