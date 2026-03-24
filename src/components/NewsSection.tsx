"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NewsItem {
  date: string;
  tag: string;
  tagColor: string;
  title: string;
  href: string;
  isNew?: boolean;
}

const newsItems: NewsItem[] = [
  {
    date: "2026.03.24",
    tag: "プログラム",
    tagColor: "bg-teal-100 text-teal-700 border-teal-200",
    title: "【2026年夏】インドネシア・バリ島 現地校短期留学プログラム — 参加者募集中",
    href: "/campaign/bali-indonesia",
    isNew: true,
  },
];

export default function NewsSection() {
  return (
    <section className="relative py-5 sm:py-6 overflow-hidden" style={{ backgroundColor: "var(--warm-white)" }}>
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
        >
          <div className="flex items-stretch">
            {/* Label column */}
            <div className="hidden sm:flex items-center justify-center bg-gradient-to-b from-orange-500 to-amber-500 px-5 shrink-0">
              <span className="text-white text-xs font-black tracking-[0.15em] uppercase whitespace-nowrap [writing-mode:horizontal-tb]">
                NEWS
              </span>
            </div>

            {/* Mobile label — inline */}
            <div className="sm:hidden flex items-center pl-4 pr-2 shrink-0">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md">
                NEWS
              </span>
            </div>

            {/* News items */}
            <div className="flex-1 min-w-0 divide-y divide-gray-50">
              {newsItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group flex items-center gap-3 px-4 py-3.5 hover:bg-orange-50/50 transition-colors duration-200"
                >
                  {item.isNew && (
                    <span className="shrink-0 inline-flex items-center justify-center bg-red-500 text-white text-[9px] font-black tracking-wide uppercase w-10 h-5 rounded-full animate-pulse">
                      NEW
                    </span>
                  )}

                  <time className="shrink-0 text-[11px] sm:text-xs text-gray-400 font-bold tabular-nums">
                    {item.date}
                  </time>

                  <span className={`shrink-0 hidden sm:inline-flex text-[10px] font-bold px-2 py-0.5 rounded-md border ${item.tagColor}`}>
                    {item.tag}
                  </span>

                  <span className="min-w-0 truncate text-xs sm:text-sm font-bold text-gray-700 group-hover:text-orange-600 transition-colors duration-200">
                    {item.title}
                  </span>

                  <svg
                    className="shrink-0 w-3.5 h-3.5 text-gray-300 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all duration-200 ml-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
