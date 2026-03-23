import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TedMillerProfile from "@/components/TedMillerProfile";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テッド・ミラー校長プロフィール｜鹿児島市 RaJA英会話スクール",
  description:
    "鹿児島市の英会話教室 RaJA英会話スクール校長テッド・ミラー（Ted Miller）の自己紹介。10年以上の指導実績を持つネイティブ講師が、楽しく本格的な英会話レッスンを提供します。",
  alternates: {
    canonical: "https://www.raja-english.com/about-tedmiller",
  },
};

export default function AboutTedMillerPage() {
  return (
    <main>
      <Navbar />
      <TedMillerProfile />
      <Footer />
    </main>
  );
}
