import React from 'react';
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
    useColorModeValue,
    Center
  } from '@chakra-ui/react';
  

  export default function Login() {
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
          {/* <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack> */}
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
              
              <FormControl id="email">
                <FormLabel fontSize={"1.2rem"} fontWeight={400}>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel fontSize={"1.2rem"} fontWeight={400}>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={6}>
              <Link fontSize={15} color={'blue'}>Forgot Password?</Link>
                {/* <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                   
                  <Checkbox>Remember this device</Checkbox>
                  
                </Stack> */}
                <Button
                 colorScheme={'messenger'}>
                  LOG IN
                </Button>
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