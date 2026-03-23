const SITE_URL = "https://www.raja-english.com";
const LOGO_URL =
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/logo-white-bg.png";

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LanguageSchool", "EducationalOrganization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "Let's Go English! RaJA英会話スクール",
    alternateName: [
      "RaJA英会話",
      "RaJA英会話スクール",
      "Let's Go English Kagoshima",
      "ラジャ英会話",
    ],
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    description:
      "鹿児島市の英会話教室。こども英会話・大人英会話・英検Jr.対応・初心者歓迎。月謝¥7,700〜の安い料金設定と無料体験レッスン実施中。",
    telephone: "+81-99-204-7730",
    email: "info@raja-international.com",
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
            provider: { "@id": `${SITE_URL}/#organization` },
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
            provider: { "@id": `${SITE_URL}/#organization` },
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
            provider: { "@id": `${SITE_URL}/#organization` },
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
            provider: { "@id": `${SITE_URL}/#organization` },
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
            provider: { "@id": `${SITE_URL}/#organization` },
          },
          price: "11000",
          priceCurrency: "JPY",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Let's Go English! RaJA英会話スクール",
    alternateName: "鹿児島市の英会話教室 RaJA英会話",
    url: SITE_URL,
    inLanguage: ["ja", "en"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQSchema({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export { LocalBusinessSchema, WebSiteSchema, BreadcrumbSchema, FAQSchema };
