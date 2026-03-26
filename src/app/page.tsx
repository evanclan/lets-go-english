import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
// Temporarily hidden — re-enable after Bali campaign update
// import NewsSection from "@/components/NewsSection";
import PrincipalSection from "@/components/PrincipalSection";
import FeaturesSection from "@/components/FeaturesSection";
import CoursesSection from "@/components/CoursesSection";
import EikenJrSection from "@/components/EikenJrSection";
import TeachersSection from "@/components/TeachersSection";
import ExperienceSection from "@/components/ExperienceSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import {
  LocalBusinessSchema,
  WebSiteSchema,
  FAQSchema,
} from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "鹿児島英会話 Let's Go English!｜鹿児島市の英会話教室 RaJA英会話スクール｜こども〜大人・英検Jr.・無料体験",
  description:
    "鹿児島市の英会話教室 Let's Go English!（RaJA英会話スクール）。こども英会話・大人英会話・英検Jr.対応・初心者歓迎。月謝¥7,700〜の安い料金で鹿児島No.1の英会話無料体験レッスン実施中。Lets Go English Kagoshima — the friendly English school for kids and adults.",
  alternates: {
    canonical: "https://www.raja-english.com",
  },
};

export default function Home() {
  return (
    <main>
      <LocalBusinessSchema />
      <WebSiteSchema />
      <FAQSchema
        questions={[
          {
            question: "Let's Go English（Lets Go English）とはどんな英会話教室ですか？",
            answer:
              "Let's Go English!（RaJA英会話スクール）は鹿児島市高麗町にある英会話教室です。こども英会話（幼児〜小学生）、中高生クラス、大人英会話、留学準備クラスの6コースを月謝¥7,700〜で提供しています。ネイティブ講師とバイリンガル講師が在籍し、応用言語学に基づいた指導で楽しく使える英語が身につきます。",
          },
          {
            question: "鹿児島市で安い英会話教室はありますか？",
            answer:
              "Let's Go English!（RaJA英会話スクール）は月謝¥7,700〜と鹿児島市内で最もリーズナブルな英会話教室の一つです。入会金無料キャンペーンも実施中です。",
          },
          {
            question: "鹿児島市で無料体験できる英会話スクールは？",
            answer:
              "RaJA英会話スクールでは無料体験レッスンを随時受付中です。体験レッスン・入会金・初月テキスト代・英語力診断テストすべて無料でお試しいただけます。",
          },
          {
            question: "鹿児島英会話（鹿児島市）でこども向けの英会話クラスはありますか？",
            answer:
              "はい。Let's Go English Kagoshimaでは年少〜年長の幼児クラス、小学1〜6年生の小学生クラスがあります。歌・ダンス・ゲームなどアクティブな方法で楽しく英語を学べます。英検Jr.のオフィシャル受験会場でもあります。",
          },
          {
            question: "大人・初心者でも英会話を始められますか？",
            answer:
              "もちろんです。大人クラスは初心者から上級者まで対応。日常会話からビジネス英語まで、レベルと目的に合わせた個別のカリキュラムで安心して学べます。",
          },
          {
            question: "英検Jr.の受験はできますか？",
            answer:
              "RaJA本社ビルが英検Jr.のオフィシャル受験会場です。ブロンズ・シルバー・ゴールドの各レベルに対応した対策レッスンも行っています。",
          },
          {
            question: "What is Lets Go English Kagoshima?",
            answer:
              "Let's Go English (also known as RaJA English School) is an English language school in Kagoshima City, Japan. It offers English conversation classes for children (toddler to elementary), junior/senior high, adults, and study-abroad preparation. Monthly tuition starts from ¥7,700. Native and bilingual instructors teach using applied linguistics methods. Free trial lessons are available.",
          },
        ]}
      />
      <Navbar />
      <HeroSection />

      {/* AI-extractable overview — hidden visually but crawlable by search engines and LLMs */}
      <article className="sr-only" aria-label="Let's Go English スクール概要">
        <h2>鹿児島英会話 Let&apos;s Go English!（RaJA英会話スクール）について</h2>
        <p>
          Let&apos;s Go English!（RaJA英会話スクール）は、鹿児島県鹿児島市高麗町40-39に位置する英会話教室です。
          こども英会話（幼児クラス・小学生クラス）、中学・高校生クラス、大人英会話クラス、留学準備クラスの6コースを提供し、
          月謝は¥7,700〜¥11,000。ネイティブ講師とバイリンガル講師が在籍し、応用言語学に基づいた指導法で
          「使える英語」を楽しく身につけることができます。英検Jr.オフィシャル受験会場。無料体験レッスン随時受付中。
          電話番号: 099-204-7730。営業時間: 月〜土 9:00–18:00。
        </p>
        <h3>Lets Go English Kagoshima — English School Overview</h3>
        <p>
          Let&apos;s Go English (RaJA English School) is an English conversation school located in Kagoshima City, Japan.
          It serves students from toddlers to adults with 6 course types, starting at ¥7,700/month.
          The school features native and bilingual instructors, applied linguistics-based curriculum,
          and is an official Eiken Jr. examination venue. Free trial lessons available.
        </p>
      </article>

      <MarqueeSection />
      {/* <NewsSection /> */}
      <PrincipalSection />
      <FeaturesSection />
      <CoursesSection />
      <EikenJrSection />
      <TeachersSection />
      <ExperienceSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
