"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const reviews = [
  {
    name: "田中 花子",
    role: "保護者（6歳・女の子）",
    avatar: "👩",
    stars: 5,
    text: "娘がレッスンに通い始めて半年で、英語の歌を自分で歌えるようになりました！サラ先生のレッスンが大好きで、毎週楽しみにしています。先生方がとても親切で安心して通わせることができます。",
    highlight: "半年で英語の歌が歌えるように！",
    color: "border-orange-200 bg-orange-50",
    accent: "text-orange-600",
  },
  {
    name: "鈴木 太郎",
    role: "社会人（30代・男性）",
    avatar: "👨‍💼",
    stars: 5,
    text: "仕事で英語が必要になり入会しました。マイケル先生のビジネス英語は実践的で、3ヶ月後には英語でのミーティングに自信を持って参加できるようになりました。",
    highlight: "3ヶ月で英語会議に自信を持って参加！",
    color: "border-green-200 bg-green-50",
    accent: "text-green-700",
  },
  {
    name: "山田 美咲",
    role: "高校生（16歳）",
    avatar: "👧",
    stars: 5,
    text: "英検準1級を目指してエマ先生に教わっています。丁寧な指導でライティングが得意になりました。先生の説明がとても分かりやすく、楽しく学べています！",
    highlight: "英検準1級合格を目指して猛特訓中！",
    color: "border-purple-200 bg-purple-50",
    accent: "text-purple-600",
  },
  {
    name: "伊藤 健一",
    role: "保護者（8歳・男の子）",
    avatar: "👨",
    stars: 5,
    text: "息子は最初英語が苦手で自信がなかったのですが、RaJAに通ってから自信をもって発音できるようになりました。少人数なので先生が丁寧に見てくれます。",
    highlight: "英語への苦手意識が完全になくなった！",
    color: "border-teal-200 bg-teal-50",
    accent: "text-teal-600",
  },
  {
    name: "中村 由美",
    role: "主婦（40代）",
    avatar: "👩‍🦱",
    stars: 5,
    text: "海外旅行のために英会話を始めました。先生が日本語でもサポートしてくれるので初心者でも安心。クラスの雰囲気がとても良く、友達もできました！",
    highlight: "初心者でも安心して学べる環境！",
    color: "border-yellow-200 bg-yellow-50",
    accent: "text-yellow-600",
  },
  {
    name: "佐藤 誠",
    role: "小学生（10歳）",
    avatar: "👦",
    stars: 5,
    text: "ゲームや歌があって毎週楽しい！英語でゲームするのが好きで、いつの間にか英語が話せるようになった。友達にも自慢できる！",
    highlight: "ゲームで楽しく英語が上手に！",
    color: "border-pink-200 bg-pink-50",
    accent: "text-pink-600",
  },
];

export default function ReviewsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="reviews" className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFF9F0 0%, #F0FFF8 100%)" }}>
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <span>⭐</span> Student Reviews
          </div>
          <h2 className="section-title text-gray-900 mb-4">
            生徒・保護者からの<span className="text-gradient-orange"> 喜びの声</span>
          </h2>
          <p className="text-gray-500 text-lg">
            受講生の皆さまからたくさんの嬉しいメッセージをいただいています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onHoverStart={() => setHoveredId(i)}
              onHoverEnd={() => setHoveredId(null)}
              className={`relative p-6 rounded-3xl border-2 ${review.color} card-hover cursor-default`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.stars }).map((_, s) => (
                  <motion.span
                    key={s}
                    animate={{ scale: hoveredId === i ? [1, 1.3, 1] : 1 }}
                    transition={{ delay: s * 0.05, duration: 0.3 }}
                    className="text-yellow-400 text-lg"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Highlight badge */}
              <div className={`inline-block text-xs font-bold ${review.accent} bg-white border rounded-full px-3 py-1 mb-3`}>
                🎉 {review.highlight}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                &quot;{review.text}&quot;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-xl">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-black text-gray-800 text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.role}</p>
                </div>
              </div>

              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-4xl opacity-10 font-serif leading-none select-none">
                &ldquo;
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { num: "⭐ 4.9", label: "平均評価", sub: "Googleレビュー" },
              { num: "500+", label: "卒業生", sub: "累計受講者" },
              { num: "98%", label: "継続率", sub: "6ヶ月以上" },
              { num: "92%", label: "ご紹介率", sub: "友人・家族へ" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-black text-gray-800 mb-1">{stat.num}</div>
                <div className="font-bold text-gray-600 text-sm">{stat.label}</div>
                <div className="text-gray-400 text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
