import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Copyright from "@/components/Copyright";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import Theme from "@/components/Theme";
import Script from "next/script";

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
      <head>
        <Script 
          async 
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4SZ4W9G753');
          `}
        </Script>
      </head>
      <body className={`${mont.className} mx-auto max-w-screen-2xl`}>
        <Providers>
          <Navbar />
            <main>
              {children}
            </main>
          <Theme />
          <Toaster />
          <Copyright />
        </Providers>
      </body>
    </html>
  );
}
