"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const hobbies = [
  {
    emoji: "🏄",
    label: "趣味",
    value: "ウィンドサーフィン・サーフィン",
    color: "from-teal-400 to-blue-400",
    bg: "bg-teal-50",
    border: "border-teal-200",
    textColor: "text-teal-700",
  },
  {
    emoji: "🎻",
    label: "音楽・アート",
    value: "ヴァイオリン・絵を描くこと",
    color: "from-purple-400 to-pink-400",
    bg: "bg-purple-50",
    border: "border-purple-200",
    textColor: "text-purple-700",
  },
  {
    emoji: "🍱",
    label: "好きな日本食",
    value: "わさび・梅干し・焼き鳥",
    color: "from-orange-400 to-yellow-400",
    bg: "bg-orange-50",
    border: "border-orange-200",
    textColor: "text-orange-700",
  },
  {
    emoji: "🎬",
    label: "好きな映画",
    value: "Nightmare Before Christmas",
    color: "from-gray-500 to-gray-700",
    bg: "bg-gray-50",
    border: "border-gray-200",
    textColor: "text-gray-700",
  },
  {
    emoji: "🎮",
    label: "好きなゲーム",
    value: "World of Tanks",
    color: "from-green-400 to-teal-400",
    bg: "bg-green-50",
    border: "border-green-200",
    textColor: "text-green-700",
  },
];

export default function PrincipalSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="principal"
      className="relative py-14 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FFF9F0 0%, #FFF0E0 35%, #E8F8F4 70%, #F0FFF8 100%)",
      }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #E8571A, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3D8B3D, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
            <span>👋</span> Meet the Principal
          </div>
          <h2 className="section-title text-gray-900 mb-2">
            校長先生の<span className="text-gradient-orange">自己紹介</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Let&apos;s Go!! スクールを引っ張るリーダーをご紹介します
          </p>
        </motion.div>

        {/* Main content card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-[2.25rem] shadow-2xl overflow-hidden"
          style={{ boxShadow: "0 32px 80px rgba(232,87,26,0.1), 0 8px 32px rgba(0,0,0,0.06)" }}
        >
          {/* Top gradient accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500" />

          <div className="flex flex-col lg:flex-row">
            {/* ---- Left: Photo column ---- */}
            <div className="relative lg:w-[36%] flex flex-col items-center justify-end bg-gradient-to-b from-orange-50 to-amber-50 py-4 px-4 overflow-hidden min-h-[280px] lg:min-h-[360px]">
              {/* Soft circles behind photo */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 opacity-40 blur-2xl pointer-events-none" />

              {/* Floating bubble — position: absolute, takes no space */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, type: "spring", bounce: 0.4 }}
                className="absolute top-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1.5 bg-white rounded-2xl shadow-lg border-2 border-green-200 text-green-700 text-xs sm:text-sm font-bold whitespace-nowrap"
                style={{ borderRadius: "16px 16px 16px 4px" }}
              >
                Let&apos;s learn English together!
              </motion.div>

              {/* Photo — fills container; no overlay so image has full space */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full flex-1 flex items-end justify-center min-h-0"
              >
                <Image
                  src="/self intro/tedmiller.png"
                  alt="校長先生 Ted Miller"
                  width={340}
                  height={400}
                  className="w-full h-full max-h-[380px] object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>

            {/* ---- Right: Info column ---- */}
            <div className="flex-1 p-5 sm:p-6 lg:p-7 flex flex-col justify-between">
              {/* Introduction message */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-5 rounded-full bg-gradient-to-b from-orange-500 to-yellow-400" />
                    <p className="text-xs font-bold tracking-widest text-orange-500 uppercase">
                      Self Introduction
                    </p>
                  </div>

                  {/* Quote block */}
                  <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-4 sm:p-5 mb-4">
                    <div
                      className="absolute top-4 left-4 text-5xl leading-none font-black text-orange-200 pointer-events-none select-none"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      &ldquo;
                    </div>
                    <p className="relative z-10 text-gray-700 leading-[1.85] text-sm sm:text-[0.92rem] pt-3 pl-3 font-medium">
                      はじめまして。私の名前は<strong className="text-orange-600">テッド・ミラー</strong>です。みんなからは「テッド」と呼ばれています。
                      <span className="block mt-2">
                        Let&apos;s Go!!では、生徒一人ひとりが本当に話せるようになるよう、経験を生かして楽しく教えています。
                        英会話に対する思いはご挨拶をご覧ください。よろしくお願いします。
                      </span>
                    </p>
                    <div
                      className="absolute bottom-4 right-5 text-5xl leading-none font-black text-orange-200 pointer-events-none select-none"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      &rdquo;
                    </div>
                  </div>
                </motion.div>

                {/* Hobby cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-5 rounded-full bg-gradient-to-b from-green-500 to-teal-400" />
                    <p className="text-xs font-bold tracking-widest text-green-600 uppercase">
                      About Ted
                    </p>
                    <span className="text-xs text-gray-400 font-medium">— 趣味など</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {hobbies.map((h, i) => (
                      <motion.div
                        key={h.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                        className={`flex items-center gap-2.5 p-2.5 rounded-xl border ${h.bg} ${h.border}`}
                      >
                        <div
                          className={`flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${h.color} flex items-center justify-center text-base shadow-sm`}
                        >
                          {h.emoji}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-[10px] font-bold ${h.textColor} tracking-wider uppercase`}>
                            {h.label}
                          </p>
                          <p className="text-xs sm:text-sm font-bold text-gray-800 truncate">{h.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Footer: See more */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex justify-end mt-3 pt-3 border-t border-gray-100"
              >
                <Link href="/about-tedmiller">
                  <motion.span
                    className="group inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1.5 rounded-full font-bold text-[11px] sm:text-xs shadow-md shadow-orange-200/50 cursor-pointer"
                    whileHover={{ scale: 1.04, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ boxShadow: "0 4px 12px rgba(232,87,26,0.3)" }}
                  >
                    詳しく見る
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
