import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { consentSection } from "@/data/pages";
import { SimpleInfoSection } from "@/components/PageSections";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/consent")({
  head: () => pageMeta(seo.consent),
  component: () => (
    <>
      <PageHero eyebrow="Information" title={consentSection.title} subtitle={consentSection.teaser} />
      <SimpleInfoSection title="Our consent process" body={consentSection.body} />
    </>
  ),
});
