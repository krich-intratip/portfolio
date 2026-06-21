const CONTACT_EMAIL = 'krich.intratip@gmail.com';

const sanitizeField = (value, maxLength = 2000) =>
  String(value ?? '').trim().slice(0, maxLength);

const jsonResponse = (body, init = {}) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...(init.headers ?? {}),
    },
  });

export async function onRequestPost({ request }) {
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

export async function onRequestOptions() {
  return new Response(null, { status: 204 });
}
