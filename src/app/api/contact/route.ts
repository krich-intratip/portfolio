import { NextResponse } from 'next/server';

const CONTACT_EMAIL = 'krich.intratip@gmail.com';

const sanitizeField = (value: unknown, maxLength = 2000) =>
  String(value ?? '').trim().slice(0, maxLength);

const SECURITY_HEADERS = {
  'content-security-policy': "default-src 'none'; base-uri 'none'; frame-ancestors 'none'",
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
    const payload = await request.json();
    const name = sanitizeField(payload.name, 160);
    const email = sanitizeField(payload.email, 240);
    const subject = sanitizeField(payload.subject, 180);
    const message = sanitizeField(payload.message, 4000);

    if (!name || !email || !subject || !message) {
      return jsonResponse({ error: 'Missing required contact fields' }, { status: 400 });
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
  return new Response(null, withSecurityHeaders({ status: 204 }));
}
