"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useT from "@/hooks/useT";
import { useState } from "react";
import { Home as HomeIcon } from "lucide-react";

export default function HamburgerMenu() {
  const t = useT();
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const allPages = [
    { href: "/", label: "Home", showIcon: true },
    { href: "/photo", label: t("photo"), showIcon: false },
    { href: "/design", label: t("design"), showIcon: false },
    { href: "/creator", label: t("creator"), showIcon: false },
  ];

  // Filter out current page
  const availablePages = allPages.filter((page) => page.href !== pathname);

  return (
    <div 
      className="relative z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hamburger Icon */}
      <button
        className={`flex flex-col gap-1.5 w-10 h-10 justify-center items-center transition-all duration-300 ${
          isHovered ? "opacity-60" : "opacity-100"
        }`}
        aria-label="Navigation menu"
        aria-expanded={isHovered}
        title="Navigation menu"
      >
        <span className="w-7 h-0.5 bg-current transition-all"></span>
        <span className="w-7 h-0.5 bg-current transition-all"></span>
        <span className="w-7 h-0.5 bg-current transition-all"></span>
      </button>

      {/* Dropdown Menu */}
      {isHovered && (
        <div className="absolute right-0 top-full mt-6 flex flex-col gap-6 min-w-[200px] p-4 bg-[var(--background)]/95 backdrop-blur-sm rounded-lg shadow-2xl border border-current/10 z-50">
          {availablePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="text-right text-xl font-bold tracking-wide hover:opacity-60 transition-all flex items-center justify-end gap-2"
              style={{ 
                WebkitTextStroke: "1px currentColor",
                WebkitTextFillColor: "transparent",
              }}
              title={page.label}
            >
              {page.label}
              {page.showIcon && <HomeIcon width={20} height={20} strokeWidth={1.5} aria-hidden="true" />}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
