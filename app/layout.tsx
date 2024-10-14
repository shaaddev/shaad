import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Copyright from "@/components/Copyright";
import { Providers } from "./providers";
import { Contact } from "@/components/contact";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
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
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
          "bg-background font-sans antialiased max-w-2xl mx-auto",
          mont.className
        )}>
          <div className="flex flex-col justify-between min-h-screen py-12 sm:py-24 px-6">
            <Providers>
              <main>
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
