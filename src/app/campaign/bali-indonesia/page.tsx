import type { Metadata } from "next";
import BaliCampaignPage from "@/components/BaliCampaignPage";
import { BreadcrumbSchema } from "@/components/JsonLd";

const SITE_URL = "https://www.raja-english.com";
const OG_IMAGE =
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/bali-campaign/tanah-lot-sunset.webp";

export const metadata: Metadata = {
  title:
    "2026年夏 バリ島現地校短期留学プログラム｜中高生グループ",
  description:
    "2026年夏、インドネシア・バリ島タバナン地区の現地校で国際理解を深める7日間の短期留学プログラム。現地高校生バディと共に文化体験・授業参加。中高生対象、¥364,000（航空券・宿泊・食事込み）。",
  keywords: [
    "バリ島留学",
    "中高生留学プログラム",
    "インドネシア短期留学",
    "バリ島現地校プログラム",
    "夏休み留学",
    "国際交流プログラム",
    "バリ島文化体験",
    "RaJA英会話",
    "Let's Go English",
    "JAN-Link",
    "SMA Negeri 1 Tabanan",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: `${SITE_URL}/campaign/bali-indonesia`,
    siteName: "Let's Go English! RaJA英会話スクール",
    title:
      "2026年夏 バリ島現地校短期留学プログラム｜中高生グループ",
    description:
      "バリ島の現地校で国際理解を深め一生の友情を育む7日間。現地高校生バディ制度・教育省公認プログラム。",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "バリ島タナロット寺院の夕日 - 2026年夏 短期留学プログラム",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026年夏 バリ島現地校短期留学プログラム",
    description:
      "バリ島の現地校で国際理解を深め一生の友情を育む7日間。中高生対象¥364,000〜",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${SITE_URL}/campaign/bali-indonesia`,
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "ホーム", url: "https://www.raja-english.com" },
          { name: "バリ島短期留学プログラム", url: "https://www.raja-english.com/campaign/bali-indonesia" },
        ]}
      />
      <BaliCampaignPage />
    </>
  );
}
