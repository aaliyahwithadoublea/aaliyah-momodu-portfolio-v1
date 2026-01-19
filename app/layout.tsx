import type { Metadata } from "next";
import { Poppins, Playfair_Display, Dancing_Script, Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

// Body font - Feminine, elegant, readable
const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Heading fonts - Keep existing elegant fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aaliyah Momodu | Frontend Developer Portfolio",
  description: "Results-driven Frontend Developer with expertise in React.js, Next.js, and React Native. Based in Lagos, Nigeria.",
  keywords: ["frontend developer", "react", "next.js", "portfolio", "lagos", "nigeria"],
  authors: [{ name: "Aaliyah Momodu" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Aaliyah Momodu | Frontend Developer",
    description: "Results-driven Frontend Developer based in Lagos, Nigeria",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${nunito.variable} ${playfair.variable} ${dancingScript.variable} ${cormorant.variable} font-body`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
