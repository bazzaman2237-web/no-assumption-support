/**
 * Permanent 301 redirects for URLs that differ from the live (Jimdo) site.
 * Canonical paths match live indexed URLs: /about-us, /our-services, /contact, etc.
 */
export const permanentRedirects: Record<string, string> = {
  "/about": "/about-us",
  "/services": "/our-services",
};

export function resolvePermanentRedirect(pathname: string): string | undefined {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return permanentRedirects[normalized];
}
