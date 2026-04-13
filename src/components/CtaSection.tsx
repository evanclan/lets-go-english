"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    num: "①",
    icon: "📱",
    title: "お問い合わせ・体験予約",
    details: [
      " WEBフォーム/お電話/インスタグラムから",
      "「無料体験レッスン」を予約",
    ],
    color: "#E8571A",
    gradient: "linear-gradient(135deg, #E8571A 0%, #F4793A 100%)",
    isLast: false,
  },
  {
    num: "②",
    icon: "🎓",
    title: "無料体験レッスン参加",
    details: ["実際のクラスに参加", "レベルチェック＆ヒアリング"],
    color: "#D4930A",
    gradient: "linear-gradient(135deg, #F5A623 0%, #F5C200 100%)",
    isLast: false,
  },
  {
    num: "③",
    icon: "📅",
    title: "クラス決定・スケジュール選択",
    details: [
      "曜日・時間を決定",
      
    ],
    color: "#2274A5",
    gradient: "linear-gradient(135deg, #2274A5 0%, #3AADDB 100%)",
    isLast: false,
  },
  {
    num: "④",
    icon: "📝",
    title: "お申し込み手続き",
    details: ["入会申込書の記入", "月謝・規約の確認"],
    color: "#3D8B3D",
    gradient: "linear-gradient(135deg, #3D8B3D 0%, #52B252 100%)",
    isLast: false,
  },
  {
    num: "⑤",
    icon: "🎉",
    title: "レッスンスタート！",
    details: [
      "一緒に英語力を伸ばしましょう！",
    ],
    color: "#E8571A",
    gradient: "linear-gradient(135deg, #E8571A 0%, #F5C200 100%)",
    isLast: true,
  },
];

