import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Copyright from "@/components/Copyright";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react'
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const mont = Montserrat({ 
  variable: '--font-mont',
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "shaad",
  description: "Shaad is a full-stack developer based in New York",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
        mont.className
      )}>
        <Providers>
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
          <Copyright />
          <Toaster />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
