import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ｜鹿児島市の英会話教室 RaJA英会話スクール",
  description:
    "鹿児島市の英会話教室 RaJA英会話スクールのブログ。英語学習のコツ・鹿児島の英会話事情・スクールの最新イベント情報をお届けします。",
  alternates: {
    canonical: "https://www.raja-english.com/%E3%83%96%E3%83%AD%E3%82%B0",
  },
};

export default function BlogPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "ホーム", url: "https://www.raja-english.com" },
          { name: "ブログ", url: "https://www.raja-english.com/%E3%83%96%E3%83%AD%E3%82%B0" },
        ]}
      />
      <Navbar />
      <section
        className="min-h-screen pt-32 pb-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #FFF9F0 0%, #FFFDF0 50%, #F0FFF8 100%)",
        }}
      >
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span>📝</span> Blog
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 font-brand">
            ブログ
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            英語学習のヒントやスクールの最新情報をお届けします。
          </p>

          <div className="bg-white rounded-3xl border-2 border-orange-100 shadow-lg p-10 sm:p-14 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-2xl font-black text-gray-800 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              ブログ記事は現在準備中です。
              <br />
              英語学習のコツやスクールの活動レポートなど、
              <br className="hidden sm:block" />
              楽しいコンテンツをお届けする予定です。お楽しみに！
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 btn-primary text-sm py-3 px-6 font-bold"
            >
              🏠 ホームに戻る
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
