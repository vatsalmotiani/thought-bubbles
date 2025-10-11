import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { generateEmailHTML, generatePlainTextEmail } from "@/lib/emailTemplate";

// Make route compatible with static export
export const dynamic = "force-static";
export const revalidate = false;

// Validation patterns
const patterns = {
  name: /^[a-zA-Z\s]{2,50}$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^[6-9]\d{9}$/,
  company: /^[a-zA-Z0-9\s&.,'-]{2,100}$/,
  message: /^[\s\S]{10,500}$/,
};

function isSuspicious(text) {
  const suspiciousPatterns = [/<script/i, /javascript:/i, /on\w+\s*=/i, /(https?:\/\/){2,}/i, /(\w)\1{10,}/, /<iframe/i, /eval\(/i, /(viagra|cialis|casino|lottery|crypto|bitcoin|investment)/i];
  return suspiciousPatterns.some((pattern) => pattern.test(text));
}

function sanitize(text) {
  return String(text).replace(/[<>]/g, "");
}

function validateInput(data) {
  const errors = [];

  if (!data.name || !patterns.name.test(data.name)) {
    errors.push("Invalid name");
  }
  if (!data.email || !patterns.email.test(data.email)) {
    errors.push("Invalid email");
  }
  if (!data.phone || !patterns.phone.test(data.phone)) {
    errors.push("Invalid phone number");
  }
  if (data.company && !patterns.company.test(data.company)) {
    errors.push("Invalid company name");
  }
  if (!data.message || !patterns.message.test(data.message)) {
    errors.push("Invalid message");
  }

  const allText = `${data.name} ${data.email} ${data.company || ""} ${data.message}`;
  if (isSuspicious(allText)) {
    errors.push("Suspicious content detected");
  }

  if (data.honeypot) {
    errors.push("Bot detected");
  }

  if (data.timestamp && Date.now() - data.timestamp < 3000) {
    errors.push("Form submitted too quickly");
  }

  return errors;
}

export async function POST(request) {
  // Check if we're in static export mode
  if (process.env.NEXT_PUBLIC_STATIC_EXPORT === "true") {
    return NextResponse.json(
      {
        error: "Email API is disabled in static export mode",
        message: "Please use the FormSubmit service directly",
      },
      { status: 503 }
    );
  }

  try {
    const headersList = await headers();
    const forwardedFor = headersList.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

    // CSRF protection
    const origin = headersList.get("origin");
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];
    console.log(origin);
    console.log(allowedOrigins);
    if (allowedOrigins.length > 0 && !allowedOrigins.includes(origin)) {
      return NextResponse.json({ error: "Unauthorized origin" }, { status: 403 });
    }

    const data = await request.json();
    const validationErrors = validateInput(data);

    if (validationErrors.length > 0) {
      return NextResponse.json({ error: "Validation failed", details: validationErrors }, { status: 400 });
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const emailData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company || "Not provided",
      message: data.message,
      clientIp,
      timestamp: submittedAt,
    };

    const textBody = generatePlainTextEmail(emailData);
    const htmlBody = generateEmailHTML(emailData);

    const subject = `Contact Form: ${sanitize(data.name)} - ${sanitize(data.company || "Individual")}`;

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      replyTo: sanitize(data.email),
      subject,
      text: textBody,
      html: htmlBody,
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}

// Block other methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
