import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "鹿児島市の英会話教室 Let's Go English!（RaJA英会話スクール）のプライバシーポリシー。個人情報の取り扱いについてご確認ください。",
  alternates: {
    canonical: "https://www.raja-english.com/j/privacy",
  },
};

export default function PrivacyPolicyPage() {
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
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span>🔒</span> Privacy Policy
            </div>
            <h1
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif" }}
            >
              プライバシーポリシー
            </h1>
            <p className="text-gray-400 text-sm">最終更新日：2025年1月1日</p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 sm:p-12 space-y-10">
            <PolicySection title="1. 基本方針">
              <p>
                Let&apos;s Go English! RaJA英会話スクール（以下「当スクール」）は、
                お客様の個人情報の保護を重要な責務と認識し、
                個人情報の適正な取得、利用、管理を行います。
                当スクールは、個人情報保護に関する法令およびその他の規範を遵守し、
                お客様の個人情報の保護に努めます。
              </p>
            </PolicySection>

            <PolicySection title="2. 個人情報の定義">
              <p>
                本プライバシーポリシーにおいて「個人情報」とは、
                個人情報保護法に定める個人情報を指し、
                氏名、住所、電話番号、メールアドレス、生年月日等、
                特定の個人を識別できる情報をいいます。
              </p>
            </PolicySection>

            <PolicySection title="3. 個人情報の収集">
              <p>当スクールは、以下の場合に個人情報を収集することがあります。</p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-gray-600">
                <li>体験レッスンのお申し込み時</li>
                <li>入会手続き時</li>
                <li>お問い合わせフォームからのご連絡時</li>
                <li>イベント・キャンペーンへのお申し込み時</li>
                <li>アンケートへのご回答時</li>
              </ul>
            </PolicySection>

            <PolicySection title="4. 個人情報の利用目的">
              <p>
                収集した個人情報は、以下の目的で利用いたします。
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-gray-600">
                <li>レッスン・サービスの提供および運営</li>
                <li>お問い合わせへの対応</li>
                <li>スクールからのお知らせ・イベント情報のご案内</li>
                <li>レッスンの質の向上のための分析</li>
                <li>法令に基づく対応</li>
              </ul>
            </PolicySection>

            <PolicySection title="5. 個人情報の第三者提供">
              <p>
                当スクールは、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-gray-600">
                <li>お客様ご本人の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>
                  人の生命、身体または財産の保護のために必要がある場合で、
                  本人の同意を得ることが困難な場合
                </li>
                <li>
                  業務委託先に対して、利用目的の達成に必要な範囲で個人情報を提供する場合
                  （この場合、委託先に対して適切な管理を求めます）
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="6. 個人情報の管理">
              <p>
                当スクールは、個人情報の正確性および安全性を確保するために、
                セキュリティに関する適切な措置を講じ、
                個人情報の漏洩、滅失またはき損の防止に努めます。
              </p>
            </PolicySection>

            <PolicySection title="7. Cookieの使用について">
              <p>
                当スクールのウェブサイトでは、サービスの向上やアクセス解析のために
                Cookie（クッキー）を使用する場合があります。
                Cookieの使用を望まない場合は、ブラウザの設定により拒否することが可能です。
                ただし、一部のサービスがご利用いただけなくなる場合があります。
              </p>
            </PolicySection>

            <PolicySection title="8. 個人情報の開示・訂正・削除">
              <p>
                お客様ご本人から個人情報の開示、訂正、削除、利用停止等のご請求があった場合は、
                ご本人であることを確認の上、速やかに対応いたします。
                下記のお問い合わせ窓口までご連絡ください。
              </p>
            </PolicySection>

            <PolicySection title="9. プライバシーポリシーの変更">
              <p>
                当スクールは、必要に応じて本プライバシーポリシーを変更することがあります。
                変更した場合は、当ウェブサイトにてお知らせいたします。
              </p>
            </PolicySection>

            <PolicySection title="10. お問い合わせ窓口">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mt-3">
                <p className="font-bold text-gray-800 mb-3">
                  Let&apos;s Go English! RaJA 英会話スクール
                </p>
                <div className="space-y-1.5 text-gray-600 text-sm">
                  <p>所在地：鹿児島県鹿児島市</p>
                  <p>電話番号：099-204-7730</p>
                  <p>
                    お問い合わせ：
                    <a
                      href="/contact"
                      className="text-orange-600 hover:underline font-bold"
                    >
                      お問い合わせフォーム
                    </a>
                  </p>
                </div>
              </div>
            </PolicySection>

            <div className="pt-6 border-t border-gray-100 text-center">
              <a
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
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-black text-gray-800 mb-3 flex items-center gap-2">
        <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-orange-500 to-yellow-400" />
        {title}
      </h2>
      <div className="text-gray-600 text-sm leading-[1.9] pl-4">
        {children}
      </div>
    </div>
  );
}
