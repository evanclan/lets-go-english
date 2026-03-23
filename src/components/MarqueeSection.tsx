"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const gallery = [
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/1.jpg",
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/3.jpg",
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/LINE_ALBUM_2025%20November_251215_92.jpg",
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/5.jpg",
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/LINE_ALBUM_COCO_240625_12.jpg",
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/2.jpg",
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/LINE_ALBUM_2025%20November_251215_362.jpg",
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/4.jpg",
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/LINE_ALBUM_2025%20December_251229_839.jpg",
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/LINE_ALBUM_2025%20November_251215_439.jpg",
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/51.jpg",
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/gallery/6.jpg",
];

const SPEED = 0.45; // px per frame

export default function MarqueeSection() {
  /* ── DOM refs ── */
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);

  /* ── behavioural refs (no re-render needed) ── */
  const loopWidth   = useRef(0);
  const isHovering  = useRef(false);
  const isDragging  = useRef(false);
  const didMove     = useRef(false);
  const dragStartX  = useRef(0);
  const dragStartSL = useRef(0);
  const clickedSrc  = useRef<string | null>(null);

  /* ── cursor state (needs re-render) ── */
  const [cursor, setCursor] = useState<"default" | "grab" | "grabbing">("default");

  /* ── lightbox ── */
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  /* ─────────────── loop width ─────────────── */
  const measureLoopWidth = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    const w = t.scrollWidth / 2;
    if (w > 0) loopWidth.current = w;
  }, []);

  useEffect(() => {
    measureLoopWidth();
    const ro = new ResizeObserver(measureLoopWidth);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measureLoopWidth);
    return () => { ro.disconnect(); window.removeEventListener("resize", measureLoopWidth); };
  }, [measureLoopWidth]);

  /* ─────────────── auto-scroll RAF ─────────────── */
  useEffect(() => {
    let raf: number;
    const tick = () => {
      const el = scrollerRef.current;
      const w  = loopWidth.current;
      if (el && w > 0 && !isHovering.current && !isDragging.current) {
        el.scrollLeft += SPEED;
        if (el.scrollLeft >= w) el.scrollLeft -= w;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ─────────────── hover ─────────────── */
  const onMouseEnter = () => {
    isHovering.current = true;
    setCursor("grab");
  };
  const onMouseLeave = () => {
    isHovering.current = false;
    if (!isDragging.current) setCursor("default");
  };

  /* ─────────────── drag ─────────────── */
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    isDragging.current  = true;
    didMove.current     = false;
    dragStartX.current  = e.clientX;
    dragStartSL.current = scrollerRef.current?.scrollLeft ?? 0;

    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>("button[data-src]");
    clickedSrc.current = btn?.dataset.src ?? null;

    e.currentTarget.setPointerCapture(e.pointerId);
    setCursor("grabbing");
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 4) didMove.current = true;

    if (!didMove.current) return; // tiny movement — don't scroll yet

    const el = scrollerRef.current;
    const w  = loopWidth.current;
    if (!el || w <= 0) return;

    let next = dragStartSL.current - dx;
    next = ((next % w) + w) % w;
    el.scrollLeft = next;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const wasDrag = didMove.current;
    const src = clickedSrc.current;
    isDragging.current = false;
    clickedSrc.current = null;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch { /* ok */ }
    setCursor(isHovering.current ? "grab" : "default");

    if (!wasDrag && src) setLightboxSrc(src);
  };

  /* ─────────────── lightbox keyboard close ─────────────── */
  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxSrc(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxSrc]);

  /* ─────────────── body scroll lock when lightbox open ─────────────── */
  useEffect(() => {
    document.body.style.overflow = lightboxSrc ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxSrc]);

  const doubled = [...gallery, ...gallery];
  const originalCount = gallery.length;

  return (
    <>
      {/* ═══════════════ MARQUEE STRIP ═══════════════ */}
      <section
        id="marquee"
        className="relative py-6 sm:py-8 overflow-hidden"
        style={{ backgroundColor: "var(--warm-white)" }}
      >
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
          {/* fade edges */}
          <div className="absolute left-0 inset-y-0 w-16 z-10 bg-gradient-to-r from-[#FFF9F0] to-transparent pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-16 z-10 bg-gradient-to-l from-[#FFF9F0] to-transparent pointer-events-none" />

          {/* scrollable track */}
          <div
            ref={scrollerRef}
            className="marquee-scroller overflow-x-scroll overflow-y-hidden select-none py-1"
            style={{ cursor, WebkitOverflowScrolling: "touch" }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div ref={trackRef} className="flex gap-3 w-max px-2">
              {doubled.map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  data-src={src}
                  aria-label="画像を拡大"
                  className="relative flex-shrink-0 w-[180px] h-[130px] sm:w-[220px] sm:h-[155px]
                             rounded-xl overflow-hidden shadow-md hover:shadow-xl
                             transition-all duration-300 focus-visible:outline-none
                             focus-visible:ring-2 focus-visible:ring-orange-400"
                >
                  <Image
                    src={src}
                    alt="教室の様子"
                    fill
                    sizes="220px"
                    loading={i < originalCount ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-500 hover:scale-110 pointer-events-none"
                    draggable={false}
                    onLoad={measureLoopWidth}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ LIGHTBOX ═══════════════ */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={() => setLightboxSrc(null)}
          >
            <motion.div
              key="lightbox-image"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxSrc(null)}
                className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white/15
                           hover:bg-white/30 border border-white/30 text-white
                           flex items-center justify-center transition-colors duration-200
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="閉じる"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"
                     strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl"
                   style={{ aspectRatio: "4/3" }}>
                <Image
                  src={lightboxSrc}
                  alt="教室の様子"
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
