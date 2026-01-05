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
        transition={{ duration: 1.2, ease: "linear" }} // Linear ease for high-Hz smoothness
        className="h-full w-full"
      >
        {/* FLUID FRAME UI */}
        <div className="fixed inset-[5%] md:inset-[10%] pointer-events-none flex flex-col items-center justify-between z-[100]">
          
          <div className="pointer-events-auto">
            {!isHome && (
              <Link href="/" className="hover:opacity-40 transition-opacity">
                <HomeIcon size="2vw" className="min-w-[20px]" strokeWidth={1.2} />
              </Link>
            )}
          </div>

          <div className="pointer-events-auto flex items-center gap-[10vw]">
            <button 
              onClick={() => setLang(lang === "en" ? "nl" : "en")}
              className="text-[1.8vw] md:text-[0.8vw] tracking-[0.4em] font-black uppercase hover:opacity-40 transition-opacity w-[4vw] text-center"
            >
              {lang}
            </button>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="hover:opacity-40 transition-opacity w-[4vw] flex justify-center"
            >
              {darkMode ? <Sun size="2vw" className="min-w-[18px]" strokeWidth={1.5} /> : <Moon size="2vw" className="min-w-[18px]" strokeWidth={1.5} />}
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