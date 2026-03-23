"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function FadeSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  {
    num: "01",
    titleEn: "Applied Linguistics",
    title: "応用言語学に基づく指導",
    body: "応用言語学とは、英語を母語としない人が、どのように英語を身につけていくのかを研究する学問です。この分野では、「学習者の母語を理解している指導」がとても重要だとされています。",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.15" />
        <path
          d="M14 34V16a2 2 0 012-2h16a2 2 0 012 2v18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M14 34h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 20h8M20 25h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: "#2E9E8F",
    accentRgb: "46,158,143",
  },
  {
    num: "02",
    titleEn: "Bilingual Instructors",
    title: "バイリンガル講師の強み",
    body: "私たちの講師は、日本語と英語の両方を理解し、自ら英語を身につけてきたバイリンガルです。その経験をもとに、子どもたちがどこでつまずくのか、なぜ理解が難しいのか、どうすれば自然に身につくのかを丁寧に見極め、一人ひとりに合った学びをサポートします。",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.15" />
        <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M10 36c0-4.418 3.582-8 8-8h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M38 36c0-4.418-3.582-8-8-8h-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    accent: "#E8571A",
    accentRgb: "232,87,26",
  },
  {
    num: "03",
    titleEn: "Native + Bilingual",
    title: "ネイティブ講師との連携",
    body: "ネイティブ講師による英語環境を組み合わせることで、理解と実践の両方から、確かな英語力を育てていきます。",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.15" />
        <path
          d="M24 10C17.373 10 12 15.373 12 22s5.373 12 12 12 12-5.373 12-12S30.627 10 24 10z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M12 22h24M24 10c3 3.5 4.5 7.5 4.5 12s-1.5 8.5-4.5 12c-3-3.5-4.5-7.5-4.5-12s1.5-8.5 4.5-12z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    accent: "#3D8B3D",
    accentRgb: "61,139,61",
  },
];

