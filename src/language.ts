export const LANGUAGES = {
  DE: 'DE',
  EN: 'EN',
  FR: 'FR',
  IT: 'IT',
  JA: 'JA',
  ES: 'ES',
  NL: 'NL',
  PL: 'PL',
  PT_PT: 'PT-PT',
  PT_BR: 'PT-BR',
  PT: 'PT',
  RU: 'RU',
  ZH: 'ZH',
} as const;

type Language = typeof LANGUAGES[keyof typeof LANGUAGES];
export type SourceLanguage =
  Extract<Language,
    | typeof LANGUAGES.DE
    | typeof LANGUAGES.EN
    | typeof LANGUAGES.FR
    | typeof LANGUAGES.IT
    | typeof LANGUAGES.JA
    | typeof LANGUAGES.ES
    | typeof LANGUAGES.NL
    | typeof LANGUAGES.PL
    | typeof LANGUAGES.PT
    | typeof LANGUAGES.RU
    | typeof LANGUAGES.ZH>

export type TargetLanguage =
  Extract<Language,
    | typeof LANGUAGES.DE
    | typeof LANGUAGES.EN
    | typeof LANGUAGES.FR
    | typeof LANGUAGES.IT
    | typeof LANGUAGES.JA
    | typeof LANGUAGES.ES
    | typeof LANGUAGES.NL
    | typeof LANGUAGES.PL
    | typeof LANGUAGES.PT_PT
    | typeof LANGUAGES.PT_BR
    | typeof LANGUAGES.PT
    | typeof LANGUAGES.RU
    | typeof LANGUAGES.ZH>