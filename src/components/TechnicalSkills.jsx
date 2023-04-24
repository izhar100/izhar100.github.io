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
const TechnicalSkills = () => {
    return (
        <>
            <Box id='about' pt={"40px"} w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }} m={"auto"} textAlign={"center"}>
                <Text color={"purple.500"} fontSize={"4xl"} fontWeight={"bold"}>Technical Skills</Text>
                <Text mt={"20px"} fontSize={"xl"} fontWeight={"semibold"}>FRONT END</Text>
                <Box mt={"20px"}>
                    <Flex w={"100%"} justifyContent={"space-between"} >
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={html}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>HTML5</Text>
                        </Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={css}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>CSS</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={javaScript}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>JavaScript</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={react}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>React.Js</Text></Box>
                    </Flex>
                </Box>
                <br />
                <Box mt={"20px"}>
                    <Flex w={"100%"} justifyContent={"space-between"} >
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={redux}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>Redux</Text>
                        </Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={chakraUi}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>Chakra-ui</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={typeScript}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>TypeScript</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={npm}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>NPM</Text></Box>
                    </Flex>
                </Box>
                <br />
                <Text mt={"30px"} fontSize={"xl"} fontWeight={"semibold"}>BACK END</Text>
                <br />
                <Box w="80%" m="auto">
                    <Flex w={"100%"} justifyContent={"space-between"} >
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={nodejs}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>NodeJS</Text>
                        </Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={express}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>Express.Js</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={mongoDB}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>MongoDB</Text></Box>
                    </Flex>
                </Box>
                <br />
                <Text mt={"20px"} fontSize={"xl"} fontWeight={"semibold"}>OTHER DEV TOOLS</Text>
                <Box mt={"20px"}>
                    <Flex w={"100%"} justifyContent={"space-between"} >
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={figma}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>Figma</Text>
                        </Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={analytics}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>Google Analytics</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={seo}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>SEO</Text></Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={searchConsole}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>Search Console</Text></Box>
                    </Flex>
                </Box>
                <br />
                <Text mt={"30px"} fontSize={"xl"} fontWeight={"semibold"}>VERSION CONTROL</Text>
                <br />
                <Box w="30%" m="auto">
                    <Flex w={"100%"} justifyContent={"space-between"} >
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={github}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>Git Hub</Text>
                        </Box>
                        <Box w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image w={"100%"} src={git}></Image>
                            <Text fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "12px", base: "12px" }}>Git</Text></Box>
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
            <br />
        </>
    )
}

export default TechnicalSkills
