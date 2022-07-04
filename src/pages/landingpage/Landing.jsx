import React, { useEffect, useState } from 'react';
import "./css/landing.css"
import {Link} from "react-router-dom"

const Landing = () => {
    const navbarheight = 0;
    const [height, setHeight] = useState((window.screen.height-navbarheight));

    useEffect(() => {
        window.addEventListener("resize", () => { setHeight(window.screen.height-navbarheight ) })
    },)
      window.addEventListener("resize", () => { setHeight(window.screen.height-navbarheight ) })
   

    return (
        
        <div style={{height:`${height}px`,overflow:"hidden"}} className='landingContainer'>
            {console.log(window.screen.height,height)}
            <div className='landingOverlay'>
                <div className="landingContent">
                    <img src="assets/images/cta-logo-one.svg" alt="" />
                   <Link to="/home"> <button className='landingButton'>Get All There</button></Link>
                    <p className='landingtext'>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.<br/> As of 03/26/21,the price of Disney+ and The Disney Bundle wiil increase by $1 </p>
                    <img style={{width:"100%"}} src="assets/images/cta-logo-two.png"/>
                </div>
              
            </div>
            <div  >
                 <img style={{height:"100%"}} src="/assets/images/login-background.jpg"/>
            </div>
           
        </div>
    );
};

export default Landing;