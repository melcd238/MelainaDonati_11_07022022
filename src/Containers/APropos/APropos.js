import React from 'react';
import classes from '../APropos/APropos.module.css';

import Banner from '../../Components/Banner/Banner';
import Dropdown from '../../Components/Dropdown/Dropdown'


function APropos(props){
    return(
        <div className={classes.AProposContainer}>
         <Banner/>
         <div className={classes.dropdownList}>
             <Dropdown value="Fiabilité"
                       content="Faire un voyage signifie généralement y consacrer du temps et de l'argent.
                        Il est donc important de trouver un logement qui convienne parfaitement à vos besoins.
                        Voici quelques conseils pour vous aider à voyager en toute confiance, en sachant que vous avez pris la bonne décision.
                        Trouvez le logement qui vous convient:
                               - Lisez les évaluations et les commentaires
                               - Consultez les dispositifs de sécurité
                               - Obtenez des réponses à vos questions
                               - Communiquez et payez toujours sur Kasa
                               - Effectuez un contrôle de sécurité
                               - Faites des recherches concernant les alertes et précautions de voyage"/>
 
             <Dropdown value="Respect"
                       content="La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
             <Dropdown value="Service"
                       content="Afin de contribuer au bon fonctionnement de Kasa et de couvrir les coûts de nos services,
                        tels que l'assistance utilisateurs 24h/24, nous appliquons des frais de service lorsqu'une réservation est confirmée."/>
             <Dropdown value="Responsabilité"
                       content="Vous êtes dans l'obligation de suivre nos consignes, comme notre Charte d'hospitalité,
                        et de vous assurer que vous respectez les lois et autres règles qui s'appliquent
                        à votre situation particulière et à votre région, comme la Politique de non-discrimination.
                        Il est important de vous assurer que vous avez le droit d'accueillir des voyageurs dans votre logement.
                        Par exemple, des contrats, des lois ou autres règlements locaux peuvent présenter certaines restrictions. "/>
                                             
        </div>
        </div>
    )
}


export default APropos;