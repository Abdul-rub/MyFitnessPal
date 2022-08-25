
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Box, Input, InputGroup, Heading, Text } from "@chakra-ui/react";
// import { Icon } from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons";
import { InputLeftElement } from "@chakra-ui/react";
import BeforeSearch from "./BeforeSearch"

function getData() {
  return axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=e0341712&app_key=4a62763ba2d2826c3259c26c4c85880c&ingr=apple&nutrition-type=cooking`)

}

function Food() {
  const [data,setData]=useState([])
  useEffect(()=>{
    getData()
    .then((res)=>{
      setData(res.data)
      console.log(res.data)
    })
  },[])

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
                children={<Search2Icon />}
              />
              <Input w={"60rem"}
                placeholder="Search for a food,brand,or restaurant"
                type={"text"}
              />
            </InputGroup>
          </Box>
         
        </Box>
        <BeforeSearch/>
      </div>
    </>
  );
}

export default Food;