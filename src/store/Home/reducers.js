import { combineReducers } from "redux";
import * as types from "./types";

const initialState = {
  fetchProducts: {
    data: null,
    loading: false,
    error: null,
  },
};

const fetchProducts = (state = initialState.fetchProducts, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS: {
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    }
    case types.FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case types.FETCH_PRODUCTS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case types.FETCH_PRODUCTS_CLEAR: {
      return {
        ...initialState.fetchProducts,
      };
    }
    default:
      return state;
  }
};

export const homeReducer = combineReducers({
  fetchProducts,
});
