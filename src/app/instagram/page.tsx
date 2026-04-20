import type { Metadata } from "next";
import { InstagramFeatureImage } from "@/components/instagram/InstagramFeatureImage";

export const metadata: Metadata = {
  title: "Instagram Posts — 6つの理由",
  robots: { index: false, follow: false },
};

const R2 = "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev";

/** Same image URLs as `FeaturesSection` feature cards */
const featureImages: Record<number, string> = {
  1: `${R2}/gallery/feature-age-optimized-2026.jpg`,
  2: `${R2}/gallery/feature-balanced-skills-2026.jpg`,
  3: `${R2}/gallery/feature-expert-staff-2026.jpg`,
  4: `${R2}/gallery/feature-active-lessons-2026.jpg`,
  5: `${R2}/gallery/5.jpg`,
  6: `${R2}/gallery/feature-flexible-system-2026.jpg`,
};

const reasons = [
  {
    num: 1,
    icon: "📚",
    titleEn: "Age-Optimized Curriculum",
    title: "年齢別に最適化された\nカリキュラム",
    desc: "幼児〜大人・留学まで、それぞれの発達段階・目的に合わせた設計。「なんとなく通う」じゃなくて、しっかり伸びる道筋があります。",
    bullets: null as null | string[],
    note: null as null | string,
    point: "一人ひとりのゴールに合わせた\nオーダーメイドの学習プラン",
    tags: ["幼児クラス", "小学生", "中高生", "大人", "留学準備"],
    accent: "#E8571A",
    accentRgb: "232,87,26",
    gradient: "linear-gradient(135deg, #E8571A 0%, #F5A623 100%)",
    badgeBg: "#FFF3EC",
    badgeColor: "#C24B16",
    badgeBorder: "#FDDCC8",
  },
  {
    num: 2,
    icon: "⚡",
    titleEn: "Balanced English Skills",
    title: "英語の力をバランスよく強化",
    desc: "実際に使える英語力を育成。テスト対策だけでも、会話だけでも終わらないのが強み。「英語を勉強する」から使える自分へ。",
    bullets: null as null | string[],
    note: null as null | string,
    point: "「話す・聞く・読む・書く」\n4技能をバランスよく伸ばす",
    tags: ["リスニング", "スピーキング", "リーディング", "ライティング"],
    accent: "#3D8B3D",
    accentRgb: "61,139,61",
    gradient: "linear-gradient(135deg, #3D8B3D 0%, #52B252 100%)",
    badgeBg: "#F0FFF0",
    badgeColor: "#2E7A2E",
    badgeBorder: "#C6E8C6",
  },
  {
    num: 3,
    icon: "🌍",
    titleEn: "Expert Teaching Staff",
    title: "外国人講師と\n日本人講師の在籍",
    desc: "外国人講師からは実践的なコミュニケーションを学び、日本人講師からは文法理解のサポートを安心して受けられます。「わからないまま進む」がない安心感を提供いたします。",
    bullets: null as null | string[],
    note: null as null | string,
    point: "「わからないまま進む」がない\n安心のW講師体制",
    tags: ["ネイティブ講師", "日本人講師", "安心サポート", "実践英語"],
    accent: "#2E9E8F",
    accentRgb: "46,158,143",
    gradient: "linear-gradient(135deg, #2E9E8F 0%, #3DBFAE 100%)",
    badgeBg: "#EEFFF9",
    badgeColor: "#238576",
    badgeBorder: "#B4E8DD",
  },
  {
    num: 4,
    icon: "🎵",
    titleEn: "Active Fun Lessons",
    title: "楽しく学べる\nアクティブレッスン\n（幼児〜小学生）",
    desc: "歌・ダンス・ゲームなどを通して自然に英語が身につく。「勉強してる感」より「気づいたら話してる」がポイントです。",
    bullets: null as null | string[],
    note: null as null | string,
    point: "楽しいから続く、\n続くから伸びる",
    tags: ["歌 & ダンス", "ゲーム", "自然に英語", "幼児〜小学生"],
    accent: "#7C3AED",
    accentRgb: "124,58,237",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
    badgeBg: "#F5F0FF",
    badgeColor: "#6B2FCC",
    badgeBorder: "#D4C4F5",
  },
  {
    num: 5,
    icon: "✈️",
    titleEn: "Study Abroad Support",
    title: "留学サポート",
    desc: "ワーキングホリデー・海外移住・留学など、\u201c学んで終わりじゃない\u201dキャリア支援あり。RaJAの母体である留学会社「かえる留学」が手厚くサポートします。",
    bullets: null as null | string[],
    note: null as null | string,
    point: "学んで終わりじゃない\n次のステージへつなげる",
    tags: ["ワーホリ", "海外移住", "留学", "かえる留学", "キャリア支援"],
    accent: "#1D4ED8",
    accentRgb: "29,78,216",
    gradient: "linear-gradient(135deg, #1D4ED8 0%, #60A5FA 100%)",
    badgeBg: "#EFF4FF",
    badgeColor: "#1842B5",
    badgeBorder: "#B8CFF5",
  },
  {
    num: 6,
    icon: "🗓️",
    titleEn: "Flexible & Easy System",
    title: "通いやすいシステム",
    desc: null,
    bullets: ["家族割引あり", "振替OK", "土曜開講あり"],
    note: "忙しくても続けやすいが結果につながります。",
    point: "続けやすいから\n結果が出る",
    tags: ["家族割引", "振替OK", "土曜開講", "通いやすさ"],
    accent: "#C44010",
    accentRgb: "196,64,16",
    gradient: "linear-gradient(135deg, #C44010 0%, #F5C200 100%)",
    badgeBg: "#FFF5EE",
    badgeColor: "#A83610",
    badgeBorder: "#F5D4B8",
  },
];

