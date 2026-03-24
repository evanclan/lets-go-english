"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const profileImage = "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_2.jpg";

const galleryImages = [
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_11.jpg",
    caption: "英語スピーチに挑戦するCOCO｜鹿児島市の英会話教室RaJAの生徒",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_7.jpg",
    caption: "セブ島でお買い物体験｜RaJA英会話スクール留学サポート",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_15.jpg",
    caption: "仲間と一緒に勉強中｜鹿児島市こども英会話",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_8.jpg",
    caption: "キャンプでの思い出｜RaJA英会話スクール体験",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_3%20(1).jpg",
    caption: "新しい友達との時間｜Let's Go English留学プログラム",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_6%20(1).jpg",
    caption: "セブ島での日常｜鹿児島市の英会話教室から海外留学",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_10%20(1).jpg",
    caption: "英語キャンプの仲間たち",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_12%20(1).jpg",
    caption: "充実した毎日",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_13.jpg",
    caption: "成長の記録",
  },
  {
    src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_17.jpg",
    caption: "かけがえのない体験",
  },
];

const storySections = [
  {
    title: "大チャレンジの始まり",
    titleEn: "The Beginning",
    icon: "🌅",
    content: `「とうとう明日だな」2023年7月27日、私は生まれて初めての大チャレンジを始めようとしていた。私はその日から1カ月、フィリピンのセブ島に短期留学に行くのだ。

1カ月も両親から離れる初めての経験。海外に行くのも久々だったから、少しだけ不安もあった。

でも、留学なんて簡単に行けるようなものじゃない。私は、自分がどれだけすごいことをしようとしているか分かった。「自分がどれだけがんばれるのか試してみよう」

半年前に、私は留学することを決意した。6月に申込をし、英語の勉強を頑張ったり、説明を聞いたり、パッキングをしたり、すばやく時がすぎていくような気がした夏休みの始め。`,
    image: null,
  },
  {
    title: "出発の日",
    titleEn: "Departure Day",
    icon: "✈️",
    content: `最初の3日は塾の夏期講習を受け、出発日の1日前に鹿児島から東京へお母さんと飛行機で向かい、一泊する。翌日、りんかい線の品川シーサイド駅から集合場所の成田空港まで1時間かけて向かう。

初めての一人でひくスーツケースは、少し重く感じた。

集合時間の30分前、私とお母さんは早めに集合場所のターミナルに向かった。少しだけ待っていたら、お迎えの人が来て、名前を確認してキャップとTシャツを配る。

後で分かったことだが、37名いる日本人留学生の中で鹿児島県出身なのは私のみで、女子で一番年下なのは私だった。知っている人はゼロ。私は少し心配が大きくなった。`,
    image: {
      src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_2.jpg",
      caption: "成田空港で出発を待つCOCO｜鹿児島市のこども英会話RaJAから留学",
    },
  },
  {
    title: "新しい出会い",
    titleEn: "New Encounters",
    icon: "🤝",
    content: `パスポートを検査する場所に着いた。もうお母さんは近くにいない。友だちもさすがにまだできない。私は無言で歩きつづけた。

私は歩くのが遅い方なので、一番後ろで歩いていた。だから、お迎えの女の人が、「だいじょうぶ？」と声をかけてくれた。その先生の名前はゆか先生。イングリッシュネームはKeme（ケメ）さんだ。Kemeさんと喋りながら歩いたおかげで、楽しい時間をすごせた。

飛行機の中で、隣の子に声をかけてみることにした。隣の子の名前は玲奈ちゃん。埼玉県出身の中学1年生だ。私はその子とすぐ仲よしになり、残りの30分間、玲奈ちゃんとずっと喋っていた。`,
    image: {
      src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_3%20(1).jpg",
      caption: "新しい友達との出会い",
    },
  },
  {
    title: "セブ島での生活",
    titleEn: "Life in Cebu",
    icon: "🏝️",
    content: `飛行機を降りてから気付いていたが、もうそこは日本語は一言も存在していない、完全英語の世界だった。

部屋決めは年齢で決められていた。私と同じ部屋のルームメイトは、兵庫県出身のしゅりちゃんと大阪府出身で今マレーシアに住んでいるのぞみ。みんなフレンドリーな性格で、その日の夜にすぐ仲よくなれた。

トイレにトイレットペーパーを流してはいけないし、水道水も飲んではいけないから、とても不便だ。日本とちがいすぎる物ごとに、私は衝撃を受けた。`,
    image: {
      src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_15.jpg",
      caption: "仲間たちとの勉強風景",
    },
  },
  {
    title: "授業の日々",
    titleEn: "School Days",
    icon: "📚",
    content: `月曜日から授業。そして毎朝のデイリーテスト。そして6時50分からの体操。本格的に「The 留学！」みたいな生活が始まる。

1日の日程は、1時間目マンツーマン、2時間目スポーツ、3時間目マンツーマン。ランチをはさんで、4時間目グループ。5時間目マンツーマン、6時間目グループ、7時間目マンツーマン。ディナーをはさんで、ダイアリータイム。かなりハードなスケジュール！

スピーチの練習は、ダイアリーの時間にステージに立って、マイクで自分で作った英語の文章を話すこと。かなり緊張するものだった。`,
    image: {
      src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_11.jpg",
      caption: "ステージで英語スピーチに挑戦",
    },
  },
  {
    title: "ホームシック",
    titleEn: "Homesickness",
    icon: "💧",
    content: `授業が始まって2日目の朝。私はとても体調が悪かった。ごはんを食べ始めたときに急に涙が出始めた。

「お母さんにあいたい。ごはんは美味しくないし、授業はつまらないし、トイレとおふろは汚いし帰りたい。」私はパニックになっていた。

少し時間が経って、「がまん、がまん」と思っても涙はずっと流れ続ける。私はこの時、家族の大切さがとても分かった。

授業が始まってからの1週間は、毎朝ホームシックで泣いていた。でも、土日をはさんでからは、ふつうに生活できるようになった。`,
    image: null,
  },
  {
    title: "セブ島での冒険",
    titleEn: "Adventures in Cebu",
    icon: "🛍️",
    content: `帰国1日前は午前授業で午後はSMモールでアイススケートとショッピング。この日も3人で行動。アイススケートの時だけ私がへたすぎておいていかれたけど、ショッピングでは3人で仲よくワイワイした。

私はお土産を買う人が多かったので、ご飯前に全額使ってしまった。でも先生に助けてもらい、日本食のお店で食べ、自分の好きなものを買うこともできた。

のぞみはマレーシアに住んでいるので、一日前にお母さんと帰ってしまう。のぞみを見送って、お土産をがんばってスーツケースに詰めて、眠る準備をする。明日は午前4時集合、午前3時起きだ。`,
    image: {
      src: "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/reviews/COCO/LINE_ALBUM_COCO_240625_7.jpg",
      caption: "セブ島でのお買い物体験",
    },
  },
  {
    title: "成長、そして帰国",
    titleEn: "Growth & Homecoming",
    icon: "🌟",
    content: `しゅりちゃんと私は無事3時に起きられた。バスで空港まで移動して、飛行機にのり、日本に無事帰国。

まわりから続々と聞こえる日本語。なつかしいお穏やかな雰囲気。空港で5人、ＬＩＮＥを交換し、お母さんとの再会。私は嬉しくて、泣いてしまった。

私はこの留学で、とても成長したと思っている。私はこの経験を生かして今後生活していきたいし、この経験を伝えていきたい。

この夏休みは、私の大きなチャレンジだ。`,
    image: null,
  },
];

