# Deepl-api
A deelpAPI wrapper available in typescript

## Install
npm
```
npm install deepl-api
```

yarn
```
yarn add deepl-api
```

## Use
```typescript
import { translate } from 'deepl-api';

const response = await translate({
  text: 'Hello',
  target_lang: 'JA',
  auth_key: 'authkey',
})

console.log(response.data);
```

response.data
```
{
  "translations": [
    {
      "detected_source_language": "EN",
      "text": "こんにちは"
    }
  ]
}
```


## see
- [DeepL API](https://www.deepl.com/docs-api/accessing-the-api/)