import React from 'react';
import classes from '../DetailTitle/DetailTitle.module.css';



function DetailTitle (props){
    return(
        <>
          <div className={classes.titleContent}>
                <h1 className={classes.title}>{props.title}</h1>
                <p className={classes.location} >{props.location}</p>
          </div>
           <div className={classes.hostContent}>
                 <p className={classes.hostName}>{props.hostName}</p>
                 <div><img src={props.hostPicture} alt="" className={classes.hostPicture}/></div>
           </div>
        </>
    )
}

export default DetailTitle;