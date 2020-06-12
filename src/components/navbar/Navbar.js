import React from 'react'
import monpharmacie from './monpharmacie.png'
import offer from './offer.png'
import './NavBar.css'
const Navbar = () => {

    return(
        <div className="navbar">
            <div className="container">
                
                    <a style={{marginTop:'unset !important'}} >
                    <img className="monpharmacien-logo" src={monpharmacie}  />
                    </a>
                
                <div className="offer-logo">
                    <span>Offert Par</span>
                    <a>
                    <img src={offer} />
                    </a>
                </div>
                
              </div>

              <ul className="btns_header">
                  <li>
                      <a href="/h" className="connexion_btn" >Se Connecter</a>
                  </li>
                  <li>
                      <a href="/hh" className="inscription_btn" >S'inscrire</a>
                  </li>
              </ul>

              <ul className="nav" >
                  <li>
                      <a className="selected" href='/' >
                          Trouvez une pharmacie
                      </a>
                  </li>
                  <li>
                      <a href='/contact' className="select2" >
                      Contactez-nous
                      </a>
                  </li>
              </ul>
             
              
        </div>
    )

}
export default Navbar