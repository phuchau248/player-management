import * as types from "../constants/ActionTypes";

const initialState = {
  list: [],
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLAYER_SUCCESS:
      const list = action.list;
      return { ...state, list };

    case types.DELETE_PLAYER_SUCCESS:
      let newList = state.list.filter(player => player.id !== action.player.id);
      return { ...state, list: newList };

    case types.EDIT_PLAYER_SUCCESS:
      console.log(action.player)
      const newEditList = state.list.map(player => {
        if (player.id === action.player.id) {
          player.onTheField = !player.onTheField
        }
        return player
      })
      return { ...state, list: newEditList };

    case types.ADD_PLAYER_SUCCESS:
      let currentList = [...state.list];
      currentList.push(action.player);
      return { ...state, list: currentList };
      
    default:
      return state;
  }
};
