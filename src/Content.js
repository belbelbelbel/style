import React, { createContext, useState } from 'react'
export const Cartpage = createContext();
export const Content = ({children}) => {
  const [cart,setcart] = useState([])
  return (
    <Cartpage.Provider value={{cart,setcart}}>
        {children}
    </Cartpage.Provider>
  )
}
