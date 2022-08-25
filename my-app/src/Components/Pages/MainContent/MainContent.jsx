import React from 'react'
import  styles from "./MainContnet.module.css"
import {Button,Text,Icon,SearchIcon} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import Login from "../Login/Login"



export default function MainContent() {

    
  return (
    <div style={styles.font} >
      <img style={{width:"100%",display:"block"}} src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-collage-top-large%402x.dcc5ac56.png&w=1200&q=75" />  
      <div style={{position:"absolute",top:"9%",left:"30%",transform:"translate(-50%,-50%)",fontSize:"4rem",fontWeight:"850",lineHeight:"60px"}}>
        <h1>Fitness starts<br></br> with what you<br></br> eat.</h1>
      </div>
      <div style={{position:"absolute",top:"13%",left:"12%",fontSize:"18px"}}>
      <p>Take control of your goals. Track calories, break <br></br> down ingredients, and log activities with<br></br> MyFitnessPal.</p>
      </div>
      <div>
      <Button style={{position:"absolute",top:"16%",left:"12%"}} colorScheme='messenger' size='lg'>
          START FOR FREE
  </Button>
      </div>
      <div style={{display:"flex",position:"absolute",top:"17.5%",left:"12%"}}>
        <p>Already have an account? </p> 
        <Link color={"blue"} to="/login">Login</Link>
      </div>

     <div className={styles.halfdiv}>
        <div className={styles.searchdiv}>  <Text fontSize='5xl'>Search over 11 million <br></br> foods in our database.</Text></div>
         <div ><Text fontSize='1xl'>What's in your food? Learn about calorie count, nutrition information<br></br> and serving size.</Text></div>
         <div>
         <div ><input className={styles.searchbox} placeholder='             Get the nutritions from ant food,like an apple' /></div>
         <div style={{position:"absolute",top:"70rem",left:"82%"}}><img src="https://img.icons8.com/ios/50/000000/search--v1.png"/></div>
         </div>    
     </div>

     <div>
        <div style={{textAlign:"center"}}>
        <Text fontWeight={900} marginTop={15} fontSize='5xl'>The Tools for Your Goals</Text>
        <Text>Trying to lose weight, tone up, lower your BMI, or invest in your overall health? <br /> We give you the right features to hit your goals.</Text>
        </div>

        <div style={{display:"flex",gap:"90px",width:"100%", marginTop:"20px",justifyContent:"center"}}>
          <div style={{justifyConent:"center"}} >
            <img style={{marginLeft:"80px"}} src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg" alt="" />
            <Text textAlign="center" fontSize='20px' fontWeight={400}>Learn. Track. Improve.</Text>
            <div style={{width:"250px",textAlign:"center"}} >
            <Text>Keeping a food diary helps you  understand your habits and  increases your likelihood of hitting your goals.</Text>
            </div>
          </div>
          <div style={{justifyConent:"center"}} >
            <img style={{marginLeft:"80px"}} src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg" alt="" />
            <Text textAlign="center" fontSize='20px' fontWeight={400}>Logging Simplified</Text>
            <div style={{width:"250px",textAlign:"center"}} >
            <Text>Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.</Text>
            </div>
          </div>
          <div style={{justifyConent:"center"}} >
            <img style={{marginLeft:"80px"}} src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg" alt="" />
            <Text textAlign="center" fontSize='20px' fontWeight={400}>Stay Motivated</Text>
            <div style={{width:"250px",textAlign:"center"}} >
            <Text>Join the World’s Largest Fitness Community for advice, tips, and support 24/7.</Text>
            </div>
          </div>
        </div>
        <div style={{width:"100%",justifyContent:"center",display:"flex",marginTop:"40px"}}>
        <Button colorScheme='messenger' size='lg'>START YOUR JOURNEY TODAY</Button>
        </div>
     </div>

     <div style={{marginTop:"90px"}}>
      <div style={{justifyContent:"center"}}>
        <Text textAlign="center" fontWeight={900} fontSize={50}>Victory Stories</Text>
      </div>
      <div style={{width:"71%", justifyItems:"center",margin:"auto"}}>
        <Text textAlign="center" >When you reach your goals, our whole community celebrates with you. That’s over 200 million members sharing in your victory—using it to inspire their own journey.</Text>
      </div>
     </div>
  {/* ---------------------------------------Carosoule--------------------------------- */}
       <div style={{display:"flex",justifyContent:"center",}}>
     <div style={{width:"70%",marginTop:"50px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
     <Carousel>
                <div >
                    <img src="https://i.imgur.com/mCDSjVz.png" />
                </div>
                <div>
                    <img src="https://i.imgur.com/5080May.png" />
                </div>
                <div>
                    <img src="https://i.imgur.com/ASFu5NN.png" />
                </div>
            </Carousel>
     </div>
     </div>

     {/* --------------------------------------Carousel------------------------------ */}
     <div style={{marginTop:"90px"}}>
       <div style={{display:"flex",justifyContent:"center"}}>
         <div>
          <Text fontWeight="900" fontSize="50px">Recipes & Inspiration</Text>
         </div>
       </div>
       <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
         <div >
          <Text>Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts.</Text>
         </div>
       </div>
       </div>

       {/* -----------------------------------------------------3divs--------------------------------------------------- */}
        
       <div style={{display:"flex",gap:"90px", marginTop:"20px",justifyContent:"center"}}>
          <div style={{width:"250px",borderRadius:"5%" , boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}} >
            <img style={{width:"250px"}} src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75" alt="" />
            <Text  fontSize='20px' fontWeight={800}>15 Make-Ahead Breakfasts Under 300 Calories.</Text>
            <div style={{marginTop:"15px", marginLeft:"15px"}} >
            <Text color={"blue"}>MyFitnessPal Blog</Text>
            </div>
          </div>
          <div style={{width:"250px",borderRadius:"5%", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}} >
            <img style={{width:"250px"}} src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75" alt="" />
            <Text  fontSize='20px' fontWeight={800}>Thw Problem With Cheat Days</Text>
            <div style={{marginTop:"15px", marginLeft:"15px"}} >
            <Text color={"blue"}>MyFitnessPal Blog</Text>
            </div>
          </div>
          <div style={{width:"250px",borderRadius:"5%", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}} >
            <img style={{width:"250px"}} src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75" alt="" />
            <Text  fontSize='20px' fontWeight={800}>Essential Guide to Getting Moving</Text>
            <div style={{marginTop:"15px", marginLeft:"15px"}} >
            <Text color={"blue"}>MyFitnessPal Blog</Text>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------- */}
        
        <div style={{marginTop:"80px"}}>

          <div style={{display:"flex",justifyContent:"center"}}>

            <Text textAlign="center" fontSize={40} fontWeight={900}>Connect with over <br /> 50 apps.</Text>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
            <Text textAlign="center">Easily link your MyFitnessPal account with apps that support your healthier <br /> lifestyle. It’s not just about calories. It’s about feeling better, <br /> looking better, and living better.</Text>
          </div>
            {/* ---------------------------------------Image--------------------------------- */}
            
          <div  style={{marginTop:"40px" ,display:"flex",justifyContent:"center"}}>
            <img width={700} src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75" />
          </div>
          {/* -----------------------------------Buttons----------------------------- */}
          <div style={{display:"flex", justifyContent:"center",gap:"40px",marginTop:"40px"}}>
            <div>
              <img src="https://www.myfitnesspal.com/_next/static/media/conversion-apple-app-store-logo.751bc42c.svg" />
            </div>
            <div>
              <img src="https://www.myfitnesspal.com/_next/static/media/conversion-google-play-store-logo.1c6369a1.svg" />
            </div>
          </div>
        </div>
    </div>
  )
}
