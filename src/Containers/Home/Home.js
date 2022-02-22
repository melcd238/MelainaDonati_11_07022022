import React, { useState, useEffect } from 'react';
import classes from '../Home/Home.module.css';
import dataKasa from '../../Data/Data';

//Components
import Banner from '../../Components/Banner/Banner';
import Thumb from '../../Components/Thumb/Thumb';
import Loader from "../../Components/Loader/Loader";




function Home (props){
  //State
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

const getAllDataKasa = () =>{
  setTimeout(()=>{
    setLoader(true);
  },100);
    setData(dataKasa)
    setLoader(false)
  
}
  

//ComponentDidMount
     useEffect(()=>{
       getAllDataKasa(dataKasa)
  }, []);

 
 // on va ensuite passer la data au composant Thumb grâce au props
    return(
        <div>
        { loader ? 
                 <div className={classes.homeContainer}>
                 <div className={classes.bannerContainer}>
                      <Banner/>
                 </div>
                 <div className={classes.thumbsContainer}>
                   {data.map((d,index) =>(
                       <Thumb key={d.id}
                              cover={d.cover}
                              title={d.title}
                              id = {d.id}/>
                   ))}
                 </div>
               </div>
               :
               <Loader/>
      
      }

         </div>
      
      
        
    )
}

export default Home;