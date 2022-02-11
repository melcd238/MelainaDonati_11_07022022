import React from 'react';
import classes from '../HOC/Layout.module.css';


import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';




function Layout(props){
  
   
   
   return(
        <div className={classes.Layout}>
             <Header/>
            <div className={classes.content}>
                  {props.children} 
            </div>
              <Footer/> 
           
        </div>
    )

}
// Faire affichage conditionnel pour la page 404 qui n'a pas de footer.
export default Layout