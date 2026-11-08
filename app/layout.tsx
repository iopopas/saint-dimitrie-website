import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const PARISH_LOGO = "https://sfdimitrie.org/wp-content/uploads/2020/08/STDimitrie_logo-e1748324916623.png?site-icon=1";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saint Dimitrie the New Romanian Orthodox Church",
  description: "Orthodox faith, Romanian tradition, and a welcoming parish community in Frederick, Colorado.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: [{ url: PARISH_LOGO, type: "image/png", sizes: "350x341" }],
    shortcut: PARISH_LOGO,
    apple: [{ url: PARISH_LOGO, type: "image/png", sizes: "350x341" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#a52b36",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
