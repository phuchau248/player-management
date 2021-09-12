import * as types from "../constants/ActionTypes";
import axios from "axios";

export const addPlayerRequest = (name) => {
    return (dispatch) => {
        axios
            .post("https://60c1be154f7e880017dc02df.mockapi.io/api/v1/player", {
                name,
                onTheField: false
            })
            .then((res) => {
                dispatch(addPlayer(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const addPlayer = (player) => {
    return {
        type: types.ADD_PLAYER,
        player,
    };
};

export const getPlayerRequest = () => {
    return (dispatch) => {
        axios
            .get("https://60c1be154f7e880017dc02df.mockapi.io/api/v1/player")
            .then((res) => {
                dispatch(getPlayer(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const getPlayer = (list) => {
    return {
        type: types.GET_PLAYER,
        list,
    };
};

export const deletePlayerRequest = (id) => {
    return (dispatch) => {
        axios
            .delete(`https://60c1be154f7e880017dc02df.mockapi.io/api/v1/player/${id}`)
            .then((response) => {
                dispatch(deletePlayer(response.data));
            });
    };
};

export const deletePlayer = (player) => {
    return {
        type: types.DELETE_PLAYER,
        player,
    };
};


export const markOnTheFieldRequest = (player) => {
    return (dispatch) => {
        axios
            .put(
                `https://60c1be154f7e880017dc02df.mockapi.io/api/v1/player/${player.id}`,
                {
                    onTheField: player.onTheField === true ? false : true
                }
            )
            .then((res) => {
                dispatch(markOnTheField(player));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const markOnTheField = (player) => {
    return {
        type: types.EDIT_PLAYER,
        player: player,
    };
};