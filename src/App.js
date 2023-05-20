import {VStack, Flex, Heading , Spacer} from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { FaSun, FaMoon , FaInstagram, FaGithub, FaLinkedin, } from 'react-icons/fa'
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';

function App() {
  const {colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";


  return (
    <VStack p={3} >
      <Flex w ='100%'>
            <Heading ml={8} size={'md'} fontWeight={'semibold'} color={'cyan.400'}>Prem Kumar</Heading>
            <Spacer/>
             
            <IconButton ml={2} icon={<FaLinkedin/>} isRound='true' onClick={()=>window.open("https://www.linkedin.com/messaging/thread/2-M2NhMDczMDEtZTRhNy00Mzk4LWI3YzUtNmI3MjIwZjYxNmEzXzAxMw==/")}></IconButton>
            <IconButton ml={2} icon={<FaInstagram/>} isRound='true' onClick={()=>window.open("https://instagram.com/spk_roge?igshid=OTk0YzhjMDVlZA==")}></IconButton>
            <IconButton ml={2} icon={<FaGithub/>} isRound='true' onClick={()=>window.open("https://github.com/Prem-13/techfully")}></IconButton>
            <IconButton ml={8} icon={isDark? <FaSun/> : <FaMoon/> } isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>

     <Header/>
     <Social/>
     <Profile/>
    </VStack>
  );
}

export default App;
