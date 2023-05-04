import { VStack, Flex, Heading, IconButton, useColorMode, Text, Button, Spacer, useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaArrowAltCircleDown, FaBars } from "react-icons/fa"
import About from './About'
import { ThemeContext } from '../context/Context'
import { Link } from 'react-scroll';
const Header = () => {
  const { maintainTheme } = useContext(ThemeContext)
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  const isDark = colorMode === "dark"
  const handleClick = () => {
    toggleColorMode()
    maintainTheme(isDark)
  }
  const handleAboutClick=()=>{
    window.location.href="#about"
  }
  const handleHomeClick = () => {
    window.location.href = "/"
  }
  return (
    <>
      <VStack style={{ backgroundColor: "#E0E4FF", position: "fixed", top: "0px", width: "100%" }} display={{ "2xl": "flex", xl: "flex", lg: "flex", md: "flex", sm: "none", base: "none" }} padding={3} boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"}>
        <Flex w="100%" justifyContent={'space-between'} alignItems={'center'}>
          <Heading ml="5" size="md" fontWeight="bold" color="purple.500">Ezhar's logo</Heading>
          <Flex id='nav-menu' width={["70%", "70%", "65%", "60%", "50%"]} justifyContent={"space-between"} alignItems={'center'} color="purple.500" fontWeight="bold">
            <Link to={"/"}><Text _hover={{ cursor: "pointer" }} id='home' onClick={handleHomeClick}>HOME</Text></Link>
            <Link className="nav-link about"
              to="about"
              smooth={true}
              duration={500}
              offset={-70}><Text _hover={{ cursor: "pointer" }}>ABOUT ME</Text></Link>
            <Link Link className="nav-link skills"
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}><Text _hover={{ cursor: "pointer" }}>SKILLS</Text></Link>
            <Link Link className="nav-link projects"
              to="projects"
              smooth={true}
              duration={800}
              offset={-70}><Text _hover={{ cursor: "pointer" }}>PROJECTS</Text></Link>
            <Text _hover={{ cursor: "pointer" }} id='contact'>CONTACT</Text>
            <a href="https://drive.google.com/file/d/1qy06lYUfPUNwB1aZ8nCxTd224rMdg3ps/view?usp=sharing" target='_black'><Button id="resume" _hover={{ cursor: "pointer" }} as={'b'}><Flex alignItems={'center'} gap="1">RESUME <FaArrowAltCircleDown /></Flex></Button></a>
            <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={handleClick}></IconButton>
          </Flex>
        </Flex>
      </VStack>
      <VStack style={{ backgroundColor: "#E0E4FF", position: "fixed", top: "0px", width: "100%" }} display={{ "2xl": "none", xl: "none", lg: "none", md: "none", sm: "flex", base: "flex" }} padding={3} boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"}>
        <Flex w="100%" justifyContent={'space-between'} alignItems={'center'}>
          <Heading ml="5" size="md" fontWeight="bold" color="purple.500">Ezhar's logo</Heading>
          <Flex w="100px" color="purple.500">
            <Button onClick={onOpen}><FaBars /></Button>
            <Spacer></Spacer>
            <IconButton color="purple.500" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={handleClick}></IconButton>
          </Flex>
        </Flex>
      </VStack>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent size={"xs"}>
          <DrawerCloseButton />
          <Box p="40px" color="#805AD5">
            <Box m="5px" pl="10px"><Text _hover={{ cursor: "pointer" }} id='home' as="b">HOME</Text></Box>
            <hr />
            <Box m="5px" pl="10px"><Text _hover={{ cursor: "pointer" }} id='about' as="b" onClick={handleAboutClick}>ABOUT ME</Text></Box>
            <hr />
            <Box m="5px" pl="10px"><Text _hover={{ cursor: "pointer" }} id='skills' as="b">SKILLS</Text></Box>
            <hr />
            <Box m="5px" pl="10px"><Text _hover={{ cursor: "pointer" }} id='projects' as="b">PROJECTS</Text></Box>
            <hr />
            <Box m="5px" pl="10px"><Text _hover={{ cursor: "pointer" }} id='contact' as="b">CONTACT</Text></Box>
            <hr />
            <a href="https://drive.google.com/file/d/1qy06lYUfPUNwB1aZ8nCxTd224rMdg3ps/view?usp=sharing" target='_black'><Box id="resume" m="5px" pl="10px"><Flex _hover={{ cursor: "pointer" }} alignItems={'center'} gap="1"><Text as="b">RESUME</Text> <FaArrowAltCircleDown /></Flex></Box></a>
            <hr />
          </Box>
          <DrawerBody>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header
