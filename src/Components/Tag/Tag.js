import React from 'react';
import classes from '../Tag/Tag.module.css'

function Tag (props){
    return(
        <div className={classes.tag}>
           <p className={classes.tagTitle}>{props.tag}</p>
        </div>
    )
}

export default Tag;