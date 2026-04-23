/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Posts — バリ島 現地校短期留学",
  robots: { index: false, follow: false },
};

const R2 = "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev";
const CDN = `${R2}/bali-campaign`;

/**
 * Instagram post generator for the Bali Indonesia campaign landing page.
 * Screenshot each 1080×1080 square for upload to @letsgo_english.
 *
 * One square per landing-page section:
 *  1. Hero (cover)
 *  2. Program Overview
 *  3. Program Details & Pricing
 *  4. Itinerary (8 days)
 *  5. Activities
 *  6. Partner School (SMA Negeri 1 Tabanan)
 *  7. Past Programs
 *  8. Final CTA
 */

/* ────────── shared tokens ────────── */

const BRAND = {
  teal: "#0D9488",
  tealRgb: "13,148,136",
  emerald: "#10B981",
  orange: "#F97316",
  orangeRgb: "249,115,22",
  amber: "#F59E0B",
  amberRgb: "245,158,11",
  gold: "#FCD34D",
  ink: "#0F172A",
};

const gradientTeal = `linear-gradient(135deg, ${BRAND.teal} 0%, ${BRAND.emerald} 100%)`;
const gradientOrange = `linear-gradient(135deg, ${BRAND.orange} 0%, ${BRAND.amber} 50%, ${BRAND.gold} 100%)`;

const fontBody = "var(--font-noto-sans-jp), sans-serif";
const fontBrand = "var(--font-fredoka-one), sans-serif";

/* ────────── Reusable square frame ────────── */

type FrameProps = {
  index: number;
  total: number;
  accentRgb: string;
  accentGradient: string;
  children: React.ReactNode;
  bottomCtaLabel?: string;
  bottomCtaHandle?: string;
  bottomTagline?: string;
};

