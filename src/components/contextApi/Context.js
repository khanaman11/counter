import React from 'react'
import { createContext } from "react";
export const myContext = createContext();
const data = {
    count:0,
    val:0
}
const Context = (props) => {
  return (
   <myContext.Provider value={data}>
        {props.children}
   </myContext.Provider>
  )
}

export default Context
