"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";

const teachers = [
  {
    name: "Chris",
    nameJp: "クリス先生",
    from: "Philippines",
    flag: "🇵🇭",
    role: "English Conversation Teacher",
    roleJp: "英会話先生",
    exp: "10+ Years",
    image: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/teachers/CHRIS.png",
    bio: "アメリカ出身のクリス先生は、楽しくエネルギッシュな授業で子どもたちに大人気。フォニックスと会話力を伸ばすプロフェッショナルです。",
    quote: "Let's have fun learning English together!",
    tags: ["英会話", "フォニックス", "キッズ英語"],
    color: {
      primary: "#E8571A",
      secondary: "#F5A623",
      light: "rgba(232,87,26,0.08)",
      border: "rgba(232,87,26,0.15)",
      tagBg: "rgba(232,87,26,0.08)",
      tagText: "#C44010",
      gradient: "linear-gradient(135deg, #FFF5ED 0%, #FFEBD6 100%)",
      ring: "rgba(232,87,26,0.12)",
    },
  },
  {
    name: "Maita",
    nameJp: "マイタ先生",
    from: "Philippines",
    flag: "🇵🇭",
    role: "English Conversation Teacher",
    roleJp: "英会話先生",
    exp: "5+ Years",
    image: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/teachers/MAITA.png",
    bio: "フィリピン出身のマイタ先生は、フォニックスと子ども英語教育のスペシャリスト。笑顔あふれるレッスンで生徒の可能性を広げます。",
    quote: "Every child can be a great English speaker!",
    tags: ["フォニックス", "キッズ英語", "ライティング"],
    color: {
      primary: "#7C3AED",
      secondary: "#A855F7",
      light: "rgba(124,58,237,0.08)",
      border: "rgba(124,58,237,0.15)",
      tagBg: "rgba(124,58,237,0.08)",
      tagText: "#6D28D9",
      gradient: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
      ring: "rgba(124,58,237,0.12)",
    },
  },
  {
    name: "Miwa",
    nameJp: "ミワ先生",
    from: "Japan",
    flag: "🇯🇵",
    role: "English Conversation Teacher",
    roleJp: "英会話先生",
    exp: "8+ Years",
    image: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/teachers/MIWA.png",
    bio: "日本語と英語のバイリンガル講師。初めて英語を学ぶ生徒にも安心のサポートで、自然な英語力を育てます。",
    quote: "一緒に英語の世界を楽しみましょう！",
    tags: ["初心者対応", "文法", "英検対策"],
    color: {
      primary: "#3D8B3D",
      secondary: "#52B252",
      light: "rgba(61,139,61,0.08)",
      border: "rgba(61,139,61,0.15)",
      tagBg: "rgba(61,139,61,0.08)",
      tagText: "#2A6B2A",
      gradient: "linear-gradient(135deg, #F0FFF0 0%, #DDFCDD 100%)",
      ring: "rgba(61,139,61,0.12)",
    },
  },
  {
    name: "Erika",
    nameJp: "エリカ先生",
    from: "Japan",
    flag: "🇯🇵",
    role: "English Conversation Teacher",
    roleJp: "英会話先生",
    exp: "6+ Years",
    image: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/teachers/ERIKA.png",
    bio: "フレンドリーで明るいエリカ先生は、実践的な英会話レッスンが得意。生徒の会話力を自然に引き出します。",
    quote: "English is fun when we speak it every day!",
    tags: ["日常英会話", "発音矯正", "リスニング"],
    color: {
      primary: "#2E9E8F",
      secondary: "#3DBFAE",
      light: "rgba(46,158,143,0.08)",
      border: "rgba(46,158,143,0.15)",
      tagBg: "rgba(46,158,143,0.08)",
      tagText: "#1E7A6E",
      gradient: "linear-gradient(135deg, #EDFCFA 0%, #D6F7F2 100%)",
      ring: "rgba(46,158,143,0.12)",
    },
  },
];

// Responsive carousel behavior
const MOBILE_BREAKPOINT = 768;
const MOBILE_VISIBLE = 2;
const DESKTOP_VISIBLE = 3;
const AUTO_SCROLL_MS = 2000; // Change this to adjust auto-scroll speed (milliseconds)
const SHOW_TEACHER_DETAILS = false; // Keep data but hide bio/quote/tags for now

