import React, { useState } from 'react'

const State = () => {
    const localStateObj = {}

    const defaultLocalState = {...localStateObj}

    const [localState, setLocalState] = useState(localStateObj) 
    
  return {localStateObj,
    defaultLocalState,
    localState,
    setLocalState}
}

export default State