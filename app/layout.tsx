import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const editorial = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedramy.dev"),
  title: "Mohamed Ramy — Product-minded Frontend Developer & UI/UX Designer",
  description:
    "Mohamed Ramy turns complex product logic into clear, production-ready interfaces using React, Next.js, TypeScript and Figma.",
  keywords: [
    "Mohamed Ramy",
    "Frontend Developer",
    "UI UX Designer",
    "React Developer",
    "Next.js Developer",
    "Egypt",
  ],
  openGraph: {
    title: "Mohamed Ramy — Complex products, made clear.",
    description: "Product-minded frontend development and UI/UX design.",
    images: ["/images/mohamed-ramy-key-visual.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d100e",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${editorial.variable}`}>
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
