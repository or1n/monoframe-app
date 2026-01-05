"use client";
import { useApp } from "@/context/AppContext";
import { translations, type LangKey } from "@/lib/translations";

export default function useT() {
  const { lang } = useApp();
  return (key: keyof typeof translations["en"]) => {
    const l = lang as LangKey;
    return translations[l]?.[key] ?? key;
  };
}
