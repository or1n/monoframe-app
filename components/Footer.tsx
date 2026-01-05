"use client";
import React from "react";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { lang } = useApp();

  return (
    <footer className="w-full py-6 px-6 md:px-12 flex items-center justify-between text-sm opacity-90">
      {/* LEFT: Email */}
      <div>
        <a href="mailto:info@monoframe.nl" className="font-bold" aria-label={lang === 'en' ? 'Email' : 'E-mail'}>
          info@monoframe.nl
        </a>
      </div>

      {/* RIGHT: Phone + WhatsApp */}
      <div>
        <a href="https://wa.me/31682750609" className="font-bold" aria-label="WhatsApp">
          +31 (0) 6 8275 0609<br />whatsapp
        </a>
      </div>
    </footer>
  );
}
