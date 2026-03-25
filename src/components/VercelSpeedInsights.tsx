"use client";

import { Suspense, useMemo } from "react";
import { SpeedInsights, computeRoute } from "@vercel/speed-insights/react";
import { useParams, usePathname, useSearchParams } from "next/navigation";

/**
 * Uses @vercel/speed-insights/react with an explicit route so the script always
 * loads. The official @vercel/speed-insights/next helper returns route=null when
 * useParams() is null, which skips script injection entirely on some Next versions.
 */
function SpeedInsightsInner() {
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const route = useMemo(() => {
    const path = pathname ?? "/";
    const merged: Record<string, string | string[]> =
      params != null && Object.keys(params).length > 0
        ? (params as Record<string, string | string[]>)
        : Object.fromEntries(searchParams.entries());
    return computeRoute(path, merged) ?? path;
  }, [pathname, params, searchParams]);

  return <SpeedInsights framework="next" route={route} />;
}

export default function VercelSpeedInsights() {
  return (
    <Suspense fallback={null}>
      <SpeedInsightsInner />
    </Suspense>
  );
}
