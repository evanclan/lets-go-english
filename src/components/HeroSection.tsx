"use client";

import { motion } from "framer-motion";

const floatingWords = [
  { word: "Hello!", x: "8%", y: "18%", delay: 0, color: "bg-orange-100 text-orange-600", rotate: -8 },
  { word: "Good Morning!", x: "75%", y: "12%", delay: 0.4, color: "bg-green-100 text-green-700", rotate: 6 },
  { word: "Thank you!", x: "82%", y: "55%", delay: 0.8, color: "bg-yellow-100 text-yellow-700", rotate: -5 },
  { word: "How are you?", x: "5%", y: "60%", delay: 1.2, color: "bg-teal-100 text-teal-700", rotate: 4 },
  { word: "ABC!", x: "60%", y: "80%", delay: 0.6, color: "bg-red-100 text-red-600", rotate: -6 },
  { word: "Nice to meet you!", x: "15%", y: "82%", delay: 1.0, color: "bg-purple-100 text-purple-600", rotate: 3 },
];

const bubbles = [
  { size: 80, x: "3%", y: "25%", delay: 0, duration: 4, color: "rgba(232,87,26,0.08)" },
  { size: 50, x: "92%", y: "35%", delay: 1, duration: 3.5, color: "rgba(61,139,61,0.08)" },
  { size: 120, x: "88%", y: "70%", delay: 0.5, duration: 5, color: "rgba(46,158,143,0.08)" },
  { size: 60, x: "10%", y: "70%", delay: 1.5, duration: 4.5, color: "rgba(245,194,0,0.1)" },
  { size: 90, x: "48%", y: "5%", delay: 0.8, duration: 3.8, color: "rgba(232,87,26,0.06)" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[65vh] lg:min-h-[72vh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #FFF9F0 0%, #FFF0E0 30%, #E8F8F4 65%, #F0FFF8 100%)",
      }}
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-60" />

      {/* Decorative bubbles */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            backgroundColor: b.color,
          }}
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Floating English words */}
      {floatingWords.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute hidden md:block px-4 py-2 rounded-full text-sm font-bold shadow-md pointer-events-none ${item.color}`}
          style={{ left: item.x, top: item.y, rotate: item.rotate }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: item.delay + 0.8, duration: 0.5 },
            scale: { delay: item.delay + 0.8, duration: 0.5 },
            y: { delay: item.delay, duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {item.word}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-10 pb-1 sm:pb-2 flex flex-col lg:flex-row items-center gap-7 lg:gap-0">
        {/* Left text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 border border-orange-200 text-orange-600 px-4 py-2 rounded-full text-sm font-bold shadow-sm mb-4"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            今すぐ無料体験レッスン受付中！
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-black leading-tight mb-4"
            style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif" }}
          >
            <span
              className="block text-5xl sm:text-6xl lg:text-7xl"
              style={{ color: "#E8571A", WebkitTextStroke: "2px rgba(232,87,26,0.2)" }}
            >
              Let&apos;s Go
            </span>
            <span
              className="block text-6xl sm:text-7xl lg:text-8xl"
              style={{ color: "#3D8B3D" }}
            >
              English!
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="text-xl sm:text-2xl font-bold text-gray-600 mb-2">
              RaJA 英会話スクール
            </p>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              楽しく・わかりやすく・自信を持って！<br />
              子どもから大人まで、あなたのペースで英語を学べる教室です。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-nowrap items-center gap-2 sm:gap-3 justify-center lg:justify-start"
          >
            <motion.a
              href="#contact"
              className="btn-primary !text-sm !px-4 !py-2 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎯 無料体験に申し込む
            </motion.a>
            <motion.a
              href="#courses"
              className="btn-secondary !text-sm !px-4 !py-2 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📚 コースを見る
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-7 flex items-center gap-4 justify-center lg:justify-start text-gray-500"
          >
            <div className="flex items-center gap-1.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-emerald-600 flex-shrink-0">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor" opacity="0.15"/>
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[13px] font-semibold text-gray-600">信頼の英会話教室</span>
            </div>

            <span className="w-px h-4 bg-gray-300" />

            <div className="flex items-center gap-1.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-amber-500 flex-shrink-0">
                <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor">10</text>
              </svg>
              <span className="text-[13px] font-semibold text-gray-600">年以上の指導実績</span>
            </div>
          </motion.div>
        </div>

        {/* Right — Ted Miller */}
        <div className="flex-1 flex justify-center items-end relative pt-8 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="relative flex flex-col items-center"
          >
            {/* Soft ground-glow halo */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-3xl opacity-25 pointer-events-none"
              style={{
                width: 320,
                height: 120,
                background: "radial-gradient(ellipse, #E8571A 0%, #F5C200 60%, transparent 100%)",
              }}
            />

            {/* Floating name badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.1, type: "spring", bounce: 0.5 }}
              className="relative z-20 mb-4"
            >
              <div
                className="relative px-6 py-3 rounded-2xl shadow-xl text-center"
                style={{
                  background: "linear-gradient(135deg, #E8571A 0%, #F5A623 100%)",
                  boxShadow: "0 8px 32px rgba(232,87,26,0.35), 0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                {/* Shiny top highlight */}
                <div className="absolute inset-x-3 top-1 h-px bg-white/40 rounded-full" />

                <p
                  className="text-white text-ｍ font-bold tracking-widest uppercase mb-0.5 opacity-90"
                  style={{ letterSpacing: "0.15em" }}
                >
                  校長
                </p>
                <p
                  className="text-white font-black tracking-wide"
                  style={{
                    fontFamily: "'Fredoka One', 'Nunito', sans-serif",
                    fontSize: "1.35rem",
                    textShadow: "0 1px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  TED MILLER
                </p>

                {/* Tail pointing down */}
                <div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0"
                  style={{
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderTop: "14px solid #F5A623",
                  }}
                />
              </div>

              {/* Subtle pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ border: "2px solid rgba(232,87,26,0.4)" }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Ted Miller photo */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src="/ted-miller.png"
                alt="校長先生 Ted Miller"
                className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] drop-shadow-2xl h-auto"
                style={{ objectFit: "contain", objectPosition: "bottom" }}
              />
            </motion.div>

            {/* Speech bubble */}
            <motion.div
              className="absolute top-[4.5rem] -right-6 sm:-right-10 bg-white rounded-2xl shadow-lg px-4 py-2 text-sm font-bold text-green-700 border-2 border-green-200 whitespace-nowrap z-30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, type: "spring" }}
              style={{ borderRadius: "16px 16px 4px 16px" }}
            >
              <span className="text-lg">👋</span> Nice to meet you!
            </motion.div>

            <motion.div
              className="absolute bottom-[30%] -left-6 sm:-left-10 bg-white rounded-2xl shadow-lg px-4 py-2 text-sm font-bold text-orange-700 border-2 border-orange-200 whitespace-nowrap z-30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0, type: "spring" }}
              style={{ borderRadius: "16px 16px 16px 4px" }}
            >
              <span className="text-lg">🌸</span> 楽しく学ぼう！
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom skill banner */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-7 md:bottom-8 z-20 w-[94%] max-w-6xl px-2 pointer-events-none"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.6 }}
      >
        
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Scroll</span>
        <motion.div
          className="w-0.5 h-10 bg-gradient-to-b from-orange-400 to-transparent rounded-full"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40 C240 0, 480 80, 720 40 C960 0, 1200 80, 1440 40 L1440 80 L0 80 Z"
            fill="white"
            fillOpacity="0.9"
          />
        </svg>
      </div>
    </section>
  );
}
