/** Dev-server mail route. Production uses the same handler via src/routes/api/mail.ts. */
export function mailApiPlugin() {
  return {
    name: "consolecheat-mail-api",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathOnly = (req.url ?? "").split("?", 1)[0] ?? "";
        if (pathOnly !== "/api/mail") {
          next();
          return;
        }
        if ((req.method ?? "GET").toUpperCase() !== "POST") {
          res.statusCode = 405;
          res.setHeader("content-type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ ok: false, error: "down" }));
          return;
        }
        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        const request = new Request("http://127.0.0.1/api/mail", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: Buffer.concat(chunks),
        });
        try {
          const mod = await server.ssrLoadModule("/src/lib/mail-http.server.ts");
          const response = await mod.handleMailRequest(request);
          res.statusCode = response.status;
          res.setHeader("content-type", "application/json; charset=utf-8");
          res.end(await response.text());
        } catch (err) {
          console.error("[mail-api]", err);
          res.statusCode = 500;
          res.setHeader("content-type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ ok: false, error: "down" }));
        }
      });
    },
  };
}
