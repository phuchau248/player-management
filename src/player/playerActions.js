import * as types from "../constants/ActionTypes";

export const addPlayer = (name) => {
  return {
    type: types.ADD_PLAYER,
    name,
  };
};


export const getPlayer = (list) => {
  return {
    type: types.GET_PLAYER,
    list,
  };
};


export const deletePlayer = (player) => {
  return {
    type: types.DELETE_PLAYER,
    player,
  };
};

export const markOnTheField = (player) => {
  return {
    type: types.EDIT_PLAYER,
    player: player,
  };
};