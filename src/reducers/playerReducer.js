import * as types from "../constants/ActionTypes";

const initialState = {
  list: [],
};

const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLAYER:
      const list = action.list;
      return { ...state, list };

    case types.DELETE_PLAYER:
      let newList = state.list.filter(player => player.id !== action.player.id);
      return { ...state, list: newList };

    case types.EDIT_PLAYER:
      const newEditList = state.list.map(player => {
        if (player.id === action.player.id) {
          player.onTheField = !player.onTheField
        }
        return player
      })
      return { ...state, list: newEditList };

    case types.ADD_PLAYER:
      let currentList = [...state.list];
      currentList.push(action.player);
      return { ...state, list: currentList };
    default:
      return state;
  }
};

export default PlayerReducer;
