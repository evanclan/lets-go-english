import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesDetailPage from "@/components/CoursesDetailPage";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "コース一覧 | Let's Go English! RaJA 英会話スクール",
  description:
    "幼児から大人まで、留学対策まで。Let's Go English!の全コースの詳細・料金・特徴をご紹介します。",
  alternates: {
    canonical: "https://www.raja-english.com/courses",
  },
};

export default function CoursesPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "ホーム", url: "https://www.raja-english.com" },
          { name: "コース一覧", url: "https://www.raja-english.com/courses" },
        ]}
      />
      <Navbar />
      <CoursesDetailPage />
      <Footer />
    </main>
  );
}
