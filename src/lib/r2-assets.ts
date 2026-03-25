/** Public R2 CDN base — keep hero URLs in sync with preloads in layout.tsx */
export const R2_CDN_BASE =
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev" as const;

/** WebP (CSS background + <picture> fallback on hero portrait) */
export const HERO_BACKGROUND_IMAGE = `${R2_CDN_BASE}/self%20intro/hero%20background.webp`;
export const HERO_MAIN_PORTRAIT_IMAGE = `${R2_CDN_BASE}/main-hero-image.webp`;

/** AVIF (hero portrait first <source>; optional future use for background) */
export const HERO_BACKGROUND_IMAGE_AVIF = `${R2_CDN_BASE}/self%20intro/hero%20background.avif`;
export const HERO_MAIN_PORTRAIT_IMAGE_AVIF = `${R2_CDN_BASE}/main-hero-image.avif`;
