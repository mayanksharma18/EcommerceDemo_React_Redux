import axios from './apiClient/axiosMocked';

const apiEndPointURL = endpoint => `${window.location.origin}/${endpoint}`; // eslint-disable-line no-undef

export default function ExecuteApiCall(method, endpoint, payload = {}) {
  const options = {
    method,
    url: apiEndPointURL(endpoint),
    params: {},
    data: {},
    withCredentials: true,
  };

  switch (method) {
    case 'patch':
    case 'post':
    case 'put':
      Object.assign(options, { data: payload });
      break;
    case 'delete':
    case 'get':
      Object.assign(options.params, payload);
      break;
    default:
      break;
  }

  return axios(options);
}