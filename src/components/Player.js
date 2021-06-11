import React from 'react'
import PropTypes from 'prop-types'

const Player = props => {
  const player = props.playerProps
  const markOnTheField = props.markOnTheFieldFunc
  const deletePlayer = props.deletePlayerFunc

  // Return
  return (
    <div className='m-2 border bg-light'>
      <input
        className='form-check-input'
        type='checkbox'
        onChange={markOnTheField.bind(this, player.id)}
        checked={player.onTheField}
      />
      <label className='label'>  ({player.id}) {player.name}</label>
      <button className='btn-danger' style={{ 'float': 'right' }} onClick={deletePlayer.bind(this, player.id)}>
        Xoá
      </button>
    </div>
  )
}

Player.propTypes = {
  playerProps: PropTypes.object.isRequired,
  markPassFunc: PropTypes.func,
  deletePlayerFunc: PropTypes.func.isRequired
}

export default Player
