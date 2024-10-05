import { serve } from "bun";

console.log("Hello via Bun! Are you ready for ink?");

const server = serve({
  async fetch(req) {
    console.log(
      `\x1b[33m${new Date().toISOString()}\x1b[0m \x1b[34m[${
        req.method
      }]\x1b[0m - ${new URL(req.url).pathname}`
    );
    if (req.method === "POST") {
      const text = await req.text();
      try {
        const data = JSON.parse(text);
        if (data) {
          console.log(data);
        }
      } catch (error) {
        if (text) {
          console.log(text);
        }
      }
    } else if (req.method === "GET") {
      console.log(req.url);
    }

    return new Response();
  },
});

console.log(`\n---\nServer running at ${server.url}\n---\n`);
