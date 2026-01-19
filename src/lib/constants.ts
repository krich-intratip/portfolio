// Animation constants
export const ANIMATION_DELAYS = {
  short: 0.1,
  medium: 0.3,
  long: 0.5,
} as const;

export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
} as const;

// Color gradients
export const GRADIENTS = {
  primary: 'from-sky-400 to-indigo-400',
  secondary: 'from-indigo-500 to-purple-400',
  success: 'from-emerald-400 to-teal-400',
  warning: 'from-amber-400 to-orange-400',
  accent: 'from-yellow-400 to-amber-400',
} as const;

// Social links
export const SOCIAL_LINKS = {
  github: 'https://github.com/krich-intratip',
  email: 'krich.intratip@gmail.com',
  phone: '061-632-9956',
} as const;

// Site metadata
export const SITE_CONFIG = {
  name: 'Dr. Krich Intratip',
  title: 'Knowledge Manager & AI Implementation Specialist',
  description: 'ผู้เชี่ยวชาญด้าน Assessment Systems, PMQA/ก.พ.ร. Framework และการบูรณาการ AI เพื่อการตัดสินใจเชิงกลยุทธ์',
  url: 'https://krich-intratip-portfolio.vercel.app',
} as const;
