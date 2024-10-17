'use client'
import React, { createContext, useContext, useReducer, useEffect } from 'react'

//Setup Context and reducer (reducer makes it easier to add many commands without more imports)
const Context = createContext()
const reducer = (state, action) => {
  const item = action.item
  switch (action.type) {
    // Login actions
    case 'INIT':
      return action.value
    case 'LOGIN':
      return action.value
    case 'LOGOUT':
      localStorage.clear()
      return false
    // Store actions
    case 'ADD_ITEM':
      var addExist = state.cart.find((cart) => cart.id === action.item.id)
      if (addExist) {
        return state.cart.map((x) =>
          x.id === item.id ? { ...addExist, qty: addExist.qty + 1 } : x,
        )
      } else {
        return [...state.cart, { ...item, qty: 1 }]
      }
    case 'SUBTRACT_ITEM':
      var removeExist = cart.find((cart) => cart.id === action.item.id)
      if (removeExist.qty === 1) {
        return cart.filter((x) => x.id !== item.id)
      } else {
        return cart.map((x) =>
          x.id === item.id ? { ...removeExist, qty: removeExist.qty - 1 } : x,
        )
      }
    case 'REMOVE_ITEM':
      return cart.filter((x) => x.id !== item.id)
    case 'ADD_ADDRESS':
      return cart
    case 'INIT':
      return action.value
    case 'CLEAR_CART':
      return []
    default:
      throw new Error()
  }
}
//Set initial state for new users
const initialState = { prerender: true }

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
  //When the user details change on the site, save to localstorage & set cookie
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
