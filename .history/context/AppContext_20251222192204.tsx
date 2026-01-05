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
  const [lang, setLangState] = useState<"en" | "nl">("nl");
  const [darkMode, setDarkModeState] = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("mono-lang") as "en" | "nl";
    const savedTheme = localStorage.getItem("mono-theme");
    
    if (savedLang) setLangState(savedLang);
    if (savedTheme !== null) setDarkModeState(savedTheme === "true");
    
    setIsLoaded(true);
  }, []);

  const setLang = (l: "en" | "nl") => {
    setLangState(l);
    localStorage.setItem("mono-lang", l);
  };

  const setDarkMode = (d: boolean) => {
    setDarkModeState(d);
    localStorage.setItem("mono-theme", String(d));
  };

  useEffect(() => {
    if (isLoaded) {
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode, isLoaded]);

  return (
    <AppContext.Provider value={{ lang, setLang, darkMode, setDarkMode, hasSeenIntro, setHasSeenIntro }}>
      {/* Prevent flash of wrong content by waiting for isLoaded */}
      <div style={{ visibility: isLoaded ? "visible" : "hidden" }}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};