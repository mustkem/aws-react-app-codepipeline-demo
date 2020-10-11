import { all } from "redux-saga/effects";
import { homeSagas } from "./Home";

export default function* rootSaga() {
  yield all([...homeSagas]);
}
