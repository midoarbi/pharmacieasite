import React from 'react'
import './Search.css'

const Search = () => {
    return(
        <section className="recherche" >
            <div className="containerr">
             <h2>Trouvez la pharmacie la plus proche</h2>
             <div className="bloc_search" >
              <form> 
              <div className="form_search_controller" >
               <input type="text" id="name" placeholder="Nom de la pharmacie" />
              </div>
             
              <div className="form_search_controller" >
                <span>
                  <span className="selection" >
                   <div className="form_search_controller2" >
               <input type="text" id="name" placeholder="Où ? (Ville, quartier...)" />
                   </div>  
                 </span>
                </span>
              </div>
              <button type="submit" className="submit_search" id="getPharmacies" disabled >Chercher</button>
              </form>
             </div>
             <div className="bloc_search_ombre"></div>
            </div>
        </section>
    )
}

export default Search