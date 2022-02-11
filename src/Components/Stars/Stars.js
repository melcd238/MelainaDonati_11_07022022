import React from 'react';
import stars from '../../Images/rating.svg';
import fullStar from '../../Images/starRed.svg';


function Stars (props){
   
   const checkStart = (index) => {
      return index < parseInt(props.rating) ? {image :fullStar, alt: 'full star'} :  {image :stars, alt: 'empty star'}
   }

   return(
      [...Array(5).keys()].map((index) => {
         const star = checkStart(index)
         return (
      <img src= {star.image}   alt={star.alt} key={index} style={{marginRight : "10px"}} />
      )
         }
   ))
   
}

export default Stars;