function LightboxModal({
  image,
  onClose,
}: {
  image: { src: string; caption: string } | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative max-w-4xl max-h-[85vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image.src}
              alt={image.caption}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="text-white text-center mt-4 font-medium">
              {image.caption}
            </p>
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 shadow-lg hover:scale-110 transition-transform font-bold text-lg"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function CocoReviewContent() {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  return (
    <>
      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      {/* Hero section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFF5EB 0%, #FFF9F0 60%, var(--warm-white) 100%)",
        }}
      >
        <div className="absolute inset-0 sakura-pattern opacity-20" />

        <motion.div
          className="absolute top-24 left-[10%] text-5xl opacity-10 pointer-events-none"
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          ✈️
        </motion.div>
        <motion.div
          className="absolute top-40 right-[15%] text-4xl opacity-10 pointer-events-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          🌴
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-[20%] text-3xl opacity-10 pointer-events-none"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        >
          🌏
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#experiences"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-600 font-bold text-sm transition-colors mb-10 group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              体験ストーリー一覧に戻る
            </Link>
          </motion.div>

          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="relative mb-8"
            >
              <motion.div
                className="absolute -inset-3 rounded-full opacity-30 pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, #E8571A, #F5C200, transparent, #E8571A)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-[4px] relative z-10"
                style={{
                  background: "linear-gradient(135deg, #E8571A, #F5C200)",
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="COCOのプロフィール写真｜鹿児島市の英会話教室RaJAの生徒"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div
                  className="px-4 py-1.5 rounded-full text-white text-xs font-bold shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #E8571A, #F5C200)",
                  }}
                >
                  ✈️ セブ島1ヶ月留学
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
                小学4年生 · 鹿児島県出身
              </span>
              <h1
                className="font-black mt-2 font-brand"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                }}
              >
                <span className="text-gradient-orange">COCO</span>
                <span className="text-gray-300 font-normal text-2xl ml-3">
                  瑚子
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-3">
                私のセブ短期留学
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                小学4年生の夏、たった一人でフィリピン・セブ島へ。
                ホームシックも乗り越え、大きく成長した1ヶ月の物語。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-10 flex items-center gap-3"
            >
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-orange-300" />
              <span className="text-orange-400 text-lg">✦</span>
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-orange-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story content */}
      <section className="py-16 relative" aria-label="COCOのセブ島留学体験記">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {storySections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{section.icon}</span>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {section.titleEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-800">
                    {section.title}
                  </h3>
                </div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-orange-200 to-transparent ml-4" />
              </div>

              <div className="text-gray-600 leading-[2] text-[15px] sm:text-base whitespace-pre-line">
                {section.content}
              </div>

              {section.image && (
                <motion.div
                  className="mt-8 relative cursor-pointer group"
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setLightboxImage(section.image!)}
                >
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={section.image.src}
                      alt={section.image.caption}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-3 font-medium">
                    📷 {section.image.caption}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing quote */}
      <section className="py-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--warm-white) 0%, #FFF5EB 50%, var(--warm-white) 100%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10 text-center"
        >
          <span
            className="text-8xl font-serif leading-none select-none"
            style={{ color: "rgba(232, 87, 26, 0.1)" }}
          >
            「
          </span>
          <p className="text-xl sm:text-2xl font-bold text-gray-700 leading-relaxed -mt-10">
            私はこの留学で、とても成長したと思っている。
            <br />
            私はこの経験を生かして今後生活していきたいし、
            <br />
            この経験を伝えていきたい。
          </p>
          <p className="mt-6 text-gray-400 font-bold">
            — COCO（谷之口 瑚子）
          </p>
          <span
            className="text-8xl font-serif leading-none select-none"
            style={{ color: "rgba(232, 87, 26, 0.1)" }}
          >
            」
          </span>
        </motion.div>
      </section>

      {/* Photo gallery */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span>📸</span> Photo Gallery
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-800">
              セブ島での
              <span className="text-gradient-orange">思い出の写真</span>
            </h2>
          </motion.div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightboxImage(img)}
              >
                <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 px-1 font-medium">
                  {img.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to experiences CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 mb-6">
              他の体験ストーリーも読んでみませんか？
            </p>
            <Link
              href="/#experiences"
              className="btn-primary !text-sm !px-6 !py-3 inline-flex"
            >
              ✨ 体験ストーリー一覧へ
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
