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
                 <div>
                 <p className={classes.hostName}>{props.hostName.split(" ")[0]}</p>
                 <p className={classes.hostName} style={{marginTop:"0px"}}>{props.hostName.split(" ")[1]}</p>
                 </div>
                 
                 <div><img src={props.hostPicture} alt="" className={classes.hostPicture}/></div>
           </div>
        </>
    )
}

export default DetailTitle;