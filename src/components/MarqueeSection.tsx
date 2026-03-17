"use client";

import { motion } from "framer-motion";

const items = [
  "🌟 楽しい授業",
  "🐸 ネイティブ講師",
  "🌸 少人数制クラス",
  "🎯 英検対策",
  "📱 オンライン対応",
  "🏆 実績10年以上",
  "💬 日常会話",
  "💼 ビジネス英語",
  "🎉 無料体験実施中",
  "⭐ 満足度98%",
];

export default function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <div className="py-5 bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="text-white font-black text-sm tracking-wide flex-shrink-0">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
