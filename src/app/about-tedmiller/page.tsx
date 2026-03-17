import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TedMillerProfile from "@/components/TedMillerProfile";

export const metadata = {
  title: "テッド・ミラー校長 | Let's Go English! RaJA 英会話スクール",
  description:
    "校長先生テッド・ミラーの自己紹介・職歴・ボランティア活動をご紹介します。",
};

export default function AboutTedMillerPage() {
  return (
    <main>
      <Navbar />
      <TedMillerProfile />
      <Footer />
    </main>
  );
}
