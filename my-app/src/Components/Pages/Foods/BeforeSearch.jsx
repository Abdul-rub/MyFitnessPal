import {Box,Heading,Text} from "@chakra-ui/react"


import React from 'react'

export default function BeforeSearch() {
  return (
    <div>
        <Box>
            <Box marginTop={"50px"} display={"flex"} justifyContent={"center"}>
              <img src="https://www.myfitnesspal.com/_next/static/media/food-search.ca9350e8.svg" />
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Heading>Food Analysis</Heading>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Text textAlign={"center"}>
                Understand how the food you’re eating contributes to your daily{" "}
                <br /> calories, macronutrients, and micronutrients.
              </Text>
            </Box>
          </Box>
    </div>
  )
}
