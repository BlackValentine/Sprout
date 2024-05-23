import { HttpMethod } from 'ts/enum/http';
import { sendRequest } from 'utilities/axios';

export const getAllProduct = async (payload: any) => {
  let url = '/product?';
  Object.values(payload).forEach((value, index) => {
    if (value) {
      url = url + `${Object.keys(payload)[index]}=${value}&`;
    }
  });
  return sendRequest(url, payload, HttpMethod.GET);
};

export const getProductById = async (id: number) => {
  const url = `/product/${id}`;
  return sendRequest(url, {}, HttpMethod.GET);
};
