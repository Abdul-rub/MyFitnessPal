
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Box, Input, InputGroup, Heading, Text,Button } from "@chakra-ui/react";
// import { Icon } from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons";
import { InputLeftElement } from "@chakra-ui/react";
import BeforeSearch from "./BeforeSearch"
import Styles from "./Food.module.css"
import Footer from "../Footer/Footer"

function getData(query) {
  return axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=e0341712&app_key=4a62763ba2d2826c3259c26c4c85880c&ingr=${query}&nutrition-type=cooking`)

}

function Food() {
  const [data,setData]=useState([])
  const [input, setInput] = useState("");
 
  function handleSubmit(){
    getData(input)
    .then((res)=>{
      setData(res.data.hints)
    })

  }

  useEffect(()=>{
    getData()
    .then((res)=>{
      setData(res.data.hints)
    })
  },[])

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Box w={"80%"} h={"auto"} margin={"auto"}>
          <Box style={{ marginTop: 30 }}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon />}
              />
              <Input onChange={
                (e)=>setInput(e.target.value)
              } w={"60rem"}
                placeholder="Search for a food,brand,or restaurant"
                type={"text"}
              />
            </InputGroup>
            <Button onClick={()=>handleSubmit()}>Search</Button>
          </Box>
          <ul>
             {
                data.map((el,ind)=>(
                  <Box w={900}
                  //  border='1px'
                  //   borderColor='red'
                     h={20} >
                      <hr />
                  <Text fontSize={25}
                   key={ind}>{el.food.label}</Text>
                   <Box display={"flex"} gap={4}>
                   <Text >Catagory: {el.food.category}</Text>
                   <Text >Calories:{el.food.nutrients.ENERC_KCAL}</Text>
                   <Text >Protein :{el.food.nutrients.PROCNT}</Text>
                   <Text >Fat :{el.food.nutrients.FAT}</Text>
                   <Text className={Styles.numberCircle}>{el.food.nutrients.ENERC_KCAL} </Text>
                   
                   
                   </Box>
                   <hr />
                   
                   </Box>
                ))
              }
              </ul>
        </Box>
        {/* <BeforeSearch/> */}
      </div>
      <Footer/>
    </>
  );
}

export default Food;