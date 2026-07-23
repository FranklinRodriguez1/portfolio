export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const TO_EMAIL = "franklinrodriguezdev@gmail.com";
const FROM_EMAIL = "Portfolio <onboarding@resend.dev>";

const MAX_NAME_LEN = 100;
const MAX_MESSAGE_LEN = 5000;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  // Honeypot: real users never fill this (hidden from the form UI). If it has
  // a value, the request came from a bot — accept silently and drop it.
  const honeypot = String(data.company ?? "").trim();

  if (honeypot) {
    return json({ ok: true }, 200);
  }

  if (
    !name ||
    name.length > MAX_NAME_LEN ||
    !isValidEmail(email) ||
    !message ||
    message.length > MAX_MESSAGE_LEN
  ) {
    return json({ error: "invalid_input" }, 400);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return json({ error: "server_misconfigured" }, 500);
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("resend send failed", error);
    return json({ error: "send_failed" }, 502);
  }

  return json({ ok: true }, 200);
};
