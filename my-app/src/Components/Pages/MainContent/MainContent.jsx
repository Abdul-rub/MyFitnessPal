import React from 'react'
import  styles from "./MainContnet.module.css"
import {Button,Text,Icon,SearchIcon} from "@chakra-ui/react"
import {Link} from "react-router-dom"

// import Login from "../Login/Login"


export default function MainContent() {

    
  return (
    <div style={styles.font} >
      <img style={{width:"100%",display:"block"}} src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-collage-top-large%402x.dcc5ac56.png&w=1200&q=75" />  
      <div style={{position:"absolute",top:"40%",left:"30%",transform:"translate(-50%,-50%)",fontSize:"4rem",fontWeight:"850",lineHeight:"60px"}}>
        <h1>Fitness starts<br></br> with what you<br></br> eat.</h1>
      </div>
      <div style={{position:"absolute",top:"55%",left:"12%",fontSize:"18px"}}>
      <p>Take control of your goals. Track calories, break <br></br> down ingredients, and log activities with<br></br> MyFitnessPal.</p>
      </div>
      <div>
      <Button style={{position:"absolute",top:"65%",left:"12%"}} colorScheme='messenger' size='lg'>
          START FOR FREE
  </Button>
      </div>
      <div style={{position:"absolute",top:"70%",left:"12%"}}>
        <p>Already have an account? </p> 
        {/* <Link to={<Login/>}>Login</Link> */}
      </div>

     <div className={styles.halfdiv}>
        <div className={styles.searchdiv}>  <Text fontSize='5xl'>Search over 11 million <br></br> foods in our database.</Text></div>
         <div ><Text fontSize='1xl'>What's in your food? Learn about calorie count, nutrition information<br></br> and serving size.</Text></div>
         <div>
         <div ><input className={styles.searchbox} placeholder='             Get the nutritions from ant food,like an apple' /></div>
         <div style={{position:"absolute",top:"90%",left:"82%"}}><img src="https://img.icons8.com/ios/50/000000/search--v1.png"/></div>
         </div>    
     </div>

     <div>
        <div>
        <Text fontWeight={900} fontSize='5xl'>The Tools for Your Goals</Text>
        </div>



     </div>



    </div>
  )
}
