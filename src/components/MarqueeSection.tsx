"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gallery = [
  "/gallery/1.jpg",
  "/gallery/LINE_ALBUM_2025 November_251215_439.jpg",
  "/gallery/3.jpg",
  "/gallery/LINE_ALBUM_2025 November_251215_92.jpg",
  "/gallery/5.jpg",
  "/gallery/LINE_ALBUM_COCO_240625_12.jpg",
  "/gallery/2.jpg",
  "/gallery/LINE_ALBUM_2025 November_251215_362.jpg",
  "/gallery/4.jpg",
  "/gallery/LINE_ALBUM_2025 December_251229_839.jpg",
  "/gallery/6.jpg",
  "/gallery/LINE_ALBUM_2025 November_251215_554.jpg",
];

export default function MarqueeSection() {
  const doubled = [...gallery, ...gallery];

  return (
    <section className="relative py-6 sm:py-8 overflow-hidden" style={{ backgroundColor: "var(--warm-white)" }}>
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-4"
      >
        <span className="inline-flex items-center gap-2 bg-white/80 border border-orange-200 text-orange-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-sm">
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
          教室の様子
        </span>
      </motion.div>

      <div className="relative z-10 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#FFF9F0] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#FFF9F0] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {doubled.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[180px] h-[130px] sm:w-[220px] sm:h-[155px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={src}
                alt="教室の様子"
                fill
                sizes="220px"
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
