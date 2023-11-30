import React from 'react'
import { Grid, Box, Text, Image, Flex, Button } from '@chakra-ui/react'
import { FaArrowAltCircleDown } from "react-icons/fa"
import myresume from "../assets/images/Ezhar-Ashraf-Resume.pdf"
import Typist from "react-typist";
import Fade from 'react-reveal/Fade';
import "./about.css"
const About = () => {
    const show = true, hideWhenDone = true, hideWhenDoneDelay = 10, startDelay = 0

    return (
        <>
            <Grid pt={"100px"} m="auto" templateColumns={{ sm: "1fr", md: "1fr 1fr" }} w={{ md: "80%", lg: "80%", xl: "80%", sm: "95%" }} mt={5} gap={5}>
                <Box>
                    <Fade top>
                        <Box order={{ sm: 2, md: 1, base: 2, lg: 1 }} textAlign={{ sm: "center", base: "center", md: "left", lg: "left" }}>
                            <Text fontSize={{ md: "3xl", lg: "4xl", xl: "4xl", sm: "2xl", base: "2xl" }} fontWeight="semibold">Hi, I am</Text>
                            <Text id="user-detail-name" fontSize="5xl" fontWeight="bold" bgGradient={"linear-gradient(90deg, rgba(79,0,251,1) 0%, rgba(255,0,0,1) 95%);"} bgClip="text">Ezhar Ashraf</Text>
                            <Text fontSize={{ md: "3xl", lg: "4xl", xl: "4xl", sm: "2xl", base: "2xl" }} fontWeight="semibold">
                                <Typist startDelay={startDelay} cursor={{ show: show, hideWhenDone: hideWhenDone, hideWhenDoneDelay: hideWhenDoneDelay }}>
                                    I am a full stack web developer{" "}
                                </Typist>
                            </Text>
                            <br />
                            <Button id="resume-button-2" className='nav-link resume' mt={"5px"} bg={"#805AD5"} color={"white"} _hover={{ cursor: "pointer" }} as={'b'}
                                onClick={() => {
                                    window.open("https://drive.google.com/file/d/1qy06lYUfPUNwB1aZ8nCxTd224rMdg3ps/view?usp=sharing")
                                }}>
                                <a id="resume-link-2" href={myresume} target='black' download={"Ezhar-Ashraf-Resume.pdf"}><Flex alignItems={'center'} gap="1">RESUME <FaArrowAltCircleDown /></Flex></a>
                            </Button>
                        </Box>
                    </Fade>
                </Box>
                <Flex justifyContent={"center"} order={{ sm: 1, md: 1, base: 1, lg: 1 }}>
                    <Fade top>
                        {/* <Image
                            className="home-img"
                            borderRadius='full'
                            border={"1px solid red"}
                            width={{ sm: "250px", md: "300px", base: "250px", lg: "300px" }}
                            src='https://avatars.githubusercontent.com/u/95142289?v=4'
                        /> */}

                        <Box className="container">
                            <Box className="image-circle">
                                <Image width={{ sm: "250px", md: "300px", base: "250px", lg: "300px" }} src="https://avatars.githubusercontent.com/u/95142289?v=4" />
                            </Box>
                        </Box>
                    </Fade>
                </Flex>
            </Grid>
        </>
    )
}

export default About
