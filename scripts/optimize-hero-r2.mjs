/**
 * Downloads hero PNGs from the public R2 CDN, compresses with sharp (WebP + AVIF),
 * uploads to Cloudflare R2, and rewrites src/lib/r2-assets.ts to use the WebP URLs.
 *
 * Run from repo root: npm run optimize:hero-r2
 *
 * Requires .env.local with R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY.
 * Old .png objects are left in the bucket (delete manually in R2 if desired).
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const BUCKET = "lets-go-english";
const CDN_BASE = "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev";

/** R2 object keys (must match existing folder layout) */
const JOBS = [
  {
    name: "main hero portrait",
    fetchUrl: `${CDN_BASE}/main-hero-image.png`,
    r2Key: "main-hero-image",
    maxWidth: 1200,
  },
  {
    name: "hero background",
    fetchUrl: `${CDN_BASE}/self%20intro/hero%20background.png`,
    r2Key: "self intro/hero background",
    maxWidth: 1920,
  },
];

const WEBP_QUALITY = 85;
const WEBP_EFFORT = 6;
const AVIF_QUALITY = 55;
const AVIF_EFFORT = 4;

function loadEnv() {
  const p = join(ROOT, ".env.local");
  if (!existsSync(p)) {
    console.error("Missing .env.local (need R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY)");
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

async function processOne(job) {
  const res = await fetch(job.fetchUrl);
  if (!res.ok) {
    throw new Error(`Fetch ${job.fetchUrl}: ${res.status} ${res.statusText}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const inKb = buf.length / 1024;

  let img = sharp(buf);
  const meta = await img.metadata();
  if (meta.width && meta.width > job.maxWidth) {
    img = img.resize(job.maxWidth, null, {
      withoutEnlargement: true,
      fit: "inside",
    });
  }

  const webpBuf = await img
    .clone()
    .webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT })
    .toBuffer();

  const avifBuf = await img
    .clone()
    .avif({ quality: AVIF_QUALITY, effort: AVIF_EFFORT })
    .toBuffer();

  const keyWebp = `${job.r2Key}.webp`;
  const keyAvif = `${job.r2Key}.avif`;

  await s3.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: keyWebp,
      Body: webpBuf,
      ContentType: "image/webp",
    })
  );
  await s3.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: keyAvif,
      Body: avifBuf,
      ContentType: "image/avif",
    })
  );

  const wKb = webpBuf.length / 1024;
  const aKb = avifBuf.length / 1024;
  console.log(
    `OK ${job.name}\n  in: ${inKb.toFixed(0)} KB\n  → R2 ${keyWebp} (${wKb.toFixed(0)} KB, −${((1 - webpBuf.length / buf.length) * 100).toFixed(1)}%)\n  → R2 ${keyAvif} (${aKb.toFixed(0)} KB, −${((1 - avifBuf.length / buf.length) * 100).toFixed(1)}%)`
  );
}

function patchR2Assets() {
  const path = join(ROOT, "src/lib/r2-assets.ts");
  let text = readFileSync(path, "utf8");

  const next = `/** Public R2 CDN base — keep hero URLs in sync with preloads in layout.tsx */
export const R2_CDN_BASE =
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev" as const;

/** WebP (CSS background + <picture> fallback on hero portrait) */
export const HERO_BACKGROUND_IMAGE = \`\${R2_CDN_BASE}/self%20intro/hero%20background.webp\`;
export const HERO_MAIN_PORTRAIT_IMAGE = \`\${R2_CDN_BASE}/main-hero-image.webp\`;

/** AVIF (hero portrait first <source>; optional future use for background) */
export const HERO_BACKGROUND_IMAGE_AVIF = \`\${R2_CDN_BASE}/self%20intro/hero%20background.avif\`;
export const HERO_MAIN_PORTRAIT_IMAGE_AVIF = \`\${R2_CDN_BASE}/main-hero-image.avif\`;
`;

  writeFileSync(path, next, "utf8");
  console.log("\nUpdated src/lib/r2-assets.ts (WebP + AVIF constants)");
}

async function main() {
  if (!process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY) {
    console.error("R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY missing after loading .env.local");
    process.exit(1);
  }

  for (const job of JOBS) {
    await processOne(job);
  }

  patchR2Assets();
  console.log("\nDone. Run npm run build and deploy. Preloads in layout.tsx use r2-assets imports.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
