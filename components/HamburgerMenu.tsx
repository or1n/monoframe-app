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
      style={{paddingBottom: isHovered ? '60px' : '0', transition: 'padding 0.2s ease'}}
    >
      {/* Hamburger Icon */}
      <button
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          width: '32px',
          height: '32px',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          opacity: isHovered ? 0.6 : 1,
          transition: 'opacity 0.2s ease'
        }}
        aria-label="Navigation menu"
        aria-expanded={isHovered}
        title="Navigation menu"
      >
        <span style={{width: '100%', height: '2px', background: 'currentColor', transition: 'all 0.2s ease'}}></span>
        <span style={{width: '100%', height: '2px', background: 'currentColor', transition: 'all 0.2s ease'}}></span>
        <span style={{width: '100%', height: '2px', background: 'currentColor', transition: 'all 0.2s ease'}}></span>
      </button>

      {/* Dropdown Menu - Horizontal */}
      {isHovered && (
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '100%',
          transform: 'translateX(-50%)',
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'row',
          gap: '32px',
          padding: '16px 32px',
          background: 'var(--background)',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          border: '1px solid',
          borderColor: 'var(--foreground)',
          borderOpacity: 0.1,
          zIndex: 1000,
          whiteSpace: 'nowrap'
        }}>
          {availablePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              style={{
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                opacity: 0.8,
                transition: 'opacity 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--foreground)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
              title={page.label}
            >
              {page.showIcon && <HomeIcon width={16} height={16} strokeWidth={2} aria-hidden="true" />}
              {page.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
