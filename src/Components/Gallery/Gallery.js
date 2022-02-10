import React, { useState } from 'react';
import classes from '../Gallery/Gallery.module.css';
import right from '../../Images/right.svg';
import left from '../../Images/left.svg';



function Gallery (props){
     // State
     const [currentPicture, setCurrentPicture]=useState(props.pictures[0]);

     // recup le numéro en cours de la photo affichée:
     let index = props.pictures.indexOf(currentPicture);
     let number = ( <span>{++index}</span>)
    

     const HandlePrevPicture = (e) =>{
        console.log("prev")
        // modifier le state avec la photo précédente
     }

     const HandleNextPicture = (e) =>{
        console.log("next")
        // modifier le state avec la photo suivente
     }

   

    return(
        <div className={classes.gallery} style={{backgroundImage:  `url(${currentPicture})`}}>
            <div>
                <img src={left} alt="fleche gauche" style={{marginLeft : "22px",cursor:"pointer"}} onClick = {(e)=>HandlePrevPicture(e)}/>
            </div>
            <div className={classes.compteur}>
               {number}
              /{props.pictures.length}</div>
            <div>
                <img src={right} alt="fleche gauche" style={{marginRight : "22px",cursor:"pointer" }} onClick = {(e)=> HandleNextPicture(e)} />
            </div>
        </div>
    )
}

export default Gallery;
