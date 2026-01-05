"use client";
import { createContext, useContext, useState, useEffect } from "react";

type AppContextType = {
  lang: "en" | "nl";
  setLang: (l: "en" | "nl") => void;
  darkMode: boolean;
  setDarkMode: (d: boolean) => void;
  hasSeenIntro: boolean;
  setHasSeenIntro: (v: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Default language set to NL
  const [lang, setLang] = useState<"en" | "nl">("nl");
  const [darkMode, setDarkMode] = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ lang, setLang, darkMode, setDarkMode, hasSeenIntro, setHasSeenIntro }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};