"use client";
import { createContext, useContext, useState, useEffect } from "react";

type AppContextType = {
  lang: "en" | "nl";
  setLang: (l: "en" | "nl") => void;
  darkMode: boolean;
  setDarkMode: (d: boolean) => void;
  colorTheme: string;
  setColorTheme: (t: string) => void;
  hasSeenIntro: boolean;
  setHasSeenIntro: (v: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<"en" | "nl">(() => {
    try {
      const saved = localStorage.getItem("mono-lang") as "en" | "nl" | null;
      return saved ?? "nl";
    } catch {
      return "nl";
    }
  });

  const [darkMode, setDarkModeState] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem("mono-theme");
      if (savedTheme !== null) return savedTheme === "true";
      return true;
    } catch {
      return true;
    }
  });

  const [colorTheme, setColorThemeState] = useState<string>(() => {
    try { return localStorage.getItem("mono-color") || "default"; } catch { return "default"; }
  });

  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  // Reflect theme states on the DOM (no state updates here)
  useEffect(() => {
    try { document.documentElement.classList.toggle("dark", darkMode); } catch {}
    try { document.documentElement.setAttribute('data-color-theme', colorTheme); } catch {}
  }, [darkMode, colorTheme]);

  const setLang = (l: "en" | "nl") => {
    setLangState(l);
    try {
      localStorage.setItem("mono-lang", l);
    } catch {}
  };

  const setDarkMode = (d: boolean) => {
    setDarkModeState(d);
    try {
      localStorage.setItem("mono-theme", String(d));
    } catch {}
    document.documentElement.classList.toggle("dark", d);
  };

  const setColorTheme = (t: string) => {
    setColorThemeState(t);
    try {
      localStorage.setItem("mono-color", t);
    } catch {}
    // reflect in DOM for CSS attribute selectors
    document.documentElement.setAttribute('data-color-theme', t);
  };

  return (
    <AppContext.Provider value={{ lang, setLang, darkMode, setDarkMode, colorTheme, setColorTheme, hasSeenIntro, setHasSeenIntro }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};