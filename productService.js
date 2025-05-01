import axios from 'axios';

const PRODUCT_API = 'http://localhost:5002/api/products';

export async function fetchProducts() {
  const response = await axios.get(PRODUCT_API);
  return response.data;
}