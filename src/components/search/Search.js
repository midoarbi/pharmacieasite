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
              <div className="form_search_controller last" >
                <select id="searchInput"  name="localisation"   className="form-control input select-city select2-hidden-accessible" tabindex="-1" aria-hidden="true" >
                    <option>Casablanca</option>
                </select>
                <span className="select2 select2-container select2-container--default select2-container--below" dir="ltr" style={{width:'380px'}} >
                  <span className="selection" >
                      <span className="select2-selection select2-selection--single" 
                      role="combobox" aria-haspopup="true" aria-expanded="false" 
                      tabindex="0"
                      aria-labelledby="select2-searchInput-container"
                      >
                          <span className="select2-selection__rendered" id="select2-searchInput-container" >
                              <span className="select2-selection__placeholder" >Où ? (Ville, quartier...) Selectionner</span>
                          </span>
                          <span className="select2-selection__arrow" role="presentation">
                             <b role="presentation" ></b>
                          </span>
                      </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true" ></span>

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