import React from 'react'
import { Icon } from '@chakra-ui/icon'
import {HStack } from '@chakra-ui/layout'
import {FaFacebook,FaInstagram, FaLinkedinIn} from 'react-icons/fa'
function Social() {
  return (
    <HStack spacing={24} >
      <Icon as={FaFacebook} boxSize={10}></Icon>
      <Icon as={FaInstagram} boxSize={10}></Icon>
      <Icon as={FaLinkedinIn} boxSize={10}></Icon>


    </HStack>
  )
}

export default Social