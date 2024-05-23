import { HttpMethod } from 'ts/enum/http';
import { sendRequest } from 'utilities/axios';

export const getBlogById = async (id: number) => {
  const url = `/blog/${id}`;
  return sendRequest(url, {}, HttpMethod.GET);
};

export const getAllBlog = async (payload: any) => {
  const url = `/blog?take=${payload.take}&page=${payload.page}`;
  return sendRequest(url, payload, HttpMethod.GET);
};
