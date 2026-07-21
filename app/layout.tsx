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
  title: "Mohamed Ramy — Product-focused Frontend Developer & UI/UX Designer",
  description:
    "Mohamed Ramy turns complex product requirements into intuitive Figma flows and scalable, production-ready React and Next.js interfaces.",
  keywords: [
    "Mohamed Ramy",
    "Frontend Developer",
    "UI UX Designer",
    "React Developer",
    "Next.js Developer",
    "Egypt",
  ],
  icons: {
    icon: [{ url: "/images/mr-logo.png", type: "image/png" }],
    shortcut: "/images/mr-logo.png",
    apple: "/images/mr-logo.png",
  },
  openGraph: {
    title: "Mohamed Ramy — Complex products, clearly engineered.",
    description: "Product-focused frontend development and UI/UX design with React, Next.js and Figma.",
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
