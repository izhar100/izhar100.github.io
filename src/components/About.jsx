import React from 'react'
import { Grid, Box, Text, Image,Flex,Button } from '@chakra-ui/react'
import {FaArrowAltCircleDown} from "react-icons/fa"
const About = () => {
    return (
        <>
            <Grid m="auto" templateColumns={{ sm:"1fr", md: "1fr 1fr" }} w={{md:"80%",lg:"80%",xl:"80%",sm:"95%"}} mt={5} gap={5}>
                <Box order={{sm:2,md:1,base:2,lg:1}} textAlign={{sm:"center",base:"center",md:"left",lg:"left"}}>
                    <Text fontSize={{md:"3xl",lg:"4xl",xl:"4xl",sm:"2xl",base:"2xl"}} fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="5xl" fontWeight="bold" bgGradient={"linear-gradient(90deg, rgba(79,0,251,1) 0%, rgba(255,0,0,1) 95%);"} bgClip="text">Ezhar Ashraf</Text>
                    <Text fontSize={{md:"3xl",lg:"4xl",xl:"4xl",sm:"2xl",base:"2xl"}} fontWeight="semibold">A Full Stack (MERN) Web Developer</Text>
                    <Button mt={"5px"} bg={"#805AD5"} color={"white"} _hover={{cursor:"pointer"}}  as={'b'}><Flex alignItems={'center'} gap="1">RESUME <FaArrowAltCircleDown/></Flex></Button>
                </Box>
                <Flex justifyContent={"center"} order={{sm:1,md:1,base:1,lg:1}}>
                    <Image
                        borderRadius='full'
                        width={"300px"}
                        src='https://avatars.githubusercontent.com/u/95142289?v=4'
                    />
                </Flex>
            </Grid>
        </>
    )
}

export default About
