import * as actions from "./actions";
import * as types from "./types";
import * as selectors from "./selectors";
import sagas from "./sagas";
import { homeReducer } from "./reducers";

const homeActions = {
  ...actions,
};

const homeTypes = {
  ...types,
};

const homeSelectors = {
  ...selectors,
};

const homeSagas = [sagas()];

export { homeActions, homeTypes, homeSelectors, homeSagas, homeReducer };
