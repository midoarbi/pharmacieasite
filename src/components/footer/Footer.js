import React from 'react';
import logomonpharmacien from '../../assets/imgs/logo-monpharmacien.png'
import email from '../../assets/imgs/email.png'
import footerlogo from '../../assets/imgs/sobrus_logo_footer.png'
import   '../../assets/imgs/sprite-site.png'
import   '../../assets/imgs/sprite.png'
import './Footer.css'
const Footer = () => {

    return(
        <section class="footer">
        <div className="containerf">
            <div className="footer_description col-sm-4"> 
             <img src={logomonpharmacien} /> 
             <p>
                 
                MonPharmacien.ma est le premier annuaire interactif de pharmacies au Maroc 100% gratuit.
                Cet outil permet de rapprocher le pharmacien de ses patients et de rendre accessibles toutes
                les informations des pharmacies pour garantir une meilleure santé.
            
             </p>
            </div>
            <div className="footer_solutions">
                <h4>Nos solutions</h4>
                <ul>
                    <li>
                        <a href="http://pharma.sobrus.com/" target="_blank" >Sobrus Pharma</a>
                    </li>
                    <li>
                        <a href="https://labs.sobrus.com" target="_blank" >Sobrus Labs</a>
                    </li>
                    <li>
                        <a href="https://sns.sobrus.com" target="_blank" >Sobrus SNS</a>
                    </li>
                    <li>
                        <a href="https://med.sobrus.com" target="_blank" >Sobrus MED</a>
                    </li>
                </ul>
            </div>

            <div  className="footer_solutions" style={{paddingLeft: '20px'}} >
               <h4>Nos outils</h4>
               <ul>
                   <li>
                       <a href="http://monmedicament.ma" target="_blank" >Annuaire Médicaments</a>
                    </li>
                    <li  style={{width:'110%'}}>
                       <a href="https://monordonnance.ma" target="_blank" >Ordonnance Électronique</a>
                    </li>
                    <li>
                       <a href="http://chezledocteur.ma" target="_blank" >Annuaire Médecins</a>
                    </li>
               </ul>
            </div>

           <div className="footer_contact" >
             <h4>Contactez-nous</h4>
             <ul>
                   <li>
                       <i className="footer_tel_icon"></i>
                       <p>0530 500 500</p>
                    </li>
                    <li style={{width:'110%'}} >
                       <i className="footer_email_icon" ></i>
                       <p>
                           <img src={email} style={{infloat:'right', width:'174px'}} />
                       </p>
                    </li>
                     <li>
                       <i className="footer_site_icon" ></i>
                       <p>
                       sobrus.com
                       </p>
                    </li>
                    <li style={{width:'110%'}} >
                       <i className="footer_adresse_icon" ></i>
                       <p>
                       Villa N°222, rue Tetouan,
                       <br/>
                       Harhoura
                       </p>
                    </li>
               </ul>
           </div>
           </div>
        
<div  className="footer_bottom">
<div className="containerf">
  <div className="footer_bottom_left" >
   <p>MonPharmacien © 2020</p>
   <ul>
       <li>
           <a className="facebook" href="https://www.facebook.com/MonPharmacien.ma/" target="_blank" >
               <i className="facebook_icon"></i>
           </a>
       </li>
   </ul>
   <p>Dernière mise à jour le 11/06/2020</p> 
  </div>

  <div className="offert-footer">
   <a href="https://sobrus.com/" target="_blank">
       <img src={footerlogo} />
   </a>
   <p>offert Par : </p>
  </div>
  
</div>
</div>
</section>
    )

}
export default Footer