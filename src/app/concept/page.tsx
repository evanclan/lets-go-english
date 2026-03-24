import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConceptPage from "@/components/ConceptPage";
import { BreadcrumbSchema } from "@/components/JsonLd";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "コンセプト・教育理念｜鹿児島市の英会話教室 RaJA英会話スクール",
  description:
    "鹿児島市の英会話教室 Let's Go English!（RaJA英会話スクール）の教育コンセプト。応用言語学に基づき、こどもから大人まで「使える英語」を身につける教育理念をご紹介します。",
  alternates: {
    canonical: "https://www.raja-english.com/concept",
  },
};

export default function ConceptRoute() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "ホーム", url: "https://www.raja-english.com" },
          { name: "コンセプト・教育理念", url: "https://www.raja-english.com/concept" },
        ]}
      />
      <Navbar />
      <ConceptPage />
      <Footer />
    </main>
  );
}
