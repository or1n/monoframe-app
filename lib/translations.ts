export const translations = {
  en: {
    subtitle: "design and photography",
    emailLabel: "Email Monoframe",
    callLabel: "Call Monoframe",
    whatsapp: "whatsapp",
    backToHome: "Back to home",
    switchToDutch: "Switch to Dutch",
    switchToEnglish: "Switch to English",
  },
  nl: {
    subtitle: "vormgeving en fotografie",
    emailLabel: "E-mail Monoframe",
    callLabel: "Bel Monoframe",
    whatsapp: "whatsapp",
    backToHome: "Terug naar home",
    switchToDutch: "Wissel naar Nederlands",
    switchToEnglish: "Wissel naar Engels",
  },
} as const;

export type LangKey = keyof typeof translations;
