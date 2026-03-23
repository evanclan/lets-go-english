import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesDetailPage from "@/components/CoursesDetailPage";
import PlanFeesHomeHashRedirect from "@/components/PlanFeesHomeHashRedirect";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "プラン＆料金｜月謝¥7,700〜鹿児島市の安い英会話教室 RaJA英会話スクール",
  description:
    "鹿児島市の英会話教室 RaJA英会話スクールのコース・料金一覧。こども英会話¥7,700〜、大人英会話¥10,000/月。英検Jr.対策・留学クラスも。鹿児島市で安い英会話スクールをお探しの方に。無料体験レッスン受付中。",
  alternates: {
    canonical: "https://www.raja-english.com/plan-fees",
  },
};

export default function PlanFeesPage() {
  return (
    <main>
      <PlanFeesHomeHashRedirect />
      <Navbar />
      <CoursesDetailPage />
      <Footer />
    </main>
  );
}
