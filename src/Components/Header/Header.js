import React from 'react';
import kasaLogo from '../../Images/kasaLogo.svg';
import classes from '../Header/Header.module.css';


import CustomLinks from './CustomLinks/CustomLinks';


function Header (){
    return(
        <header className={classes.headerContainer}>
        <div className={classes.logo}>
          <CustomLinks to="/"><img src={kasaLogo} alt="Logo de Kasa"  className={classes.kasalogo}></img> </CustomLinks>   
        </div>
        <nav>
           <ul className={classes.navigationList}>
               <li><CustomLinks className={classes.li} to="/">Accueil</CustomLinks> </li>
               <li><CustomLinks className={classes.li} to="about">A Propos</CustomLinks></li>
           </ul>
        </nav>
    </header>
)
}

export default Header;