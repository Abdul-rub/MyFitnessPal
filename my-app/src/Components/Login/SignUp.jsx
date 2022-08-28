import React from 'react';
import { useState } from 'react';
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
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Center
  } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

 

  

  export default function SignUp() {
    const[email,setEmail]= useState("")
    const[password,setPassword]=useState("")
    const[flag,setFlag]=useState(false)
    const [login,setLogin] = useState(true)

    const handleSubmit = (e)=>{
        e.preventDefault(); 
   
  
       if(!email || !password){
        setFlag(true);
       }
       else{
        setFlag(false);
        localStorage.setItem("email",JSON.stringify(email))
        localStorage.setItem("password",JSON.stringify(password))
        console.log("saved in ls")
       
        setLogin(!login)
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
              <Heading  fontSize={20}>Almost there! Create your account.</Heading>
              </Stack>
              
              <FormControl id="email">
                
        
                <Input  type="email"
                 name='name'
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder='Email address ' />
              </FormControl>
              <FormControl id="password">
           
                <Input type="password"
                 name='password'
                   onChange={(e)=>setPassword(e.target.value)} 
                   placeholder='Create Password' />
              </FormControl>
              <Stack spacing={6}>
             
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                  display>
                   
                  <Checkbox>Terms and condition</Checkbox>
                  <Text fontSize={12}>I agree to MyFitnessPal's Terms & Conditions and Privacy Policy.</Text>
                  
                </Stack>
                <Button onClick={handleSubmit}

                 colorScheme={'messenger'}>
                  SIGN UP
                </Button>
                {
                    flag &&(
                        <Alert status='success'>
                        <AlertIcon />
                        SignUp successfull !
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
        <Box>
            <Text fontSize={12}>
            We will never post anything without your permission

                               This site is protected by reCAPTCHA and the Google Privacy Policy and Terms apply.
            </Text>
        </Box>
      
           
              </Stack>
            </Stack>
          </Box>
          {/* <Text align={'center'} margin={"auto"} >
             Not a member yet? Sign up now!
            </Text> */}
        </Stack>
        </Flex>
        <div>
          <Footer/>
        </div>
      </>
    );
  }