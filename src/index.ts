import axios from 'axios';
import { stringify } from 'query-string';
import { DeeplApiParameters, Response } from "./interface";

const ENDPOINT = 'https://api.deepl.com/v2/translate';

export const translate = (parameters: DeeplApiParameters) => {
  return axios.post<Readonly<Response>>(
    ENDPOINT,
    stringify(parameters)
  );
};

export default translate;
