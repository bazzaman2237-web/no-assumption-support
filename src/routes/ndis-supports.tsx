import { createFileRoute } from "@tanstack/react-router";
import { featuredServices } from "@/data/pages";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { pageMeta, seo } from "@/lib/seo";

const service = featuredServices.find((s) => s.slug === "ndis-supports")!;

export const Route = createFileRoute("/ndis-supports")({
  head: () => pageMeta(seo.ndisSupports),
  component: () => <ServiceDetailLayout service={service} />,
});
