import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/v1/health", async () => {
  return { ok: true };
});

const PORT = Number(process.env.PORT ?? 4000);
const HOST = "0.0.0.0";

async function start() {
  await app.listen({ port: PORT, host: HOST });
  app.log.info(`API listening on http://${HOST}:${PORT}`);
}

start().catch((err) => {
  app.log.error(err);
  process.exit(1);
});
