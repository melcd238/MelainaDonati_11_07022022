import React, { useState } from 'react';
import classes from '../Dropdown/Dropdown.module.css';
import arrowup from '../../Images/arrowUp.png';
import arrowback from '../../Images/arrowBack.png';



function Dropdown (props){
    const [isOpen, setIsOpen] = useState(false);

      return(
          <div className={classes.dropdonwContainer}>
          <div className={classes.dropdown}>
            <p className={classes.title}>{props.value}</p>
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
                   <p className={classes.contentParaph}>{props.content}</p>
            </div>
          </div>
      )
}

export default Dropdown;