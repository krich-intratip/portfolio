import { NextResponse } from 'next/server';

const CONTACT_EMAIL = 'krich.intratip@gmail.com';
const MAX_REQUEST_CHARACTERS = 12_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sanitizeField = (value: unknown, maxLength = 2000) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

const SECURITY_HEADERS = {
  'content-security-policy': "default-src 'none'; base-uri 'none'; frame-ancestors 'none'",
  'cache-control': 'no-store',
  'permissions-policy': 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'DENY',
};

const withSecurityHeaders = (init: ResponseInit = {}) => {
  const headers = new Headers(init.headers);

  Object.entries(SECURITY_HEADERS).forEach(([name, value]) => {
    headers.set(name, value);
  });

  return { ...init, headers };
};

const jsonResponse = (body: unknown, init: ResponseInit = {}) =>
  NextResponse.json(body, withSecurityHeaders(init));

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type')?.split(';', 1)[0].trim().toLowerCase();
    if (contentType !== 'application/json') {
      return jsonResponse({ error: 'Content-Type must be application/json' }, { status: 415 });
    }

    const contentLength = Number(request.headers.get('content-length'));
    if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_CHARACTERS) {
      return jsonResponse({ error: 'Contact request is too large' }, { status: 413 });
    }

    const requestBody = await request.text();
    if (requestBody.length > MAX_REQUEST_CHARACTERS) {
      return jsonResponse({ error: 'Contact request is too large' }, { status: 413 });
    }

    const payload: unknown = JSON.parse(requestBody);
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return jsonResponse({ error: 'Invalid contact request' }, { status: 400 });
    }

    const fields = payload as Record<string, unknown>;
    const name = sanitizeField(fields.name, 160);
    const email = sanitizeField(fields.email, 240);
    const subject = sanitizeField(fields.subject, 180);
    const message = sanitizeField(fields.message, 4000);

    if (!name || !email || !subject || !message) {
      return jsonResponse({ error: 'Missing required contact fields' }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return jsonResponse({ error: 'Invalid email address' }, { status: 400 });
    }

    const mailSubject = `[Portfolio] ${subject}`;
    const mailBody = [
      `ชื่อผู้ติดต่อ: ${name}`,
      `อีเมลผู้ติดต่อ: ${email}`,
      `หัวข้อ: ${subject}`,
      '',
      'รายละเอียด:',
      message,
      '',
      'ส่งจากแบบฟอร์ม Portfolio',
    ].join('\n');

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    return jsonResponse({ ok: true, mailtoUrl });
  } catch {
    return jsonResponse({ error: 'Invalid contact request' }, { status: 400 });
  }
}

export async function OPTIONS() {
  return new Response(null, withSecurityHeaders({ status: 204, headers: { allow: 'POST, OPTIONS' } }));
}
