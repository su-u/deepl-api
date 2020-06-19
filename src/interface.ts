import { SourceLanguage, TargetLanguage } from './language';

interface DeeplApiExtensionParameters {
  tag_handling: 'xml';
  non_splitting_tags: string;
  outline_detection: string;
  splitting_tags: string;
  ignore_tags: string;
}

interface DeeplApiOptionalParameters {
  source_lang: SourceLanguage;
  split_sentences: '0' | '1' | 'nonewlines';
  preserve_formatting: '0' | '1';
  formality: 'default' | 'more' | 'less';
}

export interface DeeplApiParameters extends Partial<DeeplApiOptionalParameters>, Partial<DeeplApiExtensionParameters> {
  text: string | string[];
  target_lang: TargetLanguage;
  auth_key: string;
}

interface TextParameter {
  detected_source_language: SourceLanguage;
  text: string;
}

export interface Response {
  translations: TextParameter[];
}
