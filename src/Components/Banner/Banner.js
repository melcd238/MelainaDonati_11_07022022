import React from 'react';
import classes from '../Banner/Banner.module.css';
import { useLocation } from 'react-router-dom'



function Banner (props){
    const location = useLocation();
    if(location.pathname === '/'){
        return(
          <div className={classes.bannerContainerHome}>
               <h1 className={classes.title}>Chez vous, partout et ailleurs</h1>
          </div>
        )
       
    } else if(location.pathname === '/about'){
            
    return(
      <div className={classes.bannerContainerAbout}></div>
    )
    }
}


export default Banner;

