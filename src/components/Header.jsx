import { VStack, Flex, Heading, IconButton, useColorMode, Text, Button, Spacer } from '@chakra-ui/react'
import React from 'react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode == "dark"
    return (
        <>
            <VStack padding={5}>
                <Flex w="100%" justifyContent={'space-between'}>
                    <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Ezhar's Logo</Heading>
                    <Flex width={'50%'} justify={'space-between'} alignItems={'center'}>
                        <Text as={'b'}>Home</Text>
                        <Text as={'b'}>About Me</Text>
                        <Text as={'b'}>Skills</Text>
                        <Text as={'b'}>Projects</Text>
                        <Text as={'b'}>Contact</Text>
                        <Button>Resume</Button>
                        <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
                    </Flex>
                </Flex>
            </VStack>
        </>
    )
}

export default Header
