"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const levels = [
  { label: "ブロンズ", en: "BRONZE", color: "#CD7F32", glow: "rgba(205,127,50,0.35)" },
  { label: "シルバー", en: "SILVER", color: "#8A9AAE", glow: "rgba(138,154,174,0.35)" },
  { label: "ゴールド", en: "GOLD",   color: "#D4A826", glow: "rgba(212,168,38,0.40)" },
];

export default function EikenJrSection() {
  return (
    <section
      id="eiken-jr"
      className="relative py-14 sm:py-20 overflow-visible"
      style={{
        background: "linear-gradient(180deg, #FAFCFF 0%, #F0F5FF 50%, #FAFCFF 100%)",
      }}
    >
      <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        {/* Two-column layout: image (60%) | details (40%) */}
        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Decorative background image outside details column */}
          <div
            className="hidden md:block absolute top-1/2 -right-44 -translate-y-1/2 w-[78%] h-[185%] pointer-events-none opacity-[0.2]"
            style={{
              backgroundImage: "url('https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/eiken/eihen_image.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          />

          {/* Left — Image (dominant) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[58%] flex-shrink-0"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/eiken/eiken.png"
                alt="英検Jr. 受験会場 RaJA"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
                priority
              />
              {/* Floating badge on image */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md">
                <svg className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-[11px] font-bold text-gray-800">オフィシャル受験会場</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Details (with background image) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 w-full md:w-[42%] flex flex-col gap-4"
          >
            {/* Tag */}
            <div className="relative z-10 inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1.5 rounded-full text-[11px] font-bold w-fit">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              公益財団法人 日本英語検定協会
            </div>

            {/* Title */}
            <h2 className="relative z-10 text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              英検<span className="text-blue-600"> Jr.</span>
            </h2>

            {/* Description */}
            <p className="relative z-10 text-gray-700 text-sm sm:text-[15px] leading-relaxed">
            
              <strong className="text-blue-700"> RaJA 本社ビル</strong>
              が受験会場です。日頃の学びの成果を発揮して、ブロンズ→シルバー→ゴールドの順にクリアしていきます。
            </p>
            <p className="relative z-10 text-gray-500 text-xs sm:text-sm leading-relaxed">
              点数や順位ではなく、結果は
              <span className="inline-block font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md mx-0.5">
                正解率 %
              </span>
              で表現されます。
            </p>

            {/* Thin divider */}
            <div className="relative z-10 h-px bg-gradient-to-r from-blue-200 to-transparent" />

            {/* Level progression */}
            <div className="relative z-10 flex flex-col gap-2">
              {levels.map((level, i) => (
                <div key={level.en} className="flex items-center gap-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: level.color, boxShadow: `0 0 6px ${level.glow}` }}
                  />
                  <span className="text-[10px] font-black tracking-widest text-gray-400 w-12">
                    {level.en}
                  </span>
                  <span className="text-xs font-bold text-gray-700">{level.label}</span>
                  {i < levels.length - 1 && (
                    <svg className="w-3 h-3 text-gray-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
