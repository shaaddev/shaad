import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Copyright from "@/components/Copyright";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import Theme from "@/components/Theme";
import { Analytics } from '@vercel/analytics/react'

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
      <body className={`${mont.className} mx-auto max-w-screen-2xl`}>
        <Providers>
          <Navbar />
            <main>
              {children}
            </main>
          <Theme />
          <Toaster />
          <Copyright />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
