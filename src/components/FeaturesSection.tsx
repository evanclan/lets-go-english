"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    num: 1,
    icon: "📚",
    titleEn: "Age-Optimized Curriculum",
    title: "年齢別に最適化された\nカリキュラム",
    desc: "幼児〜大人・留学まで、それぞれの発達段階・目的に合わせた設計。「なんとなく通う」じゃなくて、しっかり伸びる道筋があります。",
    bullets: null as null | { text: string }[],
    note: null as null | string,
    accent: "#E8571A",
    accentRgb: "232,87,26",
    gradient: "linear-gradient(135deg, #E8571A 0%, #F5A623 100%)",
    subtleGrad: "linear-gradient(135deg, rgba(232,87,26,0.1), rgba(245,166,35,0.05))",
    badgeCls: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    num: 2,
    icon: "⚡",
    titleEn: "Balanced English Skills",
    title: "英語の力をバランスよく強化",
    desc: "実際に使える英語力を育成。テスト対策だけでも、会話だけでも終わらないのが強み。「英語を勉強する」から使える自分へ。",
    bullets: null as null | { text: string }[],
    note: null as null | string,
    accent: "#3D8B3D",
    accentRgb: "61,139,61",
    gradient: "linear-gradient(135deg, #3D8B3D 0%, #52B252 100%)",
    subtleGrad: "linear-gradient(135deg, rgba(61,139,61,0.1), rgba(82,178,82,0.05))",
    badgeCls: "bg-green-50 text-green-700 border-green-200",
  },
  {
    num: 3,
    icon: "🌍",
    titleEn: "Expert Teaching Staff",
    title: "外国人講師と\n日本人講師の在籍",
    desc: "外国人講師からは実践的なコミュニケーションを学び、日本人講師からは文法理解のサポートを安心して受けられます。「わからないまま進む」がない安心感を提供いたします。",
    bullets: null as null | { text: string }[],
    note: null as null | string,
    accent: "#2E9E8F",
    accentRgb: "46,158,143",
    gradient: "linear-gradient(135deg, #2E9E8F 0%, #3DBFAE 100%)",
    subtleGrad: "linear-gradient(135deg, rgba(46,158,143,0.1), rgba(61,191,174,0.05))",
    badgeCls: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    num: 4,
    icon: "🎵",
    titleEn: "Active Fun Lessons",
    title: "楽しく学べる\nアクティブレッスン\n（幼児〜小学生）",
    desc: "歌・ダンス・ゲームなどを通して自然に英語が身につく。「勉強してる感」より「気づいたら話してる」がポイントです。",
    bullets: null as null | { text: string }[],
    note: null as null | string,
    accent: "#7C3AED",
    accentRgb: "124,58,237",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
    subtleGrad: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(167,139,250,0.05))",
    badgeCls: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    num: 5,
    icon: "✈️",
    titleEn: "Study Abroad Support",
    title: "留学サポート",
    desc: "ワーキングホリデー・海外移住・留学など、\u201c学んで終わりじゃない\u201dキャリア支援あり。RaJAの母体である留学会社「かえる留学」が手厚くサポートします。",
    bullets: null as null | { text: string }[],
    note: null as null | string,
    accent: "#1D4ED8",
    accentRgb: "29,78,216",
    gradient: "linear-gradient(135deg, #1D4ED8 0%, #60A5FA 100%)",
    subtleGrad: "linear-gradient(135deg, rgba(29,78,216,0.1), rgba(96,165,250,0.05))",
    badgeCls: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    num: 6,
    icon: "🗓️",
    titleEn: "Flexible & Easy System",
    title: "柔軟で通いやすい\nシステム",
    desc: null,
    bullets: [
      { text: "月4回制" },
      { text: "振替OK（1ヶ月以内）" },
      { text: "無料体験あり" },
    ],
    note: "忙しくても続けやすいが結果につながります。",
    accent: "#C44010",
    accentRgb: "196,64,16",
    gradient: "linear-gradient(135deg, #C44010 0%, #F5C200 100%)",
    subtleGrad: "linear-gradient(135deg, rgba(196,64,16,0.1), rgba(245,194,0,0.05))",
    badgeCls: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="features"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFDF8 0%, #F5FFF8 45%, #FFFDF8 100%)",
      }}
    >
      {/* Background blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,87,26,0.06) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(61,139,61,0.06) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />
      <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-5 shadow-sm">
            <span className="text-base">✨</span>
            Why Choose Us
          </div>

          <h2 className="section-title text-gray-900 mb-5 leading-snug">
            Let&apos;s Go English が選ばれる
            <span className="text-gradient-orange"> 6つの理由</span>
          </h2>

          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            私たちは単なる英語教室ではありません。一人ひとりが
            <strong className="text-gray-700">「使える英語」</strong>
            を身につけるための、
            <br className="hidden sm:block" />
            総合的な英語学習環境を提供しています。
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.num}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl overflow-hidden card-hover flex flex-col"
              style={{
                boxShadow: "0 4px 28px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                borderBottom: `3px solid rgba(${r.accentRgb},0.25)`,
              }}
            >
              {/* Top gradient accent bar */}
              <div className="h-1.5 w-full flex-shrink-0" style={{ background: r.gradient }} />

              {/* Subtle corner glow on hover */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, rgba(${r.accentRgb},0.12), transparent 70%)`,
                  transform: "translate(30%, -30%)",
                }}
              />

              <div className="flex flex-col flex-1 p-6">
                {/* Card header */}
                <div className="flex items-start gap-3.5 mb-4">
                  {/* Gradient number circle */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: r.gradient }}
                  >
                    <span className="text-white font-black text-xl leading-none" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
                      {r.num}
                    </span>
                  </div>

                  {/* Labels */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${r.badgeCls} mb-1.5`}>
                      {r.titleEn}
                    </span>
                    <h3 className="text-[0.95rem] font-black text-gray-900 leading-tight whitespace-pre-line">
                      {r.title}
                    </h3>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-4 rounded-full"
                  style={{
                    background: `linear-gradient(to right, rgba(${r.accentRgb},0.35), transparent)`,
                  }}
                />

                {/* Icon + body */}
                <div className="flex items-start gap-3 flex-1">
                  {/* Icon pill */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl mt-0.5"
                    style={{ background: `rgba(${r.accentRgb},0.1)` }}
                  >
                    {r.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    {r.desc && (
                      <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                    )}

                    {r.bullets && (
                      <>
                        <ul className="space-y-2.5 mb-3">
                          {r.bullets.map((b, i) => (
                            <li key={i} className="flex items-center gap-2.5">
                              <span
                                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-black shadow-sm"
                                style={{ background: r.gradient }}
                              >
                                ✓
                              </span>
                              <span className="text-gray-800 font-semibold text-sm">{b.text}</span>
                            </li>
                          ))}
                        </ul>
                        {r.note && (
                          <p
                            className="text-xs font-medium italic leading-relaxed px-3 py-2 rounded-lg"
                            style={{
                              background: `rgba(${r.accentRgb},0.07)`,
                              color: r.accent,
                            }}
                          >
                            💡 {r.note}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Left accent border line */}
              <div
                className="absolute left-0 top-1.5 bottom-0 w-[3px]"
                style={{ background: r.gradient }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-5">
            まずは気軽に体験してみてください。無料体験レッスン実施中！
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎯 無料体験レッスンに申し込む
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
