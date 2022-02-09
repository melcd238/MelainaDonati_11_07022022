import React from 'react';
import { useParams } from "react-router-dom";
import dataKasa from '../../Data/Data';
import classes from '../Details/Detail.module.css';

import Tag from '../../Components/Tag/Tag';
import Stars from '../../Images/rating.svg';
import SmallDropdown from '../../Components/SmallDropdown/SmallDropdown'

function Detail (props){
  // je recupère l'id en paramètre de l'url et la data en fonction de l'id  
     let params = useParams();
     let data = dataKasa.find((d)=> d.id === params.id);
     console.log(data)
        
    
    return(
        <div className={classes.detailContainer}>
            <div className={classes.gallery}>
            </div>

            <div className={classes.titleContainer}>
                    <div className={classes.titleContent}>
                        <h1 className={classes.title}>{data.title}</h1>
                        <p className={classes.location} >{data.location}</p>
                    </div>
                    <div className={classes.hostContent}>
                        <p className={classes.hostName}>{data.host.name}</p>
                        <div><img src={data.host.picture} alt="" className={classes.hostPicture}/></div>
                    </div>
            </div>

         <div className={classes.tagsAndStarsContainer}>
             <div className={classes.tagsContainer} >
                {data.tags.map((tag)=>(
                        <Tag key={tag}
                            title = {tag} />
                ))}
             </div>

              <div className={classes.starsContainer}>
                    <img src={Stars} alt= "etoiles" style={{marginRight : "10px"}}></img> 
                    <img src={Stars} alt= "etoiles" style={{marginRight : "10px"}}></img> 
                    <img src={Stars} alt= "etoiles" style={{marginRight : "10px"}}></img> 
                    <img src={Stars} alt= "etoiles" style={{marginRight : "10px"}}></img> 
                    <img src={Stars} alt= "etoiles" style={{marginRight : "10px"}}></img> 
               </div>
         </div>

         <div className={classes.smallDropdownContainer}>
            <SmallDropdown description = {data.description}
                           title="Description"/>
            <SmallDropdown equipement = {data.equipments}
                           title="Equipements"/>               
         </div>
        
        </div>
    )
}

export default Detail;