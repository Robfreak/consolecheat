import { createFileRoute } from "@tanstack/react-router";
import { HomeHub } from "@/components/home-hub";

export const Route = createFileRoute("/")({ component: HomeHub });
