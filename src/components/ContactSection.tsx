"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "送信に失敗しました。");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "送信に失敗しました。もう一度お試しください。");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #E8F8F4 0%, #FFF9F0 100%)" }}>
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <span>📬</span> Contact Us
          </div>
          <h2 className="section-title text-gray-900 mb-4">
            鹿児島市の英会話無料体験・<span className="text-gradient-green">お問い合わせ</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            英会話無料体験レッスン受付中！お気軽にご連絡ください。通常24時間以内にご返答いたします。
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-black text-gray-800 text-lg mb-4">スクール情報</h3>
              {[
                { icon: "📍", label: "住所", val: "株式会社RaJA\n〒890-0051鹿児島県鹿児島市高\n麗町40-39" },
                { icon: "📞", label: "電話", val: "+81-99-204-7730" },
                { icon: "✉️", label: "メール", val: "info@raja-international.com" },
                { icon: "⏰", label: "受付時間", val: "月〜土 9:00 - 6:00" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 py-3 border-b border-gray-50 last:border-0">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400 font-bold mb-0.5">{item.label}</p>
                    <p className="text-sm text-gray-700 font-medium whitespace-pre-line">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-5 border-2 border-orange-200">
              <h3 className="font-black text-orange-700 mb-2">🎁 無料体験レッスン特典</h3>
              <ul className="space-y-2">
                {["体験レッスン料：無料", "入会金：通常¥10,000 → 無料", "テキスト代：初月無料", "英語力診断テスト：無料"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-orange-800">
                    <span className="w-4 h-4 rounded-full bg-orange-400 text-white text-xs flex items-center justify-center flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-black text-gray-800 mb-3">🗾 アクセス</h3>
              <div className="rounded-xl overflow-hidden border border-gray-200 h-48 sm:h-52 min-h-[12rem] bg-gray-100">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent("鹿児島県鹿児島市高麗町40-39")}&output=embed`}
                  width="100%"
                  height="100%"
                  className="min-h-[12rem] w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RaJA International 所在地"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/gGPgSQPMd5BpTSoi9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-teal-600 hover:text-teal-700 font-medium mt-2 inline-block"
              >
                Google Mapで開く →
              </a>
              <p className="text-xs text-gray-500 mt-1">
                渋谷駅 徒歩5分 / 原宿駅 徒歩10分
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center bg-white rounded-3xl p-12 shadow-sm border border-gray-100"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-6xl mb-6"
                >
                  🎉
                </motion.div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">送信完了！</h3>
                <p className="text-gray-500 mb-6">
                  お問い合わせありがとうございます。<br />
                  24時間以内にご連絡いたします。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary text-sm py-3 px-6"
                >
                  もう一度送る
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-5"
              >
                <h3 className="text-xl font-black text-gray-800 mb-2">
                  無料体験レッスン申込フォーム
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-600 mb-1.5">
                      お名前 <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="田中 太郎"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none transition-colors text-gray-800 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-600 mb-1.5">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="090-XXXX-XXXX"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none transition-colors text-gray-800 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-1.5">
                    メールアドレス <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none transition-colors text-gray-800 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-1.5">
                    興味のあるコース
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none transition-colors text-gray-800 text-sm"
                  >
                    <option value="">コースを選んでください</option>
                    <option value="toddler">幼児クラス（年少〜年長）</option>
                    <option value="elementary">小学生クラス（小学1年生〜6年生）</option>
                    <option value="junior">中学・高校生クラス（中学生〜高校生）</option>
                    <option value="adult">大人クラス（大人）</option>
                    <option value="studyabroad">留学クラス（留学希望者）</option>
                    <option value="firststudyabroad">初めての留学クラス（小学4年生〜高校3年生）</option>
                    <option value="undecided">まだ決めていない</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-1.5">
                    メッセージ・ご質問
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="ご質問やご要望がありましたらお気軽にどうぞ..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none transition-colors text-gray-800 text-sm resize-none"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                    {error}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={sending}
                  className="w-full btn-primary justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={sending ? {} : { scale: 1.02 }}
                  whileTap={sending ? {} : { scale: 0.98 }}
                >
                  {sending ? "送信中..." : "🎯 無料体験レッスンに申し込む"}
                </motion.button>

                <p className="text-center text-xs text-gray-400">
                  ご入力いただいた情報はプライバシーポリシーに基づき適切に管理いたします。
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
