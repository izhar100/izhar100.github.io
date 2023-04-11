import { VStack, Flex, Heading, IconButton, useColorMode, Text, Button, Spacer } from '@chakra-ui/react'
import React from 'react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin,FaArrowAltCircleDown } from "react-icons/fa"

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark"
    return (
        <>
            <VStack padding={3} boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"}>
                <Flex w="100%" justifyContent={'space-between'} alignItems={'center'}>
                    <Heading ml="5" size="md" fontWeight="bold" color="purple.500">Ezhar's logo</Heading>
                    <Flex width={'50%'} justify={'space-between'} alignItems={'center'} color="purple.500" fontWeight="bold">
                        <Text>HOME</Text>
                        <Text>ABOUT ME</Text>
                        <Text>SKILLS</Text>
                        <Text>PROJECTS</Text>
                        <Text>CONTACT</Text>
                        <Button as={'b'}><Flex alignItems={'center'} gap="1">RESUME <FaArrowAltCircleDown/></Flex></Button>
                        <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
                    </Flex>
                </Flex>
            </VStack>
        </>
    )
}

export default Header
