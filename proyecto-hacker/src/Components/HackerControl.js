import React, { useState,useEffect } from 'react';
import axios from 'axios';
import HackerGallery from './HackerGallery';

function HackerControl(){
   
    const[api, setApi]=useState([]);
    
   
   useEffect(() => {
    axios.get('https://api.oceandrivers.com/v1.0/getWebCams/').then((response)=>{
        const webCams = response.data;
        setApi(webCams);
     
    });
      
  }, []);  
  
    return(
        <div>
            <HackerGallery myApi={api}></HackerGallery>
        </div>
    );
}
export default HackerControl;