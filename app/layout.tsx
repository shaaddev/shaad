import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Copyright from "@/components/Copyright";
import { Providers } from "./providers";
import { Contact } from "@/components/contact";
import { unstable_ViewTransition as ViewTransitions } from "react";

const mont = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shaaddev.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Shaad Lee Hue",
    template: "%s | Shaad Lee Hue",
  },
  description: "CTO & Full stack developer based in New York",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${mont.className}`}>
      <body className="antialiased tracking-tight">
        <div className="flex flex-col justify-between min-h-screen py-12 sm:py-24 px-6 bg-background max-w-2xl mx-auto">
          <Providers>
            <main className="">
              <ViewTransitions>{children}</ViewTransitions>
            </main>
            <Copyright />
            <Contact />
          </Providers>
        </div>
      </body>
    </html>
  );
}
