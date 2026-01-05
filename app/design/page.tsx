"use client";
import useT from "@/hooks/useT";

export default function DesignPage() {
  const t = useT();

  return (
    <main id="content" className="h-screen w-full flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-widest mb-6">
          {t("design")}
        </h1>
        <p className="text-lg md:text-xl opacity-60">
          {t("placeholder")}
        </p>
      </div>
    </main>
  );
}