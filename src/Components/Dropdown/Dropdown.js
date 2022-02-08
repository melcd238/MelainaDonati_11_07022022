import React from 'react';
import classes from '../Dropdown/Dropdown.module.css';
import arrowback from '../../Images/arrowBack.png'



function Dropdown (props){
      return(
          <div className={classes.dropdown}>
            <p className={classes.title}>{props.value}</p>
            <div className={classes.arrow}><img src={arrowback} alt="fleche"></img></div>
          </div>
      )
}

export default Dropdown;