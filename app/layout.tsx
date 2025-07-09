import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/WebFooter";
import { SplashProvider } from './contexts/SplashContext'
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Made with Next.js and Tailwind CSS",
  keywords: ["portfolio", "web developer", "nextjs", "tailwindcss"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" 
        defaultTheme="system" 
        enableSystem 
        disableTransitionOnChange
        >
          <SplashProvider>
            <Navbar />
            <Suspense>
              {children}
            </Suspense>
            <Footer />
          </SplashProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