export default function InstagramPage() {
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
      <div style={{ textAlign: "center", color: "#888", marginBottom: 20 }}>
        <p style={{ fontSize: 14, letterSpacing: 2, textTransform: "uppercase" }}>
          Screenshot each square for Instagram (1080 × 1080px)
        </p>
      </div>

      {reasons.map((r, idx) => (
        <div
          key={r.num}
          style={{
            width: 1080,
            height: 1080,
            position: "relative",
            overflow: "hidden",
            background: "#fff",
            flexShrink: 0,
            fontFamily: "var(--font-noto-sans-jp), sans-serif",
            boxShadow: `0 4px 28px rgba(0,0,0,0.07)`,
            borderBottom: `5px solid rgba(${r.accentRgb},0.25)`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top gradient bar */}
          <div style={{ height: 8, width: "100%", background: r.gradient, flexShrink: 0 }} />

          {/* Corner glow */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(${r.accentRgb},0.08), transparent 70%)`,
              pointerEvents: "none",
            }}
          />

          {/* Main row: text left + image right */}
          <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
            {/* Left text (58%) */}
            <div
              style={{
                flex: "58 1 0%",
                padding: "44px 40px 28px 52px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* === TOP SECTION === */}
              <div>
                {/* Header: number + title */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 18, marginBottom: 24 }}>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 18,
                      background: r.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 6px 20px rgba(${r.accentRgb},0.3)`,
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontSize: 36,
                        fontWeight: 900,
                        fontFamily: "var(--font-fredoka-one), sans-serif",
                        lineHeight: 1,
                      }}
                    >
                      {r.num}
                    </span>
                  </div>

                  <div style={{ flex: 1, paddingTop: 2 }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                        padding: "4px 14px",
                        borderRadius: 999,
                        border: `1.5px solid ${r.badgeBorder}`,
                        background: r.badgeBg,
                        color: r.badgeColor,
                        marginBottom: 8,
                      }}
                    >
                      {r.titleEn}
                    </span>
                    <h2
                      style={{
                        fontSize: 36,
                        fontWeight: 900,
                        color: "#111",
                        lineHeight: 1.35,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {r.title}
                    </h2>
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: 2,
                    background: `linear-gradient(to right, rgba(${r.accentRgb},0.35), transparent)`,
                    marginBottom: 22,
                  }}
                />

                {/* Icon + description */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 50,
                      height: 50,
                      borderRadius: 14,
                      background: `rgba(${r.accentRgb},0.1)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      marginTop: 2,
                    }}
                  >
                    {r.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    {r.desc && (
                      <p style={{ fontSize: 20, color: "#555", lineHeight: 1.8, fontWeight: 500 }}>
                        {r.desc}
                      </p>
                    )}

                    {r.bullets && (
                      <>
                        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                          {r.bullets.map((b, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                              <div
                                style={{
                                  width: 30,
                                  height: 30,
                                  borderRadius: "50%",
                                  background: r.gradient,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "#fff",
                                  fontSize: 13,
                                  fontWeight: 900,
                                  flexShrink: 0,
                                }}
                              >
                                ✓
                              </div>
                              <span style={{ fontSize: 22, fontWeight: 700, color: "#333" }}>{b}</span>
                            </div>
                          ))}
                        </div>
                        {r.note && (
                          <p
                            style={{
                              marginTop: 16,
                              fontSize: 16,
                              fontWeight: 600,
                              fontStyle: "italic",
                              color: r.accent,
                              background: `rgba(${r.accentRgb},0.07)`,
                              padding: "10px 16px",
                              borderRadius: 10,
                              lineHeight: 1.6,
                            }}
                          >
                            💡 {r.note}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* === MIDDLE: POINT highlight box === */}
              <div
                style={{
                  margin: "24px 0",
                  background: `rgba(${r.accentRgb},0.06)`,
                  border: `2px solid rgba(${r.accentRgb},0.15)`,
                  borderRadius: 18,
                  padding: "24px 28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative accent circle */}
                <div
                  style={{
                    position: "absolute",
                    top: -30,
                    right: -30,
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: `rgba(${r.accentRgb},0.06)`,
                  }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: r.gradient,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      color: r.accent,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    Point
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 24,
                    fontWeight: 900,
                    color: "#222",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                    position: "relative",
                  }}
                >
                  {r.point}
                </p>
              </div>

              {/* === BOTTOM SECTION === */}
              <div>
                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                  {r.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: r.accent,
                        background: r.badgeBg,
                        border: `1.5px solid ${r.badgeBorder}`,
                        borderRadius: 10,
                        padding: "6px 14px",
                      }}
                    >
                      # {tag}
                    </span>
                  ))}
                </div>

                {/* CTA row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    background: r.gradient,
                    borderRadius: 14,
                    padding: "16px 22px",
                  }}
                >
                  <span style={{ fontSize: 22 }}>🎯</span>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", lineHeight: 1.3 }}>
                      無料体験レッスン実施中！
                    </p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", fontWeight: 500, marginTop: 1 }}>
                      raja-english.com
                    </p>
                  </div>
                </div>

                {/* Pagination dots */}
                <div style={{ display: "flex", gap: 8, marginTop: 16, alignItems: "center" }}>
                  {reasons.map((_, di) => (
                    <div
                      key={di}
                      style={{
                        width: di === idx ? 28 : 10,
                        height: 10,
                        borderRadius: 5,
                        background: di === idx ? r.gradient : `rgba(${r.accentRgb},0.15)`,
                      }}
                    />
                  ))}
                  <span style={{ marginLeft: 6, fontSize: 12, fontWeight: 700, color: r.accent, opacity: 0.5 }}>
                    {r.num} / 6
                  </span>
                </div>
              </div>
            </div>

            {/* Right image (42%) — prefers gallery/instagram/* (hi-res), falls back to gallery/* */}
            <div style={{ flex: "42 1 0%", position: "relative", overflow: "hidden" }}>
              <InstagramFeatureImage
                lowSrc={featureImages[r.num]}
                alt={r.titleEn}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to right, rgba(255,255,255,0.65) 0%, transparent 30%, rgba(${r.accentRgb},0.05) 100%)`,
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Bottom brand bar */}
          <div
            style={{
              flexShrink: 0,
              padding: "14px 52px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: `1px solid rgba(${r.accentRgb},0.1)`,
              background: `linear-gradient(to right, rgba(${r.accentRgb},0.03), transparent)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${R2}/navbar-logo.png`} alt="Let's Go English" style={{ height: 32 }} />
              <div>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#1a1a1a",
                    lineHeight: 1.2,
                    fontFamily: "var(--font-fredoka-one), sans-serif",
                  }}
                >
                  Let&apos;s Go English!
                </p>
                <p style={{ fontSize: 10, color: "#888", fontWeight: 600 }}>
                  RaJA英会話スクール｜鹿児島市
                </p>
              </div>
            </div>
            <p style={{ fontSize: 11, color: "#aaa", fontWeight: 600 }}>@letsgo_english</p>
          </div>

          {/* Left accent stripe */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 8,
              bottom: 0,
              width: 5,
              background: r.gradient,
            }}
          />
        </div>
      ))}
    </div>
  );
}
