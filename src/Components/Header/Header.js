import React from 'react';
import kasaLogo from '../../Images/kasaLogo.svg';
import classes from '../Header/Header.module.css';


function Header (){
    return(
        <header className={classes.headerContainer}>
        <div className={classes.logo}>
             <img src={kasaLogo} alt="Logo de Kasa" style={{width:"140px"}}></img> 
        </div>
        <nav>
           <ul className={classes.navigationList}>
               <li className={classes.li}> Accueil</li>
               <li className={classes.li}> A Propos</li>
           </ul>
        </nav>
    </header>
)
}

export default Header;