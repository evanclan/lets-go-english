"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    id: "coco",
    name: "COCO",
    nameJp: "",
    grade: "小学4年生",
    location: "鹿児島県",
    profileImage: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_2.jpg",
    achievement: "セブ島1ヶ月短期留学",
    achievementIcon: "✈️",
    quote:
      "この留学で、とても成長したと思っている。私はこの経験を生かして今後生活していきたいし、この経験を伝えていきたい。",
    summary:
      "小学4年生の夏、たった一人でフィリピン・セブ島へ1ヶ月の短期留学に挑戦。ホームシックを乗り越え、異文化の中で英語を学び、かけがえのない友情と成長を手にした感動の物語。",
    gallery: [
      "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_11.jpg",
      "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_7.jpg",
      "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_15.jpg",
      "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_8.jpg",
    ],
    slug: "/reviews/coco",
    available: true,
    accentFrom: "#E8571A",
    accentTo: "#F5C200",
    accentBg: "rgba(232, 87, 26, 0.06)",
    badgeBg: "linear-gradient(135deg, #E8571A, #F5C200)",
    quoteColor: "rgba(232, 87, 26, 0.12)",
    ctaColor: "text-orange-600 hover:text-orange-700",
    ringGlow: "rgba(232, 87, 26, 0.2)",
  },
  {
    id: "layla",
    name: "LAYLA",
    nameJp: "れいら",
    grade: "社会人",
    location: "RaJA歴1年半",
    profileImage: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/layla_profile.png",
    achievement: "セブ島留学 → ワーホリ準備中",
    achievementIcon: "🌏",
    quote:
      "英語が上手じゃないから、自信がないからという理由で失敗を恐れていても何も変わらない。知っている単語を並べるだけでも、意外と伝わります！",
    summary:
      "RaJAの英会話を1年半学んだ後、セブ島留学に挑戦。「完璧じゃなくてもまず話す」ことの大切さに気づき、今はワーキングホリデーで海外で働く夢に向けて毎日英語を磨き続けている。",
    gallery: [
      "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_3096.JPG",
      "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2672%20(1).jpg",
      "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2758%20(1).jpg",
      "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2973%20(1).jpg",
    ],
    slug: "/reviews/layla",
    available: true,
    accentFrom: "#2E9E8F",
    accentTo: "#3D8B3D",
    accentBg: "rgba(46, 158, 143, 0.06)",
    badgeBg: "linear-gradient(135deg, #2E9E8F, #3D8B3D)",
    quoteColor: "rgba(46, 158, 143, 0.12)",
    ctaColor: "text-teal-600 hover:text-teal-700",
    ringGlow: "rgba(46, 158, 143, 0.2)",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experiences"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFDF8 0%, #FFF5EB 40%, #FFF9F0 70%, #F0FFF8 100%)",
      }}
    >
      <div className="absolute inset-0 sakura-pattern opacity-30" />

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-20 left-[8%] text-4xl opacity-20 pointer-events-none"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        ✈️
      </motion.div>
      <motion.div
        className="absolute top-40 right-[12%] text-3xl opacity-15 pointer-events-none"
        animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        🌏
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[15%] text-3xl opacity-15 pointer-events-none"
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        📖
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <span>✨</span> Experience Stories
          </div>
          <h2 className="section-title text-gray-900 mb-4">
            英語で広がる、
            <span className="text-gradient-orange">私たちの世界</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            RaJAの生徒たちが英語を通じて経験した、成長と感動のストーリー。
            <br className="hidden sm:block" />
            一人ひとりの挑戦が、未来を切り拓いています。
          </p>
        </motion.div>

        {/* Experience spotlights */}
        <div className="space-y-28 lg:space-y-36">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10 lg:gap-20`}
            >
              {/* Profile image side */}
              <div className="relative flex-shrink-0 flex flex-col items-center">
                {/* Large soft glow behind the image */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl pointer-events-none"
                  style={{ background: exp.accentBg }}
                />

                {/* Profile image with gradient ring */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated ring */}
                  <motion.div
                    className="absolute -inset-2 rounded-full opacity-40 pointer-events-none"
                    style={{
                      background: `conic-gradient(from 0deg, ${exp.accentFrom}, ${exp.accentTo}, transparent, ${exp.accentFrom})`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div
                    className="w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full p-[5px] relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${exp.accentFrom}, ${exp.accentTo})`,
                    }}
                  >
                    {exp.profileImage ? (
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={exp.profileImage}
                          alt={`${exp.name}のプロフィール写真`}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${exp.accentTo}22, ${exp.accentFrom}22)`,
                        }}
                      >
                        <span
                          className="text-6xl lg:text-7xl font-black opacity-30"
                          style={{
                            fontFamily:
                              "'Fredoka One', 'Nunito', sans-serif",
                            color: exp.accentFrom,
                          }}
                        >
                          {exp.name[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Achievement badge */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <div
                      className="px-5 py-2 rounded-full text-white text-sm font-bold shadow-lg"
                      style={{
                        background: exp.badgeBg,
                        boxShadow: `0 4px 15px ${exp.ringGlow}`,
                      }}
                    >
                      {exp.achievementIcon} {exp.achievement}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Gallery preview thumbnails */}
                {exp.gallery.length > 0 && (
                  <motion.div
                    className="flex justify-center mt-10 -space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    {exp.gallery.slice(0, 4).map((img, j) => (
                      <motion.div
                        key={j}
                        className="w-12 h-12 rounded-full border-[3px] border-white shadow-md overflow-hidden"
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                        style={{ zIndex: 4 - j }}
                      >
                        <img
                          src={img}
                          alt={`${exp.name}の写真 ${j + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                    {exp.gallery.length > 4 && (
                      <div className="w-12 h-12 rounded-full border-[3px] border-white shadow-md bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                        +{exp.gallery.length - 4}
                      </div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Content side */}
              <div
                className={`flex-1 text-center ${
                  i % 2 === 0 ? "lg:text-left" : "lg:text-right"
                }`}
              >
                {/* Grade and location */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
                    {exp.grade} · {exp.location}
                  </span>
                </motion.div>

                {/* Name */}
                <motion.h3
                  className="font-black mt-3 mb-1"
                  style={{
                    fontFamily: "'Fredoka One', 'Nunito', sans-serif",
                    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                    lineHeight: 1.1,
                  }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${exp.accentFrom}, ${exp.accentTo})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {exp.name}
                  </span>
                  <span className="text-gray-300 font-normal text-2xl ml-3">
                    {exp.nameJp}
                  </span>
                </motion.h3>

                {/* Quote */}
                <motion.div
                  className={`relative mt-8 mb-6 ${
                    i % 2 === 0
                      ? "lg:pl-8"
                      : "lg:pr-8"
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Japanese quotation marks */}
                  <span
                    className="absolute -top-6 font-serif leading-none select-none"
                    style={{
                      fontSize: "5rem",
                      color: exp.quoteColor,
                      left: i % 2 === 0 ? "-0.5rem" : "auto",
                      right: i % 2 !== 0 ? "-0.5rem" : "auto",
                    }}
                  >
                    「
                  </span>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    {exp.quote}
                  </p>
                  <span
                    className="absolute -bottom-10 font-serif leading-none select-none"
                    style={{
                      fontSize: "5rem",
                      color: exp.quoteColor,
                      right: i % 2 === 0 ? "0" : "auto",
                      left: i % 2 !== 0 ? "0" : "auto",
                    }}
                  >
                    」
                  </span>
                </motion.div>

                {/* Summary */}
                <motion.p
                  className="text-gray-500 leading-relaxed mt-10 mb-8 max-w-lg mx-auto lg:mx-0"
                  style={{
                    marginLeft: i % 2 !== 0 ? "auto" : undefined,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {exp.summary}
                </motion.p>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className={`flex ${
                    i % 2 === 0
                      ? "justify-center lg:justify-start"
                      : "justify-center lg:justify-end"
                  }`}
                >
                  {exp.available ? (
                    <Link
                      href={exp.slug}
                      className={`group inline-flex items-center gap-3 ${exp.ctaColor} font-bold text-lg transition-all duration-300`}
                    >
                      <span
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${exp.accentFrom}, ${exp.accentTo})`,
                          boxShadow: `0 4px 15px ${exp.ringGlow}`,
                        }}
                      >
                        <svg
                          className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                      <span className="border-b-2 border-transparent group-hover:border-current transition-all duration-300">
                        ストーリーを読む
                      </span>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-3 text-gray-400 font-bold text-lg">
                      <span className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      Coming Soon...
                    </span>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 30 C360 0, 720 60, 1080 20 C1260 0, 1380 40, 1440 30 L1440 60 L0 60 Z"
            fill="var(--warm-white)"
            fillOpacity="0.8"
          />
        </svg>
      </div>
    </section>
  );
}
