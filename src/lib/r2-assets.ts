/** Public R2 CDN base — keep hero URLs in sync with preloads in layout.tsx */
export const R2_CDN_BASE =
  "https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev" as const;

export const HERO_BACKGROUND_IMAGE = `${R2_CDN_BASE}/self%20intro/hero%20background.png`;
export const HERO_MAIN_PORTRAIT_IMAGE = `${R2_CDN_BASE}/main-hero-image.png`;
