import _ from "lodash";

const getState = (state) => _.get(state, "home");

export const getProductsData = (state) => {
  const _state = getState(state);
  const productsData = _.get(_state, "fetchProducts", {});

  return {
    data: _.get(productsData, "data.results", null),
    loading: _.get(productsData, "loading"),
    error: _.get(productsData, "error"),
  };
};
