import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ndisFundingSection } from "@/data/pages";
import { SimpleInfoSection } from "@/components/PageSections";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/ndis-funding")({
  head: () => pageMeta(seo.ndisFunding),
  component: () => (
    <>
      <PageHero eyebrow="Information" title={ndisFundingSection.title} subtitle={ndisFundingSection.teaser} />
      <SimpleInfoSection title="How we price our services" body={ndisFundingSection.body} />
    </>
  ),
});
