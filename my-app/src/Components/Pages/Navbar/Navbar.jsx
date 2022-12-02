import React from 'react'
import { Link } from 'react-router-dom'
import  style from "./Navbar.module.css"
import {TbMinusVertical} from "react-icons/tb"
import {useColorMode,Button} from "@chakra-ui/react"


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
     <div className={style.div1}>
       <Link to='/'> <h1 className={style.logoStyle}>myfitnesspal</h1></Link>
       <div style={{display:"flex",color:"blue" ,marginTop:"30px",gap:"5px"}}>
       <div>
        <Link style={{color:'black', fontSize:'20px'}}to='/login'>Login</Link>
        </div>
        <TbMinusVertical style={{color:'blue', fontSize:'30px'}}/>
        <div>
        <Link style={{color:'black', fontSize:'20px'}} to='/Signup'>SignUp</Link>
        </div>
        <div style={{marginLeft:'25px'}}> <Button style={{color:'black', fontSize:'18px'}} onClick={toggleColorMode}>
         {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button></div>
       </div>
     </div>

     <div className={style.div2}>
      <div style={{display:"flex", gap:"25px",color:"white",marginLeft:"180px"}}>
       <Link to='/about'>ABOUT</Link>
       <Link to='/food'>FOOD</Link>
       <Link to='/exercise'>EXERCISE</Link>
       <Link to='/apps'>APPS</Link>
       <Link to=''>COMMUNITY</Link>
       <Link to=''>PREMIUM</Link>
       
       
      </div>


     </div>


    </>
  )
}
