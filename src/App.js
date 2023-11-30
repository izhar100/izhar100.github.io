import { useContext, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import { ThemeContext } from "./context/Context";
import AboutMe from "./components/AboutMe";
import { Spacer } from "@chakra-ui/react";
import TechnicalSkills from "./components/TechnicalSkills";
import styled from "styled-components";
function App() {
  // let isDark=localStorage.getItem("darkmode")||false;
  const {darkmode}=useContext(ThemeContext)
  let isDark=darkmode;
  const DIV=styled.div`
  background-color: ${isDark?"black":"#E9D8FD"};
  color:${isDark?"white":"black"}
  `
  return <>
  <DIV className="App" id="home">
      <Header/>
      <About/>
      <AboutMe/>
      <TechnicalSkills/>
    </DIV>
  </>
}

export default App;
