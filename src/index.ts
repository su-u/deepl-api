import axios from 'axios';
import { stringify } from 'query-string';
import preventExtensions = Reflect.preventExtensions;

type LangDict =
  | 'DE'
  | 'EN'
  | 'FR'
  | 'IT'
  | 'JA'
  | 'ES'
  | 'NL'
  | 'PL'
  | 'PT'
  | 'RU'
  | 'ZH';

interface DeeplOptionalParameters {
  split_sentences: any;
  source_lang: LangDict;
  preserve_formatting: '0' | '1';
  formality: '0' | '1';
  tag_handling: 'xml';
  non_splitting_tags: string;
  outline_detection: string;
  splitting_tags: string;
  ignore_tags: string;
}

interface DeeplParameters extends Partial<DeeplOptionalParameters> {
  text: string | string[];
  target_lang: LangDict;
  auth_key: string;
}

const ENDPOINT = 'https://api.deepl.com/v2/translate';

export const translate = (parameters: DeeplParameters) => {
  return axios.post(
    ENDPOINT,
    stringify(parameters)
  );
};

export default translate;