import React, { useState, useEffect } from 'react';
import classes from '../Home/Home.module.css';
import dataKasa from '../../Data/Data'

//Components
import Banner from '../../Components/Banner/Banner';
import Thumb from '../../Components/Thumb/Thumb';




function Home (props){
  //State
  const [data, setData] = useState([]);
 
  //Functions
  const getAllDataKasa = () =>{
     setData(dataKasa)
  }
  
  //ComponentDidMount
      useEffect(()=>{
        getAllDataKasa(dataKasa)
  }, [])


  // on va ensuite passer la data au composant Thumb grâce au props
    return(
        <div className={classes.homeContainer}>
          <Banner/>
          <div className={classes.thumbsContainer}>
            {data.map((d,index) =>(
                <Thumb key={d.id}
                       cover={d.cover}
                       title={d.title}/>
            ))}
          </div>
        </div>
    )
}

export default Home;