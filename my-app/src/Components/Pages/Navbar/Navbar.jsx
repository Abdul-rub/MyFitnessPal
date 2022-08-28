import React from 'react'
import { Link } from 'react-router-dom'
import  style from "./Navbar.module.css"



export default function Navbar() {
  return (
    <>
     <div className={style.div1}>
       <Link to='/'> <h1 className={style.logoStyle}>myfitnesspal</h1></Link>
       <div style={{display:"flex",color:"blue" ,marginTop:"30px",gap:"5px"}}>
       <div>
        <Link to='/login'>Login</Link>
        </div>
        {/* <hr /> */}
        <div>
        <Link to='/Signup'>SignUp</Link>
        </div>
       </div>
     </div>

     <div className={style.div2}>
      <div style={{display:"flex", gap:"25px",color:"white",marginLeft:"180px"}}>
       <Link to='/about'>ABOUT</Link>
       <Link to='/food'>FOOD</Link>
       <Link to=''>EXERCISE</Link>
       <Link to='/apps'>APPS</Link>
       <Link to=''>COMMUNITY</Link>
       <Link to=''>PREMIUM</Link>
       
       
      </div>


     </div>


    </>
  )
}
