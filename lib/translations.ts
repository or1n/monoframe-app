export const translations = {
  en: {
    subtitle: "design and photography",
    photo: "Photo",
    design: "Design",
    creator: "Creator",
    placeholder: "Placeholder.",
    email: "info@monoframe.nl",
    phone: "+31 (0) 6 8275 0609",
    whatsapp: "whatsapp",
    switchToDutch: "Switch to Dutch",
    switchToEnglish: "Switch to English",
  },
  nl: {
    subtitle: "vormgeving en fotografie",
    photo: "Foto",
    design: "Ontwerp",
    creator: "Maker",
    placeholder: "Tijdelijke aanduiding.",
    email: "info@monoframe.nl",
    phone: "+31 (0) 6 8275 0609",
    whatsapp: "whatsapp",
    switchToDutch: "Wissel naar Nederlands",
    switchToEnglish: "Wissel naar Engels",
  },
} as const;

export type LangKey = keyof typeof translations;
