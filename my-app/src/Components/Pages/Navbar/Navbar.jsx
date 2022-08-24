import React from 'react'
import { Link } from 'react-router-dom'
import  style from "./Navbar.module.css"
import About from '../About'
import Food from '../Food'
import Exercies from '../Exercies'
import Apps from '../Apps'
import Community from '../Community'
import Premium from '../Premium'
// import logoStyle from "./Navbar.module.css"


export default function Navbar() {
  return (
    <>
     <div className={style.div1}>
        <h1 className={style.logoStyle}>myfitnesspal</h1>
       <div style={{display:"flex",color:"blue" ,marginTop:"30px",gap:"5px"}}>
       <div>
        <h4>Login</h4>
        </div>
        {/* <hr /> */}
        <div>
        <h4>SignUp</h4>
        </div>
       </div>
     </div>

     <div className={style.div2}>
      <div style={{display:"flex", gap:"25px",color:"white",marginLeft:"180px"}}>
       <Link to={<About/>}>ABOUT</Link>
       <Link to={<Food/>}>FOOD</Link>
       <Link to={<Exercies/>}>EXERCISE</Link>
       <Link to={<Apps/>}>APPS</Link>
       <Link to={<Community/>}>COMMUNITY</Link>
       <Link to={<Premium/>}>PREMIUM</Link>
       
      </div>


     </div>


    </>
  )
}
