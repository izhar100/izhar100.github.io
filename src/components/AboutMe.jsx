import { Box,Text,Flex,Spacer,Button } from '@chakra-ui/react'
import React from 'react'
import {FaInstagramSquare,FaLinkedin,FaTwitterSquare} from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
    <Box className='about' id='about' pt={"50px"} w={{md:"50%",lg:"50%",xl:"50%",sm:"90%",base:"90%"}} m={"auto"} textAlign={"center"}>
        <Text color={"purple.500"} fontSize={"4xl"} fontWeight={"bold"}>About Me</Text>
        <Text as="b" color="gray">@izhar100</Text>
        <Text mt={"20px"} textAlign={"justify"}>An ambitious developer with the ability to write neat and understandable code, looking forward to join a team with whom communication and teamwork are paramount. Certified in MERN Stack technologies. Seeking to further improve in building the web applications as the future full stack developer at Atmospheric Solutions.</Text>
        <Flex mt={"30px"} justifyContent={"center"} gap={"20px"} fontSize={"14px"}>
            <Box borderRadius={"3px"} bgColor={"white"} p={"2px 20px 2px 20px"} color={"black"}><Text>#WEB</Text></Box>
            <Box borderRadius={"3px"} bgColor={"white"} p={"2px 20px 2px 20px"} color={"black"}><Text>#MERN</Text></Box>
            <Box borderRadius={"3px"} bgColor={"white"} p={"2px 20px 2px 20px"} color={"black"}><Text>#TECH</Text></Box>
        </Flex>
        <Button _hover={{backgroundColor:"purple.500"}} mt={"20px"} bgColor={"purple.500"} p={"2px 20% 2px 20%"}><Text size={"xl"} color={"white"}>FOLLOW ME ON</Text></Button>
        <Flex justifyContent={"center"} _hover={{cursor:"pointer"}} color={"purple.500"} gap="5px" pt={"20px"} pb={"50px"}>
            <a href="https://www.linkedin.com/in/izhar100/" taget="_blank"><FaLinkedin size={"30px"}/></a>
            <a href="https://www.instagram.com/izhar_ia/" taget="_blank"><FaInstagramSquare size={"30px"}/></a>
            <a href="https://twitter.com/izhar_ia2" taget="_blank"><FaTwitterSquare size={"30px"}/></a>
        </Flex>
    </Box>
  </>
  )
}

export default AboutMe
