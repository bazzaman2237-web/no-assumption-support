import { createFileRoute } from "@tanstack/react-router";
import { featuredServices } from "@/data/pages";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { pageMeta, seo } from "@/lib/seo";

const service = featuredServices.find((s) => s.slug === "daily-living-support")!;

export const Route = createFileRoute("/daily-living-support")({
  head: () => pageMeta(seo.dailyLivingSupport),
  component: () => <ServiceDetailLayout service={service} />,
});
