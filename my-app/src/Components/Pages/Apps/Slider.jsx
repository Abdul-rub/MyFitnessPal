import React from 'react'
import {Carousel} from '3d-react-carousal';

export default function Slider() {

    let slides = [
        <img  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_2_10_0_26145.png" alt="1" />,
        <img  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_2_10_0_2751.png" alt="2" />  ,
        <img  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_2_10_0_90706.png" alt="3" />  ,
        <img  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_2_10_0_25954.png" alt="4" />  ,
        <img src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_2_10_0_4027.png" alt="5" />,
        <img  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_2_10_0_3957.png" alt="6" />,
        <img  src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_2_10_0_74866.png" alt="7" />,   ];
 
    const callback = function(index){
        console.log("callback",index);
    }
  return (
    <div>
       <Carousel slides={slides} autoplay={true} interval={1000} onSlideChange={callback}/>
    </div>
  )
}
