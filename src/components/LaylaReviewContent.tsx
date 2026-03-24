"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const profileImage = "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/layla_profile.png";

const galleryImages = [
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_3096.JPG",
    caption: "セブの海でボートトリップ｜RaJA英会話スクール留学体験",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2672%20(1).jpg",
    caption: "先生たちとの楽しい時間｜鹿児島市の英会話教室RaJA",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2758%20(1).jpg",
    caption: "CWA Cebu語学学校",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2645%20(1).jpg",
    caption: "屋上でヨガアクティビティ",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2734%20(1).jpg",
    caption: "セブ島の美しい夜景",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2973%20(1).jpg",
    caption: "ビーチでフィリピン料理",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2980%20(1).jpg",
    caption: "トロピカルマンゴーフェスト",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2675%20(1).jpg",
    caption: "留学中の日常風景",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2643%20(1).jpg",
    caption: "仲間たちとのアクティビティ",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2763%20(1).jpg",
    caption: "セブ島での探検",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_3190%20(1).jpg",
    caption: "思い出の一枚",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_3218%20(1).jpg",
    caption: "留学の素敵な思い出",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_8975%20(1).jpg",
    caption: "かけがえのない経験",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_9028%20(1).jpg",
    caption: "新しい世界との出会い",
  },
];

const storySections = [
  {
    title: "RaJAでの英語学習",
    titleEn: "Learning at RaJA",
    icon: "📚",
    content: `ラジャの英会話を習って、1年半で留学をしました。

RaJAで英語を学び始めた頃は、まだ自分に自信がなく、英語を話すことに対して不安がたくさんありました。でも、先生たちの温かいサポートと楽しいレッスンのおかげで、少しずつ英語を話すことが楽しくなっていきました。

1年半の学習を経て、「次のステップに進みたい」という気持ちが芽生え、セブ島への留学を決意しました。`,
    image: null,
  },
  {
    title: "セブ島留学での気づき",
    titleEn: "Discoveries in Cebu",
    icon: "💡",
    content: `留学をして新しく気付いたことは、英語が上手じゃないから、自信がないからという理由で失敗を恐れていても何も変わらないという事です。

最初は周りの留学生たちの英語力に圧倒され、「自分なんかが話していいのかな」と思うこともありました。でも、実際に英語を使う環境に身を置いてみると、完璧な英語じゃなくても、コミュニケーションは取れることに気づいたのです。`,
    image: {
      src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2758%20(1).jpg",
      caption: "CWA Cebu語学学校の受付",
    },
  },
  {
    title: "まず話す、それが大事",
    titleEn: "Just Speak Up",
    icon: "💬",
    content: `知っている単語を並べたり、正しい文法ではなくても、自分の伝えたいことを積極的に話す事が大事で、意外と伝わります！

回数を重ねるごとに文章の組み方もわかっていくので、とりあえず英語を使って話すことで理解力も深まっていくと気づく事ができました。

失敗を恐れずに積極的に話すこと。それが留学で得た一番大きな学びです。`,
    image: {
      src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_2672%20(1).jpg",
      caption: "先生たちとの楽しいひととき",
    },
  },
  {
    title: "セブ島での生活",
    titleEn: "Life in Cebu",
    icon: "🏝️",
    content: `セブ島での生活は、毎日が新しい発見の連続でした。授業だけでなく、現地の文化や食べ物、人々との交流を通じて、英語を「勉強」ではなく「生活の一部」として使う経験ができました。

ビーチでのアクティビティや、現地のフィリピン料理を楽しんだり、週末にはボートトリップに出かけたり。教室の外でも英語を使う機会がたくさんあり、自然と英語力が伸びていくのを実感しました。`,
    image: {
      src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/LAYLA/IMG_3096.JPG",
      caption: "セブの美しい海でボートトリップ",
    },
  },
  {
    title: "次のステップへ",
    titleEn: "Next Step",
    icon: "🚀",
    content: `私は今後、ワーキングホリデーを使って海外で1年仕事をしたいと思っています。

今はそれに向けて、留学先の先生からもらったアドバイスをもとに、毎日仕事の休憩や終わり、寝る前など、使える時間を有効活用して、瞬間英作文や、単語を調べたり、文章作成など勉強しています。

また自社の英会話スクールにも通い、外国人の先生と話す環境を自分自身で作り、少しでも次のステップに向けて英語を話せるように日々頑張っています！`,
    image: null,
  },
];

