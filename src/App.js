import { useContext, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import { ThemeContext } from "./context/Context";
import AboutMe from "./components/AboutMe";
import { Spacer } from "@chakra-ui/react";
import TechnicalSkills from "./components/TechnicalSkills";
import styled from "styled-components";
let isDark=false;
function App() {
  const {darkmode}=useContext(ThemeContext)
  isDark=darkmode;
  const DIV=styled.div`
  background-color: ${darkmode?"black":"#E9D8FD"};
  `
  return <>
  <DIV className="App">
      <Header/>
      <About/>
      <AboutMe/>
      <TechnicalSkills/>
    </DIV>
  </>
}

export default App;
