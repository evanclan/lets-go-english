"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const courses = [
  {
    id: "toddler",
    emoji: "🧒",
    label: "Toddler Class",
    labelJp: "幼児クラス",
    target: "年少〜年長",
    price: "¥8,000",
    priceNote: "月謝（税込）",
    color: "from-orange-400 to-yellow-400",
    bg: "from-orange-50 to-yellow-50",
    border: "border-orange-200",
    accent: "text-orange-600",
    accentBg: "bg-orange-50",
    accentBorder: "border-orange-200",
    tagColor: "bg-orange-500",
    tag: "人気No.1",
    intro:
      "英語との最初の出会いを、最高の体験に。歌・ゲーム・絵本・ダンスなどを通して、お子さまが英語の音やリズムに自然と親しみ、「英語って楽しい！」と感じられるクラスです。",
    features: [
      "ネイティブ講師による全て英語のレッスン",
      "歌・ダンス・ゲームで楽しく学ぶ",
      "フォニックス（英語の音）の基礎を育てる",
      "絵本の読み聞かせで英語耳を鍛える",
      "少人数制で一人ひとりに目が届く",
      "季節のイベント（ハロウィン・クリスマスなど）",
    ],
    goals: [
      "英語の音に慣れ、簡単な単語やフレーズが言える",
      "英語のリズムや歌を楽しめるようになる",
      "挨拶や基本的なやり取りが英語でできる",
      "「英語が好き！」という気持ちを育てる",
    ],
    schedule: "週1回 / 50分",
  },
  {
    id: "elementary",
    emoji: "📚",
    label: "Elementary Class",
    labelJp: "小学生クラス",
    target: "小学1年生〜6年生",
    price: "¥8,000",
    priceNote: "月謝（税込）",
    color: "from-green-400 to-teal-400",
    bg: "from-green-50 to-teal-50",
    border: "border-green-200",
    accent: "text-green-600",
    accentBg: "bg-green-50",
    accentBorder: "border-green-200",
    tagColor: "bg-green-500",
    tag: "基礎力UP",
    intro:
      "「聞く・話す・読む・書く」の4技能をバランスよく伸ばすクラスです。フォニックス学習を通じて正しい発音の基礎を固めながら、楽しい会話練習で実践的な英語力を身につけます。",
    features: [
      "フォニックスで正しい発音を基礎から学ぶ",
      "4技能（聞く・話す・読む・書く）をバランスよく強化",
      "英語でのコミュニケーション力を養う",
      "ゲームやアクティビティで楽しく学べる",
      "学年やレベルに合わせたクラス分け",
      "英検ジュニア・英検5級〜対応",
    ],
    goals: [
      "日常的な会話フレーズが使えるようになる",
      "英語の読み書きの基礎が身につく",
      "英検ジュニアや英検に挑戦できるレベルに",
      "自分から英語で話す積極性を育てる",
    ],
    schedule: "週1回 / 50分",
  },
  {
    id: "junior",
    emoji: "🎓",
    label: "Junior / Senior Class",
    labelJp: "中学・高校生クラス",
    target: "中学生〜高校生",
    price: "¥10,000",
    priceNote: "月謝（税込）",
    color: "from-blue-400 to-indigo-400",
    bg: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    accent: "text-blue-600",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-200",
    tagColor: "bg-blue-500",
    tag: "受験対策",
    intro:
      "英語の「使える力」と「テストで点を取る力」を両立させるクラスです。ネイティブとの実践的な会話を重ねながら、英検・入試対策もしっかりカバーします。",
    features: [
      "ネイティブとの実践的な英会話レッスン",
      "英検（3級〜準1級）対策カリキュラム",
      "高校入試・大学入試のスピーキング対策",
      "リスニング力の集中強化",
      "文法・読解もカバーする総合的な指導",
      "プレゼンテーション・ディスカッション練習",
    ],
    goals: [
      "ネイティブと自然にコミュニケーションできる",
      "英検3級〜準1級レベルの英語力を身につける",
      "入試の英語に自信を持って挑める",
      "将来の留学やキャリアに繋がる英語力を育てる",
    ],
    schedule: "週1回 / 50分",
  },
  {
    id: "adult",
    emoji: "💼",
    label: "Adult Class",
    labelJp: "大人クラス",
    target: "大人",
    price: "¥10,000",
    priceNote: "月謝（税込）",
    color: "from-purple-400 to-pink-400",
    bg: "from-purple-50 to-pink-50",
    border: "border-purple-200",
    accent: "text-purple-600",
    accentBg: "bg-purple-50",
    accentBorder: "border-purple-200",
    tagColor: "bg-purple-500",
    tag: "ビジネス対応",
    intro:
      "旅行英語から日常会話、ビジネス英語まで、あなたの目標に合わせたレッスンを提供します。初心者から上級者まで、レベルに合ったクラスで安心して学べます。",
    features: [
      "日常英会話・旅行英会話コース",
      "ビジネス英語・プレゼン対策",
      "TOEIC・英検対策にも対応",
      "ネイティブ講師との実践会話",
      "レベル別クラス（初心者〜上級者）",
      "フレキシブルなスケジュール対応",
    ],
    goals: [
      "海外旅行で困らない英語力を身につける",
      "仕事で使える実践的な英語を習得する",
      "外国人との会話に自信を持てるようになる",
      "英語を通じて世界を広げる",
    ],
    schedule: "週1回 / 50分",
  },
  {
    id: "studyabroad",
    emoji: "✈️",
    label: "Study Abroad (Advance)",
    labelJp: "留学クラス",
    target: "留学希望者",
    price: "¥11,000",
    priceNote: "月謝（税込）",
    color: "from-teal-400 to-cyan-400",
    bg: "from-teal-50 to-cyan-50",
    border: "border-teal-200",
    accent: "text-teal-600",
    accentBg: "bg-teal-50",
    accentBorder: "border-teal-200",
    tagColor: "bg-teal-500",
    tag: "かえる留学提携",
    intro:
      "留学を本気で目指す方のためのアドバンスクラスです。海外の学校や日常生活で必要な実践英語を集中的に学びます。留学専門「かえる留学」と提携しており、事前のサポートやご相談も受け付けています。",
    features: [
      "留学先で使う実践的な英語を集中学習",
      "アカデミック英語（レポート・発表など）",
      "海外生活で必要な日常会話力",
      "留学専門「かえる留学」との提携サポート",
      "留学前の事前相談・カウンセリング",
      "異文化コミュニケーション力の育成",
    ],
    goals: [
      "留学先の授業についていける英語力を身につける",
      "海外生活で困らないコミュニケーション力を習得",
      "留学に向けた心構えと実践力を培う",
      "帰国後もグローバルに活躍できる力をつける",
    ],
    schedule: "週1回 / 50分",
    specialNote:
      "※留学専門「かえる留学」による事前のサポートやご相談も受け付けておりますので、安心してご参加いただけます。",
  },
  {
    id: "firststudyabroad",
    emoji: "🌏",
    label: "First Study Abroad",
    labelJp: "初めての留学クラス",
    target: "小学4年生〜高校3年生",
    price: "¥9,000~",
    priceNote: "月謝（税込）",
    color: "from-rose-400 to-orange-400",
    bg: "from-rose-50 to-orange-50",
    border: "border-rose-200",
    accent: "text-rose-600",
    accentBg: "bg-rose-50",
    accentBorder: "border-rose-200",
    tagColor: "bg-rose-500",
    tag: "初心者OK",
    intro:
      "「留学に興味はあるけど英語に自信がない…」そんなお子さまのためのクラスです。基礎英語から丁寧にスタートし、海外で必要な英語力と自信を少しずつ育てていきます。",
    features: [
      "留学に必要な基礎英語を丁寧に指導",
      "海外での日常生活シーン別レッスン",
      "空港・学校・ホームステイなどの実践練習",
      "異文化理解プログラム",
      "初めてでも安心のステップアップ式",
      "留学経験者の体験談・Q&Aセッション",
    ],
    goals: [
      "海外で自分の意思を伝えられるようになる",
      "留学に対する不安を自信に変える",
      "異文化に対する理解と柔軟性を育てる",
      "将来の長期留学への基盤を作る",
    ],
    schedule: "週1回 / 50分",
  },
];

