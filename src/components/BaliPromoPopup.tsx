"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const PROMO_IMAGE =
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/bali-campaign/buddy-lunch.webp";
const CAMPAIGN_PATH = "/campaign/bali-indonesia";
const STORAGE_KEY = "bali-promo-dismissed";
const DISMISS_HOURS = 24;

export default function BaliPromoPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname?.startsWith(CAMPAIGN_PATH)) return;

    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const ts = parseInt(dismissed, 10);
      if (Date.now() - ts < DISMISS_HOURS * 60 * 60 * 1000) return;
    }

    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-[#0f172a]/55 backdrop-blur-[6px]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", damping: 28, stiffness: 380 }}
            className="relative z-10 w-full max-w-[400px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute -right-2 -top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white text-slate-500 shadow-lg transition hover:scale-105 hover:text-slate-800"
              aria-label="閉じる"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* gradient frame */}
            <div className="rounded-2xl bg-gradient-to-br from-[var(--orange-light)] via-[#f59e0b] to-[var(--teal)] p-[2px] shadow-2xl shadow-orange-900/25">
              <div className="overflow-hidden rounded-[14px] bg-[var(--cream)]">
                {/* compact image strip — smaller painted area than full-bleed poster */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-200">
                  <Image
                    src={PROMO_IMAGE}
                    alt="バリ島プログラム — 現地の仲間とランチ"
                    fill
                    sizes="400px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <p className="font-nunito-only absolute bottom-2 left-3 right-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/95 drop-shadow-sm">
                    Bali × Buddy lunch
                  </p>
                </div>

                <div className="px-5 pb-5 pt-4 text-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500/15 to-teal-500/15 px-3 py-1 text-[11px] font-bold tracking-wide text-[var(--orange-dark)] ring-1 ring-orange-200/80">
                    <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--green)]" />
                    2026年夏 · 中高生グループ
                  </span>

                  <h2 className="font-brand mt-3 text-[1.35rem] font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl">
                    バリ島でバディと
                    <span className="text-gradient-orange"> 過ごす7日間</span>
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    現地校で学び、ランチのひとときから友情が始まる。
                    <br className="hidden sm:block" />
                    航空券・宿泊込みの短期留学プログラム。
                  </p>

                  <Link
                    href={CAMPAIGN_PATH}
                    onClick={handleClose}
                    className="font-brand mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] px-5 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-orange-500/35 transition hover:brightness-105 active:scale-[0.98]"
                  >
                    プログラム詳細を見る
                    <svg className="h-4 w-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-3 text-xs text-slate-400 underline-offset-2 hover:text-slate-600 hover:underline"
                  >
                    また今度見る
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
