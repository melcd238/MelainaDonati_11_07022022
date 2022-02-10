import React from 'react';
import stars from '../../Images/rating.svg';
import fullStar from '../../Images/starRed.svg';


function Stars (props){
   

   return(
      [...Array(5).keys()].map((index) => {
         console.log(index)
         if (index < parseInt(props.rating)){
            return(
               <img src= {fullStar}   alt={"empty star"} key={index} style={{marginRight : "10px"}} />
            )
         } else {
            return (
               <img src= {stars}   alt={"empty star"} key={index} style={{marginRight : "10px"}} />
            )
         }
        
         })
   )
   
     
  
}

export default Stars;



