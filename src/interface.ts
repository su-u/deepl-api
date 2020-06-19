import { Language } from './language';

interface DeeplXmlParameters {
  tag_handling: 'xml';
  non_splitting_tags: string;
  outline_detection: string;
  splitting_tags: string;
  ignore_tags: string;
}

interface DeeplOptionalParameters extends DeeplXmlParameters {
  source_lang: Language;
  split_sentences: '0' | '1' | 'nonewlines';
  preserve_formatting: '0' | '1';
  formality: 'default' | 'more' | 'less';
}

export interface DeeplParameters extends Partial<DeeplOptionalParameters> {
  text: string | string[];
  target_lang: Language;
  auth_key: string;
}

interface TextParameter {
  detected_source_language:Language;
  text: string;
}

export interface Response {
  translations: TextParameter[];
}
