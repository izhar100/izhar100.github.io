import React, { createContext, useState } from 'react'
import App from '../App'
export const ThemeContext=createContext()
const Context = () => {
  const [darkmode,setDarkmode]=useState(localStorage.getItem("darkmode")||false)
  const maintainTheme=(isDark)=>{
    localStorage.setItem("darkmode",!darkmode)
    setDarkmode(!darkmode)
  }
  return (
    <ThemeContext.Provider value={{darkmode,maintainTheme}}>
        <App/>
    </ThemeContext.Provider>
  )
}

export default Context
