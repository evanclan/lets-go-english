import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "スクール紹介（About）｜鹿児島市の英会話教室 RaJA英会話スクール",
  description:
    "鹿児島市の英会話スクール Let's Go English!（RaJA英会話）のスクール紹介。私たちのミッション・ビジョン・鹿児島で選ばれる理由をご紹介します。",
  alternates: {
    canonical: "https://www.raja-english.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section
        className="min-h-screen pt-32 pb-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #F0FFF8 0%, #E8F8F4 50%, #FFF9F0 100%)",
        }}
      >
        <div className="absolute inset-0 sakura-pattern opacity-30 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #3D8B3D, transparent 70%)",
            transform: "translate(30%,-30%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span>🏫</span> About Us
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black text-gray-900 mb-6"
            style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif" }}
          >
            About
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Let&apos;s Go English! RaJA 英会話スクールについて
          </p>

          <div className="bg-white rounded-3xl border-2 border-teal-100 shadow-lg p-10 sm:p-14 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🚧</div>
            <h2 className="text-2xl font-black text-gray-800 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              このページは現在準備中です。
              <br />
              近日中に公開予定ですので、もうしばらくお待ちください。
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 btn-primary text-sm py-3 px-6 font-bold"
              >
                🏠 ホームに戻る
              </Link>
              <a
                href="/concept"
                className="inline-flex items-center gap-2 btn-secondary text-sm py-3 px-6 font-bold"
              >
                💡 コンセプトを見る
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
