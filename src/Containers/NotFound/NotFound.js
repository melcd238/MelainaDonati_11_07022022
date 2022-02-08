import React from 'react';
import { Link } from "react-router-dom";
import logoNotFound from '../../Images/404.png';
import classes from '../NotFound/NotFound.module.css'


function NotFound (){
    return(
       <div className={classes.notFoundContainer}>
           <div>
              <img src={logoNotFound} alt="erreur 404"></img>
           </div>
           <p className={classes.oups}>Oups! La page que vous demandez n'existe pas</p>
           <Link to="/" className={classes.link}>Retourner sur la page d'accueil</Link>
       </div>
    )
}

export default NotFound;