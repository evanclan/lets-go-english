import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaylaReviewContent from "@/components/LaylaReviewContent";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "LAYLAの体験談｜大人英会話からセブ留学｜鹿児島市の英会話教室 RaJA英会話スクール",
  description:
    "鹿児島市の大人英会話RaJA英会話スクールに通うLAYLAのセブ島留学体験記。初心者から1年半で留学を実現。鹿児島市で大人・初心者向け英会話スクールをお探しの方に。",
  alternates: {
    canonical: "https://www.raja-english.com/reviews/layla",
  },
  openGraph: {
    title: "LAYLAの留学体験談｜鹿児島市の大人英会話RaJA",
    description:
      "RaJA英会話スクールで1年半学び、セブ島留学へ。初心者から始めた大人の英語学習ストーリー。",
    images: [
      {
        url: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/layla_profile.png",
        width: 800,
        height: 600,
        alt: "LAYLA セブ島留学体験｜鹿児島市の大人英会話RaJA",
      },
    ],
  },
};

export default function LaylaReviewPage() {
  return (
    <main className="bg-[var(--warm-white)]">
      <BreadcrumbSchema
        items={[
          { name: "ホーム", url: "https://www.raja-english.com" },
          {
            name: "体験談",
            url: "https://www.raja-english.com/#experiences",
          },
          {
            name: "LAYLAの体験談",
            url: "https://www.raja-english.com/reviews/layla",
          },
        ]}
      />
      <Navbar />
      <LaylaReviewContent />
      <Footer />
    </main>
  );
}
