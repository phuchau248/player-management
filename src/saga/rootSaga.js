import { all } from "redux-saga/effects";
import { playerSaga } from "./playerSaga";

export default function* rootSaga() {
  yield all([playerSaga()]);
}
