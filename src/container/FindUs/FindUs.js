import React from 'react';

import  { SubHeading }   from "../../components"

import { images } from "../../constants/index.js"
 
 
const FindUs = () => (
 <div className="app__bg app__wrapper section__padding"id="contact" >
   
   <div className="app__wrapper_info" >
    
      <SubHeading title="Contact"/>
      <h1 
      style={{marginBottom:"3rem"}}
      className="headtext__cormorant">Find us</h1>
      <div className="app__wrapper-content">
       
        <p className="p__opensans">
         Lane Ends Bungalow Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p 
        style={{color:"#dcca87",
        margin:"2rem 0"}}
        className="p__cormorant">
         Opening Hours
        </p>
        <p className="p__opensans">
         Mon-Fri 10:00 am - 4:00 pm
        </p>
        <p className="p__opensans">
         Sat-Sun 10:00 am - 2:00 pm
        </p>
        
      </div>
      <button 
      style={{marginTop:"2rem"}}
      className="custom__button">
          visit us
      </button>
    </div>
    <div className="app__wrapper_img">
       
       <img src={images.findus}alt="findus"/>
       
    </div>

 </div>
);

export default FindUs;
