import ExecuteApiCall from './apiClient';

export default function fetchProductsList() {
  return ExecuteApiCall('get', 'api/productsList');
}