function SectionLabel({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-green-500 to-teal-400" />
      <div>
        <p className="text-[10px] font-black tracking-widest text-teal-600 uppercase">{en}</p>
        <p className="text-xl sm:text-2xl font-black text-gray-800">{ja}</p>
      </div>
    </div>
  );
}

function CourseDetailCard({ course, index }: { course: (typeof courses)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative"
    >
      <div className={`relative rounded-[2rem] border-2 ${course.border} bg-gradient-to-br ${course.bg} overflow-hidden shadow-xl`}>
        {/* Top gradient bar */}
        <div className={`h-2 w-full bg-gradient-to-r ${course.color}`} />

        <div className="p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <div className={`flex flex-col lg:flex-row gap-6 lg:gap-10 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
            {/* Left column - info */}
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-5">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {course.emoji}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-800">{course.labelJp}</h3>
                    <span className={`text-xs text-white px-3 py-1 rounded-full font-bold ${course.tagColor} shadow-sm`}>
                      {course.tag}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-gray-400">{course.label}</p>
                </div>
              </div>

              {/* Intro text */}
              <div className="relative bg-white/70 rounded-2xl p-5 mb-6 border border-white/80">
                <div className="absolute top-3 left-4 text-5xl leading-none font-black text-gray-200/60 pointer-events-none select-none" style={{ fontFamily: "Georgia, serif" }}>
                  &ldquo;
                </div>
                <p className="relative z-10 text-gray-700 leading-[1.9] text-sm sm:text-[15px] pl-4 pt-3 font-medium">
                  {course.intro}
                </p>
              </div>

              {/* Special note */}
              {course.specialNote && (
                <div className={`flex items-start gap-3 ${course.accentBg} border ${course.accentBorder} rounded-xl p-4 mb-6`}>
                  <span className="text-xl flex-shrink-0">📌</span>
                  <p className={`text-sm font-bold ${course.accent}`}>{course.specialNote}</p>
                </div>
              )}

              {/* Features */}
              <div className="mb-6">
                <h4 className="flex items-center gap-2 text-sm font-black text-gray-700 uppercase tracking-wider mb-3">
                  <span className={`w-5 h-5 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-[10px]`}>
                    ✓
                  </span>
                  レッスンの特徴
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {course.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 bg-white/60 rounded-xl px-3 py-2.5 border border-white/80">
                      <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5`}>
                        ✓
                      </span>
                      <span className="text-gray-700 text-sm font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - goals + pricing */}
            <div className="lg:w-[320px] flex-shrink-0 flex flex-col gap-5">
              {/* Info pills */}
              <div className="flex flex-wrap gap-3">
                <div className={`flex items-center gap-2 ${course.accentBg} border ${course.accentBorder} rounded-xl px-4 py-2.5`}>
                  <span className="text-lg">🎯</span>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">対象</p>
                    <p className="text-sm font-black text-gray-800">{course.target}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-2 ${course.accentBg} border ${course.accentBorder} rounded-xl px-4 py-2.5`}>
                  <span className="text-lg">🕐</span>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">スケジュール</p>
                    <p className="text-sm font-black text-gray-800">{course.schedule}</p>
                  </div>
                </div>
              </div>

              {/* Goals */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <h4 className="flex items-center gap-2 text-sm font-black text-gray-700 uppercase tracking-wider mb-3">
                  <span className="text-lg">🌟</span>
                  目標・身につく力
                </h4>
                <div className="space-y-2.5">
                  {course.goals.map((goal, i) => (
                    <div key={goal} className="flex items-start gap-2.5">
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-xs font-black shadow-sm`}>
                        {i + 1}
                      </span>
                      <span className="text-gray-700 text-sm font-medium leading-relaxed">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <p className="text-gray-400 text-xs mb-1 font-bold uppercase tracking-wider">Monthly Fee</p>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className={`text-4xl font-black ${course.accent}`}>{course.price}</span>
                </div>
                <p className="text-gray-400 text-xs mb-5">{course.priceNote}</p>
                <motion.a
                  href="#contact-cta"
                  className={`w-full bg-gradient-to-r ${course.color} text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-md block hover:shadow-lg transition-shadow`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  無料体験に申し込む →
                </motion.a>
                <p className="text-gray-400 text-xs mt-2">初回体験レッスン無料！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CoursesDetailPage() {
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative pt-24 pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #F0FFF8 0%, #E8F8F4 35%, #FFFDF0 70%, #FFF9F0 100%)",
        }}
      >
        <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.08] pointer-events-none"
          style={{ background: "radial-gradient(circle, #3D8B3D, transparent 70%)", transform: "translate(-30%,-30%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08] pointer-events-none"
          style={{ background: "radial-gradient(circle, #E8571A, transparent 70%)", transform: "translate(30%,30%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-green-600 transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                ホームに戻る
              </span>
            </Link>
          </motion.div>

          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-5">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                全コース一覧 / All Courses
              </div>

              <h1 className="section-title text-gray-900 mb-5">
                Let&apos;s Go English!の<br />
                <span className="text-gradient-green">コース紹介</span>
              </h1>

              <div className="relative bg-white border border-green-100 rounded-3xl p-5 sm:p-6 mb-8 shadow-sm max-w-2xl mx-auto">
                <div
                  className="absolute top-4 left-5 text-5xl leading-none font-black text-green-100 pointer-events-none select-none"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  &ldquo;
                </div>
                <p className="relative z-10 text-gray-700 leading-[1.9] text-sm sm:text-[15px] pt-4 pl-3 font-medium">
                  Let&apos;s Go English!では、<strong className="text-green-700">幼児から大人まで</strong>、そして
                  <strong className="text-teal-600">留学を目指す方</strong>まで、
                  それぞれの年齢・目標・ライフスタイルに合わせた6つのコースをご用意しています。
                  すべてのコースでネイティブ講師による質の高いレッスンを提供し、
                  一人ひとりが<strong className="text-orange-600">「本当に使える英語力」</strong>を身につけられるようサポートします。
                </p>
                <div
                  className="absolute bottom-4 right-6 text-5xl leading-none font-black text-green-100 pointer-events-none select-none"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  &rdquo;
                </div>
              </div>
            </motion.div>

            {/* Quick nav pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {courses.map((c) => (
                <a
                  key={c.id}
                  href={`#course-${c.id}`}
                  onClick={() => setActiveCourseId(c.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
                    activeCourseId === c.id
                      ? `bg-gradient-to-r ${c.color} text-white border-transparent shadow-lg`
                      : `bg-white text-gray-600 ${c.border} hover:shadow-md`
                  }`}
                >
                  <span className="text-lg">{c.emoji}</span>
                  <span className="hidden sm:inline">{c.labelJp}</span>
                  <span className="sm:hidden">{c.labelJp.slice(0, 4)}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 30 C360 0, 720 60, 1080 30 C1260 15, 1380 45, 1440 30 L1440 60 L0 60 Z" fill="white" fillOpacity="0.95" />
          </svg>
        </div>
      </section>

      {/* ── PRICE OVERVIEW ── */}
      <section className="py-14 bg-white relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: "radial-gradient(circle, #3D8B3D, transparent 70%)", transform: "translate(30%,-30%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel en="Price Overview" ja="料金一覧" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {courses.map((c, i) => (
              <motion.a
                key={c.id}
                href={`#course-${c.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className={`relative bg-gradient-to-br ${c.bg} rounded-2xl p-4 text-center border-2 ${c.border} cursor-pointer transition-shadow hover:shadow-lg overflow-hidden group`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.color}`} />
                <div className="text-2xl mb-2">{c.emoji}</div>
                <div className="font-black text-gray-800 text-xs sm:text-sm mb-1 leading-tight">{c.labelJp}</div>
                <div className="text-[10px] text-gray-400 mb-2">{c.target}</div>
                <div className={`font-black text-lg ${c.accent}`}>{c.price}</div>
                <div className="text-[10px] text-gray-400">/月</div>
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-gray-400 mt-4"
          >
            ※ 表示価格はすべて税込です。入会金無料キャンペーン実施中！
          </motion.p>
        </div>
      </section>

      {/* ── COURSE DETAILS ── */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #FAFFFE 0%, #FFFDF8 50%, #FFF9F0 100%)" }}
      >
        <div className="absolute inset-0 sakura-pattern opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <SectionLabel en="Course Details" ja="コース詳細" />
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
              各コースの内容・特徴・目標を詳しくご紹介します。気になるコースをご覧ください。
            </p>
          </motion.div>

          <div className="space-y-10">
            {courses.map((course, i) => (
              <div key={course.id} id={`course-${course.id}`} className="scroll-mt-24">
                <CourseDetailCard course={course} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: "radial-gradient(circle, #3D8B3D, transparent 70%)", transform: "translate(-30%,-30%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: "radial-gradient(circle, #E8571A, transparent 70%)", transform: "translate(30%,30%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel en="Schedule" ja="時間割" />
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mb-8">
              Let&apos;s Go English! RaJA 英会話スクールの週間スケジュールです。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Legend */}
            <div className="flex flex-wrap gap-2 mb-5">
              {[
                { label: "幼児 Class", bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-200" },
                { label: "小学生 Class", bg: "bg-green-100", text: "text-green-700", border: "border-green-200" },
                { label: "中学・高校生 Class", bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200" },
                { label: "大人 Class", bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-200" },
                { label: "留学 Class", bg: "bg-teal-100", text: "text-teal-700", border: "border-teal-200" },
              ].map((item) => (
                <span
                  key={item.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${item.bg} ${item.text} border ${item.border}`}
                >
                  <span className={`w-2 h-2 rounded-full ${item.bg.replace("100", "400")} border ${item.border}`} />
                  {item.label}
                </span>
              ))}
            </div>

            {/* Scrollable table wrapper */}
            <div className="overflow-x-auto rounded-2xl shadow-xl border-2 border-gray-100">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr>
                    <th className="bg-gray-800 text-white text-xs font-black px-3 py-3 border-r border-gray-600 w-[80px]">
                      <div className="text-[10px] font-bold text-gray-300 mb-0.5">曜日</div>
                      <div>時間</div>
                    </th>
                    {[
                      { ja: "火曜日", en: "Tue" },
                      { ja: "水曜日", en: "Wed" },
                      { ja: "木曜日", en: "Thu" },
                      { ja: "金曜日", en: "Fri" },
                    ].map((day) => (
                      <th
                        key={day.ja}
                        className="bg-gray-700 text-white text-sm font-black px-3 py-3 border-r border-gray-600 text-center"
                      >
                        <div>{day.ja}</div>
                        <div className="text-[11px] font-bold text-gray-300">/{day.en}</div>
                      </th>
                    ))}
                    <th className="bg-gradient-to-b from-orange-600 to-orange-500 text-white text-sm font-black px-3 py-3 text-center min-w-[130px]">
                      <div>土曜日</div>
                      <div className="text-[11px] font-bold text-orange-200">/Sat</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* 16:00 row */}
                  <ScheduleRow
                    time="16:00-"
                    cells={[
                      { label: "幼児 Class", type: "toddler" },
                      { label: "─", type: "empty" },
                      { label: "幼児 Class", type: "toddler" },
                      { label: "幼児 Class", type: "toddler" },
                    ]}
                    satCell={{ time: "10:00-", label: "幼児 Class", type: "toddler" }}
                    even
                  />
                  {/* 17:00 row */}
                  <ScheduleRow
                    time="17:00-"
                    cells={[
                      { label: "小学生 Class", type: "elementary" },
                      { label: "幼児 Class", type: "toddler" },
                      { label: "小学生 Class", type: "elementary" },
                      { label: "小学生 Class", type: "elementary" },
                    ]}
                    satCell={{ time: "11:00-", label: "小学生 Class", type: "elementary" }}
                  />
                  {/* 18:00 row */}
                  <ScheduleRow
                    time="18:00-"
                    cells={[
                      { label: "中学・高校生 Class", type: "junior" },
                      { label: "小学生 Class", type: "elementary" },
                      { label: "大人 Class", type: "adult" },
                      { label: "小学生 Class", type: "elementary" },
                    ]}
                    satCell={{ time: "PM", label: "留学 Class", type: "studyabroad" }}
                    even
                  />
                  {/* 19:00 row */}
                  <ScheduleRow
                    time="19:00-"
                    cells={[
                      { label: "留学 Class", type: "studyabroad" },
                      { label: "大人 Class", type: "adult" },
                      { label: "中学・高校生 Class", type: "junior" },
                      { label: "中学・高校生 Class", type: "junior" },
                    ]}
                    satCell={{ time: "PM", label: "留学 Class", type: "studyabroad" }}
                  />
                </tbody>
              </table>
            </div>

            {/* Notes */}
            <div className="mt-6 space-y-3">
              {[
                {
                  icon: "📅",
                  text: "レッスンは月4回です。欠席の場合は事前のご連絡をいただき、振替は１ヶ月以内であれば可能です。",
                },
                {
                  icon: "🎉",
                  text: "無料体験レッスン随時受付中！留学クラスへの変更やご相談など随時受付ます。お気軽にお問い合わせください。",
                },
              ].map((note, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                >
                  <span className="text-xl flex-shrink-0">{note.icon}</span>
                  <p className="text-gray-700 text-sm font-medium leading-relaxed">{note.text}</p>
                </motion.div>
              ))}
              <p className="text-right text-xs font-bold text-gray-400 pt-1">
                Let&apos;s Go English! RaJA 英会話スクール
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ (hidden until real content is ready) ──
      <section className="py-16 bg-white relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: "radial-gradient(circle, #3D8B3D, transparent 70%)", transform: "translate(-30%,30%)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel en="FAQ" ja="よくあるご質問" />
          </motion.div>

          <FAQSection />
        </div>
      </section>
      */}

      {/* ── CTA ── */}
      <section
        id="contact-cta"
        className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #F0FFF8 0%, #E8F8F4 50%, #FFF9F0 100%)" }}
      >
        <div className="absolute inset-0 sakura-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4">
              <span>🎯</span> Get Started Today
            </div>
            <h2 className="section-title text-gray-900 mb-3">
              まずは無料体験レッスンで<br />
              <span className="text-gradient-green">実感してください！</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
              どのコースが合うか迷っても大丈夫。<br className="hidden sm:block" />
              無料体験レッスンで、雰囲気やレベルを実感してからお選びいただけます。
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

type ClassType = "toddler" | "elementary" | "junior" | "adult" | "studyabroad" | "firststudyabroad" | "empty";

const CLASS_STYLES: Record<ClassType, { bg: string; text: string; border: string; dot: string }> = {
  toddler:         { bg: "bg-orange-100",  text: "text-orange-800",  border: "border-orange-200",  dot: "bg-orange-400" },
  elementary:      { bg: "bg-green-100",   text: "text-green-800",   border: "border-green-200",   dot: "bg-green-400" },
  junior:          { bg: "bg-blue-100",    text: "text-blue-800",    border: "border-blue-200",    dot: "bg-blue-400" },
  adult:           { bg: "bg-purple-100",  text: "text-purple-800",  border: "border-purple-200",  dot: "bg-purple-400" },
  studyabroad:     { bg: "bg-teal-100",    text: "text-teal-800",    border: "border-teal-200",    dot: "bg-teal-400" },
  firststudyabroad:{ bg: "bg-rose-100",    text: "text-rose-800",    border: "border-rose-200",    dot: "bg-rose-400" },
  empty:           { bg: "bg-gray-50",     text: "text-gray-300",    border: "border-gray-100",    dot: "bg-gray-300" },
};

function ClassCell({ label, type }: { label: string; type: ClassType }) {
  const s = CLASS_STYLES[type];
  if (type === "empty") {
    return (
      <td className="border border-gray-200 px-2 py-3 text-center">
        <span className="text-gray-300 text-lg select-none">─</span>
      </td>
    );
  }
  return (
    <td className={`border border-gray-200 px-2 py-3 text-center`}>
      <span className={`inline-block px-2 py-1.5 rounded-xl text-xs font-bold ${s.bg} ${s.text} border ${s.border} leading-tight`}>
        {label}
      </span>
    </td>
  );
}

function SatCell({ time, label, type }: { time: string; label: string; type: ClassType }) {
  const s = CLASS_STYLES[type];
  return (
    <td className="border border-gray-200 px-2 py-3 text-center bg-orange-50/40">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] font-black text-orange-500 bg-orange-100 px-2 py-0.5 rounded-full">{time}</span>
        <span className={`inline-block px-2 py-1.5 rounded-xl text-xs font-bold ${s.bg} ${s.text} border ${s.border} leading-tight`}>
          {label}
        </span>
      </div>
    </td>
  );
}

function ScheduleRow({
  time,
  cells,
  satCell,
  even,
}: {
  time: string;
  cells: { label: string; type: ClassType }[];
  satCell: { time: string; label: string; type: ClassType };
  even?: boolean;
}) {
  return (
    <tr className={even ? "bg-white" : "bg-gray-50/60"}>
      <td className="border border-gray-200 px-3 py-3 text-center bg-gray-800 text-white font-black text-sm whitespace-nowrap">
        {time}
      </td>
      {cells.map((cell, i) => (
        <ClassCell key={i} label={cell.label} type={cell.type} />
      ))}
      <SatCell time={satCell.time} label={satCell.label} type={satCell.type} />
    </tr>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "体験レッスンは本当に無料ですか？",
      a: "はい、初回の体験レッスンは完全無料です。お気軽にお申し込みください。レッスンの雰囲気やレベルを実際に体験していただけます。",
    },
    {
      q: "英語がまったくの初心者でも大丈夫ですか？",
      a: "もちろんです！すべてのコースで初心者向けのクラスをご用意しています。ネイティブ講師が一人ひとりのレベルに合わせて丁寧に指導しますのでご安心ください。",
    },
    {
      q: "途中でコースの変更はできますか？",
      a: "はい、可能です。お子さまの成長やレベルに合わせて、随時コースの変更やレベルアップをご提案させていただきます。",
    },
    {
      q: "留学クラスは留学が決まっていなくても受講できますか？",
      a: "はい、留学を検討中の方や将来的に留学を考えている方も歓迎です。「かえる留学」との提携により、留学に関するご相談も合わせて受け付けています。",
    },
    {
      q: "入会金はかかりますか？",
      a: "現在、入会金無料キャンペーンを実施中です。詳しくはお問い合わせください。",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="bg-gradient-to-br from-green-50/50 to-teal-50/50 rounded-2xl border-2 border-green-100 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left"
          >
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white text-sm font-black shadow-sm">
                Q
              </span>
              <span className="font-bold text-gray-800 text-sm sm:text-base">{faq.q}</span>
            </div>
            <motion.span
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 text-gray-400"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openIndex === i ? "auto" : 0,
              opacity: openIndex === i ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pl-16">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white text-sm font-black shadow-sm">
                  A
                </span>
                <p className="text-gray-600 text-sm leading-relaxed pt-1">{faq.a}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
