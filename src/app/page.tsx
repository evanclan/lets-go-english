import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import NewsSection from "@/components/NewsSection";
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
    "鹿児島市の英会話教室 Let's Go English! | RaJA英会話スクール｜こども〜大人・英検Jr.・無料体験",
  description:
    "鹿児島市の英会話教室 Let's Go English!（RaJA英会話スクール）。こども英会話・大人英会話・英検Jr.対応・初心者歓迎。月謝¥7,700〜の安い料金で鹿児島No.1の英会話無料体験レッスン実施中。Kagoshima English school for kids and adults.",
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
            question: "こども（幼児・小学生）向けの英会話クラスはありますか？",
            answer:
              "はい。年少〜年長の幼児クラス、小学1〜6年生の小学生クラスがあります。歌・ダンス・ゲームなどアクティブな方法で楽しく英語を学べます。",
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
        ]}
      />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <NewsSection />
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
