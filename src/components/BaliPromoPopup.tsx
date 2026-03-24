"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const PROMO_IMAGE =
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/bali-campaign/promo-popup.webp";
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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative z-10 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close button */}
            <button
              onClick={handleClose}
              className="absolute -top-3 -right-3 z-20 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-500 hover:text-gray-800 hover:scale-110 transition-all border border-gray-200"
              aria-label="閉じる"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* clickable promo image */}
            <Link
              href={CAMPAIGN_PATH}
              onClick={handleClose}
              className="block rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow ring-4 ring-white/30"
            >
              <Image
                src={PROMO_IMAGE}
                alt="2026夏 バリ島短期留学プログラム - 詳しく見る"
                width={600}
                height={900}
                className="w-full h-auto"
                priority
              />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
