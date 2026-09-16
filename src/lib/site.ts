/**
 * Absolute base URL for metadata (Open Graph image, canonical links).
 * Link previews need fully qualified URLs, so resolve the deployment's real host:
 * an explicit NEXT_PUBLIC_SITE_URL wins, then Vercel's system env vars, then localhost.
 */
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;

  const host =
    process.env.VERCEL_ENV === "production"
      ? process.env.VERCEL_PROJECT_PRODUCTION_URL
      : (process.env.VERCEL_BRANCH_URL ?? process.env.VERCEL_URL);
  if (host) return `https://${host}`;

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const siteUrl = new URL(resolveSiteUrl());
