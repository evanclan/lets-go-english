import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CocoReviewContent from "@/components/CocoReviewContent";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "COCOの体験談｜小学生セブ島留学｜鹿児島市こども英会話 RaJA英会話スクール",
  description:
    "鹿児島市のこども英会話教室RaJA英会話スクールに通う小学4年生COCOのセブ島短期留学体験記。鹿児島の英会話教室から世界へ羽ばたく子どもたちの成長ストーリーをご紹介します。",
  alternates: {
    canonical: "https://www.raja-english.com/reviews/coco",
  },
  openGraph: {
    title: "COCOの留学体験談｜鹿児島市のこども英会話RaJA",
    description:
      "小学4年生COCOがRaJA英会話スクールからセブ島留学へ。1ヶ月の挑戦と成長の物語。",
    images: [
      {
        url: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_2.jpg",
        width: 800,
        height: 600,
        alt: "COCO セブ島留学体験｜鹿児島市の英会話教室RaJA",
      },
    ],
  },
};

export default function CocoReviewPage() {
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
            name: "COCOの体験談",
            url: "https://www.raja-english.com/reviews/coco",
          },
        ]}
      />
      <Navbar />
      <CocoReviewContent />
      <Footer />
    </main>
  );
}
