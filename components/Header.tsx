"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useT from "@/hooks/useT";
import { Home as HomeIcon } from "lucide-react";

export default function Header() {
  const t = useT();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = [
    { href: "/photo", label: t("photo") },
    { href: "/design", label: t("design") },
    { href: "/creator", label: t("creator") },
  ];

  return (
    <header className="w-full py-6 px-6 md:px-12">
      <nav className="flex items-center justify-between">
        {/* LEFT: Navigation Links */}
        <div className="flex items-center gap-6 md:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm md:text-base font-semibold tracking-wide transition-opacity hover:opacity-60 ${
                pathname === item.href ? "opacity-100" : "opacity-70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* RIGHT: Home Icon (only on non-home pages) */}
        {!isHome && (
          <Link
            href="/"
            className="hover:opacity-40 transition-opacity"
            aria-label="Back to home"
          >
            <HomeIcon
              width={24}
              height={24}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </Link>
        )}
      </nav>
    </header>
  );
}
