import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { HttpMethod } from 'ts/enum/http';

const baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.baseURL = baseURL;

export const sendRequest = (url: string, payload: any, method = HttpMethod.POST, hasFile = false, isLoading = true) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbi5kYW5nMUBnbWFpbC5jb20iLCJpYXQiOjE3MTUzODcwODgsImV4cCI6MTcxNTQxNzA4OH0.x-So5EIG_uIDKSbY494I51y_Xglbbf7M8ym1FJ4TOuU';
  let requestObj = {
    method: method,
    url: url,
    data: payload,
    headers: {
      Authorization: `${process.env.REACT_APP_PREFIX_TOKEN_KEY} ${token}`,
      'Content-Type': hasFile ? 'multipart/form-data' : 'application/json',
    },
  };
  try {
    if (isLoading) {
      return trackPromise(axios(requestObj).then((res) => res.data));
    }
    return axios(requestObj).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};
