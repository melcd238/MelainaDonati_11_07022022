import React, { useState } from 'react';
import classes from '../SmallDropdown/SmallDropdown.module.css';
import arrowup from '../../Images/arrowUp.png';
import arrowback from '../../Images/arrowBack.png';



function SmallDropdown(props){
    const [isOpen, setIsOpen] = useState(false);



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
             <p className={classes.contentParaph}>{props.description}</p> 
             
                 
          </div>
        </div>
    )
}

export default SmallDropdown;