import React, { useState } from 'react';
import classes from '../SmallDropdown/SmallDropdown.module.css';
import arrowup from '../../Images/arrowUp.png';
import arrowback from '../../Images/arrowBack.png';




function SmallDropdown(props){
    const [isOpen, setIsOpen] = useState(false);
    let content;
    if(props.title ==="Description" ){
       content = (
        <p className={classes.contentParaph}>{props.description}</p> 
       )
    } else if(props.title === "Equipements"){
       content =(
         <ul className={classes.contentList}>
           {props.equipments.map((eq)=>(<li key={eq}>{eq}</li>))}
         </ul>
       );
    }

    return(
        <div className={classes.dropdonwContainer}>
        <div className={classes.dropdown}>
          <p className={classes.title}>{props.title}</p>
          <div className={classes.arrow}
               onClick={e => {setIsOpen(!isOpen)}}>

                   {isOpen ? 
                   <img src={arrowback} alt="fleche vers le bas"></img>
                   :
                   <img src={arrowup} alt="fleche vers le haut"></img>
                  }
           </div>
        </div>
          <div className={isOpen ? classes.contentContainer : classes.contentContainerClose}>
                   {content}
           </div>
        </div>
    )
}

export default SmallDropdown;

// voir avec un children à la place du paragraphe pour pouvoir construire ma liste dans equipements et la description
// <p className={classes.contentParaph}></p> 