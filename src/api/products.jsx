const BASE_URL = 'https://dummyjson.com';

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  return data.products;
}
