import { createFileRoute } from "@tanstack/react-router";
import { TosPage } from "@/components/tos-page";

export const Route = createFileRoute("/tos")({
  component: TosPage,
  head: () => ({
    meta: [
      { title: "Terms · consolecheat" },
      {
        name: "description",
        content:
          "Terms for consolecheat.com. The site is not Sony. The only planned stored data is an email and a continent for the code newsletter.",
      },
    ],
    links: [{ rel: "canonical", href: "https://consolecheat.com/tos" }],
  }),
});