function TeacherCard({ teacher }: { teacher: (typeof teachers)[0] }) {
  return (
    <div
      className="relative rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:-translate-y-3"
      style={{
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(20px)",
        border: `2px solid ${teacher.color.border}`,
        boxShadow: `0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.03)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 24px 60px ${teacher.color.light}, 0 8px 24px rgba(0,0,0,0.06)`;
        e.currentTarget.style.borderColor = `${teacher.color.primary}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.03)`;
        e.currentTarget.style.borderColor = teacher.color.border;
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${teacher.color.primary}, ${teacher.color.secondary})`,
        }}
      />

      {/* Photo area */}
      <div
        className="relative flex items-end justify-center pt-4 sm:pt-6 pb-0 overflow-hidden min-h-[290px] sm:min-h-[400px]"
        style={{ background: teacher.color.gradient }}
      >
        {/* Decorative rings */}
        <div
          className="absolute top-6 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full pointer-events-none"
          style={{ border: `3px solid ${teacher.color.ring}` }}
        />
        <div
          className="absolute top-1 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full pointer-events-none"
          style={{ border: `2px solid ${teacher.color.ring}`, opacity: 0.5 }}
        />

        {/* Soft glow behind photo */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse, ${teacher.color.primary}, transparent)`,
          }}
        />

        {/* Teacher photo */}
        <motion.div
          className="relative z-10 w-full flex items-end justify-center"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={teacher.image}
            alt={`${teacher.nameJp} - ${teacher.roleJp}`}
            width={400}
            height={460}
            className="w-auto h-[250px] sm:h-[380px] object-contain object-bottom drop-shadow-xl"
            style={{ filter: "drop-shadow(0 8px 28px rgba(0,0,0,0.14))" }}
          />
        </motion.div>

        {/* Country badge */}
        <div
          className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 sm:px-3 py-1.5 shadow-sm z-20"
          style={{ border: `1px solid ${teacher.color.border}` }}
        >
          <span className="text-base">{teacher.flag}</span>
          <span className="text-[10px] sm:text-xs font-bold text-gray-600">{teacher.from}</span>
        </div>

        {/* Experience badge */}
        <div
          className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1 sm:gap-1.5 rounded-full px-2.5 sm:px-3 py-1.5 shadow-sm z-20 text-white text-[10px] sm:text-xs font-bold"
          style={{
            background: `linear-gradient(135deg, ${teacher.color.primary}, ${teacher.color.secondary})`,
          }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {teacher.exp}
        </div>
      </div>

      {/* Info area */}
      <div className="px-4 sm:px-6 pt-4 sm:pt-5 pb-5 sm:pb-6">
        {/* Name + role */}
        <div className="text-center mb-3 sm:mb-4">
          <h3 className="text-xl sm:text-2xl font-black text-gray-800 mb-0.5">{teacher.nameJp}</h3>
          <p className="text-xs sm:text-sm font-bold tracking-wide" style={{ color: teacher.color.primary }}>
            {teacher.name}
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-px flex-1 max-w-[40px]" style={{ background: teacher.color.border }} />
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: teacher.color.tagBg, color: teacher.color.tagText }}
            >
              {teacher.roleJp}
            </span>
            <div className="h-px flex-1 max-w-[40px]" style={{ background: teacher.color.border }} />
          </div>
        </div>

        {SHOW_TEACHER_DETAILS && (
          <>
            {/* Bio */}
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 text-center">{teacher.bio}</p>

            {/* Quote */}
            <div
              className="relative rounded-xl px-4 py-3 mb-4"
              style={{ background: teacher.color.gradient }}
            >
              <span
                className="absolute top-1 left-3 text-3xl font-black leading-none pointer-events-none select-none"
                style={{ color: teacher.color.ring, fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </span>
              <p
                className="text-xs font-bold italic text-center pt-2"
                style={{ color: teacher.color.primary }}
              >
                {teacher.quote}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {teacher.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200"
                  style={{
                    background: teacher.color.tagBg,
                    color: teacher.color.tagText,
                    border: `1px solid ${teacher.color.border}`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function TeachersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(DESKTOP_VISIBLE);

  const duplicated = useMemo(() => [...teachers, ...teachers], []);
  const total = duplicated.length;
  const stepPct = 100 / total;
  const trackWidthPct = (100 / visible) * total;

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const syncVisible = () => {
      setVisible(media.matches ? MOBILE_VISIBLE : DESKTOP_VISIBLE);
    };
    syncVisible();
    media.addEventListener("change", syncVisible);
    return () => media.removeEventListener("change", syncVisible);
  }, []);

  const advance = useCallback(() => {
    setTransitioning(true);
    setCurrent((prev) => prev + 1);
  }, []);

  // Auto-scroll every 2 seconds
  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, AUTO_SCROLL_MS);
    return () => clearInterval(id);
  }, [advance, paused]);

  // When we reach the end of the original set, instantly reset to 0 after transition
  useEffect(() => {
    if (current === teachers.length) {
      const timeout = setTimeout(() => {
        setTransitioning(false);
        setCurrent(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [current]);

  // Re-enable transitions after instant reset
  useEffect(() => {
    if (!transitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitioning(true));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [transitioning]);

  const translateX = -(current * stepPct);

  // Dot indicator: which original teacher is the leftmost visible
  const activeIndex = current % teachers.length;

  return (
    <section
      id="teachers"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FFF9F0 0%, #FFF3E4 30%, #EDFAF6 65%, #F5FFF8 100%)",
      }}
    >
      {/* Background textures */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #E8571A, transparent 70%)",
          transform: "translate(20%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3D8B3D, transparent 70%)",
          transform: "translate(-25%, 25%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #2E9E8F, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 border border-orange-200 text-orange-600 px-5 py-2 rounded-full text-sm font-bold shadow-sm mb-5">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Our Amazing Teachers
          </div>
          <h2 className="section-title text-gray-900 mb-4">
            スクールの<span className="text-gradient-orange">中心</span>となる
            <span className="text-gradient-green">講師陣</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            経験豊富で情熱あふれる講師たちが、あなたの英語学習を全力でサポートします。
            <br className="hidden sm:block" />
            一人ひとりに寄り添った指導で、
            <strong className="text-gray-700">確実な成長</strong>をお約束します。
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-300" />
          <div className="w-2 h-2 rounded-full bg-orange-400" />
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-green-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-300" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 4 }}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* Track wrapper — clips overflow */}
          <div className="overflow-hidden">
            <div
              style={{
                width: `${trackWidthPct}%`,
                transform: `translateX(${translateX}%)`,
                transition: transitioning ? "transform 0.5s ease-in-out" : "none",
                display: "flex",
              }}
            >
              {duplicated.map((teacher, i) => (
                <div
                  key={`${teacher.name}-${i}`}
                  className="group px-2 sm:px-4 pb-4"
                  style={{
                    width: `${stepPct}%`,
                    flexShrink: 0,
                  }}
                >
                  <TeacherCard teacher={teacher} />
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={() => {
              setTransitioning(true);
              setCurrent((prev) => (prev === 0 ? teachers.length - 1 : prev - 1));
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-gray-100 hidden sm:flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-200 transition-all duration-200 hover:shadow-xl"
            aria-label="Previous teacher"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={advance}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-gray-100 hidden sm:flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-200 transition-all duration-200 hover:shadow-xl"
            aria-label="Next teacher"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-4">
          <button
            onClick={() => {
              setTransitioning(true);
              setCurrent((prev) => (prev === 0 ? teachers.length - 1 : prev - 1));
            }}
            className="w-10 h-10 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center text-gray-600"
            aria-label="Previous teacher"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={advance}
            className="w-10 h-10 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center text-gray-600"
            aria-label="Next teacher"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1 mt-8">
          {teachers.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setTransitioning(true);
                setCurrent(i);
              }}
              className="relative flex items-center justify-center transition-all duration-300"
              style={{
                width: "44px",
                height: "44px",
              }}
              aria-label={`Go to ${teachers[i].name}`}
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === i ? "28px" : "8px",
                  height: "8px",
                  background:
                    activeIndex === i
                      ? `linear-gradient(90deg, ${teachers[i].color.primary}, ${teachers[i].color.secondary})`
                      : "rgba(0,0,0,0.15)",
                }}
              />
            </button>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div
            className="relative inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-5 shadow-lg"
            style={{
              border: "2px solid rgba(232,87,26,0.12)",
              boxShadow: "0 8px 32px rgba(232,87,26,0.06), 0 2px 8px rgba(0,0,0,0.03)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1 rounded-t-2xl"
              style={{
                background: "linear-gradient(90deg, #E8571A, #7C3AED, #F5C200, #3D8B3D, #2E9E8F)",
              }}
            />
            <div className="flex -space-x-3">
              {teachers.map((t) => (
                <div
                  key={t.name}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md"
                  style={{ background: t.color.gradient }}
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm text-gray-700 font-bold">
                全講師が<strong className="text-orange-600">英語教育の資格</strong>を取得済み
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                子どもから大人まで、安心して学べる講師陣です
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
