"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const messages = [
  "こんにちは！英語を一緒に学ぼう！🌟",
  "Hello! Ready to learn English? 🐸",
  "無料体験レッスン受付中です！✨",
  "楽しく英語が話せるようになりますよ！🌸",
];

export default function MascotWidget() {
  const [open, setOpen] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const nextMessage = () => {
    setMsgIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl border-2 border-orange-200 p-4 max-w-xs"
            style={{ borderRadius: "16px 16px 4px 16px" }}
          >
            <p className="text-sm font-bold text-gray-700 mb-3 leading-relaxed">
              {messages[msgIndex]}
            </p>
            <div className="flex gap-2">
              <button
                onClick={nextMessage}
                className="flex-1 bg-orange-50 text-orange-600 text-xs font-bold py-2 rounded-lg hover:bg-orange-100 transition-colors"
              >
                次のメッセージ →
              </button>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 bg-orange-500 text-white text-xs font-bold py-2 rounded-lg hover:bg-orange-600 transition-colors text-center"
              >
                体験申し込み
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-green-500 shadow-2xl flex items-center justify-center text-3xl relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        🐸
        {!open && (
          <motion.span
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            !
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
