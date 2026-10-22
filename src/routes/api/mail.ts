import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/mail")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { handleMailRequest } = await import("@/lib/mail-http.server");
        return handleMailRequest(request);
      },
    },
  },
});
