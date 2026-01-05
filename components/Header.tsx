"use client";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function Header() {
  return (
    <header className="w-full py-6 px-6 md:py-8 md:px-12 relative z-50">
      <nav className="flex justify-end items-center" aria-label="Main navigation">
        <HamburgerMenu />
      </nav>
    </header>
  );
}
