import type { Metadata, Viewport } from "next";
import "./globals.css";

const PARISH_LOGO = "https://sfdimitrie.org/wp-content/uploads/2020/08/STDimitrie_logo-e1748324916623.png?site-icon=1";

export const metadata: Metadata = {
  title: "Saint Dimitrie the New Romanian Orthodox Church",
  description: "Orthodox faith, Romanian tradition, and a welcoming parish community in Frederick, Colorado.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
