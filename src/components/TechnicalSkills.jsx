import { Box, Text, Flex, Image, Spacer, Grid } from '@chakra-ui/react'
import React from 'react'
import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import javaScript from "../assets/images/javascript.png"
import react from "../assets/images/React.png"
import redux from "../assets/images/redux.png"
import chakraUi from "../assets/images/chakra-ui.png"
import typeScript from "../assets/images/Typescript.png"
import npm from "../assets/images/npm-logo.png"
import nodejs from "../assets/images/nodeJs.webp"
import express from "../assets/images/express.png"
import mongoDB from "../assets/images/mongoDB.svg"
import github from "../assets/images/github.png"
import git from "../assets/images/git.png"
import analytics from "../assets/images/googleAnalytics.svg"
import figma from "../assets/images/figma.png"
import searchConsole from "../assets/images/searchconsole.svg"
import seo from "../assets/images/seo-icon.png"
import GitHubCalendar from 'react-github-calendar'
import { FaCommentAlt,FaChild,FaPeopleCarry,FaUsers } from "react-icons/fa";
import Projects from './Projects'
const TechnicalSkills = () => {
    return (
        <>
            <Box id='about' pt={"40px"} w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }} m={"auto"} textAlign={"center"}>
                <Text color={"purple.500"} fontSize={"4xl"} fontWeight={"bold"}>Technical Skills</Text>
                <Text mt={"20px"} fontSize={"xl"} fontWeight={"semibold"}>FRONT END</Text>
                <Box mt={"20px"}>
                    <Flex w={"100%"} justifyContent={"space-between"} >
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={html}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "10px", base: "10px" }}>HTML5</Text>
                        </Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={css}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>CSS</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={javaScript}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>JavaScript</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={react}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>React.Js</Text></Box>
                    </Flex>
                </Box>
                <br />
                <Box mt={"20px"}>
                    <Flex w={"100%"} justifyContent={"space-between"} >
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={redux}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Redux</Text>
                        </Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={chakraUi}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Chakra-ui</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={typeScript}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>TypeScript</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={npm}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>NPM</Text></Box>
                    </Flex>
                </Box>
                <br />
                <Text mt={"30px"} fontSize={"xl"} fontWeight={"semibold"}>BACK END</Text>
                <br />
                <Box w="80%" m="auto">
                    <Flex w={"100%"} justifyContent={"space-between"} >
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={nodejs}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>NodeJS</Text>
                        </Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={express}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Express.Js</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={mongoDB}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>MongoDB</Text></Box>
                    </Flex>
                </Box>
                <br />
                <Text mt={"20px"} fontSize={"xl"} fontWeight={"semibold"}>OTHER DEV TOOLS</Text>
                <Box mt={"20px"}>
                    <Flex w={"100%"} justifyContent={"space-between"} >
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={figma}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Figma</Text>
                        </Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={analytics}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Google Analytics</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={seo}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>SEO</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={searchConsole}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Search Console</Text></Box>
                    </Flex>
                </Box>
                <br />
                <Text mt={"30px"} fontSize={"xl"} fontWeight={"semibold"}>VERSION CONTROL</Text>
                <br />
                <Box w={{ md: "30%", lg: "30%", xl: "30%", sm: "60%", base: "60%" }} m="auto">
                    <Flex w={"100%"} justifyContent={"space-between"} >
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={github}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Git Hub</Text>
                        </Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={git}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Git</Text></Box>
                    </Flex>
                </Box>
                <br />
                <br />
                <Text mt={"30px"} fontSize={"xl"} fontWeight={"semibold"}>GITHUB STATS</Text>
                <br />
                <Flex flexDirection={{ md: "row", lg: "row", xl: "row", sm: "column", base: "column" }} justifyContent={"center"} gap={"30px"}>
                    <p align="center"><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=izhar100&" alt="izhar100" /></p>
                    <p align="center"><img align="center" src="https://github-readme-stats.vercel.app/api?username=izhar100&show_icons=true&locale=en" alt="izhar100" /></p>
                </Flex>
                <br />
                    <p align="center"><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=izhar100&show_icons=true&locale=en&layout=compact" alt="izhar100" width={"350px"}/></p>
            </Box>
            <br />
            <Text textAlign={"center"} mt={"30px"} fontSize={"xl"} fontWeight={"semibold"}>GITHUB STATS</Text>
            <br />
            <Flex w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }}  justifyContent={"center"} m={"auto"}>
                <GitHubCalendar username="izhar100"/>
            </Flex>
            <br />
            <br />
            <Text color={"purple.500"} textAlign={"center"} fontSize={"4xl"} fontWeight={"bold"}>Soft Skills</Text>
                <br />
                <br />
                <Box mt={"20px"} w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }} m={"auto"}>
                    <Grid w={"100%"} justifyContent={"space-between"} gridTemplateColumns={{ md: "repeat(4,1fr)", lg: "repeat(4,1fr)", xl: "repeat(4,1fr)", sm: "repeat(2,1fr)", base: "repeat(2,1fr)" }} gap={5} >
                        <Box p={"30px"}>
                            <Flex justifyContent={"center"}><FaCommentAlt size={"30px"}/></Flex>
                            <Flex justifyContent={"center"}><Text fontSize={{ md: "18px", lg: "18px", xl: "18px", sm: "15px", base: "15px" }}>Communication</Text></Flex>
                        </Box>
                        <Box p={"30px"}>
                            <Flex justifyContent={"center"}><FaChild size={"30px"}/></Flex>
                            <Flex justifyContent={"center"}><Text fontSize={{ md: "18px", lg: "18px", xl: "18px", sm: "15px", base: "15px" }}>Adaptibility</Text></Flex>
                            
                        </Box>
                        <Box p={"30px"}>
                            <Flex justifyContent={"center"}><FaPeopleCarry size={"30px"}/></Flex>
                            <Flex justifyContent={"center"}><Text fontSize={{ md: "18px", lg: "18px", xl: "18px", sm: "15px", base: "15px" }}>Team work</Text></Flex>
                           
                        </Box>
                        <Box p={"30px"}>
                            <Flex justifyContent={"center"}><FaUsers size={"30px"}/></Flex>
                            <Flex justifyContent={"center"}><Text fontSize={{ md: "18px", lg: "18px", xl: "18px", sm: "15px", base: "15px" }}>Leadership</Text></Flex>
                           
                        </Box>
                    </Grid>
                </Box>
            <br />
            <br />
            <Box mt={"20px"} w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }} m={"auto"}>
                    <Grid w={"100%"} justifyContent={"space-between"} gridTemplateColumns={{ md: "repeat(4,1fr)", lg: "repeat(4,1fr)", xl: "repeat(4,1fr)", sm: "repeat(2,1fr)", base: "repeat(1,1fr)" }} gap={5} >
                        <Box border={"4px solid #805AD5"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"} p={"40px"} borderRadius={"10px"}>
                            <Flex justifyContent={"center"}><Text as={"b"} fontSize={"20px"}>1200+</Text></Flex>
                            <Flex justifyContent={"center"}><Text fontSize={{ md: "18px", lg: "18px", xl: "18px", sm: "14px", base: "14px" }}>Hours of coding</Text></Flex>
                        </Box>
                        <Box border={"4px solid #805AD5"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"} p={"40px"} borderRadius={"10px"}>
                            <Flex justifyContent={"center"}><Text as={"b"} fontSize={"20px"}>500+</Text></Flex>
                            <Flex justifyContent={"center"}><Text fontSize={{ md: "18px", lg: "18px", xl: "18px", sm: "14px", base: "14px" }}>Problem solved</Text></Flex>
                            
                        </Box>
                        <Box border={"4px solid #805AD5"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"} p={"40px"} borderRadius={"10px"}>
                            <Flex justifyContent={"center"}><Text as={"b"} fontSize={"20px"}>200+</Text></Flex>
                            <Flex justifyContent={"center"}><Text fontSize={{ md: "18px", lg: "18px", xl: "18px", sm: "14px", base: "14px" }}>Soft Skill Session</Text></Flex>
                           
                        </Box>
                        <Box border={"4px solid #805AD5"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"} p={"40px"} borderRadius={"10px"}>
                            <Flex justifyContent={"center"}><Text as={"b"} fontSize={"20px"}>10+</Text></Flex>
                            <Flex justifyContent={"center"}><Text fontSize={{ md: "18px", lg: "18px", xl: "18px", sm: "14px", base: "14px" }}>Projects Built</Text></Flex>
                           
                        </Box>
                    </Grid>
                </Box>
                <br />
                <br />
                <Projects/>
        </>
    )
}

export default TechnicalSkills
