import React from 'react';
import stars from '../../Images/rating.svg';


function Stars (){
   return (
       <>
         <img src={stars} alt= "etoiles" style={{marginRight : "10px"}}></img> 
         <img src={stars} alt= "etoiles" style={{marginRight : "10px"}}></img> 
         <img src={stars} alt= "etoiles" style={{marginRight : "10px"}}></img> 
          <img src={stars} alt= "etoiles" style={{marginRight : "10px"}}></img> 
          <img src={stars} alt= "etoiles" style={{marginRight : "10px"}}></img>          
       </>
   )
}

export default Stars;