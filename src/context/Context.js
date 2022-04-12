import React from 'react'
import data from './assets/data'; 


const themeContext = React.createContext()

function Context({children}) {
  return (
    <themeContext.Provider value={data}>
        {children}
    </themeContext.Provider>
  )
}

export {themeContext, Context}
