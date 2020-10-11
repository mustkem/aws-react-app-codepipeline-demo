import * as types from "./types";

export const fetchProducts = (payload) => ({
  type: types.FETCH_PRODUCTS,
  payload,
});
