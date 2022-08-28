import React from 'react';
import  { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import Footer from '../Pages/Footer/Footer'
import Navbar from '../Pages/Navbar/Navbar'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    Image,
    Alert,
    AlertIcon,
    useColorModeValue,
    Center
  } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';


  const initialFormState ={
    email:"",
    password:"",

  };
  

  export default function Login() {
    const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    } 
 }
   


    return (
      <>
      <div>
        <Navbar/>
      </div>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            w={500}
            h={'auto'}
            p={8}>
            <Stack spacing={4}>
              <Stack align={'center'}>
              <Heading  fontSize={20}>Member Login</Heading>
              </Stack>
              
              <FormControl  id="email">
                <FormLabel fontSize={"1.2rem"} fontWeight={400}>Email address</FormLabel>
                <Input  type="email" onChange={(event)=>setEmaillog(event.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel fontSize={"1.2rem"} fontWeight={400}>Password</FormLabel>
                <Input  type="password"   onChange={(event)=>setPasswordlog(event.target.value)}/>
              </FormControl>
              <Stack spacing={6}>
              <Link fontSize={15} color={'blue'}>Forgot Password?</Link>
                {/* <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                   
                  <Checkbox>Remember this device</Checkbox>
                  
                </Stack> */}
                <Button onClick={handleLogin}
                
                 colorScheme={'messenger'}>
                  LOG IN
                </Button>
                {flag && (
             <Alert status='success'>
             <AlertIcon />
             Login successfull !
           </Alert>
           
          )}

                <Stack align={'center'}>
               <Text fontSize={20}>or</Text>
               </Stack>
        <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>
      
           
              </Stack>
            </Stack>
          </Box>
          <Text align={'center'} margin={"auto"} >
             Not a member yet? Sign up now!
            </Text>
        </Stack>
        </Flex>
        <div>
          <Footer/>
        </div>
      </>
    );
  }