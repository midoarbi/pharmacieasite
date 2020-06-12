import React, { Fragment } from 'react'
import inscriptionimg from './inscription_illustration.png'
import './Inscription.css'
const Inscription = () => {
    return(
        <section className="bloc_inscription">
          <div className="container6">
            <div className="bloc_inscription_left">
              <h2 style={{marginTop:'60px'}}>Vous êtes un pharmacien d'officine ?</h2>
              <p>L'objectif de MonPharmacien.ma est d'améliorer la relation pharmacien-patient, pour un meilleur accès aux soins et un meilleur suivi des patients auprès de leur pharmacie d'officine.</p>
              <br/>
              <a href="/registre">Inscrivez-vous dès maintenant</a>
            </div>

            <div className="bloc_inscription_right">
             <img src={inscriptionimg} />
            </div>
          </div>
        </section>
    )
}

export default Inscription