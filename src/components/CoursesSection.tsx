"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: "toddler",
    emoji: "🧒",
    label: "Toddler Class",
    labelJp: "幼児クラス",
    target: "年少〜年長",
    price: "¥8,000",
    color: "from-orange-400 to-yellow-400",
    bg: "bg-gradient-to-br from-orange-50 to-yellow-50",
    border: "border-orange-200",
    accent: "text-orange-600",
    iconBg: "from-orange-400 to-amber-400",
    desc: "歌・ゲーム・絵本を通して英語の音に親しみ、楽しみながら自然に英語耳を育てます。",
  },
  {
    id: "elementary",
    emoji: "📚",
    label: "Elementary Class",
    labelJp: "小学生クラス",
    target: "小学1年生〜6年生",
    price: "¥8,000",
    color: "from-green-400 to-teal-400",
    bg: "bg-gradient-to-br from-green-50 to-teal-50",
    border: "border-green-200",
    accent: "text-green-600",
    iconBg: "from-green-400 to-emerald-400",
    desc: "フォニックスや会話練習を中心に、読む・書く・話す・聞くの4技能をバランスよく伸ばします。",
  },
  {
    id: "junior",
    emoji: "🎓",
    label: "Junior / Senior Class",
    labelJp: "中学・高校生クラス",
    target: "中学生〜高校生",
    price: "¥10,000",
    color: "from-blue-400 to-indigo-400",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    border: "border-blue-200",
    accent: "text-blue-600",
    iconBg: "from-blue-400 to-indigo-400",
    desc: "実践的な英会話力と試験対策を両立。英検・受験にも自信を持って挑めるようサポートします。",
  },
  {
    id: "adult",
    emoji: "💼",
    label: "Adult Class",
    labelJp: "大人クラス",
    target: "大人",
    price: "¥10,000",
    color: "from-purple-400 to-pink-400",
    bg: "bg-gradient-to-br from-purple-50 to-pink-50",
    border: "border-purple-200",
    accent: "text-purple-600",
    iconBg: "from-purple-400 to-fuchsia-400",
    desc: "日常会話からビジネス英語まで、目的やレベルに合わせた実践的なレッスンを提供します。",
  },
  {
    id: "studyabroad",
    emoji: "✈️",
    label: "Study Abroad (Advance)",
    labelJp: "留学クラス",
    target: "留学希望者",
    price: "¥11,000",
    color: "from-teal-400 to-cyan-400",
    bg: "bg-gradient-to-br from-teal-50 to-cyan-50",
    border: "border-teal-200",
    accent: "text-teal-600",
    iconBg: "from-teal-400 to-cyan-400",
    desc: "留学に必要な実践英語を集中的に学習。「かえる留学」と提携した安心のサポート体制です。",
  },
  {
    id: "firststudyabroad",
    emoji: "🌏",
    label: "First Study Abroad",
    labelJp: "初めての留学クラス",
    target: "小学4年生〜高校3年生",
    price: "¥9,000",
    color: "from-rose-400 to-orange-400",
    bg: "bg-gradient-to-br from-rose-50 to-orange-50",
    border: "border-rose-200",
    accent: "text-rose-600",
    iconBg: "from-rose-400 to-orange-400",
    desc: "初めての留学でも安心。基礎から実践まで、海外生活に必要な英語力を丁寧に指導します。",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F0FFF8 0%, #FFFDF0 50%, #FFF9F0 100%)" }}
    >
      <div className="absolute inset-0 sakura-pattern opacity-30" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3D8B3D, transparent 70%)", transform: "translate(30%,-30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8571A, transparent 70%)", transform: "translate(-30%,30%)" }}
      />

      {/* Ted Miller decorative figure — full height, left side */}
      <div className="hidden lg:block absolute left-80 bottom-0 top-0 w-[800px] pointer-events-none select-none z-[1]">
        <Image
          src="https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/self intro/ted miller fun.png"
          alt=""
          fill
          className="object-contain object-left-bottom"
          sizes="480px"
          priority={false}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <span>📚</span> Our Courses
          </div>
          <h2 className="section-title text-gray-900 mb-4">
            鹿児島市の英会話教室で<span className="text-gradient-green"> あなたに合ったコースを選ぼう</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            こども英会話から大人英会話、初心者英会話、そして留学を目指す方まで。<br className="hidden sm:block" />
            年齢・目標・ライフスタイルに合わせた<strong className="text-gray-700">6つのコース</strong>を月謝¥8,000〜の安い料金でご用意しています。
          </p>
        </motion.div>

        {/* Price badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-white border-2 border-orange-200 rounded-2xl px-5 py-3 shadow-sm">
            <span className="text-2xl">💰</span>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Monthly Fee</p>
              <p className="font-black text-gray-800">
                <span className="text-orange-600 text-lg">¥7,700</span>
                <span className="text-gray-400 text-sm mx-1">〜</span>
                <span className="text-orange-600 text-lg">¥10,000</span>
                <span className="text-gray-500 text-xs ml-1">/月</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Course Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              className={`relative group rounded-3xl border-2 ${course.border} ${course.bg} p-6 card-hover overflow-hidden`}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${course.color} rounded-t-3xl`} />

              {/* Hover glow */}
              <div
                className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-all duration-500 scale-0 group-hover:scale-150`}
              />

              <div className="relative z-10">
                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${course.iconBg} flex items-center justify-center text-xl shadow-lg`}
                  >
                    {course.emoji}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-black text-gray-800 text-base leading-tight">{course.labelJp}</h3>
                    <p className="text-xs font-bold text-gray-400 mt-0.5">{course.label}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{course.desc}</p>

                {/* Bottom row: target & price */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200/60">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs">🎯</span>
                    <span className="text-xs font-bold text-gray-500">{course.target}</span>
                  </div>
                  <div className={`font-black text-lg ${course.accent}`}>
                    {course.price}
                    <span className="text-xs font-bold text-gray-400 ml-0.5">/月</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/plan-fees/">
            <motion.span
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-teal-500 text-white px-8 py-4 rounded-full font-bold text-base shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📖 コースの詳細を見る
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </Link>
          <p className="text-gray-400 text-xs mt-3">各コースの詳しい内容・特徴をご確認いただけます</p>
        </motion.div>
      </div>
    </section>
  );
}
