import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // To send real emails, plug in a provider (Resend, SendGrid, Postmark, etc.)
  // using the RESEND_API_KEY / CONTACT_TO_EMAIL environment variables.
  // Example (Resend):
  //
  // if (process.env.RESEND_API_KEY) {
  //   await fetch("https://api.resend.com/emails", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       from: "Portfolio <portfolio@yourdomain.com>",
  //       to: process.env.CONTACT_TO_EMAIL,
  //       subject: `New message: ${subject}`,
  //       text: `From: ${name} <${email}>\n\n${message}`,
  //     }),
  //   });
  // }

  if (!process.env.RESEND_API_KEY) {
    // No email provider configured yet — simulate a successful submission
    // so the UI flow can be reviewed end-to-end during development.
    await new Promise((resolve) => setTimeout(resolve, 600));
  }

  return NextResponse.json({ success: true });
}
