import React from 'react';
import { FooterOverlay,NewsLetter } from "../../components"
import { images } from "../../constants"
import './Footer.css';
import { FiFacebook,FiTwitter,FiInstagram} from "react-icons/fi"


const Footer = () => (
  <div className="app__footer section__padding">
  
   <FooterOverlay />
   <NewsLetter />
   <div className="app__footer-links"> 
     
     <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext"> contact us
        </h1>
        <p className="p__opensans">
          9W 53rd St New York, 10019 USA
        </p>
        
        <p className="p__opensans">
         +1 212-344-1230
        </p>
        
        <p className="p__opensans">
         +1 212-555-1320
        </p>
        
     </div>
    
     <div className="app__footer-links_logo">
       <img src={images.gericht}/>
       <p className="p__opensans">
        the best way to find yourself is to lose yourself in the service of others
       </p>
       <img 
       style={{marginTop:"15px"}}
       className="spoon__img "
       src={images.spoon}/>
       <div className="app__footer-links_icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
       </div>
     </div>
    
     <div className="app__footer-links_work">
     
         <h1 className="app__footer-headtext"> working hours
         </h1>
         <p className="p__opensans">
           Monday-Friday
         </p>
        
         <p className="p__opensans">
           8:00 am - 12:00 pm
         </p>
        
         <p className="p__opensans">
         Saturday - Sunday
         </p>
     
         <p className="p__opensans">
         10:00 am - 1:00 pm 
         </p>
     
     </div>
 
   </div> 
   <div className="app__footer-links_copyright">
      <p className="p__opensans">
      2022 Gericht. All rights reserved</p>
   </div>
  </div>
);

export default Footer;
