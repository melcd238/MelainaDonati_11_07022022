import React, { useState, useEffect } from 'react';
import classes from '../Gallery/Gallery.module.css';
import right from '../../Images/right.svg';
import left from '../../Images/left.svg';



function Gallery (props){
     // State
     const [currentPicture, setCurrentPicture]=useState(props.pictures[0]);
     const [arrayNumber,setArrayNumber] = useState(false);

     const checkArrayNumber = () =>{
         if (props.pictures.length === 1){
             setArrayNumber(true);
         }
     }
     //ComponentDidMount
     useEffect(()=>{
        checkArrayNumber()
  });
    
      // recup le numéro en cours de la photo affichée:
     let index = props.pictures.indexOf(currentPicture);
     let number = ( <span>{++index}</span>)
    
    

     const HandlePrevPicture = (e) =>{
        let index = props.pictures.indexOf(currentPicture);
        let newIndex;
       if( index <= props.pictures.length -1){
          newIndex = --index;
        setCurrentPicture(props.pictures[newIndex])
         if(newIndex === -1){
            setCurrentPicture(props.pictures[props.pictures.length -1])
         }
       } 
        
     }

     const HandleNextPicture = (e) =>{
       let index = props.pictures.indexOf(currentPicture);
       if(index <= props.pictures.length -1){
           let newIndex = ++index;
           setCurrentPicture(props.pictures[newIndex])
           if(newIndex === props.pictures.length){
               newIndex = 0;
               setCurrentPicture(props.pictures[newIndex])
           }
       }
     }
    
     

    return(
        <div className={classes.gallery} style={{backgroundImage:  `url(${currentPicture})`}}>
           
            <div>
                {arrayNumber ? "" : <img src={left} alt="fleche gauche" style={{marginLeft : "22px",cursor:"pointer"}} onClick = {(e)=>HandlePrevPicture(e)}/> }
            </div>
          
            <div className={classes.compteur}>
               {number}
              /{props.pictures.length}</div>
            <div>
               {arrayNumber ? "" : <img src={right} alt="fleche gauche" style={{marginRight : "22px",cursor:"pointer" }} onClick = {(e)=> HandleNextPicture(e)} /> }
            </div>
        </div>
    )
}

export default Gallery;
