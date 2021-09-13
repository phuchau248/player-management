import React, { useState } from 'react'
import { connect } from "react-redux";
import { addPlayer } from "./playerActions";

const AddPlayer = (props) => {

  const [name, setName] = useState('')

    const changeName = event => {
      setName(event.target.value)
    }

  const onHandleAddAPlayer = event => {
    event.preventDefault()
    if (name !== '') {
      props.onAddPlayerRequest(name)
      setName('')
    }
  }

  return (
    <form className='form' onSubmit={(onHandleAddAPlayer)}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlayerRequest: (name) => {
      dispatch(addPlayer(name))
    }
  };
};

export default connect(null, mapDispatchToProps)(AddPlayer)
