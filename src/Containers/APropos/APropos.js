import React from 'react';
import classes from '../APropos/APropos.module.css'

import Banner from '../../Components/Banner/Banner'


function APropos(){
    return(
        <div className={classes.AProposContainer}>
         <Banner/>
        </div>
    )
}


export default APropos;