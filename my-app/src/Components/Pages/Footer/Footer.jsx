import React from 'react'
import {Box,Select} from "@chakra-ui/react"
export default function Footer() {
  return (
    <>
    <div style={{marginTop:"6rem"}}>
      <Box h={"6rem"} w={"100%"} cursor="pointer" color="blue" bg="rgb(235, 255, 255)"  display="flex" justifyContent="center" gap={4}>
         <div >Calories Counter</div>
         <div>Blog</div>
         <div>Terms</div>
         <div>Privacy</div>
         <div>Contact US</div>
         <div>API</div>
         <div>Jobs</div>
         <div>Feedback</div>
         <div>Community Guidelines</div>
         <div>Ad Choices</div>
         <div>Do Not Sell My Personal Information</div>
         <Select w={150} h={7} >
                <option value='option1'>English</option>
                <option value='option2'>Hindi</option>
                
            </Select>
      </Box>
      <div style={{textAlign:"center"}}>© 2022 MyFitnessPal, Inc.</div>
    </div>
     


    </>
  )
}
