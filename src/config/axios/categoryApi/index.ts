import { HttpMethod } from 'ts/enum/http';
import { sendRequest } from 'utilities/axios';

export const getAllCategory = async () => {
  const url = '/category';
  return sendRequest(url, {}, HttpMethod.GET);
};
