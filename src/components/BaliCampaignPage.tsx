"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CDN = "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/bali-campaign";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SectionLabel({ en, ja }: { en: string; ja: string }) {
  return (
    <motion.div variants={fadeUp} className="text-center mb-2">
      <span className="inline-block text-sm font-bold tracking-[0.25em] uppercase text-teal-600 mb-1">
        {en}
      </span>
    </motion.div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={fadeUp}
      className="text-center text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight"
    >
      {children}
    </motion.h2>
  );
}

function CTAButton({ href = "#contact", children }: { href?: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="btn-primary text-base sm:text-lg py-4 px-10 shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={`${CDN}/tanah-lot-sunset.webp`}
          alt="バリ島タナロット寺院の美しい夕日"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-5 py-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/90 text-sm font-bold tracking-wide">
            2026年夏 参加者募集中
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-amber-300 font-bold text-base sm:text-lg tracking-[0.2em] mb-3"
        >
          INTERNATIONAL SCHOOL PROGRAM
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.15] mb-5"
        >
          インドネシア・バリ
          <br />
          <span className="text-gradient-gold">現地校短期留学</span>
          <br />
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/85">
            中高生グループプログラム
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          バリ島の自然と文化が色濃く残るタバナン地区で
          <br className="hidden sm:block" />
          国際理解を深め、一生の友情を育む7日間
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-primary text-lg py-4 px-10 shadow-2xl"
          >
            お問い合わせ・資料請求
          </a>
          <a
            href="#overview"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-bold transition-colors border border-white/30 rounded-full px-8 py-3.5 hover:bg-white/10"
          >
            詳しく見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span>2026年8月9日〜15日</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span>バリ州タバナン県</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>364,000円（税込）</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/70 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ─── HIGHLIGHTS BAR ─── */
function HighlightsBar() {
  const highlights = [
    { icon: "🎓", label: "現地校バディ制度", desc: "3〜5:1の少人数比率" },
    { icon: "🏫", label: "教育省公認", desc: "安心・安全の環境" },
    { icon: "🏄", label: "豊富なアクティビティ", desc: "文化体験・自然体験" },
    { icon: "🏨", label: "ホテル滞在", desc: "専用車送迎付き" },
  ];
  return (
    <Section className="relative -mt-16 z-20 px-4">
      <motion.div
        variants={fadeUp}
        className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
      >
        {highlights.map((h) => (
          <div
            key={h.label}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-6 text-center hover:shadow-2xl transition-shadow"
          >
            <div className="text-3xl mb-2">{h.icon}</div>
            <div className="font-black text-sm sm:text-base text-gray-800">{h.label}</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">{h.desc}</div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ─── OVERVIEW (Slide 2) ─── */
function OverviewSection() {
  const points = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "バディプログラム",
      desc: "日本人中高生3〜5名に対しバリの生徒1名が全授業・アクティビティに同行。同世代バディとの密な交流を通して、言語や文化を超えた友情を育みます。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "異文化・歴史を体感",
      desc: "インドネシア語・バリ語講座、伝統舞踊や伝統楽器の演奏体験など、観光旅行では味わえない現地の文化・歴史・生活を多角的に理解できるプログラムです。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "安心・安全の環境",
      desc: "現地教育省公認プログラム。現地校の先生が全日程同行し、ホテル滞在で学校・ホテル間も専用車での送迎があり、初めての海外でも安心です。",
    },
  ];

  return (
    <Section id="overview" className="py-20 sm:py-28 px-4 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-6xl mx-auto">
        <SectionLabel en="PROGRAM OVERVIEW" ja="プログラム概要" />
        <SectionTitle>
          観光旅行では体験できない、
          <br />
          <span className="text-gradient-orange">本物の国際交流</span>を。
        </SectionTitle>
        <motion.p variants={fadeUp} className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-base sm:text-lg leading-relaxed">
          バリ島タバナン地区の現地高校で、同世代のバディと共に学び、遊び、文化を体験する
          7日間のプログラム。一生の思い出と友情が、ここで始まります。
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {points.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <h3 className="font-black text-xl mb-3 text-gray-800">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={`${CDN}/classroom-interaction.webp`}
                alt="バリの現地校で交流する日本人生徒とバリの生徒たち"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-teal-600 to-emerald-700 p-8 sm:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-black mb-4">
                すべてのアクティビティに<br />高校生バディが同行
              </h3>
              <p className="text-white/85 leading-relaxed mb-6">
                英語力の高い現地の高校生バディが3〜5:1の比率で全行程に同行。
                授業もアクティビティも一緒だから、自然と友情が芽生えます。
              </p>
              <div className="flex items-center gap-3 bg-white/15 rounded-xl p-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <div className="font-bold text-sm">バディ比率 3〜5：1</div>
                  <div className="text-white/70 text-xs">日本人生徒3〜5名にバリ生徒1名が同行</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── PROGRAM DETAILS (Slide 3) ─── */
function ProgramDetailsSection() {
  const details = [
    { label: "開催時期", value: "2026年8月9日（日）現地着 〜 8月15日（土）現地発", icon: "📅" },
    { label: "開催場所", value: "インドネシア バリ州 タバナン県", icon: "📍" },
    { label: "対象", value: "中学生・高校生", icon: "🎒" },
    { label: "催行人数", value: "10名〜20名程度（1名様よりお申込み可）", icon: "👥" },
    { label: "現地校", value: "公立高校 SMA Negeri 1 Tabanan", icon: "🏫" },
    { label: "宿泊", value: "ホテル滞在（基本2名/室）専用チャーター車で通学", icon: "🏨" },
  ];

  const included = [
    "現地校入学金・授業料・教材費",
    "旅程記載のアクティビティ費用",
    "ホテル手配/宿泊費（3食付）",
    "現地空港往復送迎",
    "日本人コーディネーター1名引率",
  ];

  const notIncluded = [
    "往復航空券（燃油サーチャージ含む）",
    "海外旅行保険",
    "日本国内の交通費",
    "個人的なお小遣い",
  ];

  return (
    <Section id="details" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionLabel en="PROGRAM DETAILS" ja="プログラム概要" />
        <SectionTitle>
          プログラム<span className="text-gradient-orange">詳細</span>
        </SectionTitle>

        <motion.div variants={fadeUp} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {details.map((d, i) => (
              <div
                key={d.label}
                className={`p-6 sm:p-8 ${
                  i < details.length - 1 ? "border-b sm:border-b lg:border-b-0" : ""
                } ${i % 3 !== 2 ? "lg:border-r" : ""} ${i % 2 !== 1 ? "sm:border-r lg:border-r-0" : "sm:border-r-0"} ${i < 3 ? "lg:border-b" : ""} border-gray-100`}
              >
                <div className="text-2xl mb-2">{d.icon}</div>
                <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">{d.label}</div>
                <div className="font-bold text-gray-800 text-sm leading-relaxed">{d.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 sm:p-12 text-white text-center mb-12 shadow-xl">
          <div className="text-white/80 text-sm font-bold mb-2">1名あたりの料金</div>
          <div className="text-5xl sm:text-6xl font-black mb-2">
            ¥364,000
            <span className="text-xl sm:text-2xl font-bold ml-2">（税込）</span>
          </div>
          <div className="text-white/70 text-sm">
            催行決定日 5/18 ｜ 5月末申し込み締め切り
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div variants={fadeUp} className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
            <h3 className="font-black text-lg text-emerald-700 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              料金に含まれるもの
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <h3 className="font-black text-lg text-gray-600 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              料金に含まれないもの
            </h3>
            <ul className="space-y-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 flex items-center justify-center shrink-0 text-gray-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ─── ITINERARY (Slide 4) ─── */
function ItinerarySection() {
  const days = [
    {
      day: 1, date: "8/9（日）",
      am: "福岡空港出発→マニラ経由→デンパサール国際空港到着",
      pm: "専用車でホテルへ移動",
      highlight: "出発",
      color: "from-blue-500 to-sky-500",
    },
    {
      day: 2, date: "8/10（月）",
      am: "ウェルカムセレモニー",
      pm: "スクールツアー・授業体験",
      highlight: "歓迎式",
      color: "from-teal-500 to-emerald-500",
    },
    {
      day: 3, date: "8/11（火）",
      am: "サーフィン体験",
      pm: "バリ島クタダウンタウンツアー",
      highlight: "サーフィン",
      color: "from-cyan-500 to-blue-500",
    },
    {
      day: 4, date: "8/12（水）",
      am: "バリ伝統舞踊体験",
      pm: "ガムラン演奏体験・クッキングクラス",
      highlight: "伝統文化",
      color: "from-purple-500 to-pink-500",
    },
    {
      day: 5, date: "8/13（木）",
      am: "バリ語講座・ロンタル体験",
      pm: "ゲボガンづくり・タナロット寺院で夕日鑑賞",
      highlight: "寺院",
      color: "from-amber-500 to-orange-500",
    },
    {
      day: 6, date: "8/14（金）",
      am: "世界遺産ジャティルウィ棚田見学",
      pm: "メラスティビーチ・ケチャックダンス鑑賞",
      highlight: "世界遺産",
      color: "from-emerald-500 to-green-600",
    },
    {
      day: 7, date: "8/15（土）",
      am: "荷造り・チェックアウト",
      pm: "ショッピングモールツアー→空港送迎→深夜便で帰国",
      highlight: "帰国",
      color: "from-rose-500 to-red-500",
    },
  ];

  return (
    <Section id="itinerary" className="py-20 sm:py-28 px-4 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel en="ITINERARY" ja="旅程表" />
        <SectionTitle>
          7日間の<span className="text-gradient-orange">冒険スケジュール</span>
        </SectionTitle>
        <motion.p variants={fadeUp} className="text-center text-gray-500 mb-12 text-sm">
          ※天候等により日程・内容が変更になる場合があります
        </motion.p>

        <div className="space-y-4">
          {days.map((d) => (
            <motion.div
              key={d.day}
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row">
                <div className={`bg-gradient-to-br ${d.color} text-white px-6 py-4 sm:py-6 sm:w-44 shrink-0 flex sm:flex-col items-center sm:items-start justify-between sm:justify-center gap-2`}>
                  <div>
                    <div className="text-xs font-bold uppercase opacity-80">Day</div>
                    <div className="text-3xl font-black">{d.day}</div>
                  </div>
                  <div className="text-sm font-bold opacity-90">{d.date}</div>
                </div>
                <div className="flex-1 p-5 sm:p-6 flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="text-xs font-bold text-gray-400 uppercase mb-1">AM</div>
                    <div className="text-sm font-bold text-gray-700">{d.am}</div>
                  </div>
                  <div className="hidden sm:block w-px bg-gray-200" />
                  <div className="flex-1">
                    <div className="text-xs font-bold text-gray-400 uppercase mb-1">PM</div>
                    <div className="text-sm font-bold text-gray-700">{d.pm}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-8 bg-teal-50 border border-teal-200 rounded-2xl p-6 flex items-start gap-4">
          <div className="text-2xl shrink-0">🤝</div>
          <div>
            <div className="font-black text-teal-700 mb-1">全日程バディ同行</div>
            <div className="text-sm text-teal-600">
              すべてのアクティビティに英語力の高い現地高校生バディ（3〜5:1）が同行します。
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── ACTIVITIES (Slides 5-6) ─── */
function ActivitiesSection() {
  const activities = [
    {
      title: "バリ伝統舞踊体験",
      desc: "簡単なステップからバリ舞踊を体験。踊りを通してバリの神話や祭礼文化に触れます。",
      image: `${CDN}/kecak-dancers.webp`,
      alt: "バリ伝統のケチャックダンス",
    },
    {
      title: "ガムラン演奏体験",
      desc: "打楽器を使った伝統音楽「ガムラン」の演奏に挑戦。楽しく学びながらバリ文化への理解を深めます。",
      image: `${CDN}/gamelan-experience.webp`,
      alt: "ガムラン楽器の演奏体験",
    },
    {
      title: "サーフィン体験",
      desc: "プロインストラクターによる基礎レッスンから始める安心のサーフィン体験。バリの自然とビーチ文化を満喫。",
      image: `${CDN}/surfing-lesson.webp`,
      alt: "ビーチでのサーフィンレッスン",
    },
    {
      title: "ゲボガン（フルーツタワー）づくり",
      desc: "果物や花を積み上げるバリの伝統的な供物づくり。素材の選び方や飾り付けの意味を学びます。",
      image: `${CDN}/gebogan-offerings.webp`,
      alt: "ゲボガン（フルーツタワー）の伝統的な供物",
    },
    {
      title: "タナロット寺院で夕日鑑賞",
      desc: "16世紀建立の海の神を祀る寺院。夕日に染まるシルエットはバリ島屈指の絶景です。",
      image: `${CDN}/tanah-lot-temple.webp`,
      alt: "タナロット寺院の壮大な風景",
    },
    {
      title: "世界遺産ジャティルウィ棚田",
      desc: "ユネスコ世界遺産の棚田で、バリの伝統的な水利システム「スバック」と持続可能な農業文化を学びます。",
      image: `${CDN}/jatiluwih-rice-terraces.webp`,
      alt: "ジャティルウィの美しい棚田",
    },
    {
      title: "メラスティビーチ",
      desc: "バリ島南部の神聖な海岸。白砂のビーチと青い海が広がり、ヒンドゥー教の儀式の舞台としても有名です。",
      image: `${CDN}/bali-coastline.webp`,
      alt: "メラスティビーチの美しい海岸線",
    },
    {
      title: "ケチャックダンス鑑賞",
      desc: "迫力ある男性合唱とリズムで物語を紡ぐバリの伝統舞踊。ラーマヤナ物語を通してヒンドゥー文化を学びます。",
      image: `${CDN}/kecak-dance-fire.webp`,
      alt: "ケチャックダンスの迫力あるファイヤーパフォーマンス",
    },
  ];

  return (
    <Section id="activities" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionLabel en="ACTIVITIES" ja="アクティビティ" />
        <SectionTitle>
          観光では味わえない
          <br />
          <span className="text-gradient-green">豊富な文化体験</span>
        </SectionTitle>
        <motion.p variants={fadeUp} className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-base sm:text-lg leading-relaxed">
          楽しさと学びの両立で、現地社会や生活を多角的に理解。
          インドネシア語・バリ語講座で第三言語の学習体験も。
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((a) => (
            <motion.div
              key={a.title}
              variants={fadeUp}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-black text-base mb-2 text-gray-800">{a.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={`${CDN}/jatiluwih-sign.webp`}
              alt="ジャティルウィ世界遺産の看板"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="text-xs font-bold uppercase tracking-wider mb-1 text-emerald-300">UNESCO World Heritage</div>
                <div className="text-2xl font-black">ジャティルウィ棚田</div>
              </div>
            </div>
          </div>
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={`${CDN}/melasti-beach-aerial.webp`}
              alt="メラスティビーチの空撮"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="text-xs font-bold uppercase tracking-wider mb-1 text-cyan-300">Sacred Beach</div>
                <div className="text-2xl font-black">メラスティビーチ</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── SCHOOL (Slide 7) ─── */
function SchoolSection() {
  const features = [
    "1961年創立の歴史ある公立高校",
    "生徒数1,400名超、理系・文系両コース対応",
    "学校評価「A」ランク取得",
    "全国大学入試（UTBK）バリ州上位",
    "日本語選択クラス＆日本クラブあり",
    "充実した教室・実験室・図書館完備",
  ];

  return (
    <Section id="school" className="py-20 sm:py-28 px-4 bg-gradient-to-b from-white to-teal-50/30">
      <div className="max-w-6xl mx-auto">
        <SectionLabel en="PARTNER SCHOOL" ja="提携校紹介" />
        <SectionTitle>
          <span className="text-gradient-green">SMA Negeri 1 Tabanan</span>
        </SectionTitle>
        <motion.p variants={fadeUp} className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
          バリ州タバナン県を代表する名門公立高校
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={`${CDN}/sma-tabanan-emblem.webp`}
                alt="SMA Negeri 1 Tabanan校章"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={`${CDN}/school-building.webp`}
                  alt="学校の校舎"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={`${CDN}/school-courtyard.webp`}
                  alt="学校の中庭"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col justify-center">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-black text-2xl text-gray-800 mb-6">学校の特徴</h3>
              <ul className="space-y-4">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="font-bold text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
          <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image src={`${CDN}/classroom.webp`} alt="教室の様子" fill className="object-cover" />
          </div>
          <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image src={`${CDN}/bali-students-group.webp`} alt="バリの生徒たち" fill className="object-cover" />
          </div>
          <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image src={`${CDN}/classroom-interaction.webp`} alt="授業での交流" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── VIDEO EMBED (autoplay on scroll) ─── */
function VideoEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const YOUTUBE_ID = "kK9BjTXNePk";

  return (
    <motion.div ref={ref} variants={fadeUp} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 sm:p-10 border border-orange-100">
      <div className="text-center mb-6">
        <h3 className="font-black text-xl sm:text-2xl text-gray-800 mb-2">
          過去のプログラムの様子を動画でチェック
        </h3>
        <p className="text-gray-600 text-sm">
          過去のプログラムの様子を動画にまとめておりますのでご覧ください。
        </p>
      </div>
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
        {inView && (
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&rel=0&modestbranding=1`}
            title="バリ島短期留学プログラム紹介動画"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
    </motion.div>
  );
}

/* ─── PAST PROGRAMS (Slide 8) ─── */
function PastProgramsSection() {
  const photos = [
    { src: `${CDN}/school-assembly-balloons.webp`, alt: "全校生徒との交流セレモニー", label: "全校生徒との交流" },
    { src: `${CDN}/classroom-students.webp`, alt: "授業体験の様子", label: "授業体験" },
    { src: `${CDN}/buddy-lunch.webp`, alt: "バディとランチ", label: "バディとランチ" },
    { src: `${CDN}/friends-thumbsup.webp`, alt: "バディ・先生と", label: "バディ・先生と" },
    { src: `${CDN}/farewell-hug.webp`, alt: "涙のお別れ", label: "涙のお別れ" },
    { src: `${CDN}/traditional-experience.webp`, alt: "伝統文化体験", label: "伝統文化体験" },
    { src: `${CDN}/cultural-exchange.webp`, alt: "文化交流", label: "文化交流" },
    { src: `${CDN}/group-activity.webp`, alt: "グループアクティビティ", label: "グループアクティビティ" },
  ];

  return (
    <Section id="past-programs" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionLabel en="PAST PROGRAMS" ja="過去のプログラム" />
        <SectionTitle>
          参加者たちの<span className="text-gradient-orange">リアルな体験</span>
        </SectionTitle>
        <motion.p variants={fadeUp} className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-base sm:text-lg">
          過去の類似プログラムの様子をご覧ください。笑顔と感動があふれる日々がここにあります。
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {photos.map((p) => (
            <motion.div
              key={p.label}
              variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-48 sm:h-56">
                <Image src={p.src} alt={p.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-bold text-sm">{p.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <VideoEmbed />
      </div>
    </Section>
  );
}

/* ─── ABOUT JAN-LINK + CEO (Slide 9) ─── */
function AboutSection() {
  const businessItems = [
    "教育旅行・海外研修企画運営",
    "単位認定留学（高校・大学）",
    "カナダビザコンサル・ビザ申請サポート",
    "海外の高校との姉妹校提携",
    "留学手続き・現地サポート（未成年〜社会人）",
    "大学間MOU締結",
    "オンライン留学プログラム",
    "海外インターンシップ・企業海外研修",
  ];

  return (
    <Section id="about" className="py-20 sm:py-28 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionLabel en="ORGANIZER" ja="運営会社" />
        <SectionTitle>
          <span className="text-gradient-green">JAN-Link</span>について
        </SectionTitle>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col items-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl mb-6 border-4 border-white">
              <Image
                src={`${CDN}/ceo-sato-jun.webp`}
                alt="代表 佐藤 潤"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">代表</div>
              <div className="text-2xl font-black text-gray-800">佐藤 潤</div>
              <div className="text-sm text-gray-500 mt-1">Jun Sato</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-3 flex flex-col justify-center">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100 mb-6">
              <h3 className="font-black text-xl text-gray-800 mb-2">
                JAPAN ABROAD NETWORK LINK LTD.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                2009年にカナダ・バンクーバーにて設立。留学サポート人数延べ1万人以上の実績。
                カナダ政府認定移民コンサルタント在籍。カナダ・アメリカ・フィリピン・オーストラリア・インドネシアでの
                現地研修企画運営の実績に基づき、現地およびオンラインプログラムを拡大中です。
              </p>

              <h4 className="font-bold text-sm text-gray-800 mb-3">主な事業内容</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {businessItems.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <div className="text-2xl mb-2">🌏</div>
                <h4 className="font-black text-sm text-gray-800 mb-1">インドネシアについて</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  首都ジャカルタ、人口約2.8億人の成長著しい東南アジアの国。
                  何千もの火山島からなり、多様な民族と文化が共存しています。
                </p>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <div className="text-2xl mb-2">🌴</div>
                <h4 className="font-black text-sm text-gray-800 mb-1">バリ・タバナンについて</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  自然豊かで独自のヒンドゥー文化が息づく地域。年間平均気温27〜28℃、
                  時差は日本より1時間遅れで生活リズムの調整がしやすい環境です。
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
          <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image src={`${CDN}/indonesia-scene-1.webp`} alt="インドネシアの風景" fill className="object-cover" />
          </div>
          <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image src={`${CDN}/indonesia-scene-2.webp`} alt="インドネシアの風景" fill className="object-cover" />
          </div>
          <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image src={`${CDN}/indonesia-scene-3.webp`} alt="インドネシアの風景" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── CANCELLATION POLICY ─── */
function CancellationSection() {
  const policies = [
    { timing: "申込金", rate: "返金不可", detail: "プログラム費用の内 $450/人" },
    { timing: "30日前〜", rate: "30%", detail: "プログラム開始日前日から遡って30日以降に解約" },
    { timing: "前々日以降", rate: "75%", detail: "プログラム開始日前々日以降に解約" },
    { timing: "開始後", rate: "100%", detail: "プログラム開始後のキャンセル" },
  ];

  return (
    <Section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeUp} className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-200">
          <h3 className="font-black text-xl text-gray-800 mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            キャンセルポリシー
          </h3>
          <div className="space-y-3">
            {policies.map((p) => (
              <div key={p.timing} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100">
                <div className="w-20 text-center shrink-0">
                  <div className="font-black text-lg text-orange-600">{p.rate}</div>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm text-gray-800">{p.timing}</div>
                  <div className="text-xs text-gray-500">{p.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            ※航空券に関しては、別途キャリアの条件に従います。
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

const BALI_INQUIRY_TOPIC = "Bali Indonesia Program inquiry";

/* ─── CONTACT / CTA SECTION ─── */
function ContactCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          course: "baliIndonesia",
          topic: BALI_INQUIRY_TOPIC,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "送信に失敗しました。");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "送信に失敗しました。もう一度お試しください。");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" className="py-20 sm:py-28 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel en="CONTACT" ja="お問い合わせ" />
        <SectionTitle>
          まずは<span className="text-gradient-orange">お気軽に</span>ご相談ください
        </SectionTitle>
        <motion.p variants={fadeUp} className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          プログラムに関するご質問・資料請求・お申し込みは、下記フォームまたはお電話にてお気軽にどうぞ。
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div variants={fadeUp} className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center bg-emerald-50 border border-emerald-200 rounded-3xl p-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-6xl mb-6"
                >
                  🎉
                </motion.div>
                <h3 className="text-2xl font-black text-emerald-800 mb-2">送信完了！</h3>
                <p className="text-emerald-700 text-sm mb-6">
                  お問い合わせありがとうございます。
                  <br />
                  担当者より2営業日以内にご連絡いたします。
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-primary text-sm py-3 px-6"
                >
                  もう一度送る
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10 space-y-5">
                <h3 className="text-xl font-black text-gray-800 mb-4">お問い合わせフォーム</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      お名前 <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm text-gray-800"
                      placeholder="田中 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">電話番号</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm text-gray-800"
                      placeholder="090-XXXX-XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    メールアドレス <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm text-gray-800"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">メッセージ・ご質問</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm text-gray-800 resize-none"
                    placeholder="ご質問やご要望がありましたらお気軽にどうぞ..."
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                    {error}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={sending}
                  className="w-full btn-primary justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={sending ? {} : { scale: 1.02 }}
                  whileTap={sending ? {} : { scale: 0.98 }}
                >
                  {sending ? "送信中..." : "お問い合わせを送信する"}
                </motion.button>

                <p className="text-center text-xs text-gray-400">
                  ご入力いただいた情報はプライバシーポリシーに基づき適切に管理いたします。
                </p>
              </form>
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="font-black text-xl mb-4">お申し込み情報</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📅</span>
                  <div>
                    <div className="font-bold">催行決定日</div>
                    <div className="text-white/80">2026年5月18日</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <div className="font-bold">申し込み締め切り</div>
                    <div className="text-white/80">2026年5月末</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <div className="font-bold">最少催行人数</div>
                    <div className="text-white/80">10名（最大20名程度）</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <div className="font-bold">1名様より申込可能</div>
                    <div className="text-white/80">お一人でも安心してご参加いただけます</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-black text-lg text-gray-800 mb-4">お電話でのお問い合わせ</h3>
              <a
                href="tel:099-213-0051"
                className="flex items-center gap-3 bg-orange-50 rounded-xl p-4 border border-orange-100 hover:bg-orange-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-black text-lg text-orange-600">099-213-0051</div>
                  <div className="text-xs text-gray-500">RaJA英会話スクール</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ─── STICKY NAV ─── */
function StickyNav() {
  const links = [
    { href: "#overview", label: "概要" },
    { href: "#details", label: "詳細" },
    { href: "#itinerary", label: "旅程" },
    { href: "#activities", label: "アクティビティ" },
    { href: "#school", label: "学校" },
    { href: "#past-programs", label: "実績" },
    { href: "#about", label: "運営" },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass shadow-lg border-b border-white/30"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <Link href="/" className="font-black text-orange-600 text-sm font-brand shrink-0">
          Let&apos;s Go English!
        </Link>
        <div className="hidden md:flex items-center gap-1 overflow-x-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-xs font-bold text-gray-600 hover:text-orange-600 transition-colors rounded-full hover:bg-orange-50 whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-shadow shrink-0"
        >
          お問い合わせ
        </a>
      </div>
    </motion.div>
  );
}

/* ─── MAIN EXPORT ─── */
export default function BaliCampaignPage() {
  return (
    <main className="bg-white">
      <StickyNav />
      <HeroSection />
      <HighlightsBar />
      <OverviewSection />
      <ProgramDetailsSection />
      <ItinerarySection />
      <ActivitiesSection />
      <SchoolSection />
      <PastProgramsSection />
      <AboutSection />
      <CancellationSection />
      <ContactCTASection />

      {/* Back to top */}
      <div className="text-center py-8 bg-gray-50 border-t border-gray-100">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-orange-600 transition-colors font-bold"
        >
          RaJA英会話スクール トップページへ戻る
        </Link>
      </div>
    </main>
  );
}
