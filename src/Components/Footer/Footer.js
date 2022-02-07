import React from 'react';
import classes from '../Footer/Footer.module.css';
import footerLogo from '../../Images/footerLogo.svg';

function Footer(){
    return(
       <footer className={classes.footerContainer}>
              <div>
                 <img src={footerLogo} alt="Logo de Kasa"></img> 
              </div>
              <p className={classes.rights}>©2022 Kasa. Tous droits réservés </p>
       </footer>
    )
}

export default Footer;