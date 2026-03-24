/**
 * Downloads bali-campaign images from CDN, compresses with sharp (WebP),
 * uploads to R2. Run from repo root: node scripts/compress-bali-r2.mjs
 *
 * Requires .env.local with R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY.
 */
import { readFileSync, existsSync } from "fs";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";

const BUCKET = "lets-go-english";
const PREFIX = "bali-campaign";
const CDN = `https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/${PREFIX}`;

const MAX_WIDTH = 1800;
const WEBP_QUALITY = 82;

const FILES = [
  "tanah-lot-sunset.png",
  "classroom-interaction.jpeg",
  "kecak-dancers.jpeg",
  "gamelan-experience.jpeg",
  "surfing-lesson.png",
  "gebogan-offerings.jpeg",
  "tanah-lot-temple.jpeg",
  "jatiluwih-rice-terraces.jpeg",
  "bali-coastline.jpeg",
  "kecak-dance-fire.jpeg",
  "jatiluwih-sign.jpeg",
  "melasti-beach-aerial.jpeg",
  "sma-tabanan-emblem.jpeg",
  "school-building.jpeg",
  "school-courtyard.jpeg",
  "classroom.jpeg",
  "bali-students-group.jpeg",
  "school-assembly-balloons.jpeg",
  "classroom-students.jpeg",
  "buddy-lunch.png",
  "friends-thumbsup.png",
  "farewell-hug.png",
  "traditional-experience.png",
  "cultural-exchange.png",
  "group-activity.png",
  "ceo-sato-jun.png",
  "indonesia-scene-1.png",
  "indonesia-scene-2.png",
  "indonesia-scene-3.png",
  "promo-popup.png",
];

function loadEnv() {
  const p = ".env.local";
  if (!existsSync(p)) {
    console.error("Missing .env.local");
    process.exit(1);
  }
  const raw = readFileSync(p, "utf8");
  for (const line of raw.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i === -1) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))
      v = v.slice(1, -1);
    process.env[k] = v;
  }
}

loadEnv();

const s3 = new S3Client({
  region: "auto",
  endpoint: "https://619ee7ce9f849783030a908ebe4694dd.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

async function main() {
  let totalIn = 0;
  let totalOut = 0;

  for (const name of FILES) {
    const url = `${CDN}/${name}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`FAIL fetch ${url}: ${res.status}`);
      process.exit(1);
    }
    const buf = Buffer.from(await res.arrayBuffer());
    totalIn += buf.length;

    let img = sharp(buf);
    const meta = await img.metadata();
    if (meta.width && meta.width > MAX_WIDTH) {
      img = img.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: "inside",
      });
    }

    const outBuf = await img.webp({ quality: WEBP_QUALITY, effort: 6 }).toBuffer();
    totalOut += outBuf.length;

    const key = `${PREFIX}/${name.replace(/\.(png|jpe?g)$/i, ".webp")}`;

    await s3.send(
      new PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        Body: outBuf,
        ContentType: "image/webp",
      })
    );

    const pct = ((1 - outBuf.length / buf.length) * 100).toFixed(1);
    console.log(
      `OK ${name} → ${key.split("/").pop()}  ${(buf.length / 1024).toFixed(0)}KB → ${(outBuf.length / 1024).toFixed(0)}KB (−${pct}%)`
    );
  }

  console.log(
    `\nTotal: ${(totalIn / 1024 / 1024).toFixed(2)} MB → ${(totalOut / 1024 / 1024).toFixed(2)} MB`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
