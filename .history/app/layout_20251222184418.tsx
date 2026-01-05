import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Modern, clean professional font
import "./globals.css";

// Configure the Inter font
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MONOFRAME | Orin Mons",
  description: "Photography & Design Studio by Orin Nickolay Mons",
  icons: {
    icon: "/favicon.ico", // You can add your custom logo here later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning fixes the DarkReader/Extension error
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-gray-200 dark:selection:bg-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}