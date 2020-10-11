import { call, put, takeLatest } from "redux-saga/effects";

import * as types from "./types";
import { fetchProducts as fetchProductsApi } from "./api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchProducts(payload) {
  try {
    // do api call
    const response = yield call(fetchProductsApi, payload);
    yield put({
      type: types.FETCH_PRODUCTS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: types.FETCH_PRODUCTS_SUCCESS,
      error: error && error.message,
    });
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* homeSagas() {
  yield takeLatest(types.FETCH_PRODUCTS, fetchProducts);
}
