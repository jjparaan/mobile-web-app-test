import React from 'react'
import View from './View/View'
import State from './Logic/State'
import Processes from './Logic/Processes'
import Events from './Logic/Events'

const Dashboard = () => {
  const state = State();

  const processes = Processes(state)

  const events = Events(processes)

  return (
    <>
        <View />
    </>
  )
}

export default Dashboard