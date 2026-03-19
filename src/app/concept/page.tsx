import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConceptPage from "@/components/ConceptPage";

export const metadata = {
  title: "コンセプト | Let's Go English! RaJA 英会話スクール",
  description:
    "応用言語学に基づく教育理念。英語を通して世界の見方を広げ、自分の言葉で伝えられる力を育てます。",
};

export default function ConceptRoute() {
  return (
    <main>
      <Navbar />
      <ConceptPage />
      <Footer />
    </main>
  );
}
