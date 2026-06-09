import { createFileRoute } from "@tanstack/react-router";
import { featuredServices } from "@/data/pages";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { pageMeta, seo } from "@/lib/seo";

const service = featuredServices.find((s) => s.slug === "guidance")!;

export const Route = createFileRoute("/guidance")({
  head: () => pageMeta(seo.guidance),
  component: () => <ServiceDetailLayout service={service} />,
});
