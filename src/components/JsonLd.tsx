import type {
  WebSite,
  BreadcrumbList,
  FAQPage,
  WithContext,
  Thing,
} from "schema-dts";

const SITE_URL = "https://www.raja-english.com";
const LOGO_URL =
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/logo-white-bg.png";
const ORG_ID = `${SITE_URL}/#organization`;

type JsonLdData = WithContext<Thing> | Record<string, unknown>;

function JsonLdScript({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org" as const,
    "@type": ["LanguageSchool", "EducationalOrganization", "LocalBusiness"],
    "@id": ORG_ID,
    name: "Let's Go English! RaJA英会話スクール",
    alternateName: [
      "RaJA英会話",
      "RaJA英会話スクール",
      "Lets Go English Kagoshima",
      "Let's Go English",
      "ラジャ英会話",
      "鹿児島英会話",
    ],
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    description:
      "鹿児島市の英会話教室 Let's Go English!（RaJA英会話スクール）は、こども英会話・大人英会話・英検Jr.対応の英会話スクールです。月謝¥7,700〜の安い料金設定と無料体験レッスン実施中。Kagoshima's friendly English school for kids and adults.",
    telephone: "+81-99-204-7730",
    email: "raja.english.kagoshima@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "高麗町40-39",
      addressLocality: "鹿児島市",
      addressRegion: "鹿児島県",
      postalCode: "890-0051",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.5969,
      longitude: 130.5571,
    },
    areaServed: [
      {
        "@type": "City",
        name: "鹿児島市",
        containedInPlace: { "@type": "State", name: "鹿児島県" },
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "¥7,700〜¥11,000/月",
    currenciesAccepted: "JPY",
    paymentAccepted: "Cash, Credit Card",
    sameAs: [
      "https://www.facebook.com/RGA.0051/",
      "https://www.instagram.com/raja.englishclass/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "英会話コース一覧",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "幼児英会話クラス（Toddler Class）",
            description:
              "歌・ゲーム・絵本を通して自然に英語耳を育てる鹿児島市のこども英会話クラス",
            provider: { "@id": ORG_ID },
          },
          price: "8000",
          priceCurrency: "JPY",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "小学生英会話クラス（Elementary Class）",
            description:
              "フォニックスと会話で4技能をバランスよく伸ばす鹿児島市のこども英会話クラス",
            provider: { "@id": ORG_ID },
          },
          price: "8000",
          priceCurrency: "JPY",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "中学・高校生英会話クラス（Junior/Senior Class）",
            description:
              "実践英会話と英検・受験対策を両立する鹿児島市の英会話スクール",
            provider: { "@id": ORG_ID },
          },
          price: "10000",
          priceCurrency: "JPY",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "大人英会話クラス（Adult Class）",
            description:
              "日常会話からビジネス英語まで対応する鹿児島市の大人英会話・初心者英会話クラス",
            provider: { "@id": ORG_ID },
          },
          price: "10000",
          priceCurrency: "JPY",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "留学クラス（Study Abroad Class）",
            description:
              "ワーキングホリデー・海外留学準備をサポートする鹿児島の英会話クラス",
            provider: { "@id": ORG_ID },
          },
          price: "11000",
          priceCurrency: "JPY",
        },
      ],
    },
  };

  return <JsonLdScript data={schema} />;
}

function WebSiteSchema() {
  const schema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Let's Go English! RaJA英会話スクール",
    alternateName: [
      "鹿児島英会話 RaJA",
      "Lets Go English Kagoshima",
    ],
    url: SITE_URL,
    inLanguage: ["ja", "en"],
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    } as unknown as WebSite["potentialAction"],
  };

  return <JsonLdScript data={schema} />;
}

function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLdScript data={schema} />;
}

function FAQSchema({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const schema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question" as const,
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: q.answer,
      },
    })),
  };

  return <JsonLdScript data={schema} />;
}

export { LocalBusinessSchema, WebSiteSchema, BreadcrumbSchema, FAQSchema };
