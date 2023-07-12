/*export const API_URL = import.meta.env.VITE_API_URL;
export const API_KEY = "YOUR_API_KEY";
export const MAX_RESULTS = 10;*/

export const BASE_API_URL = "http://localhost:3001/";
export const ITEMS_API_URL = `${BASE_API_URL}item`;
export const ORDERS_API_URL = `${BASE_API_URL}order`;
export const SALES_API_URL = `${BASE_API_URL}sale`;

export const InputType = {
  text: "text",
  number: "number",
};

export const InputIconClassName = {
  text: "fa-solid fa-comment",
  number: "fa-solid fa-hashtag",
  money: "fa-solid fa-dollar-sign",
};

export const mapURL = new Map();
mapURL.set("/", 1);
mapURL.set("/sales", 1);
mapURL.set("/items", 2);
mapURL.set("/orders", 3);
