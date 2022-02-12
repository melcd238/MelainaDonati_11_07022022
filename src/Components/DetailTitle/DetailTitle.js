import React from 'react';
import classes from '../DetailTitle/DetailTitle.module.css';



function DetailTitle (props){
    return(
    
          <div className={classes.titleContent}>
                <h1 className={classes.title}>{props.title}</h1>
                <p className={classes.location} >{props.location}</p>
          </div>
    
       
    )
}

export default DetailTitle;