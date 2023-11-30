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
import { FaCommentAlt, FaChild, FaPeopleCarry, FaUsers } from "react-icons/fa";
import Projects from './Projects'
import Fade from 'react-reveal/Fade';
import Contact from './Contact'
const TechnicalSkills = () => {
   
    return (
        <>
            <Box id='skills' className='skills'>
                <Box pt={"40px"} w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }} m={"auto"} textAlign={"center"}>
                    <Fade bottom>
                    <Text color={"purple.500"} fontSize={"4xl"} fontWeight={"bold"}>Technical Skills</Text></Fade>
                    <Fade bottom>
                    <Text mt={"20px"} fontSize={"xl"} fontWeight={"semibold"}>FRONT END</Text></Fade>
                    <Fade bottom>
                            <Box mt={"20px"} className='skills-card'>
                                <Flex w={"100%"} justifyContent={"space-between"}>
                                    <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={html}></Image>
                                        <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "10px", base: "10px" }}>HTML5</Text>
                                    </Box>
                                    <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={css}></Image>
                                        <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>CSS</Text></Box>
                                    <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={javaScript}></Image>
                                        <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>JavaScript</Text></Box>
                                    <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={react}></Image>
                                        <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>React.Js</Text></Box>
                                </Flex>
                            </Box>
                            <br />
                            <Box mt={"20px"} className='skills-card'>
                                <Flex w={"100%"} justifyContent={"space-between"} >
                                    <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={redux}></Image>
                                        <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Redux</Text>
                                    </Box>
                                    <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={chakraUi}></Image>
                                        <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Chakra-ui</Text></Box>
                                    <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={typeScript}></Image>
                                        <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>TypeScript</Text></Box>
                                    <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={npm}></Image>
                                        <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>NPM</Text></Box>
                                </Flex>
                            </Box>
                    </Fade>
                    <br />
                    <Fade bottom>
                    <Text mt={"30px"} fontSize={"xl"} fontWeight={"semibold"}>BACK END</Text></Fade>
                    <br />

                    <Box w="80%" m="auto" className='skills-card'>
                        <Fade bottom>
                            <Flex w={"100%"} justifyContent={"space-between"} >
                                <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={nodejs}></Image>
                                    <Text className='skills-card-name'  fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>NodeJS</Text>
                                </Box>
                                <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={express}></Image>
                                    <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Express.Js</Text></Box>
                                <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={mongoDB}></Image>
                                    <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>MongoDB</Text></Box>
                            </Flex>
                        </Fade>
                    </Box>
                    <br />
                    <Fade bottom>
                    <Text mt={"20px"} fontSize={"xl"} fontWeight={"semibold"}>OTHER DEV TOOLS</Text></Fade>
                    <Box mt={"20px"} className='skills-card'>
                        <Fade bottom>
                            <Flex w={"100%"} justifyContent={"space-between"} >
                                <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={figma}></Image>
                                    <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Figma</Text>
                                </Box>
                                <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={analytics}></Image>
                                    <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Google Analytics</Text></Box>
                                <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={seo}></Image>
                                    <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>SEO</Text></Box>
                                <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={searchConsole}></Image>
                                    <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Search Console</Text></Box>
                            </Flex>
                        </Fade>
                    </Box>
                    <br />
                    <Fade bottom>
                    <Text mt={"30px"} fontSize={"xl"} fontWeight={"semibold"}>VERSION CONTROL</Text></Fade>
                    <br />
                    <Box w={{ md: "30%", lg: "30%", xl: "30%", sm: "60%", base: "60%" }} m="auto" className='skills-card'>
                        <Fade bottom>
                            <Flex w={"100%"} justifyContent={"space-between"} >
                                <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={github}></Image>
                                    <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Git Hub</Text>
                                </Box>
                                <Box className='skills-card' w={{ md: "70px", lg: "70px", xl: "70px", sm: "55px", base: "55px" }}><Image className="skills-card-img" w={"100%"} src={git}></Image>
                                    <Text className='skills-card-name' fontSize={{ md: "14px", lg: "14px", xl: "14px", sm: "11px", base: "11px" }}>Git</Text></Box>
                            </Flex>
                        </Fade>
                    </Box>
                    <br />
                    <br />
                    <Fade bottom>
                    <Text mt={"30px"} fontSize={"xl"} fontWeight={"semibold"}>GITHUB STATS</Text></Fade>
                    <br />
                    <Box>
                        <Fade bottom>
                            <Flex flexDirection={{ md: "row", lg: "row", xl: "row", sm: "column", base: "column" }} justifyContent={"center"} gap={"30px"}>
                                <p align="center"><img id="github-streak-stats" align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=izhar100&" alt="izhar100" /></p>
                                <p align="center"><img id="github-stats-card" align="center" src="https://github-readme-stats.vercel.app/api?username=izhar100&show_icons=true&locale=en" alt="izhar100" /></p>
                            </Flex>
                        </Fade>
                    </Box>
                    <br />
                    <Box>
                        <Fade bottom>
                            <p align="center"><img id="github-top-langs" align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=izhar100&show_icons=true&locale=en&layout=compact" alt="izhar100" width={"350px"} /></p>
                        </Fade>
                    </Box>
                </Box>
                <br />
                <Fade bottom>
                <Text textAlign={"center"} mt={"30px"} fontSize={"xl"} fontWeight={"semibold"}>GITHUB CALENDER</Text></Fade>
                <br />
                <Box>
                    <Fade bottom>
                        <Flex w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }} justifyContent={"center"} m={"auto"}>
                            <GitHubCalendar username="izhar100" />
                        </Flex>
                    </Fade>
                </Box>
                <br />
                <br />
                <Fade bottom>
                <Text color={"purple.500"} textAlign={"center"} fontSize={"4xl"} fontWeight={"bold"}>Soft Skills</Text></Fade>
                <br />
                <br />
                <Box mt={"20px"} w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }} m={"auto"}>
                    <Fade bottom>
                        <Grid w={"100%"} justifyContent={"space-between"} gridTemplateColumns={{ md: "repeat(4,1fr)", lg: "repeat(4,1fr)", xl: "repeat(4,1fr)", sm: "repeat(2,1fr)", base: "repeat(1,1fr)" }} gap={5} >
                            <Box p={"40px"}>
                                <Flex justifyContent={"center"}><FaCommentAlt size={"40px"} /></Flex>
                                <Flex justifyContent={"center"}><Text fontSize={{ md: "18px", lg: "18px", xl: "18px", sm: "16px", base: "16px" }}>Communication</Text></Flex>
                            </Box>
                            <Box p={"40px"}>
                                <Flex justifyContent={"center"}><FaChild size={"40px"} /></Flex>
                                <Flex justifyContent={"center"}><Text fontSize={{ md: "18px", lg: "18px", xl: "18px", sm: "16px", base: "16px" }}>Adaptibility</Text></Flex>

                            </Box>
                            <Box p={"40px"}>
                                <Flex justifyContent={"center"}><FaPeopleCarry size={"40px"} /></Flex>
                                <Flex justifyContent={"center"}><Text fontSize={{ md: "18px", lg: "18px", xl: "18px", sm: "16px", base: "16px" }}>Team work</Text></Flex>

                            </Box>
                            <Box p={"40px"}>
                                <Flex justifyContent={"center"}><FaUsers size={"40px"} /></Flex>
                                <Flex justifyContent={"center"}><Text fontSize={{ md: "18px", lg: "18px", xl: "18px", sm: "16px", base: "16px" }}>Leadership</Text></Flex>

                            </Box>
                        </Grid>
                    </Fade>
                </Box>
                <br />
                <br />
                <Box mt={"20px"} w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }} m={"auto"}>
                    <Fade bottom>
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
                    </Fade>
                </Box>
                <br />
                <br />
                <Projects />
                <br />
                <Contact/>
            </Box>
        </>
    )
}

export default TechnicalSkills
