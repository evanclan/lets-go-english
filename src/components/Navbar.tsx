"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "ホーム", labelEn: "Home", href: "#home" },
  { label: "コース", labelEn: "Courses", href: "#courses" },
  { label: "特徴", labelEn: "Features", href: "#features" },
  { label: "先生紹介", labelEn: "Teachers", href: "#teachers" },
  { label: "お声の声", labelEn: "Reviews", href: "#reviews" },
  { label: "お問い合わせ", labelEn: "Contact", href: "#contact" },
];

export default function Navbar() {
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
          <a
            href="#home"
            className="flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <Image
              src="/navbar-logo.png"
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
          </a>

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
            <motion.a
              href="#contact"
              className="btn-primary text-sm py-3 px-6 font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🎯</span>
              無料体験レッスン
            </motion.a>
          </div>

          <motion.button
            className="lg:hidden p-2 rounded-xl bg-orange-50 text-orange-600"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
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
                href="#contact"
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
