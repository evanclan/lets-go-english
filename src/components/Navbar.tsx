"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const homeSectionLinksBeforeConcept = [
  { label: "特徴", labelEn: "Features", id: "features" as const },
  { label: "先生紹介", labelEn: "Teachers", id: "teachers" as const },
  { label: "体験談", labelEn: "Experiences", id: "experiences" as const },
] as const;

export default function Navbar() {
  const pathname = usePathname() ?? "";
  const isHome = pathname === "/";
  const hashHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const navLinks = [
    { label: "プラン＆料金", labelEn: "Plan & Fees", href: "/plan-fees/" },
    ...homeSectionLinksBeforeConcept.map((l) => ({
      label: l.label,
      labelEn: l.labelEn,
      href: hashHref(l.id),
    })),
    { label: "コンセプト", labelEn: "Concept", href: "/concept" },
    { label: "お問い合わせ", labelEn: "Contact", href: hashHref("contact") },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-orange-100/50 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Navbar brand logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <Image
              src="https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/navbar-logo.png"
              alt="Let's Go English mascot logo"
              width={150}
              height={75}
              className="h-14 w-auto object-contain"
              priority
            />
            <div className="leading-tight">
              <div
                className="font-black text-orange-600 text-lg sm:text-xl tracking-tight"
                style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif" }}
              >
                Let&apos;s Go English!
              </div>
              <div className="hidden sm:block text-xs font-bold text-gray-500 -mt-0.5">
                RaJA 英会話スクール
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="group relative px-4 py-2 rounded-full text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                <span className="block text-xs text-gray-400 group-hover:text-orange-400 transition-colors leading-none mb-0.5">
                  {link.labelEn}
                </span>
                <span>{link.label}</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 group-hover:w-4/5" />
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/RGA.0051/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md border border-gray-100 text-[#1877F2] hover:scale-110 hover:shadow-lg transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/raja.englishclass/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md border border-gray-100 text-[#E4405F] hover:scale-110 hover:shadow-lg transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <motion.a
              href={hashHref("contact")}
              className="btn-primary text-sm py-3 px-6 font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🎯</span>
              無料体験レッスン
            </motion.a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://www.facebook.com/RGA.0051/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-md border border-gray-100 text-[#1877F2] hover:scale-110 transition-all duration-200"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/raja.englishclass/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-md border border-gray-100 text-[#E4405F] hover:scale-110 transition-all duration-200"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <motion.button
              className="p-2 rounded-xl bg-orange-50 text-orange-600"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={menuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="block h-0.5 bg-orange-600 rounded-full origin-center"
                  animate={menuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block h-0.5 bg-orange-600 rounded-full"
                  animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                />
                <motion.span
                  className="block h-0.5 bg-orange-600 rounded-full origin-center"
                  animate={menuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 glass shadow-2xl border-t border-orange-100 lg:hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 text-gray-700 font-bold transition-colors"
                >
                  <span className="text-xs text-gray-400 w-16">{link.labelEn}</span>
                  <span>{link.label}</span>
                </a>
              ))}
              <a
                href={hashHref("contact")}
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-2 justify-center"
              >
                🎯 無料体験レッスン
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
