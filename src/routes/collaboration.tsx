import { createFileRoute } from "@tanstack/react-router";
import { featuredServices } from "@/data/pages";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { pageMeta, seo } from "@/lib/seo";

const service = featuredServices.find((s) => s.slug === "collaboration")!;

export const Route = createFileRoute("/collaboration")({
  head: () => pageMeta(seo.collaboration),
  component: () => <ServiceDetailLayout service={service} />,
});
