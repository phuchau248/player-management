import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddPlayer = props => {

  const addPlayer = props.addPlayerFunc

  const [name, setName] = useState('')

  const changeName = event => {
    setName(event.target.value)
  }

  const addAPlayer = event => {
    event.preventDefault()
    if (name !== '') {
      addPlayer(name)
      setName('')
    }
  }

  return (
    <form className='form' onSubmit={addAPlayer}>
      <input
        className='form-control col-2'
        type='text'
        name='name'
        placeholder='Thêm cầu thủ'
        style={{ 'display': 'inline', 'width': '80%', 'margin': '1%' }}
        value={name}
        onChange={changeName}
      />
      <input type='submit' value='Thêm' className='btn btn-primary col-2' />
    </form>


  )
}

AddPlayer.propTypes = {
  addPlayerFunc: PropTypes.func.isRequired
}

export default AddPlayer
