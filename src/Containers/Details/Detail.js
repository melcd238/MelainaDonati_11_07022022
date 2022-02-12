import React from 'react';
import { useParams } from "react-router-dom";
import dataKasa from '../../Data/Data';
import classes from '../Details/Detail.module.css';

import Tag from '../../Components/Tag/Tag';
import SmallDropdown from '../../Components/SmallDropdown/SmallDropdown';
import Gallery from '../../Components/Gallery/Gallery';
import Stars from '../../Components/Stars/Stars';
import DetailTitle from '../../Components/DetailTitle/DetailTitle';
import Host from '../../Components/Host/Host';
import NotFound from '../NotFound/NotFound';


function Detail (props){
   
  // je recupère l'id en paramètre de l'url et la data en fonction de l'id 
  // utiliser useNavigate
  let params = useParams();
  let data = dataKasa.find((d)=> d.id === params.id )
  console.log(data)
  if (data === undefined){
     return(
        <NotFound/>
     )
  } else {
   return(
      <div className={classes.detailContainer}>

             <div className={classes.gallery}>
                  <Gallery pictures= {data.pictures}/>
             </div>

           <div className={classes.leftAndRightSide}>
                 <div className={classes.leftSide}>
                         <DetailTitle title={data.title}
                               location={data.location}/>
                      <div className={classes.tagsContainer} >
                         {data.tags.map((tag)=>( <Tag key={tag} title = {tag} /> ))}
                      </div>       
                </div>
          
                <div className={classes.rightSide}>
                       <Host hostName= {data.host.name} 
                       hostPicture= {data.host.picture}/>
                   <div className={classes.starsContainer}>
                      <Stars rating={data.rating}/>
                   </div>
                </div>
           </div>
           
       <div className={classes.smallDropdownContainer}>
          <SmallDropdown  title="Description" 
                          description= {data.description} />
          <SmallDropdown equipments = {data.equipments}
                         title="Equipements"/>               
       </div>
      
      </div>
  )

  }
}

export default Detail;