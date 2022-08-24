import React from 'react'
import { Link } from 'react-router-dom'
import  style from "./Navbar.module.css"



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
       <Link to='/about'>ABOUT</Link>
       <Link to='/food'>FOOD</Link>
       <Link to='/excercise'>EXERCISE</Link>
       <Link to='/apps'>APPS</Link>
       <Link to='/community'>COMMUNITY</Link>
       <Link to='/premium'>PREMIUM</Link>
       
      </div>


     </div>


    </>
  )
}
