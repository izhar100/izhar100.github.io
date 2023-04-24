import { useContext, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import { ThemeContext } from "./context/Context";
import AboutMe from "./components/AboutMe";
import { Spacer } from "@chakra-ui/react";
import TechnicalSkills from "./components/TechnicalSkills";
function App() {
  const {darkmode}=useContext(ThemeContext)
  return <>
  {darkmode?<div className="App" style={{backgroundColor:`black`}}>
      <Header/>
      <About/>
      <AboutMe/>
      <TechnicalSkills/>
    </div>
    :
    <div className="App" style={{backgroundColor:`#E9D8FD`}}>
      <Header/>
      <About/>
      <AboutMe/>
      <TechnicalSkills/>
    </div>}
  </>
}

export default App;