export default function ConceptPage() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* ─── Hero ─── */}
      <section
        className="relative overflow-hidden py-20 sm:py-28 lg:py-36"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,20,28,0.45) 0%, rgba(16,35,38,0.45) 100%), url('https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/LINE_ALBUM_2025%20December_251229_839.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(46,158,143,0.07) 0%, transparent 70%)",
            transform: "translate(30%, -40%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(232,87,26,0.06) 0%, transparent 70%)",
            transform: "translate(-30%, 40%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl px-6 py-12 sm:px-10 sm:py-14 bg-black/25 backdrop-blur-[1px] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.24)] text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/90 border border-white text-teal-700 px-4 py-2 rounded-full text-sm font-bold shadow-sm mb-6"
              >
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                Our Philosophy
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-white font-brand"
                style={{ textShadow: "0 2px 14px rgba(0,0,0,0.35)" }}
              >
                Concept
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white/95 leading-relaxed max-w-3xl mx-auto">
                  言語は、単なるコミュニケーションの手段ではなく、
                  <br className="hidden sm:block" />
                  その人の
                  <span className="text-gradient-orange">「考え方」</span>
                  そのものを形づくるものです。
                </p>
              </motion.div>

              {/* Decorative separator */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-10 mx-auto w-24 h-1 rounded-full"
                style={{ background: "linear-gradient(90deg, #2E9E8F, #E8571A)" }}
              />
          </div>
        </div>
      </section>

      {/* ─── Core Insight: Language & Thinking ─── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0 sakura-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual: EN vs JP comparison */}
            <FadeSection>
              <div className="relative">
                <div
                  className="absolute -top-6 -left-6 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(232,87,26,0.08), transparent 70%)" }}
                />
                <div className="space-y-5">
                  {/* English block */}
                  <motion.div
                    className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 shadow-sm"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full bg-orange-100 text-orange-700 border border-orange-200"
                      >
                        English
                      </span>
                    </div>
                    <p className="text-gray-700 font-bold text-base leading-relaxed font-nunito-only">
                      &ldquo;I ate sushi yesterday.&rdquo;
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs font-bold">
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-lg">I</span>
                      <span className="text-gray-400 self-center">&rarr;</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-lg">ate</span>
                      <span className="text-gray-400 self-center">&rarr;</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-lg">sushi</span>
                      <span className="text-gray-400 self-center">&rarr;</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-lg">yesterday</span>
                    </div>
                    <p className="mt-2 text-xs text-gray-400">主語 → 動詞 → 目的語 → 時間</p>
                  </motion.div>

                  {/* Japanese block */}
                  <motion.div
                    className="relative bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100 shadow-sm"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full bg-teal-100 text-teal-700 border border-teal-200"
                      >
                        日本語
                      </span>
                    </div>
                    <p className="text-gray-700 font-bold text-base leading-relaxed">
                      「昨日、寿司を食べました。」
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs font-bold">
                      <span className="px-2 py-1 bg-teal-100 text-teal-600 rounded-lg">昨日</span>
                      <span className="text-gray-400 self-center">&rarr;</span>
                      <span className="px-2 py-1 bg-teal-100 text-teal-600 rounded-lg">寿司を</span>
                      <span className="text-gray-400 self-center">&rarr;</span>
                      <span className="px-2 py-1 bg-teal-100 text-teal-600 rounded-lg">食べました</span>
                    </div>
                    <p className="mt-2 text-xs text-gray-400">時間 → 目的語 → 動詞</p>
                  </motion.div>

                  {/* Arrow connector */}
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-xs font-bold text-gray-500">語順も考え方も違う</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeSection>

            {/* Text content */}
            <FadeSection delay={0.15}>
              <div>
                <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-5 shadow-sm">
                  <span className="text-base">💡</span>
                  Language & Thinking
                </div>

                <h2 className="section-title text-gray-900 mb-5 !text-2xl sm:!text-3xl leading-snug">
                  英語を学ぶことは、
                  <br />
                  <span className="text-gradient-green">新しい考え方</span>を
                  <br />
                  身につけること。
                </h2>

                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                  <p>
                    英語と日本語は、語順や表現だけでなく、文章の組み立て方や考え方にも大きな違いがあります。
                  </p>
                  <p>
                    そのため、日本語を母語とする子どもたちにとって、英語を学ぶことは、単に単語を覚えることではなく、
                    <strong className="text-gray-800">新しい考え方を身につけていくこと</strong>
                    でもあります。
                  </p>
                  <p>
                    この考え方の土台にあるのが
                    <strong className="text-teal-700">「応用言語学」</strong>です。
                  </p>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── Three Pillars ─── */}
      <section
        className="relative py-20 sm:py-28 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #FFFDF8 0%, #F4FFFE 50%, #FFFDF8 100%)",
        }}
      >
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <FadeSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-bold mb-5 shadow-sm">
              <span className="text-base">🎓</span>
              Our Approach
            </div>
            <h2 className="section-title text-gray-900 mb-4 !text-2xl sm:!text-3xl">
              私たちの<span className="text-gradient-orange">3つのアプローチ</span>
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              学問的な裏付けと、実践経験を組み合わせた独自の教育メソッド
            </p>
          </FadeSection>

          <div className="space-y-8">
            {pillars.map((p, i) => (
              <FadeSection key={p.num} delay={i * 0.1}>
                <motion.div
                  className="group relative bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row"
                  style={{
                    boxShadow: "0 4px 28px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.03)",
                    borderLeft: `4px solid ${p.accent}`,
                  }}
                  whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Number + Icon */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center p-6 sm:p-8 sm:w-36"
                    style={{ background: `rgba(${p.accentRgb}, 0.06)` }}
                  >
                    <div className="text-center">
                      <div
                        className="text-4xl font-black opacity-20 leading-none mb-2 font-fredoka-only"
                        style={{ color: p.accent }}
                      >
                        {p.num}
                      </div>
                      <div style={{ color: p.accent }}>{p.icon}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 sm:p-8">
                    <span
                      className="inline-block text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border mb-3"
                      style={{
                        background: `rgba(${p.accentRgb}, 0.08)`,
                        color: p.accent,
                        borderColor: `rgba(${p.accentRgb}, 0.2)`,
                      }}
                    >
                      {p.titleEn}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-3 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mission / Vision ─── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0 wave-pattern pointer-events-none opacity-40" style={{ backgroundPositionY: "center" }} />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(46,158,143,0.05) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <FadeSection className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-8 shadow-sm">
              <span className="text-base">🌟</span>
              Our Mission
            </div>

            <div className="relative mb-10">
              <div
                className="absolute -left-4 top-0 bottom-0 w-1 rounded-full hidden sm:block"
                style={{ background: "linear-gradient(180deg, #E8571A, #2E9E8F)" }}
              />
              <blockquote className="sm:pl-8">
                <p className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 leading-relaxed">
                  私たちが目指すのは、
                  <br />
                  単に英語が話せることでは
                  <span className="text-gradient-orange">ありません。</span>
                </p>
              </blockquote>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                英語を通して
                <strong className="text-teal-700">世界の見方を広げ</strong>、
                <br className="hidden sm:block" />
                <strong className="text-orange-600">自分の言葉で伝えられる力</strong>
                を育てること。
              </p>

              <div className="flex justify-center">
                <div
                  className="w-16 h-px rounded-full"
                  style={{ background: "linear-gradient(90deg, transparent, #E8571A, transparent)" }}
                />
              </div>

              <p className="text-lg sm:text-xl font-black text-gray-800">
                それが、私たちの英語教育です。
              </p>
            </div>
          </FadeSection>

          {/* CTA */}
          <FadeSection delay={0.2} className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-5">
              私たちの理念に共感いただけたら、ぜひ体験レッスンへお越しください。
            </p>
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <motion.a
                href="/#contact"
                className="btn-primary !text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎯 無料体験レッスンに申し込む
              </motion.a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-bold text-sm hover:border-orange-300 hover:text-orange-600 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12l6-6M5 12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                ホームに戻る
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
