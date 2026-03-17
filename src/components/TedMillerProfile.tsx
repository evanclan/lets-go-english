"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const hobbies = [
  { emoji: "🏄", label: "趣味", value: "ウィンドサーフィン・サーフィン", color: "from-teal-400 to-blue-400", bg: "bg-teal-50", border: "border-teal-200", textColor: "text-teal-700" },
  { emoji: "🎻", label: "音楽・アート", value: "ヴァイオリン・絵を描くこと", color: "from-purple-400 to-pink-400", bg: "bg-purple-50", border: "border-purple-200", textColor: "text-purple-700" },
  { emoji: "🍱", label: "好きな日本食", value: "わさび・梅干し・焼き鳥", color: "from-orange-400 to-yellow-400", bg: "bg-orange-50", border: "border-orange-200", textColor: "text-orange-700" },
  { emoji: "🎬", label: "好きな映画", value: "Nightmare Before Christmas", color: "from-gray-500 to-gray-700", bg: "bg-gray-50", border: "border-gray-200", textColor: "text-gray-700" },
  { emoji: "🎮", label: "好きなゲーム", value: "World of Tanks", color: "from-green-400 to-teal-400", bg: "bg-green-50", border: "border-green-200", textColor: "text-green-700" },
];

const jobHistory = [
  {
    org: "志學館中等部・高等部",
    duration: "１６年",
    emoji: "🏫",
    color: "from-orange-400 to-amber-400",
    border: "border-orange-200",
    bg: "bg-orange-50",
  },
  {
    org: "学校法人 川島学園",
    sub: [
      "KUCユニバーサルカレッジ（３年）",
      "鹿児島実業高等学校（文理）（２年）",
    ],
    emoji: "🎓",
    color: "from-blue-400 to-indigo-400",
    border: "border-blue-200",
    bg: "bg-blue-50",
  },
  {
    org: "鹿児島大学附属小学校",
    duration: "２年",
    note: "（西日本で初めてのＡＬＴ）",
    emoji: "⭐",
    color: "from-yellow-400 to-orange-400",
    border: "border-yellow-200",
    bg: "bg-yellow-50",
  },
  {
    org: "学校法人ヴェリタス学園",
    sub: ["副学園長・理事長代理（４年）"],
    note: "こども園インターナショナル化に貢献。その他、企業英語研修の監督などを務めました。",
    emoji: "🌟",
    color: "from-purple-400 to-pink-400",
    border: "border-purple-200",
    bg: "bg-purple-50",
  },
  {
    org: "認定こども園・保育園",
    sub: [
      "聖徳認定こども園（４年）",
      "西谷山認定こども園（１５年）",
      "ゆうかり保育園（１年）",
      "ペコちゃん保育園（１年）",
      "最GO-KIDS保育園（７年）",
    ],
    emoji: "🌸",
    color: "from-green-400 to-teal-400",
    border: "border-green-200",
    bg: "bg-green-50",
  },
  {
    org: "幼稚園",
    sub: [
      "武岡伊敷むらさき幼稚園（８年）",
      "鹿児島さくら幼稚園（９年）",
      "集成幼稚園（８年）",
    ],
    emoji: "🌷",
    color: "from-pink-400 to-rose-400",
    border: "border-pink-200",
    bg: "bg-pink-50",
  },
  {
    org: "保育園（その他）",
    sub: ["えびす保育園（７年）", "城ケ丘保育園（７年）"],
    emoji: "🏡",
    color: "from-teal-400 to-cyan-400",
    border: "border-teal-200",
    bg: "bg-teal-50",
  },
];

const volunteer = [
  {
    org: "障害者支援施設 誠光園",
    duration: "１７年",
    emoji: "🤝",
    color: "from-orange-400 to-amber-400",
    border: "border-orange-200",
    bg: "bg-orange-50",
  },
  {
    org: "NPO法人若者・留学生サポートステーション響",
    emoji: "🌍",
    color: "from-green-400 to-teal-400",
    border: "border-green-200",
    bg: "bg-green-50",
  },
];

function SectionLabel({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-orange-500 to-yellow-400" />
      <div>
        <p className="text-[10px] font-black tracking-widest text-orange-500 uppercase">{en}</p>
        <p className="text-xl sm:text-2xl font-black text-gray-800">{ja}</p>
      </div>
    </div>
  );
}

