import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "サイトマップ | Let's Go English! RaJA 英会話スクール",
  description:
    "Let's Go English! RaJA英会話スクールのサイトマップです。全ページの一覧をご確認いただけます。",
};

const sitemapSections = [
  {
    title: "メインページ",
    titleEn: "Main Pages",
    icon: "🏠",
    color: "from-orange-400 to-yellow-400",
    border: "border-orange-200",
    bg: "bg-orange-50",
    links: [
      { label: "ホーム", href: "/", desc: "トップページ" },
      { label: "コンセプト", href: "/concept", desc: "スクールの教育理念" },
      {
        label: "プラン＆料金",
        href: "/plan-fees/",
        desc: "コース一覧・料金・時間割",
      },
      {
        label: "お問い合わせ",
        href: "/#contact",
        desc: "無料体験レッスン申し込み",
      },
    ],
  },
  {
    title: "スクール情報",
    titleEn: "About",
    icon: "🏫",
    color: "from-teal-400 to-green-400",
    border: "border-teal-200",
    bg: "bg-teal-50",
    links: [
      { label: "About", href: "/about/", desc: "スクールについて" },
      {
        label: "Ted Miller プロフィール",
        href: "/about-tedmiller",
        desc: "校長先生の紹介",
      },
      { label: "ブログ", href: "/ブログ/", desc: "英語学習のヒント・お知らせ" },
    ],
  },
  {
    title: "体験談",
    titleEn: "Reviews",
    icon: "💬",
    color: "from-purple-400 to-pink-400",
    border: "border-purple-200",
    bg: "bg-purple-50",
    links: [
      { label: "COCOちゃんの体験談", href: "/reviews/coco", desc: "生徒さんの声" },
      {
        label: "LAYLAちゃんの体験談",
        href: "/reviews/layla",
        desc: "生徒さんの声",
      },
    ],
  },
  {
    title: "サポート",
    titleEn: "Support",
    icon: "🔧",
    color: "from-blue-400 to-indigo-400",
    border: "border-blue-200",
    bg: "bg-blue-50",
    links: [
      {
        label: "プライバシーポリシー",
        href: "/j/privacy",
        desc: "個人情報の取り扱い",
      },
      { label: "サイトマップ", href: "/sitemap/", desc: "全ページ一覧" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main>
      <Navbar />
      <section
        className="pt-32 pb-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #FAFFFE 0%, #FFFDF8 50%, #FFF9F0 100%)",
        }}
      >
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span>🗺️</span> Sitemap
            </div>
            <h1
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif" }}
            >
              サイトマップ
            </h1>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Let&apos;s Go English! RaJA英会話スクールの全ページ一覧です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sitemapSections.map((section) => (
              <div
                key={section.title}
                className={`bg-white rounded-3xl border-2 ${section.border} overflow-hidden shadow-md`}
              >
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${section.color}`}
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{section.icon}</span>
                    <div>
                      <h2 className="font-black text-gray-800 text-lg">
                        {section.title}
                      </h2>
                      <p className="text-xs text-gray-400 font-bold">
                        {section.titleEn}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-start gap-3 group"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${section.color} mt-2 flex-shrink-0 group-hover:scale-150 transition-transform`}
                          />
                          <div>
                            <span className="text-sm font-bold text-gray-700 group-hover:text-orange-600 transition-colors">
                              {link.label}
                            </span>
                            <p className="text-xs text-gray-400">{link.desc}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-orange-600 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              ホームに戻る
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
