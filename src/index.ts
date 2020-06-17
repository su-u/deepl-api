import axios from 'axios';
import { stringify } from 'query-string';

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

type DeeplOptionalParameters = {
    split_sentences: any;
    source_lang: LangDict;
    preserve_formatting: '0' | '1';
    formality: '0' | '1';
};

type DeeplParameters = {
    text: string | string[];
    target_lang: LangDict;
    auth_key: string;
} & Partial<DeeplOptionalParameters>;

const translate = (parameters: DeeplParameters) => {
    return axios.post(
        'https://api.deepl.com/v2/translate',
        stringify(parameters)
    );
};

translate({
    text: ['おはようございます', 'こんばんは'],
    source_lang: 'JA',
    target_lang: 'EN',
    auth_key: 'bc0db0be-899a-e6f6-7b29-29f0779546b7',
})
    .then(result => {
        console.log(result.data);
    })
    .catch(error => {
        console.error(error);
    });
