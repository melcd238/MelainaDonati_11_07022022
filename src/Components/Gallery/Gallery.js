import React from 'react';
import classes from '../Gallery/Gallery.module.css';
import right from '../../Images/right.svg';
import left from '../../Images/left.svg';



function Gallery (){
    return(
        <div className={classes.gallery}>
            <div>
                <img src={left} alt="fleche gauche" style={{marginLeft : "22px"}}/>
            </div>
        Gallery
            <div>
                <img src={right} alt="fleche gauche" style={{marginRight : "22px"}} />
            </div>
        </div>
    )
}

export default Gallery;
