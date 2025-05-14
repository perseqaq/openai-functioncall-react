import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import OpenAI from "openai";

const app = new Hono();

app.use("*", cors());

const openai = new OpenAI({
  apiKey: "",
  baseURL: "",
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/chat", async (c) => {
  const reqJson = await c.req.json();
  const response = await openai.chat.completions.create({
    model: "o3-mini-2025-01-31",
    messages: [{ role: "user", content: reqJson.prompt }],
    tools: reqJson.tools || [],
  });
  return c.json({
    data: response,
  });
});

serve(
  {
    fetch: app.fetch,
    port: 3010,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