export default function TedMillerProfile() {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });
  const volunteerRef = useRef(null);
  const volunteerInView = useInView(volunteerRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative pt-24 pb-12 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #FFF9F0 0%, #FFF0E0 35%, #E8F8F4 70%, #F0FFF8 100%)",
        }}
      >
        <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.08] pointer-events-none"
          style={{ background: "radial-gradient(circle, #E8571A, transparent 70%)", transform: "translate(-30%,-30%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08] pointer-events-none"
          style={{ background: "radial-gradient(circle, #3D8B3D, transparent 70%)", transform: "translate(30%,30%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Link href="/">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-orange-500 transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                ホームに戻る
              </span>
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-10">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, type: "spring", bounce: 0.3 }}
              className="relative flex-shrink-0 flex flex-col items-center"
            >
              {/* Glow halo */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ width: 300, height: 100, background: "radial-gradient(ellipse, #E8571A 0%, #F5C200 60%, transparent 100%)" }}
              />

              {/* Name badge */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.7, type: "spring", bounce: 0.5 }}
                className="relative z-20 mb-3"
              >
                <div
                  className="relative px-6 py-2.5 rounded-2xl shadow-xl text-center"
                  style={{ background: "linear-gradient(135deg, #E8571A 0%, #F5A623 100%)", boxShadow: "0 8px 32px rgba(232,87,26,0.4)" }}
                >
                  <div className="absolute inset-x-3 top-1 h-px bg-white/40 rounded-full" />
                  <p className="text-white text-[10px] font-black tracking-widest uppercase opacity-90 mb-0.5">校長先生 / Principal</p>
                  <p
                    className="text-white font-black tracking-wide text-xl sm:text-2xl"
                    style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", textShadow: "0 1px 6px rgba(0,0,0,0.2)" }}
                  >
                    TED MILLER
                  </p>
                  <div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0"
                    style={{ borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderTop: "14px solid #F5A623" }}
                  />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ border: "2px solid rgba(232,87,26,0.4)" }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src="/self intro/tedmiller.png"
                  alt="校長先生 Ted Miller"
                  width={380}
                  height={440}
                  className="w-full max-w-[170px] sm:max-w-[250px] lg:max-w-[300px] drop-shadow-2xl object-contain"
                  priority
                />
              </motion.div>

              {/* Speech bubble */}
              <motion.div
                className="absolute top-20 -right-14 sm:top-28 sm:-right-6 bg-white rounded-2xl shadow-lg px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-sm font-bold text-green-700 border-2 border-green-200 whitespace-nowrap z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                style={{ borderRadius: "16px 16px 4px 16px" }}
              >
                <span className="text-base sm:text-lg">👋</span> Nice to meet you!
              </motion.div>
              <motion.div
                className="absolute bottom-[36%] -left-14 sm:bottom-[34%] sm:-left-6 bg-white rounded-2xl shadow-lg px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-sm font-bold text-orange-700 border-2 border-orange-200 whitespace-nowrap z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                style={{ borderRadius: "16px 16px 16px 4px" }}
              >
                <span className="text-base sm:text-lg">🌸</span> 楽しく学ぼう！
              </motion.div>
            </motion.div>

            {/* Text content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  自己紹介 / Self Introduction
                </div>

                <h1 className="section-title text-gray-900 mb-4">
                  はじめまして、<br />
                  <span className="text-gradient-orange">テッド・ミラー</span>です！
                </h1>

                <div className="relative bg-white border border-orange-100 rounded-3xl p-5 sm:p-6 mb-5 shadow-sm">
                  <div
                    className="absolute top-4 left-5 text-6xl leading-none font-black text-orange-100 pointer-events-none select-none"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    &ldquo;
                  </div>
                  <p className="relative z-10 text-gray-700 leading-[1.9] text-sm sm:text-[15px] pt-4 pl-3 font-medium">
                    はじめまして。私の名前は<strong className="text-orange-600">テッド・ミラー</strong>です。みんなからは「テッド」と呼ばれています。
                    <span className="block mt-3">
                      Let&apos;s Go!!では、生徒一人ひとりが本当に話せるようになるよう、経験を生かして楽しく教えています。英会話に対する思いはご挨拶をご覧ください。よろしくお願いします。
                    </span>
                  </p>
                  <div
                    className="absolute bottom-4 right-6 text-6xl leading-none font-black text-orange-100 pointer-events-none select-none"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    &rdquo;
                  </div>
                </div>

                {/* Hobby pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {hobbies.map((h, i) => (
                    <motion.div
                      key={h.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border ${h.bg} ${h.border}`}
                    >
                      <div className={`flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${h.color} flex items-center justify-center text-base shadow-sm`}>
                        {h.emoji}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-[10px] font-bold ${h.textColor} tracking-wider uppercase`}>{h.label}</p>
                        <p className="text-xs sm:text-sm font-bold text-gray-800 truncate">{h.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 30 C360 0, 720 60, 1080 30 C1260 15, 1380 45, 1440 30 L1440 60 L0 60 Z" fill="white" fillOpacity="0.95" />
          </svg>
        </div>
      </section>

      {/* ── JOB HISTORY ── */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: "radial-gradient(circle, #E8571A, transparent 70%)", transform: "translate(30%,-30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: "radial-gradient(circle, #3D8B3D, transparent 70%)", transform: "translate(-30%,30%)" }}
        />

        <div ref={timelineRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel en="Work History" ja="職歴" />
          </motion.div>

          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-green-300 to-teal-300 opacity-40 rounded-full" />

            <div className="space-y-4 pl-16">
              {jobHistory.map((job, i) => (
                <motion.div
                  key={job.org}
                  initial={{ opacity: 0, x: -30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="relative"
                >
                  {/* Dot on spine */}
                  <div
                    className={`absolute -left-[2.75rem] top-4 w-4 h-4 rounded-full bg-gradient-to-br ${job.color} shadow-md ring-2 ring-white`}
                  />

                  <div className={`group p-4 rounded-2xl border-2 ${job.bg} ${job.border} card-hover`}>
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{job.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-black text-gray-800 text-sm sm:text-base">{job.org}</h3>
                          {job.duration && (
                            <span className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${job.color} text-white shadow-sm`}>
                              {job.duration}
                            </span>
                          )}
                        </div>
                        {job.sub && (
                          <ul className="mt-1.5 space-y-1">
                            {job.sub.map((s) => (
                              <li key={s} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        )}
                        {job.note && (
                          <p className="mt-1.5 text-xs text-gray-500 bg-white/60 rounded-lg px-3 py-1.5 italic border border-gray-100">
                            {job.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VOLUNTEER ── */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #F0FFF8 0%, #E8F8F4 50%, #FFF9F0 100%)" }}
      >
        <div className="absolute inset-0 sakura-pattern opacity-30 pointer-events-none" />

        <div ref={volunteerRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={volunteerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel en="Volunteer Activities" ja="ボランティア活動" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {volunteer.map((v, i) => (
              <motion.div
                key={v.org}
                initial={{ opacity: 0, y: 30 }}
                animate={volunteerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                className={`relative group p-4 rounded-3xl border-2 ${v.bg} ${v.border} card-hover overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${v.color} rounded-t-3xl`} />
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center text-xl shadow-lg`}>
                    {v.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-gray-800 text-sm sm:text-base leading-snug">{v.org}</p>
                    {v.duration && (
                      <span className={`inline-flex items-center mt-2 px-3 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${v.color} text-white shadow-sm`}>
                        {v.duration}
                      </span>
                    )}
                  </div>
                </div>
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-10 transition-all duration-500 scale-0 group-hover:scale-150`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4">
              <span>🎯</span> Let&apos;s Learn Together
            </div>
            <h2 className="section-title text-gray-900 mb-3">
              テッドと一緒に<br />
              <span className="text-gradient-orange">英語を楽しもう！</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-6">
              無料体験レッスン実施中。まずは気軽にお問い合わせください。
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/#contact">
                <motion.span
                  className="btn-primary inline-flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎯 無料体験に申し込む
                </motion.span>
              </Link>
              <Link href="/">
                <motion.span
                  className="btn-secondary inline-flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🏠 ホームに戻る
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
