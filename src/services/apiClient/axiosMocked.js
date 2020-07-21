import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import apiProductList from '../apiClient/mockApi/products';

const mock = new MockAdapter(axios, { delayResponse: 1000 });

mock.onGet(`${window.location.origin}/api/productsList`).reply(apiProductList)
  .onAny().passThrough(); // pass through other requests

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

export default axios;