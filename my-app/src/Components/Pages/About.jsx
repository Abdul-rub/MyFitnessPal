import { Heading,Box,Text,FormControl,Input,FormLabel,FormHelperText,Checkbox,Button,Center } from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa';
import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer';

export default function About() {
  return (
    <div>
      <Navbar/>
      <Box w={"100%"} h={"auto"} display={"flex"} justifyContent={"center"}>
        <Box>
          <Heading fontSize={26} >Lose Weight with MyFitnessPal.com — for FREE!</Heading>
          <Box w={700}>
            <p>Losing weight isn't easy - we know. But with a membership to MyFitnessPal.com, you'll get the tools you need to successfully take weight off - and keep it off. And best of all, you can signup for free, no strings attached. So put away your credit card - you'll never have to pay a cent.</p>
            &nbsp;
            <p>Study after study has confirmed the benefits of keeping track of the food you eat and the activity you do. It's simple - the more consistently you track your food intake, the more likely you are to lose weight. That's why every successful weight management program suggests that you keep a food diary and/or an activity log. But recording everything you eat without the right tools can be tedious at best, or simply impossible at worst.</p>
            &nbsp;
            <p>At MyFitnessPal.com, we focus on making sure you can log your meals as quickly and easily as possible. Because the easier we make it for you, the more likely you are to stay on track, and the more likely you are to succeed in your weight loss goals.</p>
          </Box>
          {/* -------------------------------Box-------------------------------- */}
          <Box w="auto" h="auto" >
            <img src="https://i.imgur.com/wDVRupy.png"  />
          </Box>
          {/* ----------------------------------------------------------------------------- */}

          <Box>
            <Heading marginTop={10} fontSize={20} color="blue">With a FREE membership you get:</Heading>
          </Box>
          <Box w={700} fontSize={16} lineHeight={2}>
           <p> ✔️The easiest to use food diary on the web - Track what you eat with just a few clicks from anywhere with an internet connection - at home or at work</p>
      
           <p> ✔️A searchable food database of over 300,000,000 items - and it's growing every day!</p>
      
           <p>✔️Your own personal food database - add your own foods and recipes at any time and access them from anywhere with an internet connection</p>
    
           <p>✔️Free mobile apps for iPhone and Android - so you can log your meals and exercise even when you are on the go</p>
     
           <p>✔️Support and motivation from people just like you - Our discussion forums let you learn from others, share your own tips, receive and give encouragement, and make friends.</p>
      
           <p>✔️A personalized diet profile - customized to your unique weight loss goals.</p>
      
           <p>✔️Flexibility - our system can support any diet like Atkins, the South Beach Diet, the Zone, and more. No matter what diet you're on, we can help.</p>
          </Box>
          <Box marginTop={10}>
            <Text color={"blue"} fontWeight={800}>Don't wait! Start losing weight the healthy way - all for FREE!</Text>
            <Box w="auto" h="auto" >
            <img src="https://i.imgur.com/57lUrnT.png "  />
          </Box>
          </Box>
        </Box>
        <Box  boxShadow='xl' p='4' rounded='md' bg='white' h={420}  >
        <FormControl>
          <FormLabel>Member Login</FormLabel>
          {/* ----------------------facebookbutton---------------------- */}
          <Center p={8}>
      <Button
        w={250}
        maxW={'md'}
        colorScheme={'facebook'}
        leftIcon={<FaFacebook />}>
        <Center>
          <Text>Continue with Facebook</Text>
        </Center>
        {/* --------------------------facebookicon----------------------- */}
      </Button>
    </Center>
           <FormLabel>User Name</FormLabel>
           <Input type='email' />
           <FormLabel>Password</FormLabel>
           <Input type='password' />
           <Checkbox colorScheme='green' defaultChecked>
                Remember me next time
            </Checkbox>
          
           </FormControl>
           <Button>Login</Button>  
           <Text color='blue' cursor="pointer">Forgot password or username?</Text>
           <Text>Not a member yet? Sign up now! </Text>
        </Box>
      </Box>
      <Footer/>
    </div>
  )
}
