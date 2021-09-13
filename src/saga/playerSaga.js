import * as types from "../constants/ActionTypes";
import { takeEvery } from "@redux-saga/core/effects";
import { put } from "redux-saga/effects";
import axios from "axios";

function* handleGetPlayer(action) {
  let list = [];
  yield axios
    .get("https://60c1be154f7e880017dc02df.mockapi.io/api/v1/player")
    .then((res) => {
      list = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
    // Thực hiện gọi types.GET_PLAYER_SUCCESS đế Reducer
  yield put({ type: types.GET_PLAYER_SUCCESS, list });
}

function* handleAddPlayer(action) {
  const name = action.name;
  let player
  yield axios
    .post("https://60c1be154f7e880017dc02df.mockapi.io/api/v1/player", {
      name: name,
      onTheField: false
    })
    .then((res) => {
      player = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  yield put({ type: types.ADD_PLAYER_SUCCESS, player });

}

function* handleDeletePlayer(action) {
  const id = action.player
  let player

  yield axios
    .delete(`https://60c1be154f7e880017dc02df.mockapi.io/api/v1/player/${id}`)
    .then((res) => {
      player = res.data
    });
  yield put({ type: types.DELETE_PLAYER_SUCCESS, player });
}

function* handleMarkOnTheField(action) {
  let player
  yield axios
    .put(`https://60c1be154f7e880017dc02df.mockapi.io/api/v1/player/${action.player.id}`, {
      onTheField: action.player.onTheField === true ? false : true
    })
    .then((res) => {
      player = res.data
    })
    .catch((err) => {
      console.log(err);
    });
  yield put({ type: types.EDIT_PLAYER_SUCCESS, player });

}

export function* playerSaga() {
  yield takeEvery(types.GET_PLAYER, handleGetPlayer);
  yield takeEvery(types.ADD_PLAYER, handleAddPlayer);
  yield takeEvery(types.DELETE_PLAYER, handleDeletePlayer);
  yield takeEvery(types.EDIT_PLAYER, handleMarkOnTheField);
}
