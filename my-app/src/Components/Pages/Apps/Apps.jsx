import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from './Slider'
import {Text,SimpleGrid,Box,Image} from "@chakra-ui/react"
import Footer from "../Footer/Footer"


export default function Apps() {
  return (
    <>
    <Navbar/>
    
    <div style={{
      // display:"flex",
    //  justifyContent:"center",
     width:"50%",
    //  border:"1px solid red",
     height:"auto",
     margin:"auto",
     marginTop:"40px"}}>
     {/* ---------------------------slider------------------- */}
     <div style={{width:"100%",height:"200px"}}>
      <Slider/>
     </div>
        {/* ---------------------------------Content------------------------ */}
    <div style={{marginTop:"30px"}}>
      <Text fontSize={25} fontWeight={700} color={"#0a5282"}>Featured Apps</Text>
    </div>
    <hr />
    <div>
      {/* ---------------------------------------Grid_------------- */}
    <SimpleGrid columns={3} spacing={10} marginTop={10}>
    <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png"}/>
      </Box>
      <Box>
        <Text >Fitbit</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'}  borderRadius={5} color={'1px solid grey'}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_1_10_0_9523.png"}/>
      </Box>
      <Box>
        <Text >Garmin Connect</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_1_10_0_31181.png"}/>
      </Box>
      <Box>
        <Text >VeSync</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_1_10_0_97000.png"}/>
      </Box>
      <Box>
        <Text >Renpho Health</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png"}/>
      </Box>
      <Box>
        <Text >Strava</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png"}/>
      </Box>
      <Box>
        <Text >MapMyRun</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_1_10_0_44251.png"}/>
      </Box>
      <Box>
        <Text >RunKeeper</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
    </SimpleGrid>
</div>
{/* --------------------------------------------AppMarket place -------- */}
<div style={{marginTop:"150px"}}>
      <Text fontSize={25} fontWeight={700} color={"#0a5282"}>App Marketplace</Text>
    </div>
    <hr />
    <div>
    <SimpleGrid columns={3} spacing={10} marginTop={10}>
    <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png"}/>
      </Box>
      <Box>
        <Text >Fitbit</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_1_10_0_9523.png"}/>
      </Box>
      <Box>
        <Text >Garmin Connect</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_110_1_10_0_74815.png"}/>
      </Box>
      <Box>
        <Text >MapMyFitness</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_182_1_10_0_90660.png"}/>
      </Box>
      <Box>
        <Text >MapMyWalk</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_184_1_10_0_61431.png"}/>
      </Box>
      <Box>
        <Text >MapMyRide</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png"}/>
      </Box>
      <Box>
        <Text >MapMyRun</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_139_1_10_0_10915.png"}/>
      </Box>
      <Box>
        <Text >Withings Health </Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png"}/>
      </Box>
      <Box>
        <Text >Strava</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_1_10_0_44251.png"}/>
      </Box>
      <Box>
        <Text >RunKeeper</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_2_1_10_0_87968.png"}/>
      </Box>
      <Box>
        <Text >Runtastic</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_331_1_10_0_52964.png"}/>
      </Box>
      <Box>
        <Text >Polar Flow</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_86_1_10_0_19952.png"}/>
      </Box>
      <Box>
        <Text >xID</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_306_1_10_0_49537.png"}/>
      </Box>
      <Box>
        <Text>TrainingPeaks </Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_282_1_10_0_81543.png"}/>
      </Box>
      <Box>
        <Text >Misfit </Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={4} >
      <Box height='auto' >
        <Image src={"https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_130_1_10_0_23647.png"}/>
      </Box>
      <Box>
        <Text >Glow</Text>
        <Text fontSize={10}>Activity Trackers</Text>
        <Text marginTop={"30px"} border={'1px solid grey'} borderRadius={5}>Installed</Text>
        </Box>
      </Box>
    </SimpleGrid>
</div>
     



    </div>
    <Footer/>

    
 
    



    </>
  )
}
