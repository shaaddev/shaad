import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ViewTransitions } from "next-view-transitions";
import { Copyright } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
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
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning className={`${inter.className}`}>
        <body className="antialiased tracking-tight">
          {/* background layers */}
          <div className="space-scene" aria-hidden="true">
            <div className="space-stars" />
            <div className="space-stars2" />
            <div className="space-stars3" />
            <div className="space-glow" />
          </div>
          <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
            <Providers>
              <main className="w-full flex items-center justify-center">
                {children}
                <Copyright />
              </main>
            </Providers>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
