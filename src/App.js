import React, { Fragment } from 'react'
import Header from './components/Header'
import PlayersList from './components/PlayersList'
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
