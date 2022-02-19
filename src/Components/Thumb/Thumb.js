import React from 'react';
import classes from '../Thumb/Thumb.module.css';
import { Link } from 'react-router-dom'




function Thumb(props){

  

    return(
        <Link to={`/location/${props.id}`} className={classes.linkThumb}>

        <div id={props.id}  className={classes.thumbCard}>
            <img src={props.cover} alt={props.title} className={classes.imgThumb}/>
            <h2 className={classes.titleLocation}>{props.title} </h2>
        </div>
        </Link>

    )
}

export default Thumb;

// <img src={props.cover} alt={props.title} className={classes.imgThumb}/>

