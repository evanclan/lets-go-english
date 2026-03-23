import { Resend } from "resend";
import { NextResponse } from "next/server";

const COURSE_LABELS: Record<string, string> = {
  toddler: "幼児クラス（年少〜年長）",
  elementary: "小学生クラス（小学1年生〜6年生）",
  junior: "中学・高校生クラス（中学生〜高校生）",
  adult: "大人クラス（大人）",
  studyabroad: "留学クラス（留学希望者）",
  firststudyabroad: "初めての留学クラス（小学4年生〜高校3年生）",
  undecided: "まだ決めていない",
};

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.EMAIL_FROM?.trim();
    if (!apiKey || !emailFrom) {
      console.error("RESEND_API_KEY or EMAIL_FROM is not set");
      return NextResponse.json(
        { error: "メール送信の設定がありません。" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, phone, course, message } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "名前とメールアドレスは必須です。" },
        { status: 400 }
      );
    }

    const courseLabel = COURSE_LABELS[course] || "未選択";

    const { error } = await resend.emails.send({
      from: emailFrom,
      to: process.env.EMAIL_TO || "info@raja-international.com",
      replyTo: email,
      subject: `【無料体験申込】${name}様からのお問い合わせ`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 8px;">
            新しいお問い合わせがありました
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 120px;">お名前</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">メール</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">電話番号</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${phone || "未入力"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">コース</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${courseLabel}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555; vertical-align: top;">メッセージ</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee; white-space: pre-line;">${message || "なし"}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            このメールはRaJAウェブサイトのお問い合わせフォームから自動送信されました。
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "メール送信に失敗しました。" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}
