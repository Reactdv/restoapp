import React from 'react';

import './Laurels.css';

import  { SubHeading }   from "../../components"

import { images,data } from "../../constants/index.js"
 
const { awards } = data



const Laurels = () => (
   <div className="app__bg app__wrapper section__padding" id="awards">
    
     <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition"/>
        <h1 className="headtext__cormorant">
         Our Laurels
        </h1>
        <div 
        
        className="app__laurels_awards">
         
       {awards.map((award,index)=>(
         
        <div 
        className="app__laurels_awards-card"
        key={index}>
           <img src={award.imgUrl} />
           
           <div className="app__laurels_awards-card_content">
             <p 
             style={{color:"#dcca87"}}
             className="p__cormorant">
             {award.title}
             </p>
             <p 
             className="p__cormorant">
             {award.subtitle}
             </p>
           </div>
        </div>
         )
       )}
       
        </div>  
           
     </div>
     <div className="app__wrapper_img">
        <img src={images.laurels}alt="laurels"/>
     </div>
   </div>
);

export default Laurels;
