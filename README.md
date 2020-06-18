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

translate({
  text: 'Hello',
  target_lang: 'JA',
  auth_key: 'authkey',
})
  .then(response => {
      console.log(response.data);
  })
  .catch(error => {
      console.error(error)
  });
```

## see
- [DeepL API](https://www.deepl.com/docs-api/accessing-the-api/)