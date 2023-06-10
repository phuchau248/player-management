import React, { Fragment } from 'react'
import Header from './components/Header'
import TasksList from './components/TaskList'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <Header />
      <TasksList />
    </Fragment>
  )
}

export default App
