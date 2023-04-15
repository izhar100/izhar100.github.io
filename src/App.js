import { useContext, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import { ThemeContext } from "./context/Context";
function App() {
  const {darkmode}=useContext(ThemeContext)
  return <>
  {darkmode?<div className="App" style={{backgroundColor:`black`}}>
      <Header/>
    </div>
    :
    <div className="App" style={{backgroundColor:`#E9D8FD`}}>
      <Header/>
    </div>}
  </>
}

export default App;
