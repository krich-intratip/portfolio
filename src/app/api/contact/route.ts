import { NextResponse } from 'next/server';

const CONTACT_EMAIL = 'krich.intratip@gmail.com';

const sanitizeField = (value: unknown, maxLength = 2000) =>
  String(value ?? '').trim().slice(0, maxLength);

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const name = sanitizeField(payload.name, 160);
    const email = sanitizeField(payload.email, 240);
    const subject = sanitizeField(payload.subject, 180);
    const message = sanitizeField(payload.message, 4000);

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required contact fields' }, { status: 400 });
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

    return NextResponse.json({ ok: true, mailtoUrl });
  } catch {
    return NextResponse.json({ error: 'Invalid contact request' }, { status: 400 });
  }
}
