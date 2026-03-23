"use client";

import { useEffect } from "react";

/** Home page sections — these ids do not exist on /plan-fees */
const HOME_ONLY_HASHES = new Set([
  "#features",
  "#teachers",
  "#experiences",
  "#contact",
]);

/**
 * Visiting /plan-fees#features leaves the hash pointing at a missing element.
 * Send those URLs to the home page anchor instead.
 */
export default function PlanFeesHomeHashRedirect() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!HOME_ONLY_HASHES.has(hash)) return;
    window.location.replace(`/${hash}`);
  }, []);

  return null;
}
