import { Box, Flex, Grid, Image, Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import villacart1 from "../assets/images/villacart.png"
import villacart2 from "../assets/images/villacart2.png"
import thirdStep1 from "../assets/images/ThirdStep.png"
import thirdStep2 from "../assets/images/ThirdStep2.png"
import { FaChrome,FaGithub } from "react-icons/fa";
const Projects = () => {
    const [image1,setImage1]=useState(villacart1)
    const [image2,setImage2]=useState(thirdStep1)
    const handleMouseEnter1=()=>{
        setImage1(villacart2)
    }
    const handleMouseLeave1=()=>{
        setImage1(villacart1)
    }
    const handleMouseEnter2=()=>{
        setImage2(thirdStep2)
    }
    const handleMouseLeave2=()=>{
        setImage2(thirdStep1)
    }
  return (
    <div>
        <Box id='project' w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }} m={"auto"}>
        <Text color={"purple.500"}  fontSize={"4xl"} fontWeight={"bold"} textAlign={"center"}>Projects</Text>
        <br />
        <Flex gap={10} flexDirection={{ md: "row", lg: "row", xl: "row", sm: "column", base: "column" }}>
            <Box w={"100%"}>
               <Image src={image1} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} borderRadius={"10px"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}/> 
            </Box>
            <Box w={"100%"}>
             <Text fontSize={"25px"} as={"b"}>VillaCart</Text>
             <br />
             <Text fontSize={"18px"}>VillaCart is an E-Commerce Indian based web application which sells cloths and crafts related Products.</Text>
             <br />
             <Text fontSize={"18px"}>An Individual project built and executed in 4 Days.</Text>
             <br />
             <Text fontSize={"25px"} as={"b"}>Tech Stack</Text>
             <Text>REACT | JAVASCRIPT | CHAKRA UI | ROUTER DOM | AXIOS | NPM</Text>
             <br />
             <Flex gap={8}>
              <Link href="https://villacart.netlify.app/" target='_blank'><FaChrome size={"30px"}/></Link>
              <Link href='https://github.com/izhar100/villacart' target='_blank'><FaGithub size={"30px"}/></Link>
             </Flex>
            </Box>
        </Flex>
        <br />
        <br />
        <br />
        <Flex gap={10} flexDirection={{ md: "row", lg: "row", xl: "row", sm: "column-reverse", base: "column-reverse" }}>
        <Box w={"100%"}>
             <Text fontSize={"25px"} as={"b"}>ThirdStep</Text>
             <br />
             <Text fontSize={"18px"}>An ecommerce fully functional shoeselling website with all features and a full admin side. Users can buy their favorite shoe according to their choices and get it delivered.</Text>
             <br />
             <Text fontSize={"18px"}>A Collaborative project built by 4 Developers, executed in 4 Days.</Text>
             <br />
             <Text fontSize={"25px"} as={"b"}>Tech Stack</Text>
             <Text>HTML | CSS | JAVASCRIPT</Text>
             <br />
             <Flex gap={8}>
              <Link href="https://thirdstep.netlify.app//" target='_blank'><FaChrome size={"30px"}/></Link>
              <Link href='https://github.com/izhar100/thirdstep' target='_blank'><FaGithub size={"30px"}/></Link>
             </Flex>
            </Box>
            <Box w={"100%"}>
               <Image src={image2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} borderRadius={"10px"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}/> 
            </Box>
        </Flex>
        </Box>
        <br />
    </div>
  )
}

export default Projects
