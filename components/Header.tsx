"use client";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function Header() {
  return (
    <header className="w-full border-b border-current/10" style={{position: 'relative', zIndex: 100, background: 'var(--background)'}}>
      <nav className="flex justify-center items-center py-6" aria-label="Main navigation">
        <HamburgerMenu />
      </nav>
    </header>
  );
}
