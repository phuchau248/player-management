import React, { Fragment } from 'react'
import Header from '../header/Header'
import PlayersList from '../player/PlayersList'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <Header />
      <PlayersList />
    </Fragment>
  )
}

export default App
