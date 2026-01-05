"use client";
import useT from "@/hooks/useT";

export default function CreatorPage() {
  const t = useT();

  return (
    <div id="content" className="min-h-[calc(100vh-200px)] w-full flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-widest mb-8">
          {t("creator")}
        </h1>
        <p className="text-lg md:text-xl opacity-60">
          {t("placeholder")}
        </p>
      </div>
    </div>
  );
}