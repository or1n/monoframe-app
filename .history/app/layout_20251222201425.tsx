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

  // Fluid icon size: scales between 18px and 32px based on screen
  const fluidIcon = "clamp(18px, 2vw, 32px)";
  // Fluid toggle text: scales between 10px and 18px
  const fluidText = "clamp(10px, 1.2vw, 18px)";

  return (
    <body className="antialiased h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-full w-full"
      >
        <div className="fixed inset-[5%] md:inset-[8%] pointer-events-none flex flex-col items-center justify-between z-[100]">
          
          <div className="pointer-events-auto">
            {!isHome && (
              <Link href="/" className="hover:opacity-40 transition-opacity">
                <HomeIcon style={{ width: fluidIcon, height: fluidIcon }} strokeWidth={1.5} />
              </Link>
            )}
          </div>

          <div className="pointer-events-auto flex items-center gap-[10vw]">
            <button 
              onClick={() => setLang(lang === "en" ? "nl" : "en")}
              style={{ fontSize: fluidText }}
              className="tracking-[0.4em] font-black uppercase hover:opacity-40 w-[3em] text-center"
            >
              {lang}
            </button>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="hover:opacity-40 w-[3em] flex justify-center"
            >
              {darkMode ? 
                <Sun style={{ width: fluidIcon, height: fluidIcon }} strokeWidth={1.5} /> : 
                <Moon style={{ width: fluidIcon, height: fluidIcon }} strokeWidth={1.5} />
              }
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