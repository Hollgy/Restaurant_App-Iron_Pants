import React from 'react';
import image from '/public/images/about_backdrop.jpg';

function AboutUs() {
  return (
    <div className="about">
      <img src={image} alt="about us" />
      <h5>TACOS</h5>
      <h4>TEQUILA</h4>
      <h3>TAX-FRAUD</h3>
      <p>Välkommen till vår  restaurang. Vi serverar autentiska mexikanska rätter med en modern twist, tillagade av färska och högkvalitativa ingredienser. Vi har vegetariska och veganska alternativ och strävar efter att skapa en autentisk mexikansk atmosfär. Besök oss för en oförglömlig smakupplevelse! <br></br>Vi erbjuder en varierad meny med allt från tacos, burritos och quesadillas till enchiladas, chiles rellenos och mole. Vårt kök är känt för sina smakrika marinader och kryddor, och våra rätter kan anpassas efter dina önskemål och smaker.<br></br>Besök oss och upplev den rika smaken av Mexiko på vår restaurang.</p>
        <br></br> 
        <h1>Vi ser fram emot att välkomna dig!</h1>
    </div>
  );
}

export default AboutUs;