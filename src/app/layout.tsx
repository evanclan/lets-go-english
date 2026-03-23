import type { Metadata } from "next";
import "./globals.css";

const SITE_ICON =
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/navbar-logo.png";

export const metadata: Metadata = {
  title: "Let's Go English! | RaJA 英会話スクール",
  description: "楽しく英語を学ぼう！RaJA英会話スクールは、子供から大人まで、楽しく効果的に英語を学べる英会話スクールです。",
  icons: {
    icon: [{ url: SITE_ICON, type: "image/png" }],
    apple: [{ url: SITE_ICON, type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
