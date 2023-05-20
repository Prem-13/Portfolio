import React from 'react'
import {useMediaQuery} from '@chakra-ui/media-query'
import {Box, Flex, Heading, Text} from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/icon'
import { DiReact, DiNodejsSmall, DiMongodb } from 'react-icons/di'

function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width : 600px)")


  return (
    <Flex direction={isNotSmallerScreen? 'row'  :  'column' } w={"100%"} maxWidth={{base:"100vh",md:"130vh",lg:"130vh",xl:"130vh"}}>
        <Box mb={-20} alignSelf={'center'} px={'25'} ml={-10}>
          <Heading fontWeight={'extrabold'} color={'cyan.500'} size={'3xl'}>+6 months</Heading>
          <Text color={'gray.400'} fontSize={'2x2'}>Doing internship at Besant Tech as a Frontend Developer.</Text>
         </Box> 

         <Box alignSelf={'center'} px={'16'}>
            <Text fontWeight={'bold'} fontSize={"15px"} mt={10}>Expertise and has the knowledge in these skills</Text>
         <Flex direction={isNotSmallerScreen?'row' : 'column'} mt={8}>
                <Flex 
            rounded={'xl'}
            direction={'column'}
            mt={4}
            bg={'blue.400'}
            h={'30vh'}
            w={'30vh'}
            justify={'flex-end'}
            _hover={{bg:"black"}}>
          <Icon color={'white'} p={4} w={24} h={24} as={DiReact}></Icon>
          <Text color={'white'} fontSize={30} fontWeight={'semibold'}>React</Text>
               </Flex>

               <Flex 
            rounded={'xl'}
            direction={'column'}
            mt={4}
            bg={'blue.400'}
            h={'30vh'}
            w={'30vh'}
            justify={'flex-end'}
            ml={isNotSmallerScreen? 4 : 0}
            _hover={{bg:"teal.200"}}>

          <Icon color={'black'} p={4} w={20} h={24} as={DiMongodb}></Icon>
          <Text color={'black'} fontSize={30} fontWeight={'semibold'}>MongoDB</Text>
              </Flex>

              <Flex 
            rounded={'xl'}
            direction={'column'}
            
            mt={4}
            bg={'blue.400'}
            h={'30vh'}
            w={'30vh'}
            justify={'flex-end'}
            ml={isNotSmallerScreen? 4 : 0}
            _hover={{bg:"coral"}}
            >
          <Icon color={'white'} p={4} w={24} h={24} as={DiNodejsSmall}></Icon>
          <Text color={'white'} fontSize={30} fontWeight={'semibold'}>Nodejs</Text>
            </Flex>


        </Flex>
        </Box>



    </Flex>


    
  )
}

export default Profile