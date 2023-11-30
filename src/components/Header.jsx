import { VStack, Flex, Heading, IconButton, useColorMode, Text, Button, Spacer, Image, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import {
  Box,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaSun, FaMoon, FaArrowAltCircleDown } from "react-icons/fa"
import { ThemeContext } from '../context/Context'
import { Link } from 'react-scroll';
import myresume from "../assets/images/Ezhar-Ashraf-Resume.pdf"
import { HamburgerIcon } from '@chakra-ui/icons'
const Header = () => {
  const { maintainTheme } = useContext(ThemeContext)
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark"
  const handleClick = () => {
    toggleColorMode()
    maintainTheme(isDark)
  }
  return (
    <>
      <Box id='nav-menu'>
        <VStack zIndex={1} style={{ backgroundColor: "#ffffff", position: "fixed", top: "0px", width: "100%" }} display={{ "2xl": "flex", xl: "flex", lg: "flex", md: "flex", sm: "none", base: "none" }} padding={3} boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"}>
          <Flex w="100%" justifyContent={'space-between'} alignItems={'center'}>
            <Heading ml="5" size="md" fontWeight="bold" color="purple.500"><Image src='https://avatars.githubusercontent.com/u/95142289?v=4' border={"3px solid #805AD5"} borderRadius={"full"} w={"40px"} /></Heading>
            <Flex width={["70%", "70%", "65%", "60%", "50%"]} justifyContent={"space-between"} alignItems={'center'} color="purple.500" fontWeight="bold">
              <Link to={"/"}><Text className="nav-link home" _hover={{ cursor: "pointer",borderBottom:"3px solid #dd00ff" }} id='home'>HOME</Text></Link>
              <Link className="nav-link about"
                to="about"
                smooth={true}
                duration={500}
                offset={-70}><Text _hover={{ cursor: "pointer", borderBottom:"3px solid #dd00ff" }}>ABOUT ME</Text></Link>
              <Link className="nav-link skills"
                to="skills"
                smooth={true}
                duration={500}
                offset={-70}><Text _hover={{ cursor: "pointer",borderBottom:"3px solid #dd00ff" }}>SKILLS</Text></Link>
              <Link className="nav-link projects"
                to="projects"
                smooth={true}
                duration={800}
                offset={-70}><Text _hover={{ cursor: "pointer",borderBottom:"3px solid #dd00ff" }}>PROJECTS</Text></Link>
              <Link className="nav-link contact"
                to="contact"
                smooth={true}
                duration={800}
                offset={-70}><Text _hover={{ cursor: "pointer",borderBottom:"3px solid #dd00ff" }}>CONTACT</Text></Link>
              <a id="resume-link-1" className='nav-link resume' href={myresume} download={"Ezhar-Ashraf-Resume.pdf"} onClick={() => {
                window.open("https://drive.google.com/file/d/1qy06lYUfPUNwB1aZ8nCxTd224rMdg3ps/view?usp=sharing")
              }}><Button id="resume-button-1" _hover={{ cursor: "pointer",bgColor:"#805AD5",color:"white" }} as={'b'}><Flex alignItems={'center'} gap="1">RESUME <FaArrowAltCircleDown /></Flex></Button></a>
              <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={handleClick}></IconButton>
            </Flex>
          </Flex>
        </VStack>
        <VStack zIndex={1} style={{ backgroundColor: "#ffffff", position: "fixed", top: "0px", width: "100%" }} display={{ "2xl": "none", xl: "none", lg: "none", md: "none", sm: "flex", base: "flex" }} padding={3} boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"}>
          <Flex w="100%" justifyContent={'space-between'} alignItems={'center'}>
            <Heading ml="5" size="md" fontWeight="bold" color="purple.500"><Image src='https://avatars.githubusercontent.com/u/95142289?v=4' borderRadius={"full"} w={"40px"} /></Heading>
            <Flex w="100px" color="purple.500">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon color={"purple.500"} />}
                />
                <MenuList>
                  <MenuItem>
                  {/* className="nav-link home" */}
                  <Link to={"/"}><Text  _hover={{ cursor: "pointer" }} id='home'>HOME</Text></Link>
                  </MenuItem>
                  {/* className="nav-link about" */}
                  <MenuItem>
                    <Link 
                      to="about"
                      smooth={true}
                      duration={500}
                      offset={-70}><Text _hover={{ cursor: "pointer" }}>ABOUT ME</Text></Link>
                  </MenuItem>
                  {/* className="nav-link skills" */}
                  <MenuItem>
                    <Link
                      to="skills"
                      smooth={true}
                      duration={500}
                      offset={-70}><Text _hover={{ cursor: "pointer" }}>SKILLS</Text></Link>
                  </MenuItem>
                  {/* className="nav-link projects" */}
                  <MenuItem>
                    <Link
                      to="projects"
                      smooth={true}
                      duration={800}
                      offset={-70}><Text _hover={{ cursor: "pointer" }}>PROJECTS</Text></Link>
                  </MenuItem>
                  <MenuItem>
                  {/* className="nav-link contact" */}
                    <Link 
                      to="contact"
                      smooth={true}
                      duration={800}
                      offset={-70}><Text _hover={{ cursor: "pointer" }}>CONTACT</Text></Link>
                  </MenuItem>
                  <MenuItem>
                  {/* id="resume-link-1" className='nav-link resume' */}
                    <a  href={myresume} download={"Ezhar-Ashraf-Resume.pdf"} onClick={() => {
                      window.open("https://drive.google.com/file/d/1qy06lYUfPUNwB1aZ8nCxTd224rMdg3ps/view?usp=sharing")
                    }} ><Box id="resume"><Flex _hover={{ cursor: "pointer" }} alignItems={'center'} gap="1"><Text >RESUME</Text> <FaArrowAltCircleDown /></Flex></Box></a>
                    {/* id="resume-button-1" */}
                  </MenuItem>
                </MenuList>
              </Menu>
              <Spacer></Spacer>
              <IconButton color="purple.500" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={handleClick}></IconButton>
            </Flex>
          </Flex>
        </VStack>
      </Box>
    </>
  )
}

export default Header
