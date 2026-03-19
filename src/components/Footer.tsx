"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = [
  {
    title: "コース",
    titleEn: "Courses",
    links: [
      { label: "子ども英会話", href: "#courses" },
      { label: "ジュニア英会話", href: "#courses" },
      { label: "大人英会話", href: "#courses" },
      { label: "プライベートレッスン", href: "#courses" },
    ],
  },
  {
    title: "スクール情報",
    titleEn: "About",
    links: [
      { label: "先生紹介", href: "#teachers" },
      { label: "特徴・強み", href: "#features" },
      { label: "コンセプト", href: "#concept" },
      { label: "体験談", href: "#experiences" },
      { label: "よくある質問", href: "#" },
    ],
  },
  {
    title: "サポート",
    titleEn: "Support",
    links: [
      { label: "お問い合わせ", href: "#contact" },
      { label: "無料体験レッスン", href: "#contact" },
      { label: "プライバシーポリシー", href: "#" },
      { label: "利用規約", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div whileHover={{ scale: 1.03 }} className="inline-block mb-4">
              <Image
                src="/logo-white-bg.png"
                alt="Let's Go English RaJA"
                width={160}
                height={80}
                className="h-16 w-auto object-contain brightness-110"
              />
            </motion.div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              RaJA英会話スクールは、楽しく・分かりやすく・自信を持って英語を話せるようになるための
              英語学習環境を提供しています。
            </p>
            <div className="flex gap-3">
              {[
                { icon: "📘", label: "Facebook", color: "hover:bg-blue-600" },
                { icon: "📸", label: "Instagram", color: "hover:bg-pink-600" },
                { icon: "🐦", label: "Twitter", color: "hover:bg-sky-500" },
                { icon: "▶️", label: "YouTube", color: "hover:bg-red-600" },
              ].map((s) => (
                <motion.button
                  key={s.label}
                  className={`w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-sm transition-colors ${s.color}`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  title={s.label}
                >
                  {s.icon}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-white font-black text-base mb-1">{group.title}</p>
              <p className="text-gray-500 text-xs mb-4">{group.titleEn}</p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-orange-400 transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2024 RaJA 英会話スクール / Let&apos;s Go English! All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Made with</span>
            <span className="text-red-400">❤️</span>
            <span className="text-xs text-gray-500">in Japan</span>
            <span className="text-sm">🇯🇵</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
