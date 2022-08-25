
import axios from "axios";
import React from "react";
import Navbar from "./Navbar/Navbar";
import { Box, Input, InputGroup, Heading, Text } from "@chakra-ui/react";
// import { Icon } from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons";
import { InputLeftElement } from "@chakra-ui/react";

function getData() {
  console.log("hiii")
  // axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=e0341712&app_key=4a62763ba2d2826c3259c26c4c85880c&ingr=apple&nutrition-type=cooking`)
  // .then((res)=>{
  //   console.log(res)
  // })
}


function Food() {
  getData();
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Box w={"80%"} h={"100px"} margin={"auto"}>
          <Box style={{ marginTop: 30 }}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon cursor="pointer" />}
              />
              <Input
                w={"60rem"}
                placeholder="Search for a food,brand,or restaurant"
              />
            </InputGroup>
          </Box>

          {/* -------------------------------------HideContent---------------------------------------- */}
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
          {/* -------------------------------------HideContent---------------------------------------- */}
        </Box>
      </div>
    </>
  );
}

export default Food;