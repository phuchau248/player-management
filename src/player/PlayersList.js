import React, { Fragment, useEffect } from 'react'
import AddPlayer from './AddPlayer'
import Player from './Player';
import { connect } from "react-redux";
import { getPlayer } from "./../player/playerActions";

const PlayersList = (props) => {

    useEffect(() => {
        props.getPlayerRequest();
    }, [])

    return (
        <Fragment>
            <AddPlayer />
            {props.list.map(player => {
                return (
                    <Player
                        key={player.id}
                        playerProps={player}
                    />
                )
            })}
        </Fragment>
    )
}

function mapStateToProps(state) {
    return { list: state.playerReducer.list };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPlayerRequest: () => {
            dispatch(getPlayer());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList)