function StepContent({
  step,
  index,
  alignRight = false,
}: {
  step: (typeof steps)[number];
  index: number;
  alignRight?: boolean;
}) {
  return (
    <div className={alignRight ? "text-right" : ""}>
      {/* Step label pill */}
      <div
        className={`flex items-center gap-2 mb-2 ${alignRight ? "justify-end" : ""}`}
      >
        <span
          className="text-[11px] font-black tracking-[0.15em] uppercase px-3 py-1 rounded-full text-white"
          style={{ background: step.gradient }}
        >
          STEP {index + 1}
        </span>
      </div>

      {/* Title with icon */}
      <h3
        className={`text-lg sm:text-xl font-black text-gray-800 mb-3 flex items-center gap-2.5 ${
          alignRight ? "justify-end" : ""
        }`}
      >
        {alignRight && step.title}
        <span className="text-2xl leading-none">{step.icon}</span>
        {!alignRight && step.title}
      </h3>

      {/* Detail bullets */}
      <div
        className={`space-y-2 ${alignRight ? "flex flex-col items-end" : ""}`}
      >
        {step.details.map((detail, di) => (
          <div
            key={di}
            className={`flex items-center gap-2.5 text-[15px] text-gray-500 leading-relaxed ${
              alignRight ? "flex-row-reverse text-right" : ""
            }`}
          >
            <span
              className="w-[7px] h-[7px] rounded-full flex-shrink-0"
              style={{
                backgroundColor: step.color,
                boxShadow: `0 0 0 2px white, 0 0 0 4px ${step.color}30`,
              }}
            />
            {detail}
          </div>
        ))}
      </div>

      {/* Celebration badge for final step */}
      {step.isLast && (
        <div className={`mt-4 ${alignRight ? "flex justify-end" : ""}`}>
          <motion.span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-black shadow-lg"
            style={{ background: step.gradient }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀 いよいよスタート！
          </motion.span>
        </div>
      )}
    </div>
  );
}

export default function CtaSection() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle wave texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='20'%3E%3Cpath d='M0 10 C 25 0, 75 20, 100 10' stroke='%23E8571A' stroke-width='1' fill='none' opacity='0.08'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "100px 20px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-5 py-2 rounded-full text-sm font-bold mb-5 shadow-sm">
            <span>📋</span> How to Start
          </div>
          <h2 className="section-title text-gray-900 mb-3">
            申し込み<span className="text-gradient-orange">ステップ</span>
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
            無料体験からレッスン開始まで、かんたん5ステップ
          </p>
        </motion.div>

        {/* ── Vertical Timeline ── */}
        <div className="relative">
          {/* Gradient line — desktop (center) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, #E8571A, #F5C200 25%, #2274A5 50%, #3D8B3D 75%, #E8571A)",
            }}
          />
          {/* Gradient line — mobile (left) */}
          <div
            className="md:hidden absolute left-[21px] top-0 bottom-0 w-[3px] rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, #E8571A, #F5C200 25%, #2274A5 50%, #3D8B3D 75%, #E8571A)",
            }}
          />

          {/* Steps */}
          <div>
            {steps.map((step, i) => {
              const isRight = i % 2 === 0;

              return (
                <div key={step.num}>
                  {/* ═══ Desktop: alternating left / right ═══ */}
                  <motion.div
                    className="hidden md:grid grid-cols-[1fr_64px_1fr] items-start py-8"
                    initial={{ opacity: 0, x: isRight ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.07 }}
                  >
                    {/* Left column */}
                    {isRight ? (
                      <div />
                    ) : (
                      <div className="pr-10 flex justify-end">
                        <div className="max-w-sm">
                          <StepContent
                            step={step}
                            index={i}
                            alignRight
                          />
                        </div>
                      </div>
                    )}

                    {/* Center — timeline node */}
                    <div className="flex justify-center pt-0.5">
                      <motion.div
                        className="relative z-10 select-none"
                        whileInView={
                          step.isLast
                            ? { scale: [0.8, 1.15, 1] }
                            : { scale: [0.8, 1] }
                        }
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.07 + 0.2 }}
                      >
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-black shadow-lg"
                          style={{ background: step.gradient }}
                        >
                          {step.num}
                        </div>
                        {/* Soft glow ring behind the circle */}
                        <div
                          className="absolute -inset-2 rounded-full -z-10"
                          style={{
                            background: step.gradient,
                            opacity: step.isLast ? 0.18 : 0.08,
                            filter: "blur(8px)",
                          }}
                        />
                        {step.isLast && (
                          <div
                            className="absolute -inset-3 rounded-full -z-10 animate-pulse"
                            style={{
                              background: step.gradient,
                              opacity: 0.12,
                              filter: "blur(12px)",
                            }}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* Right column */}
                    {isRight ? (
                      <div className="pl-10">
                        <div className="max-w-sm">
                          <StepContent step={step} index={i} />
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </motion.div>

                  {/* ═══ Mobile: all content to the right ═══ */}
                  <motion.div
                    className="md:hidden flex items-start gap-5 py-6"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    {/* Circle node */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg"
                        style={{ background: step.gradient }}
                      >
                        {step.num}
                      </div>
                      <div
                        className="absolute -inset-1.5 rounded-full -z-10"
                        style={{
                          background: step.gradient,
                          opacity: 0.1,
                          filter: "blur(6px)",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-0.5">
                      <StepContent step={step} index={i} />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden mt-24"
        >
          <Image
            src="https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/LINE_ALBUM_COCO_240625_12.jpg"
            alt="Classroom background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-black/50" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-10 sm:p-14">
            <div className="flex-1 text-center lg:text-left">
              
              <h2 className="text-3xl sm:text-4xl font-black text-white flex flex-col items-center lg:items-start gap-3 sm:gap-4 mb-3 leading-tight">
                <span className="bg-white text-orange-500 px-9 py-2 rounded-lg mx-1 w-fit">
                  無料体験レッスン
                </span>
                <span className="text-white text-5xl px-9 font-bold">受講できます！</span>
                
              </h2>
              
            </div>

            <div className="flex flex-col items-center gap-10">
              <Image
                src="https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/logo-dark-bg.png"
                alt="Let's Go English mascots"
                width={200}
                height={160}
                className="rounded-2xl shadow-2xl"
              />
              <motion.a
                href="#contact"
                className="bg-white text-orange-600 font-black text-lg py-4 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
              >
                🎯 今すぐ無料体験に申し込む！
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
