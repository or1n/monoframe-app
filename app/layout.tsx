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

        <link rel="preconnect" href="https://grainy-gradients.vercel.app" />
        
        {/* Theme initialization moved to public/theme-init.js to avoid inline scripts */}
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <AppProvider>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </AppProvider>
    </html>
  );
}