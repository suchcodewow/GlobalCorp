'use client'
import React, { createContext, useContext, useReducer, useEffect } from 'react'

//Setup Context and reducer (reducer makes it easier to add many commands without more imports)
const Context = createContext()
const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return action.value
    case 'LOGIN':
      return action.value
    case 'LOGOUT':
      localStorage.clear()
      return false
    default:
      throw new Error()
  }
}
//Set initial state for new users
const initialState = {}

//setup provider
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  //Load user details from storage if found
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('localData')) || false
    dispatch({
      type: 'INIT',
      value: localData,
    })
  }, [])
  //When the user details change on the site, save to localstorage
  useEffect(() => {
    if (state.user) {
      // console.log("storing user", user);
      localStorage.setItem('localData', JSON.stringify(state))
    } else {
      // console.log("skip!", user);
    }
  }, [state])
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

// export UserProvider
export default UserProvider

// export a function to use the context in other components
export const useUserContext = () => useContext(Context)

// built-in test components

// export const CounterDisplay = () => {
//   const { state } = useUserContext()
//   return <div>Count: {state.count}</div>
// }

// export const CounterControls = () => {
//   const { dispatch } = useUserContext()
//   return (
//     <div>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   )
// }
