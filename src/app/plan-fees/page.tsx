import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesDetailPage from "@/components/CoursesDetailPage";

export const metadata = {
  title: "プラン＆料金 | Let's Go English! RaJA 英会話スクール",
  description:
    "幼児から大人まで、留学対策まで。Let's Go English!の全コースの詳細・料金・特徴をご紹介します。",
};

export default function PlanFeesPage() {
  return (
    <main>
      <Navbar />
      <CoursesDetailPage />
      <Footer />
    </main>
  );
}
