import { createFileRoute, redirect } from "@tanstack/react-router";

/** Shorter alias — live site uses /about-us as canonical. */
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/about-us", replace: true });
  },
});
