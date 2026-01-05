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

  return (
    <body className="antialiased h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-full w-full"
      >
        {/* REFINED FRAME UI */}
        <div className="fixed inset-[5%] md:inset-[8%] pointer-events-none flex flex-col items-center justify-between z-[100]">
          
          <div className="pointer-events-auto">
            {!isHome && (
              <Link href="/" className="hover:opacity-40 transition-opacity">
                <HomeIcon size={20} strokeWidth={1.5} />
              </Link>
            )}
          </div>

          <div className="pointer-events-auto flex items-center gap-16 md:gap-24">
            <button 
              onClick={() => setLang(lang === "en" ? "nl" : "en")}
              className="text-xs tracking-[0.4em] font-black uppercase hover:opacity-40 w-8 text-center"
            >
              {lang}
            </button>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="hover:opacity-40 w-8 flex justify-center"
            >
              {darkMode ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        <div className="h-full w-full">{children}</div>
      </motion.div>
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