import React from 'react'
import { connect } from "react-redux";
import { deletePlayer,  markOnTheField } from "./../player/playerActions";

const Player = props => {
  const player = props.playerProps  

  const onHandleMarkOnTheFfield = (player) => {
    props.onMarkOnTheFieldRequest(player)
  }
  const onHandleDeletePlayer = (id) => {
    props.onDeletePlayerRequest(id)
  }
  return (
    <div className='m-2 border bg-light'>
      <input
        className='form-check-input'
        type='checkbox'
        onChange={() => onHandleMarkOnTheFfield(player)}
        checked={player.onTheField}
      />
      <label className='label'>  ({player.id}) {player.name}</label>
      <button className='btn-danger' style={{ 'float': 'right' }} onClick={() => onHandleDeletePlayer(player.id)}>
        Xoá
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return { list: state.playerReducer.list };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePlayerRequest: (id) => {
      dispatch(deletePlayer(id));
    },
    onMarkOnTheFieldRequest: (player) => {
      dispatch(markOnTheField(player))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player)
  