function LightboxModal({
  image,
  onClose,
}: {
  image: { src: string; caption: string } | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative max-w-4xl max-h-[85vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image.src}
              alt={image.caption}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="text-white text-center mt-4 font-medium">
              {image.caption}
            </p>
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 shadow-lg hover:scale-110 transition-transform font-bold text-lg"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function LaylaReviewContent() {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  return (
    <>
      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      {/* Hero section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #E8F8F5 0%, #F0FFF8 60%, var(--warm-white) 100%)",
        }}
      >
        <div className="absolute inset-0 sakura-pattern opacity-20" />

        <motion.div
          className="absolute top-24 left-[10%] text-5xl opacity-10 pointer-events-none"
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          🌏
        </motion.div>
        <motion.div
          className="absolute top-40 right-[15%] text-4xl opacity-10 pointer-events-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          🌴
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-[20%] text-3xl opacity-10 pointer-events-none"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        >
          ✈️
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#experiences"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-600 font-bold text-sm transition-colors mb-10 group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              体験ストーリー一覧に戻る
            </Link>
          </motion.div>

          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="relative mb-8"
            >
              <motion.div
                className="absolute -inset-3 rounded-full opacity-30 pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, #2E9E8F, #3D8B3D, transparent, #2E9E8F)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-[4px] relative z-10"
                style={{
                  background: "linear-gradient(135deg, #2E9E8F, #3D8B3D)",
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="LAYLAのプロフィール写真｜鹿児島市の大人英会話RaJAの生徒"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div
                  className="px-4 py-1.5 rounded-full text-white text-xs font-bold shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #2E9E8F, #3D8B3D)",
                  }}
                >
                  🌏 セブ島留学 → ワーホリ準備中
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
                社会人 · RaJA歴1年半
              </span>
              <h1
                className="font-black mt-2 font-brand"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                }}
              >
                <span className="text-gradient-green">LAYLA</span>
                <span className="text-gray-300 font-normal text-2xl ml-3">
                  れいら
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-3">
                失敗を恐れず、まず話す
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                RaJAで1年半英語を学び、セブ島留学へ。
                「完璧じゃなくても伝わる」という発見が、彼女の世界を変えた。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-10 flex items-center gap-3"
            >
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-teal-300" />
              <span className="text-teal-400 text-lg">✦</span>
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-teal-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story content */}
      <section className="py-16 relative" aria-label="LAYLAのセブ島留学体験記">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {storySections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{section.icon}</span>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {section.titleEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-800">
                    {section.title}
                  </h3>
                </div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-teal-200 to-transparent ml-4" />
              </div>

              <div className="text-gray-600 leading-[2] text-[15px] sm:text-base whitespace-pre-line">
                {section.content}
              </div>

              {section.image && (
                <motion.div
                  className="mt-8 relative cursor-pointer group"
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setLightboxImage(section.image!)}
                >
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={section.image.src}
                      alt={section.image.caption}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-3 font-medium">
                    📷 {section.image.caption}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing quote */}
      <section className="py-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--warm-white) 0%, #E8F8F5 50%, var(--warm-white) 100%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10 text-center"
        >
          <span
            className="text-8xl font-serif leading-none select-none"
            style={{ color: "rgba(46, 158, 143, 0.1)" }}
          >
            「
          </span>
          <p className="text-xl sm:text-2xl font-bold text-gray-700 leading-relaxed -mt-10">
            失敗を恐れていても何も変わらない。
            <br />
            知っている単語を並べるだけでも、
            <br />
            意外と伝わります！
          </p>
          <p className="mt-6 text-gray-400 font-bold">— LAYLA（丸田 れいら）</p>
          <span
            className="text-8xl font-serif leading-none select-none"
            style={{ color: "rgba(46, 158, 143, 0.1)" }}
          >
            」
          </span>
        </motion.div>
      </section>

      {/* Photo gallery */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span>📸</span> Photo Gallery
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-800">
              セブ島での
              <span className="text-gradient-green">思い出の写真</span>
            </h2>
          </motion.div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightboxImage(img)}
              >
                <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 px-1 font-medium">
                  {img.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to experiences CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 mb-6">
              他の体験ストーリーも読んでみませんか？
            </p>
            <Link
              href="/#experiences"
              className="btn-secondary !text-sm !px-6 !py-3 inline-flex"
            >
              ✨ 体験ストーリー一覧へ
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
