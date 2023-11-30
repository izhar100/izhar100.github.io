import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { MdLocationPin, MdMail} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <Box className='contact' id='contact'>
     <Fade bottom>
      <Text color={"purple.500"} fontSize={"4xl"} fontWeight={"bold"} textAlign={"center"}>Contact</Text>
      <br />
      <Flex w={"150px"} m={"auto"} justifyContent={"space-between"}>
        <Box>
        <Link href='https://github.com/izhar100' target='_blank'><FaGithub id="contact-github" size={"40px"} /></Link>
        </Box>
        <Box>
        <Link href="https://www.linkedin.com/in/izhar100/" taget="_blank"><FaLinkedin id="contact-linkedin" size={"40px"} /></Link>
        </Box>
      </Flex>
      <br />
      <Flex w={"60%"} m={"auto"} flexDirection={{lg:"row",xl:"row",md:"row",sm:"column",base:"column"}} justifyContent={"space-between"}>
       <Flex alignItems={"center"}gap={"5px"} justifyContent={"center"}>
       <FaPhone size={"16px"}/>
       <Text id="contact-phone">+919304864117</Text>
       </Flex>
       <Flex alignItems={"center"}gap={"5px"} justifyContent={"center"}>
       <MdMail size={"16px"}/>
       <Text id="contact-email">ezharashraf523@gmail.com</Text>
       </Flex>
       <Flex alignItems={"center"}gap={"5px"} justifyContent={"center"}>
       <MdLocationPin size={"18px"}/>
       <Text>Giridih,Jharkhand</Text>
       </Flex>
      </Flex>
      <br />
      </Fade>
    </Box>
  )
}

export default Contact
