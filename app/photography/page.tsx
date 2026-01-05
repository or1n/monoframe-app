"use client";
import useT from "@/hooks/useT";

export default function PhotographyPage() {
  const t = useT();

  return (
    <main id="content" className="h-screen w-full flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-6">
          {t("photo")}
        </h1>
        <p className="text-lg md:text-xl opacity-70 leading-relaxed">
          {t("photoDescription")}
        </p>
      </div>
    </main>
  );
}