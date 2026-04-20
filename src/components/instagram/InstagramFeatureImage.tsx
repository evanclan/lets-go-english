"use client";

import { useCallback, useState } from "react";

/**
 * Instagram squares need ~900px+ on the image column (×2 for Retina screenshots).
 * Upload larger JPEGs/WEBP to R2 under `gallery/instagram/` using the **same filename**
 * as `gallery/` (e.g. `gallery/instagram/feature-age-optimized-2026.jpg`).
 * Until those exist, we automatically fall back to the web-optimized `lowSrc`.
 */
export function instagramHighResUrl(lowSrc: string): string {
  return lowSrc.replace("/gallery/", "/gallery/instagram/");
}

type Props = {
  lowSrc: string;
  alt: string;
  style?: React.CSSProperties;
};

export function InstagramFeatureImage({ lowSrc, alt, style }: Props) {
  const highSrc = instagramHighResUrl(lowSrc);
  const [src, setSrc] = useState(highSrc);

  const onError = useCallback(() => {
    setSrc((current) => (current !== lowSrc ? lowSrc : current));
  }, [lowSrc]);

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      onError={onError}
      decoding="async"
      draggable={false}
    />
  );
}
