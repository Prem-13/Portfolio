import React from 'react'
import  { Button } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image'
import { Circle, Stack , Flex, Box, Text} from '@chakra-ui/layout'
import {useMediaQuery} from '@chakra-ui/media-query'
import prem from '../assets/prem.jpg'


function Header() {

  const {colorMode} = useColorMode();

  const isDark = colorMode === 'dark';


  const [isNotSmallerScreen] = useMediaQuery("(min-width : 600px)")

  return (
    
        <Stack>
            {isNotSmallerScreen && (

             <Circle position={'absolute'}
             bg={'blue.100'}
             opacity={'0.1'}
             w='130px'
             h='130px'
             alignSelf={'flex-end'} />
             
             )}
            
             <Flex direction={isNotSmallerScreen ? "row" : "coloumn"}
             p = {isNotSmallerScreen ? '27' : '0'}
             alignSelf={'flex-start'}
             letterSpacing={15}
             >
                <Box mt={ isNotSmallerScreen?'0':16} alignSelf={'flex-start'} ml={15}>
                    <Text fontSize={'30px'} fontWeight={'semibold'} >Hi I am</Text>
                    <Text fontSize={'65px'} fontWeight={"bold"} bgGradient={'linear(to-r,cyan.400,blue.600,purple.700)'}
                    bgClip={'text'} >Prem Kumar</Text>
                   <marquee > <Text color={isDark?"gray.200" : "gray.700"}>Frontend Developer at Besant Tech.</Text></marquee>
                    <Button mt={8} colorScheme='blue' _hover={{ md:'align-top'}}>Hire me</Button>
                </Box>
                <Image 
                mt={isNotSmallerScreen?"0":"12"}
                mb={isNotSmallerScreen?"0":"12"}
                 alignSelf={'center'}
                 borderRadius={'260px'}
                 backgroundColor={'transparent'}
                 boxShadow={'lg'}
                 boxSize={'170px'}
                 zIndex={'1'}
                 objectFit={'cover'}
                src={prem}></Image>
             </Flex>


        </Stack>

   
  )
}

export default Header