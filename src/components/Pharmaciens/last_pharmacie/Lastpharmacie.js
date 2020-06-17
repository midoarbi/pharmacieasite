import React, { Component, Fragment } from 'react'
import pharmacies from './Pharmaciedata'
import './Lastpharmacie.css'
import emptyimg from '../../../assets/imgs/photo_empty.png'

class Lastpharmacie extends Component {
    render() {
        return(
           
             <section className="last_pharmacies" >
                 <div className="container3" >
                 <h2>Les dernieres pharmacies inscrites</h2>
                 
                           
                 {pharmacies.map((pharmacie, i) => (
                     <Fragment key={i} >
                         <div className="bloc_pharmacie" >
                         <section className="bloc_pharmacie_photo" >
                         <img src={emptyimg} />
                         </section>
                         <a className="bloc_pharmacie_title" >
                         Pharmacie:  <p><strong>{pharmacie.name}</strong></p>
                        </a>
                        <div className="bloc_pharmacie_sep" ></div>
                        <ul className="bloc_pharmacie_infos">
                            <li>
                                <i className="pharmacien_icon"></i>
                                <strong><p>Pharmacien :</p></strong>
                            </li>
                            <li> <strong>Ville:</strong><span> {pharmacie.city} </span></li>
                            <li><strong>Sectour:</strong> <span> {pharmacie.sectour}</span></li>
                        </ul>
                        <a className="bloc_pharmacie_btn" href="google.com" >
                         Plus d'informations
                       </a>
                        
                       </div>
                     </Fragment>
                 ))}
                 </div>
                 
             </section>
             
        )
    }
}
export default Lastpharmacie