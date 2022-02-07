import React from 'react';
import classes from '../Thumb/Thumb.module.css';




function Thumb(props){
    return(
        <div className={classes.thumbCard} id={props.id} style={{ 
            backgroundImage: `url(${props.cover})` }}>
                
               <h2 className={classes.titleLocation}>{props.title} </h2>
        </div>

    )
}

export default Thumb;