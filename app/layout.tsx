import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Copyright from "@/components/Copyright";
import { Providers } from "./providers";
import { Contact } from "@/components/contact";
import { Toaster } from "@/components/ui/sonner";
import { ViewTransitions } from "next-view-transitions";

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
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning className={`${mont.className}`}>
        <body className="antialiased tracking-tight">
          <div className="flex flex-col justify-between min-h-screen py-12 sm:py-24 px-6 bg-background max-w-2xl mx-auto">
            <Providers>
              <main className="">
                {children}
                <Copyright />
                <Toaster position="bottom-right" />
              </main>
              <Contact />
            </Providers>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
