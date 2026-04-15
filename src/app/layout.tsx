import type { Metadata } from "next";
import { Fredoka, Noto_Sans_JP, Nunito } from "next/font/google";
// import BaliPromoPopup from "@/components/BaliPromoPopup"; // temporarily hidden — pending organizer updates
import VercelSpeedInsights from "@/components/VercelSpeedInsights";
import {
  HERO_BACKGROUND_IMAGE,
  HERO_MAIN_PORTRAIT_IMAGE_AVIF,
} from "@/lib/r2-assets";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const fredokaDisplay = Fredoka({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka-one",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-nunito",
});

export const SITE_URL = "https://www.raja-english.com";
const SITE_ICON =
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/navbar-logo.png";
const OG_IMAGE =
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/logo-white-bg.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "鹿児島英会話 Let's Go English!｜鹿児島市の英会話教室 RaJA英会話スクール｜こども〜大人・英検Jr.対応",
    template: "%s | Let's Go English! RaJA英会話スクール 鹿児島",
  },
  description:
    "鹿児島市の英会話教室 Let's Go English!（RaJA英会話スクール）は、こども英会話・大人英会話・英検Jr.対応・初心者歓迎の英会話スクールです。月謝¥7,700〜の安い料金設定と無料体験レッスンで、鹿児島で楽しく英語を学べます。Lets Go English Kagoshima — the friendly English school for kids and adults.",
  keywords: [
    "Lets Go English",
    "lets go english kagoshima",
    "鹿児島英会話",
    "英会話",
    "鹿児島市英会話",
    "英会話教室",
    "鹿児島市英会話スクール",
    "鹿児島市こども英会話",
    "鹿児島市大人英会話",
    "鹿児島市英検Jr.英会話",
    "鹿児島市初心者英会話",
    "RaJA英会話",
    "RaJA 英会話",
    "Let's Go English",
    "Let's Go English Kagoshima",
    "鹿児島市英会話安い",
    "安い英会話",
    "英会話無料体験鹿児島",
    "鹿児島 英語教室",
    "Kagoshima English school",
  ],
  icons: {
    icon: [{ url: SITE_ICON, type: "image/png" }],
    apple: [{ url: SITE_ICON, type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "Let's Go English! RaJA英会話スクール",
    title:
      "鹿児島英会話 Let's Go English!｜鹿児島市の英会話教室 RaJA英会話スクール",
    description:
      "鹿児島市のこども〜大人向け英会話教室。英検Jr.対応・月謝¥7,700〜・無料体験レッスン実施中。RaJA英会話スクールで楽しく英語を学ぼう！",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Let's Go English! RaJA英会話スクール 鹿児島市",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "鹿児島英会話 Let's Go English!｜鹿児島市の英会話教室 RaJA英会話スクール",
    description:
      "鹿児島市のこども〜大人向け英会話スクール。英検Jr.対応・月謝¥7,700〜・無料体験レッスン実施中！",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google2d2e3121990e6f50",
  },
  other: {
    "geo.region": "JP-46",
    "geo.placename": "Kagoshima",
    "geo.position": "31.5969;130.5571",
    "ICBM": "31.5969, 130.5571",
  },
};

const fontVars = `${notoSansJp.variable} ${fredokaDisplay.variable} ${nunito.variable}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={fontVars}>
      <head>
        <link
          rel="preconnect"
          href="https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev"
          crossOrigin="anonymous"
        />
        {/* LCP: hero portrait + background load early (CSS bg is discovered late) */}
        <link
          rel="preload"
          href={HERO_MAIN_PORTRAIT_IMAGE_AVIF}
          as="image"
          type="image/avif"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={HERO_BACKGROUND_IMAGE}
          as="image"
          crossOrigin="anonymous"
        />
      </head>
      <body className={notoSansJp.className}>
        {/* <BaliPromoPopup /> — temporarily hidden */}
        {children}
        <VercelSpeedInsights />
      </body>
    </html>
  );
}
