import { createFileRoute } from "@tanstack/react-router";
import { featuredServices } from "@/data/pages";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { pageMeta, seo } from "@/lib/seo";

const service = featuredServices.find((s) => s.slug === "positive-behaviour-support")!;

export const Route = createFileRoute("/positive-behaviour-support")({
  head: () => pageMeta(seo.positiveBehaviourSupport),
  component: () => <ServiceDetailLayout service={service} />,
});
