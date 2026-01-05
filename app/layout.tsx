import type { Metadata, Viewport } from "next";
import { AppProvider } from "@/context/AppContext";
import ClientWrapper from "./ClientWrapper"; 
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "MONOFRAME | Design & Photography",
  description: "Independent design and photography studio based in the Netherlands, specializing in visual storytelling and modern aesthetics.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* CACHE BUSTING: Forces browser to check for new versions on every visit */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />

        {/* Mobile theme color */}
        <meta name="theme-color" content="#F2F2F2" />

        {/* Minimal critical CSS inlined to speed up first render */}
        <link rel="preload" href="/_next/static/chunks/app_globals_71f961d1.css" as="style" />
        <noscript><link rel="stylesheet" href="/_next/static/chunks/app_globals_71f961d1.css" /></noscript>
        <Script id="load-css" strategy="beforeInteractive">{`
          const link = document.querySelector('link[rel="preload"][as="style"]');
          if (link) link.onload = () => { link.rel = 'stylesheet'; };
        `}</Script>

        <style>{`
          /* Critical: body background + primary layout */
          html,body{background:var(--background);color:var(--foreground);}
          .skip-link{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}
          .skip-link:focus, .skip-link:active{position:static;width:auto;height:auto;margin:8px;padding:8px;background:var(--accent);color:var(--background);z-index:9999}
          main{min-height: calc(100vh - 96px);display:block}
          nav ul{list-style:none;padding:0;margin:0;display:flex;gap:1.5rem;align-items:center;justify-content:center}
          h1{font-size:clamp(2.5rem,10vw,7rem);line-height:1}
          nav a{font-size:clamp(1.25rem,2.5vw,2.4rem);font-weight:600}
          footer{background:transparent}
        `}</style>

        <link rel="preconnect" href="https://grainy-gradients.vercel.app" />
        
        {/* Theme initialization moved to public/theme-init.js to avoid inline scripts */}
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <AppProvider>
        <ClientWrapper>
          {/* Skip to content link for keyboard users */}
          <a href="#content" className="skip-link">Skip to content</a>
          {children}
        </ClientWrapper>
      </AppProvider>
    </html>
  );
}