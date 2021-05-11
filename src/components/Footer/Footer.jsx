import React from 'react';
import StyledFooter from './FooterCss';

function Footer() {
  return (
    <StyledFooter>
      <div className="contact">
        <h1>CONTACT US</h1>
        <div className="bloc">
          <div className="adresse">
            <img
              src="https://freepikpsd.com/wp-content/uploads/2019/10/adresse-icone-png-6-Transparent-Images.png"
              alt="adresse"
            />
            <p>4 Avenue des Saules </p>
            <p> Bâtiment le Doge - 59160 LILLE</p>
          </div>
          <div className="email">
            <img
              src="https://i.ibb.co/dBHP8W9/kisspng-computer-icons-email-icon-design-pictogram-5b23bc9570cfe3-3374490715290686934621.png"
              alt="mail"
            />
            <p>
              <a href="mailto:johnDoe@gmail.com">johnDoe@gmail.com</a>
            </p>
          </div>
          <div className="phone">
            <img
              src="https://img.icons8.com/metro/452/cell-phone.png"
              alt="phone"
            />
            <p>
              <a href="tel:+33908070605">(33)0908070605 </a>
            </p>
          </div>
        </div>
      </div>
      <div className="infos">
        <a href="https://www.wildcodeschool.com/fr-FR/condition-generales-utilisation">
          General Conditions of Use
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR/charte-donnees-personnelles">
          !
        </a>
        <h3>©2021 E-MARS ALL RIGHTS RESERVED</h3>
      </div>
    </StyledFooter>
  );
}
export default Footer;
