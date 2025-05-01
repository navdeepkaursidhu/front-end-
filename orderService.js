import axios from 'axios';

const ORDER_API = 'http://localhost:5003/api/orders';

export async function createOrder(orderData) {
  const response = await axios.post(ORDER_API, orderData);
  return response.data;
}

export async function fetchMyOrders() {
  const response = await axios.get(`${ORDER_API}/myorders`);
  return response.data;
}