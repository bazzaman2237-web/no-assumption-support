/**
 * Submits form data via the visitor's email client (mailto).
 * Suitable for launch without a backend. Upgrade to Formspree, Web3Forms,
 * or a server endpoint when ready for silent inbox delivery.
 */
export function buildMailtoUrl({
  to,
  subject,
  fields,
}: {
  to: string;
  subject: string;
  fields: Record<string, string | undefined>;
}) {
  const body = Object.entries(fields)
    .filter(([, value]) => value?.trim())
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n\n");

  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${to}?${params.toString()}`;
}

export function submitViaMailto(url: string) {
  window.location.href = url;
}

export function readFormFields(form: HTMLFormElement) {
  const data = new FormData(form);
  const get = (name: string) => {
    const value = data.get(name);
    return typeof value === "string" ? value.trim() : "";
  };
  return { get };
}