function Square({
  index,
  total,
  accentRgb,
  accentGradient,
  children,
  bottomCtaLabel = "詳細はプロフィールリンクから",
  bottomCtaHandle = "@letsgo_english",
  bottomTagline = "運営：株式会社RaJA",
}: FrameProps) {
  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        background: "#fff",
        flexShrink: 0,
        fontFamily: fontBody,
        boxShadow: "0 4px 28px rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* top accent bar */}
      <div style={{ height: 8, width: "100%", background: accentGradient, flexShrink: 0 }} />

      {/* content fills the middle */}
      <div style={{ position: "relative", flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        {children}
      </div>

      {/* left accent stripe */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 8,
          bottom: 64,
          width: 5,
          background: accentGradient,
          zIndex: 3,
        }}
      />

      {/* brand footer */}
      <div
        style={{
          flexShrink: 0,
          height: 64,
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: `1px solid rgba(${accentRgb},0.12)`,
          background: `linear-gradient(to right, rgba(${accentRgb},0.05), #fff 60%)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src={`${R2}/navbar-logo.png`} alt="Let's Go English" style={{ height: 34 }} />
          <div>
            <p
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: "#1a1a1a",
                lineHeight: 1.1,
                fontFamily: fontBrand,
              }}
            >
              Let&apos;s Go English!
            </p>
            <p style={{ fontSize: 10, color: "#888", fontWeight: 600, letterSpacing: 0.4 }}>
              {bottomTagline}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: "#888",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {bottomCtaLabel}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: accentGradient,
              borderRadius: 999,
              padding: "6px 14px",
              color: "#fff",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 0.6,
            }}
          >
            {bottomCtaHandle}
          </div>
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#999",
              letterSpacing: 1,
              minWidth: 40,
              textAlign: "right",
            }}
          >
            {index} / {total}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ────────── SLIDE 1 — HERO ────────── */
/* Image-forward cover. Sunset + big type. Screen-stopper. */

function HeroSlide({ index, total }: { index: number; total: number }) {
  return (
    <Square
      index={index}
      total={total}
      accentRgb={BRAND.orangeRgb}
      accentGradient={gradientOrange}
      bottomCtaLabel="プロフィールリンクから詳細"
    >
      {/* Full-bleed background */}
      <img
        src={`${CDN}/tanah-lot-sunset.webp`}
        alt="バリ島タナロット寺院の夕日"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      {/* Cinematic overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(12,10,9,0.55) 0%, rgba(12,10,9,0.15) 35%, rgba(12,10,9,0.35) 65%, rgba(12,10,9,0.88) 100%)",
        }}
      />
      {/* Glow in top right */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(252,211,77,0.35), transparent 70%)",
        }}
      />

      {/* Top meta row */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 40,
          right: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 20px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#34D399",
              boxShadow: "0 0 12px rgba(52,211,153,0.9)",
            }}
          />
          <span style={{ color: "#fff", fontSize: 13, fontWeight: 800, letterSpacing: 1 }}>
            2026年夏 参加者募集中
          </span>
        </div>
        <div
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.7)",
            fontWeight: 800,
            letterSpacing: 2.5,
            textTransform: "uppercase",
          }}
        >
          International School Program
        </div>
      </div>

      {/* Center stack */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "40%",
          transform: "translateY(-50%)",
          padding: "0 52px",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#FCD34D",
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 14,
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          BALI · INDONESIA
        </p>
        <h1
          style={{
            fontSize: 108,
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: -2,
            marginBottom: 18,
          }}
        >
          <span
            style={{
              display: "block",
              color: "#fff",
              textShadow: "0 4px 24px rgba(0,0,0,0.6)",
            }}
          >
            現地校
          </span>
          <span
            style={{
              display: "block",
              color: "#FBBF24",
              background: "linear-gradient(90deg, #FCD34D 0%, #FBBF24 50%, #F59E0B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 18px rgba(0,0,0,0.55))",
            }}
          >
            短期留学
          </span>
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.92)",
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: 4,
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          中高生グループプログラム
        </p>
      </div>

      {/* Bottom facts */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          right: 40,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {[
            { k: "DATE", v: "2026.8.9 → 8.16", sub: "7泊8日" },
            { k: "LOCATION", v: "バリ州タバナン県", sub: "SMA Negeri 1 Tabanan" },
            { k: "PRICE", v: "¥364,000", sub: "オールインクルーシブ" },
          ].map((f) => (
            <div
              key={f.k}
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 18,
                padding: "16px 18px",
                backdropFilter: "blur(14px)",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 900,
                  color: "#FCD34D",
                  letterSpacing: 2.5,
                  marginBottom: 6,
                }}
              >
                {f.k}
              </div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 4 }}>
                {f.v}
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 700 }}>
                {f.sub}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["#バリ島留学", "#中高生留学", "#夏休み海外", "#現地校体験", "#短期留学"].map((t) => (
            <span
              key={t}
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: "#fff",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 8,
                padding: "6px 12px",
                backdropFilter: "blur(8px)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Square>
  );
}

/* ────────── SLIDE 2 — OVERVIEW ────────── */
/* 3 pillars + hero photo. "観光旅行では体験できない本物の国際交流" */

function OverviewSlide({ index, total }: { index: number; total: number }) {
  const pillars = [
    {
      icon: "🤝",
      title: "バディプログラム",
      desc: "日本人3〜5名にバリ生徒1名が全日程同行",
      highlight: "3〜5 : 1",
      highlightLabel: "バディ比率",
    },
    {
      icon: "🎭",
      title: "異文化を体感",
      desc: "バリ語講座・伝統舞踊・ガムラン演奏など多彩な文化体験",
      highlight: "8+",
      highlightLabel: "文化体験",
    },
    {
      icon: "🛡️",
      title: "教育省公認",
      desc: "現地校の先生が全日程同行・専用車送迎で初海外も安心",
      highlight: "100%",
      highlightLabel: "引率・送迎",
    },
  ];

  return (
    <Square index={index} total={total} accentRgb={BRAND.tealRgb} accentGradient={gradientTeal}>
      {/* Top hero image band */}
      <div style={{ position: "relative", height: 380, flexShrink: 0 }}>
        <img
          src={`${CDN}/classroom-interaction.webp`}
          alt="バリの現地校でバディと交流する日本人生徒"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(15,23,42,0.25) 0%, rgba(15,23,42,0.0) 50%, rgba(255,255,255,1) 100%)",
          }}
        />

        <div style={{ position: "absolute", top: 30, left: 44, right: 44, display: "flex", justifyContent: "space-between" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.9)",
              color: BRAND.teal,
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: 2,
            }}
          >
            PROGRAM OVERVIEW · プログラム概要
          </span>
          <span
            style={{
              background: "rgba(15,23,42,0.55)",
              color: "#fff",
              padding: "8px 14px",
              borderRadius: 10,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1.5,
              backdropFilter: "blur(6px)",
            }}
          >
            02 / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Title block overlapping */}
      <div style={{ padding: "28px 50px 0", marginTop: -70, position: "relative", zIndex: 2 }}>
        <h2
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: "#0F172A",
            lineHeight: 1.2,
            letterSpacing: -1,
            textAlign: "center",
          }}
        >
          観光旅行では体験できない、
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #F97316 0%, #F59E0B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            本物の国際交流
          </span>
          を。
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#64748B",
            fontSize: 18,
            fontWeight: 600,
            marginTop: 14,
            lineHeight: 1.6,
          }}
        >
          バリ州タバナン県の現地高校で、同世代バディと共に学び・遊び・文化を体験する
          <br />
          <span style={{ color: "#0F172A", fontWeight: 900 }}>8日間</span>のプログラム。
        </p>
      </div>

      {/* 3 pillars */}
      <div style={{ flex: 1, padding: "28px 44px 28px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {pillars.map((p) => (
            <div
              key={p.title}
              style={{
                position: "relative",
                background: "#fff",
                border: `2px solid rgba(${BRAND.tealRgb},0.15)`,
                borderRadius: 20,
                padding: "22px 20px",
                boxShadow: "0 6px 20px rgba(13,148,136,0.08)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  background: `rgba(${BRAND.tealRgb},0.06)`,
                }}
              />
              <div style={{ fontSize: 40, marginBottom: 10 }}>{p.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 900, color: "#0F172A", marginBottom: 6, lineHeight: 1.3 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13, color: "#64748B", fontWeight: 600, lineHeight: 1.55, minHeight: 60 }}>
                {p.desc}
              </p>
              <div
                style={{
                  marginTop: 12,
                  paddingTop: 12,
                  borderTop: `1px dashed rgba(${BRAND.tealRgb},0.25)`,
                  display: "flex",
                  alignItems: "baseline",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 900,
                    color: BRAND.teal,
                    fontFamily: fontBrand,
                    lineHeight: 1,
                  }}
                >
                  {p.highlight}
                </span>
                <span style={{ fontSize: 10, fontWeight: 800, color: "#94A3B8", letterSpacing: 1.2, textTransform: "uppercase" }}>
                  {p.highlightLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Square>
  );
}

/* ────────── SLIDE 3 — PROGRAM DETAILS & PRICING ────────── */

function DetailsSlide({ index, total }: { index: number; total: number }) {
  const details = [
    { icon: "📅", label: "開催時期", value: "8/9 → 8/16", sub: "7泊8日" },
    { icon: "📍", label: "開催地", value: "バリ州タバナン県", sub: "自然と文化が残る地域" },
    { icon: "🎒", label: "対象", value: "中学生・高校生", sub: "英語レベル不問" },
    { icon: "👥", label: "定員", value: "10〜20名", sub: "1名様からOK" },
    { icon: "🏫", label: "提携校", value: "SMAN 1 Tabanan", sub: "名門公立高校" },
    { icon: "🏨", label: "宿泊", value: "ホテル 2名/室", sub: "専用車送迎" },
  ];

  const included = [
    "現地校 入学金・授業料・教材費",
    "旅程記載のアクティビティ費用",
    "ホテル宿泊費（3食付）",
    "現地空港 往復送迎",
    "日本人コーディネーター引率",
  ];

  return (
    <Square index={index} total={total} accentRgb={BRAND.orangeRgb} accentGradient={gradientOrange}>
      {/* Hero price band */}
      <div
        style={{
          position: "relative",
          padding: "44px 50px 40px",
          background: "linear-gradient(135deg, #F97316 0%, #F59E0B 55%, #FCD34D 100%)",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
          <div>
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 900,
                color: "#fff",
                letterSpacing: 3,
                background: "rgba(255,255,255,0.2)",
                padding: "5px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.35)",
                marginBottom: 14,
              }}
            >
              PROGRAM DETAILS · プログラム詳細
            </span>
            <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, fontWeight: 800, marginBottom: 4 }}>
              8日間オールインクルーシブ
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
              <span style={{ color: "#fff", fontSize: 36, fontWeight: 900 }}>¥</span>
              <span
                style={{
                  color: "#fff",
                  fontSize: 110,
                  fontWeight: 900,
                  letterSpacing: -3,
                  fontFamily: fontBrand,
                  lineHeight: 1,
                  textShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
              >
                364,000
              </span>
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 22, fontWeight: 900, marginLeft: 10 }}>
                税込
              </span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, fontWeight: 700, marginTop: 4 }}>
              1名あたり ・ 1日あたり 約 45,500円
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 170 }}>
            {[
              { k: "催行決定日", v: "5 / 18" },
              { k: "申込締切", v: "5月末" },
              { k: "残り枠", v: "受付中" },
            ].map((d) => (
              <div
                key={d.k}
                style={{
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: 14,
                  padding: "10px 16px",
                  backdropFilter: "blur(8px)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.8)", fontWeight: 900, letterSpacing: 2, marginBottom: 2 }}>
                  {d.k}
                </div>
                <div style={{ color: "#fff", fontSize: 22, fontWeight: 900, letterSpacing: -0.5 }}>
                  {d.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Details grid */}
      <div style={{ padding: "24px 44px 18px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {details.map((d) => (
            <div
              key={d.label}
              style={{
                background: "#fff",
                border: "1.5px solid #F1F5F9",
                borderRadius: 16,
                padding: "14px 16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 20 }}>{d.icon}</span>
                <span style={{ fontSize: 10, fontWeight: 900, color: "#94A3B8", letterSpacing: 1.5, textTransform: "uppercase" }}>
                  {d.label}
                </span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 900, color: "#0F172A", lineHeight: 1.2, marginBottom: 2 }}>
                {d.value}
              </div>
              <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 700 }}>{d.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Included list */}
      <div style={{ padding: "4px 44px 16px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #ECFDF5 0%, #F0FDFA 100%)",
            border: "2px solid #A7F3D0",
            borderRadius: 20,
            padding: "18px 22px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "linear-gradient(135deg, #10B981, #0D9488)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 16,
                fontWeight: 900,
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 900, color: "#065F46" }}>料金に含まれるもの（コミコミ！）</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
            {included.map((text) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#fff",
                  border: "1px solid #D1FAE5",
                  borderRadius: 10,
                  padding: "9px 12px",
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#065F46",
                  lineHeight: 1.3,
                }}
              >
                <span style={{ color: "#10B981", fontWeight: 900 }}>◉</span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Square>
  );
}

/* ────────── SLIDE 4 — ITINERARY ────────── */

function ItinerarySlide({ index, total }: { index: number; total: number }) {
  const days = [
    { day: 1, date: "8/9", title: "日本出発", emoji: "✈️", color: "#3B82F6" },
    { day: 2, date: "8/10", title: "歓迎セレモニー\nスクールツアー", emoji: "🎉", color: "#14B8A6" },
    { day: 3, date: "8/11", title: "サーフィン体験\nクタダウンタウン", emoji: "🏄", color: "#06B6D4" },
    { day: 4, date: "8/12", title: "伝統舞踊\nガムラン演奏", emoji: "🎭", color: "#A855F7" },
    { day: 5, date: "8/13", title: "バリ語講座\nタナロット寺院夕日", emoji: "🌅", color: "#F59E0B" },
    { day: 6, date: "8/14", title: "世界遺産棚田\nケチャックダンス", emoji: "🌾", color: "#22C55E" },
    { day: 7, date: "8/15", title: "お土産\nバリ島出発", emoji: "🛍️", color: "#EF4444" },
    { day: 8, date: "8/16", title: "福岡空港到着", emoji: "🏡", color: "#64748B" },
  ];

  return (
    <Square index={index} total={total} accentRgb={BRAND.orangeRgb} accentGradient={gradientOrange}>
      {/* Title */}
      <div style={{ padding: "40px 50px 10px", textAlign: "center" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: 12,
            fontWeight: 900,
            color: BRAND.orange,
            letterSpacing: 3,
            padding: "5px 16px",
            borderRadius: 999,
            background: "#FFF7ED",
            border: "1.5px solid #FED7AA",
            marginBottom: 16,
          }}
        >
          ITINERARY · 8日間の旅程
        </span>
        <h2 style={{ fontSize: 52, fontWeight: 900, color: "#0F172A", letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 8 }}>
          8日間の
          <span
            style={{
              background: "linear-gradient(90deg, #F97316 0%, #F59E0B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            冒険スケジュール
          </span>
        </h2>
        <p style={{ fontSize: 16, color: "#64748B", fontWeight: 600, lineHeight: 1.55 }}>
          授業 × アクティビティ × 文化体験。<br />1日ずつ、バリの魅力を体感していく8日間。
        </p>
      </div>

      {/* Days grid */}
      <div style={{ flex: 1, padding: "20px 50px 28px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {days.map((d) => (
            <div
              key={d.day}
              style={{
                position: "relative",
                borderRadius: 18,
                overflow: "hidden",
                border: `2px solid ${d.color}25`,
                background: "#fff",
                boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                padding: "16px 14px 18px",
                minHeight: 168,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: d.color,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: -18,
                  right: -18,
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: `${d.color}0F`,
                }}
              />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 900,
                      color: d.color,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    Day
                  </div>
                  <div
                    style={{
                      fontSize: 34,
                      fontWeight: 900,
                      color: "#0F172A",
                      fontFamily: fontBrand,
                      lineHeight: 1,
                    }}
                  >
                    {d.day}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#94A3B8", marginTop: 2 }}>
                    {d.date}
                  </div>
                </div>
                <div style={{ fontSize: 26 }}>{d.emoji}</div>
              </div>

              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#0F172A",
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                  marginTop: 10,
                }}
              >
                {d.title}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight badge */}
        <div
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: "linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 100%)",
            border: "2px solid #FED7AA",
            borderRadius: 16,
            padding: "14px 20px",
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              background: gradientOrange,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              flexShrink: 0,
            }}
          >
            🤝
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: "#9A3412", lineHeight: 1.3 }}>
              全日程、現地高校生バディが同行（3〜5 : 1）
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#C2410C", marginTop: 2 }}>
              授業もアクティビティもずっと一緒 → 自然と友情が育つ
            </div>
          </div>
        </div>
      </div>
    </Square>
  );
}

/* ────────── SLIDE 5 — ACTIVITIES ────────── */

function ActivitiesSlide({ index, total }: { index: number; total: number }) {
  const cells = [
    { src: `${CDN}/surfing-lesson.webp`, label: "サーフィン", tag: "⛱️ Nature" },
    { src: `${CDN}/gamelan-experience.webp`, label: "ガムラン演奏", tag: "🎵 Culture" },
    { src: `${CDN}/tanah-lot-temple.webp`, label: "タナロット寺院", tag: "🌅 Heritage" },
    { src: `${CDN}/jatiluwih-rice-terraces.webp`, label: "世界遺産 棚田", tag: "🌾 UNESCO" },
    { src: `${CDN}/gebogan-offerings.webp`, label: "ゲボガン作り", tag: "🍎 Tradition" },
    { src: `${CDN}/kecak-dance-fire.webp`, label: "ケチャックダンス", tag: "🔥 Art" },
  ];

  return (
    <Square index={index} total={total} accentRgb={BRAND.tealRgb} accentGradient={gradientTeal}>
      {/* Title */}
      <div style={{ padding: "36px 50px 14px", textAlign: "center" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: 12,
            fontWeight: 900,
            color: BRAND.teal,
            letterSpacing: 3,
            padding: "5px 16px",
            borderRadius: 999,
            background: "#ECFDF5",
            border: "1.5px solid #A7F3D0",
            marginBottom: 14,
          }}
        >
          ACTIVITIES · 文化体験
        </span>
        <h2 style={{ fontSize: 50, fontWeight: 900, color: "#0F172A", letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 8 }}>
          観光では味わえない
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #0D9488 0%, #10B981 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            豊富な文化体験
          </span>
        </h2>
      </div>

      {/* 3x2 image collage */}
      <div style={{ flex: 1, padding: "12px 44px 10px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 14, height: "100%" }}>
          {cells.map((c) => (
            <div
              key={c.label}
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(13,148,136,0.18)",
              }}
            >
              <img
                src={c.src}
                alt={c.label}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.75) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  fontSize: 10,
                  fontWeight: 900,
                  color: "#fff",
                  background: "rgba(13,148,136,0.85)",
                  padding: "4px 10px",
                  borderRadius: 999,
                  letterSpacing: 1.5,
                  backdropFilter: "blur(6px)",
                }}
              >
                {c.tag}
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: 16,
                  right: 16,
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: 900,
                  letterSpacing: -0.4,
                  textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                }}
              >
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tag strip */}
      <div style={{ padding: "10px 44px 24px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            background: "linear-gradient(135deg, #F0FDFA, #ECFDF5)",
            borderRadius: 14,
            padding: "12px 18px",
            border: "1.5px solid #A7F3D0",
          }}
        >
          {[
            "#バリ伝統舞踊",
            "#ガムラン",
            "#サーフィン",
            "#ロンタル",
            "#ゲボガン",
            "#タナロット寺院",
            "#ジャティルウィ棚田",
            "#ケチャックダンス",
            "#メラスティビーチ",
          ].map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: BRAND.teal,
                background: "#fff",
                border: "1px solid #A7F3D0",
                borderRadius: 8,
                padding: "5px 10px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Square>
  );
}

/* ────────── SLIDE 6 — PARTNER SCHOOL ────────── */

function SchoolSlide({ index, total }: { index: number; total: number }) {
  const stats = [
    { k: "1961", label: "創立" },
    { k: "1,400+", label: "生徒数" },
    { k: "A", label: "学校評価" },
    { k: "TOP", label: "バリ州ランク" },
  ];

  const features = [
    "バリ州を代表する名門公立高校",
    "理系・文系の両コース対応",
    "最新「自由カリキュラム」採用",
    "大学入試で州内上位スコア",
    "日本語選択クラス・日本クラブあり",
  ];

  return (
    <Square index={index} total={total} accentRgb={BRAND.tealRgb} accentGradient={gradientTeal}>
      {/* Image hero on top half */}
      <div style={{ position: "relative", height: 480, flexShrink: 0 }}>
        <img
          src={`${CDN}/school-building.webp`}
          alt="SMA Negeri 1 Tabanan 校舎"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(6,78,59,0.55) 0%, rgba(6,78,59,0.1) 40%, rgba(6,78,59,0.65) 100%)",
          }}
        />

        {/* top meta */}
        <div style={{ position: "absolute", top: 30, left: 44, right: 44, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.95)",
              color: BRAND.teal,
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: 2.5,
            }}
          >
            PARTNER SCHOOL · 提携校
          </span>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 14px",
              borderRadius: 10,
              background: "rgba(252,211,77,0.95)",
              color: "#78350F",
              fontSize: 11,
              fontWeight: 900,
              letterSpacing: 1.5,
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
            }}
          >
            🏅 教育省公認プログラム
          </div>
        </div>

        {/* hero school name */}
        <div style={{ position: "absolute", bottom: 34, left: 50, right: 50, color: "#fff" }}>
          <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: 3, color: "#FCD34D", marginBottom: 6 }}>
            INDONESIA · BALI · TABANAN
          </div>
          <h2
            style={{
              fontSize: 60,
              fontWeight: 900,
              letterSpacing: -1.8,
              lineHeight: 1.02,
              textShadow: "0 3px 16px rgba(0,0,0,0.45)",
              marginBottom: 6,
            }}
          >
            SMA Negeri 1 Tabanan
          </h2>
          <div style={{ fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>
            タバナン県を代表する名門公立高校
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ padding: "22px 44px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 10,
            background: "linear-gradient(135deg, #F0FDFA 0%, #ECFDF5 100%)",
            border: "2px solid #A7F3D0",
            borderRadius: 20,
            padding: "18px 14px",
          }}
        >
          {stats.map((s, i) => (
            <div key={s.label} style={{ textAlign: "center", position: "relative" }}>
              {i > 0 && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "12%",
                    bottom: "12%",
                    width: 1,
                    background: "#99F6E4",
                  }}
                />
              )}
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 900,
                  color: BRAND.teal,
                  fontFamily: fontBrand,
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {s.k}
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#0F766E", letterSpacing: 1.5, textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features list */}
      <div style={{ flex: 1, padding: "18px 44px 22px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3 style={{ fontSize: 16, fontWeight: 900, color: "#0F172A", marginBottom: 12, letterSpacing: 0.5 }}>
          学校の特徴
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
          {features.map((f) => (
            <div
              key={f}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#fff",
                border: "1.5px solid #E2E8F0",
                borderRadius: 12,
                padding: "10px 14px",
                fontSize: 13,
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.3,
                boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: gradientTeal,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 900,
                  flexShrink: 0,
                }}
              >
                ✓
              </div>
              {f}
            </div>
          ))}
        </div>
      </div>
    </Square>
  );
}

/* ────────── SLIDE 7 — PAST PROGRAMS ────────── */

function PastProgramsSlide({ index, total }: { index: number; total: number }) {
  const photos = [
    { src: `${CDN}/farewell-hug.webp`, label: "涙のお別れ", size: "large" },
    { src: `${CDN}/friends-thumbsup.webp`, label: "バディと笑顔" },
    { src: `${CDN}/cultural-exchange.webp`, label: "日本語クラス" },
    { src: `${CDN}/group-activity.webp`, label: "ジャパンフェア" },
    { src: `${CDN}/buddy-lunch.webp`, label: "バディとランチ" },
    { src: `${CDN}/school-assembly-balloons.webp`, label: "全校生徒と交流" },
  ];

  return (
    <Square index={index} total={total} accentRgb={BRAND.orangeRgb} accentGradient={gradientOrange}>
      {/* Title block */}
      <div style={{ padding: "34px 50px 14px", textAlign: "center" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: 12,
            fontWeight: 900,
            color: BRAND.orange,
            letterSpacing: 3,
            padding: "5px 16px",
            borderRadius: 999,
            background: "#FFF7ED",
            border: "1.5px solid #FED7AA",
            marginBottom: 14,
          }}
        >
          PAST PROGRAMS · 過去のプログラム
        </span>
        <h2 style={{ fontSize: 48, fontWeight: 900, color: "#0F172A", letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 8 }}>
          笑顔と感動があふれる
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #F97316 0%, #F59E0B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            リアルな体験
          </span>
        </h2>
        <p style={{ fontSize: 15, color: "#64748B", fontWeight: 600 }}>
          参加者たちが体験した、一生の思い出と友情。
        </p>
      </div>

      {/* Photo grid: 1 large + 5 small */}
      <div style={{ flex: 1, padding: "10px 44px 18px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 10,
            height: "100%",
          }}
        >
          {/* large feature cell spanning 2 rows */}
          <div
            style={{
              gridRow: "span 2",
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 8px 28px rgba(249,115,22,0.2)",
            }}
          >
            <img
              src={photos[0].src}
              alt={photos[0].label}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.75) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 14,
                left: 14,
                background: "rgba(249,115,22,0.9)",
                color: "#fff",
                fontSize: 10,
                fontWeight: 900,
                letterSpacing: 1.5,
                padding: "5px 10px",
                borderRadius: 999,
                backdropFilter: "blur(4px)",
              }}
            >
              ✨ BEST MOMENT
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 18,
                left: 18,
                right: 18,
                color: "#fff",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.8, textShadow: "0 3px 10px rgba(0,0,0,0.5)" }}>
                {photos[0].label}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.88)", marginTop: 4 }}>
                短い8日間が生み出す、一生ものの絆。
              </div>
            </div>
          </div>

          {/* 5 small cells */}
          {photos.slice(1).map((p) => (
            <div
              key={p.label}
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={p.src}
                alt={p.label}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 12,
                  right: 12,
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 900,
                  lineHeight: 1.2,
                  textShadow: "0 2px 6px rgba(0,0,0,0.5)",
                }}
              >
                {p.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video teaser */}
      <div style={{ padding: "0 44px 22px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            border: "2px solid #334155",
            borderRadius: 16,
            padding: "12px 18px",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "linear-gradient(135deg, #EF4444, #DC2626)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 4px 14px rgba(239,68,68,0.4)",
            }}
          >
            <span style={{ color: "#fff", fontSize: 18 }}>▶</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>
              過去のプログラムの様子は動画でも公開中
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#94A3B8", marginTop: 2 }}>
              YouTube で「RaJA バリ 留学」検索 ・ プロフィールリンクから
            </div>
          </div>
        </div>
      </div>
    </Square>
  );
}

/* ────────── SLIDE 8 — FINAL CTA ────────── */

function CTASlide({ index, total }: { index: number; total: number }) {
  return (
    <Square index={index} total={total} accentRgb={BRAND.orangeRgb} accentGradient={gradientOrange}>
      {/* Background image soft */}
      <img
        src={`${CDN}/friends-thumbsup.webp`}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.18,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FEF3C7 100%)",
          opacity: 0.92,
        }}
      />
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.25), transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(252,211,77,0.35), transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          flex: 1,
          padding: "60px 60px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            alignSelf: "center",
            fontSize: 13,
            fontWeight: 900,
            color: BRAND.orange,
            letterSpacing: 4,
            padding: "8px 20px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.9)",
            border: "2px solid #FED7AA",
            marginBottom: 24,
          }}
        >
          2026 SUMMER · 募集中
        </div>

        <h2
          style={{
            fontSize: 84,
            fontWeight: 900,
            color: "#0F172A",
            letterSpacing: -2.5,
            lineHeight: 1.1,
            marginBottom: 28,
          }}
        >
          <span style={{ display: "block" }}>この夏、人生が変わる</span>
          <span
            style={{
              display: "block",
              background: "linear-gradient(90deg, #F97316 0%, #F59E0B 50%, #FCD34D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            バリ島 8日間へ。
          </span>
        </h2>

        <p
          style={{
            fontSize: 20,
            color: "#475569",
            fontWeight: 700,
            lineHeight: 1.6,
            maxWidth: 780,
            alignSelf: "center",
            marginBottom: 32,
          }}
        >
          バリ島タバナン県・現地校短期留学プログラム<br />
          資料請求・ご質問だけでもお気軽にどうぞ。
        </p>

        {/* Key facts row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            marginBottom: 28,
            maxWidth: 860,
            alignSelf: "center",
            width: "100%",
          }}
        >
          {[
            { k: "2026.8.9→16", label: "開催" },
            { k: "¥364,000", label: "税込（オール込み）" },
            { k: "5月末 締切", label: "申込期限" },
          ].map((x) => (
            <div
              key={x.label}
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "2px solid #FED7AA",
                borderRadius: 16,
                padding: "14px 10px",
                backdropFilter: "blur(8px)",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 900, color: "#0F172A", letterSpacing: -0.5, marginBottom: 2 }}>
                {x.k}
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, color: BRAND.orange, letterSpacing: 1.5, textTransform: "uppercase" }}>
                {x.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA pill */}
        <div
          style={{
            alignSelf: "center",
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            padding: "18px 32px",
            borderRadius: 999,
            background: gradientOrange,
            boxShadow: "0 12px 32px rgba(249,115,22,0.35)",
          }}
        >
          <span style={{ fontSize: 24 }}>📩</span>
          <div style={{ textAlign: "left" }}>
            <div style={{ color: "#fff", fontSize: 20, fontWeight: 900, lineHeight: 1.1 }}>
              プロフィールリンクから応募
            </div>
            <div style={{ color: "rgba(255,255,255,0.9)", fontSize: 12, fontWeight: 800, marginTop: 2 }}>
              or TEL: 099-204-7730（株式会社RaJA）
            </div>
          </div>
        </div>

        <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
          {["#バリ島留学", "#中高生", "#夏休み2026", "#短期留学", "#RaJA英会話"].map((t) => (
            <span
              key={t}
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: BRAND.orange,
                background: "rgba(255,255,255,0.85)",
                border: "1.5px solid #FED7AA",
                borderRadius: 8,
                padding: "5px 12px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Square>
  );
}

/* ────────── PAGE ────────── */

export default function BaliInstagramPage() {
  const total = 8;
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        padding: "60px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 80,
      }}
    >
      <div style={{ textAlign: "center", color: "#aaa", maxWidth: 900 }}>
        <p
          style={{
            fontSize: 14,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 800,
            marginBottom: 8,
            color: "#fff",
          }}
        >
          Bali · Indonesia Program — Instagram Carousel
        </p>
        <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
          Screenshot each 1080 × 1080 square (Retina × 2 recommended) and upload as a carousel to{" "}
          <span style={{ color: "#F59E0B", fontWeight: 800 }}>@letsgo_english</span>.
          <br />
          Order: Hero → Overview → Details → Itinerary → Activities → School → Past Programs → CTA.
        </p>
      </div>

      <HeroSlide index={1} total={total} />
      <OverviewSlide index={2} total={total} />
      <DetailsSlide index={3} total={total} />
      <ItinerarySlide index={4} total={total} />
      <ActivitiesSlide index={5} total={total} />
      <SchoolSlide index={6} total={total} />
      <PastProgramsSlide index={7} total={total} />
      <CTASlide index={8} total={total} />
    </div>
  );
}
