import React from 'react';
import classes from '../APropos/APropos.module.css';

import Banner from '../../Components/Banner/Banner';
import Dropdown from '../../Components/Dropdown/Dropdown'


function APropos(props){
    return(
        <div className={classes.AProposContainer}>
         <Banner/>
         <div className={classes.dropdownList}>
             <Dropdown value="Fiabilité"/>
             <Dropdown value="Respect"/>
             <Dropdown value="Service"/>
             <Dropdown value="Responsabilité"/>
         </div>
        </div>
    )
}


export default APropos;