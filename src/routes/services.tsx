import { createFileRoute, redirect } from "@tanstack/react-router";

/** Shorter alias — live site uses /our-services as canonical. */
export const Route = createFileRoute("/services")({
  beforeLoad: () => {
    throw redirect({ to: "/our-services", replace: true });
  },
});
