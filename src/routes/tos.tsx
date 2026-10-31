import { createFileRoute } from "@tanstack/react-router";
import { TosPage } from "@/components/tos-page";

export const Route = createFileRoute("/tos")({
  component: TosPage,
});
