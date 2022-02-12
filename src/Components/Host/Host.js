import React from 'react';
import classes from '../Host/Host.module.css'


function Host (props){
    return(
        <div className={classes.hostContent}>
        <div>
        <p className={classes.hostName}>{props.hostName.split(" ")[0]}</p>
        <p className={classes.hostName} style={{marginTop:"0px"}}>{props.hostName.split(" ")[1]}</p>
        </div>
         <img src={props.hostPicture} alt="" className={classes.hostPicture}/>
  </div>
    )
}

export default Host;