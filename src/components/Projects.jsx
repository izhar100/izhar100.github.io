import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import villacart1 from "../assets/images/villacart.png"
import villacart2 from "../assets/images/villacart2.png"
import thirdStep1 from "../assets/images/ThirdStep.png"
import thirdStep2 from "../assets/images/ThirdStep2.png"
import apkamarket1 from "../assets/images/apkamarket.png"
import apkamarket2 from "../assets/images/apkamarket2.png"
import indianEagle1 from "../assets/images/indianEgle.jpg"
import indianEagle2 from "../assets/images/indianEgle1.jpg"
import meesho1 from "../assets/images/meesho1.png"
import meesho2 from "../assets/images/meesho2.png"
import threadsclone1 from "../assets/images/threadsclone1.png"
import threadsclone2 from "../assets/images/threadsclone2.png"
import { FaChrome, FaGithub } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
const Projects = () => {
    const [image1, setImage1] = useState(villacart1)
    const [image2, setImage2] = useState(thirdStep1)
    const [image3, setImage3] = useState(apkamarket1)
    const [image4, setImage4] = useState(indianEagle2)
    const [image5, setImage5] = useState(meesho1)
    const [image6,setImage6]=useState(threadsclone1)
    const handleMouseEnter1 = () => {
        setImage1(villacart2)
    }
    const handleMouseLeave1 = () => {
        setImage1(villacart1)
    }
    const handleMouseEnter2 = () => {
        setImage2(thirdStep2)
    }
    const handleMouseLeave2 = () => {
        setImage2(thirdStep1)
    }
    const handleMouseEnter3 = () => {
        setImage3(apkamarket2)
    }
    const handleMouseLeave3 = () => {
        setImage3(apkamarket1)
    }
    const handleMouseEnter4 = () => {
        setImage4(indianEagle1)
    }
    const handleMouseLeave4 = () => {
        setImage4(indianEagle2)
    }
    const handleMouseEnter5 = () => {
        setImage5(meesho2)
    }
    const handleMouseLeave5 = () => {
        setImage5(meesho1)
    }
    const handleMouseEnter6=()=>{
        setImage6(threadsclone2)
    }
    const handleMouseLeave6 = () => {
        setImage6(threadsclone1)
    }
    return (
        <Box className='projects' id='projects'>
            <Box w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }} m={"auto"}>
                <Fade bottom>
                    <Text color={"purple.500"} fontSize={"4xl"} fontWeight={"bold"} textAlign={"center"}>Projects</Text></Fade>
                <br />
                <Box>
                    <Fade right>
                        <Flex className="project-card" gap={10} flexDirection={{ md: "row", lg: "row", xl: "row", sm: "column", base: "column" }}>
                            <Box w={"100%"}>
                                <Image src={image6} onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6} borderRadius={"10px"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} />
                            </Box>
                            <Box w={"100%"}>
                                <Text className="project-title" fontSize={"25px"} as={"b"}>Threads Clone</Text>
                                <br />
                                <Text className="project-description" fontSize={"18px"}>Threads clone is a social networking site where user can create account, create posts, follow users, like & comment on posts and chat with users.</Text>
                                <br />
                                <Text fontSize={"18px"}>An Individual project built in 7 days</Text>
                                <br />
                                <Text fontSize={"25px"} as={"b"}>Tech Stack</Text>
                                <Text className="project-tech-stack">REACT | NODE | EXPRESS | MONGODB | SOCKET IO | CHAKRA UI | ROUTER DOM | NPM</Text>
                                <br />
                                <Flex gap={8}>
                                    <Link className="project-deployed-link" href="https://threadsclone-kappa.vercel.app/" target='_blank'><FaChrome size={"30px"} /></Link>
                                    <Link className="project-github-link" href='https://github.com/izhar100/threads_clone' target='_blank'><FaGithub size={"30px"} /></Link>
                                </Flex>
                            </Box>
                        </Flex>
                    </Fade>
                </Box>
                <br />
                <br />
                <br />
                <Box>
                    <Fade left>
                        <Flex className="project-card" gap={10} flexDirection={{ md: "row", lg: "row", xl: "row", sm: "column-reverse", base: "column-reverse" }}>
                            <Box w={"100%"}>
                                <Text className="project-title" fontSize={"25px"} as={"b"}>Meesho Clone</Text>
                                <br />
                                <Text className="project-description" fontSize={"18px"}>Meesho clone emulates Meesho's key features, facilitating product buying, selling, store management, and secure transactions, offering an efficient e-commerce platform.</Text>
                                <br />
                                <Text fontSize={"18px"}>An Individual project built and executed in 5 Days.</Text>
                                <br />
                                <Text fontSize={"25px"} as={"b"}>Tech Stack</Text>
                                <Text className="project-tech-stack">REACTJS | NODEJS | EXPRESSJS | MONGODB | CHAKRA UI | FIREBASE | RAZORPAY</Text>
                                <br />
                                <Flex gap={8}>
                                    <Link className="project-deployed-link" href="https://meesho-clone-topaz.vercel.app/" target='_blank'><FaChrome size={"30px"} /></Link>
                                    <Link className="project-github-link" href='https://github.com/izhar100/meesho_clone' target='_blank'><FaGithub size={"30px"} /></Link>
                                </Flex>
                            </Box>
                            <Box w={"100%"}>
                                <Image src={image5} onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5} borderRadius={"10px"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} />
                            </Box>
                        </Flex>
                    </Fade>
                </Box>
                <br />
                <br />
                <br />
                <Box>
                    <Fade right>
                        <Flex className="project-card" gap={10} flexDirection={{ md: "row", lg: "row", xl: "row", sm: "column", base: "column" }}>
                            <Box w={"100%"}>
                                <Image src={image3} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} borderRadius={"10px"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} />
                            </Box>
                            <Box w={"100%"}>
                                <Text className="project-title" fontSize={"25px"} as={"b"}>Apka Market</Text>
                                <br />
                                <Text className="project-description" fontSize={"18px"}>Apka Market is a fruits and vegetables selling website where you can order fresh fruits and vegetables.</Text>
                                <br />
                                <Text fontSize={"18px"}>A Collaborative project built by 4 Developers, executed in 4 Days.</Text>
                                <br />
                                <Text fontSize={"25px"} as={"b"}>Tech Stack</Text>
                                <Text className="project-tech-stack">REACT | JSON SERVER | CHAKRA UI | ROUTER DOM | AXIOS | NPM</Text>
                                <br />
                                <Flex gap={8}>
                                    <Link className="project-deployed-link" href="https://apka-market.vercel.app/" target='_blank'><FaChrome size={"30px"} /></Link>
                                    <Link className="project-github-link" href='https://github.com/izhar100/Apka-market' target='_blank'><FaGithub size={"30px"} /></Link>
                                </Flex>
                            </Box>
                        </Flex>
                    </Fade>
                </Box>
                <br />
                <br />
                <br />
                <Box>
                    <Fade left>
                        <Flex className="project-card" gap={10} flexDirection={{ md: "row", lg: "row", xl: "row", sm: "column-reverse", base: "column-reverse" }}>
                            <Box w={"100%"}>
                                <Text className="project-title" fontSize={"25px"} as={"b"}>ThirdStep</Text>
                                <br />
                                <Text className="project-description" fontSize={"18px"}>An ecommerce fully functional shoeselling website with all features and a full admin side. Users can buy their favorite shoe according to their choices and get it delivered.</Text>
                                <br />
                                <Text fontSize={"18px"}>A Collaborative project built by 4 Developers, executed in 4 Days.</Text>
                                <br />
                                <Text fontSize={"25px"} as={"b"}>Tech Stack</Text>
                                <Text className="project-tech-stack">HTML | CSS | JAVASCRIPT</Text>
                                <br />
                                <Flex gap={8}>
                                    <Link className="project-deployed-link" href="https://thirdstep.netlify.app//" target='_blank'><FaChrome size={"30px"} /></Link>
                                    <Link className="project-github-link" href='https://github.com/izhar100/thirdstep' target='_blank'><FaGithub size={"30px"} /></Link>
                                </Flex>
                            </Box>
                            <Box w={"100%"}>
                                <Image src={image2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} borderRadius={"10px"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} />
                            </Box>
                        </Flex>
                    </Fade>
                </Box>
                <br />
                <br />
                <br />
                <Box>
                    <Fade right>
                        <Flex className="project-card" gap={10} flexDirection={{ md: "row", lg: "row", xl: "row", sm: "column", base: "column" }}>
                            <Box w={"100%"}>
                                <Image src={image1} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} borderRadius={"10px"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} />
                            </Box>
                            <Box w={"100%"}>
                                <Text className="project-title" fontSize={"25px"} as={"b"}>VillaCart</Text>
                                <br />
                                <Text className="project-description" fontSize={"18px"}>VillaCart is an E-Commerce Indian based web application which sells cloths and crafts related Products.</Text>
                                <br />
                                <Text fontSize={"18px"}>An Individual project built and executed in 4 Days.</Text>
                                <br />
                                <Text fontSize={"25px"} as={"b"}>Tech Stack</Text>
                                <Text className="project-tech-stack">REACT | JAVASCRIPT | CHAKRA UI | ROUTER DOM | AXIOS | NPM</Text>
                                <br />
                                <Flex gap={8}>
                                    <Link className="project-deployed-link" href="https://villa-cart.vercel.app/" target='_blank'><FaChrome size={"30px"} /></Link>
                                    <Link className="project-github-link" href='https://github.com/izhar100/villacart' target='_blank'><FaGithub size={"30px"} /></Link>
                                </Flex>
                            </Box>
                        </Flex>
                    </Fade>
                </Box>
                <br />
                <br />
                <br />
                <Box>
                    <Fade left>
                        <Flex className="project-card" gap={10} flexDirection={{ md: "row", lg: "row", xl: "row", sm: "column-reverse", base: "column-reverse" }}>
                            <Box w={"100%"}>
                                <Text className="project-title" fontSize={"25px"} as={"b"}>Indian Eagle</Text>
                                <br />
                                <Text className="project-description" fontSize={"18px"}>Indian Eagle is an E-Commerce US based Indian version web application which sells products related to Men and Women Clothing.</Text>
                                <br />
                                <Text fontSize={"18px"}>An Individual project built and executed in 4 Days.</Text>
                                <br />
                                <Text fontSize={"25px"} as={"b"}>Tech Stack</Text>
                                <Text className="project-tech-stack">HTML | CSS | JAVASCRIPT | MOCK API</Text>
                                <br />
                                <Flex gap={8}>
                                    <Link className="project-deployed-link" href="https://indianeagle.netlify.app/" target='_blank'><FaChrome size={"30px"} /></Link>
                                    <Link className="project-github-link" href='https://github.com/izhar100/IndianEagle' target='_blank'><FaGithub size={"30px"} /></Link>
                                </Flex>
                            </Box>
                            <Box w={"100%"}>
                                <Image src={image4} onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} borderRadius={"10px"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} />
                            </Box>
                        </Flex>
                    </Fade>
                </Box>
            </Box>
            <br />
        </Box>
    )
}

export default Projects
