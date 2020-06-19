export const LANGUAGES = {
  DE: 'DE',
  EN: 'EN',
  FR: 'FR',
  IT: 'IT',
  JA: 'JA',
  ES: 'ES',
  NL: 'NL',
  PL: 'PL',
  PT: 'PT',
  RU: 'RU',
  ZH: 'ZH',
} as const;

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];