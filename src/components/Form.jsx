const FormCustomer = () => {
    return (
        <div className="form-wrapper">
            <div className="form-inner">

            <h1>Beställning</h1>

                
                    <div className="form-inputs">
                     <label htmlFor="name">Namn & Efternamn</label>
                        <input id="name" name="name" type="text" />

                     <label htmlFor="tel">Telefonnummer</label>
                        <input id="tel" name="tel" type="tel" />
                    </div>

              
                    <div className="eat-place">
                     
                        <div className="eat-here-div">
                        <label htmlFor="eat-here">Ät på plats</label>
                         <input id="eat-here" type="radio" name="eat" />
                        </div>


                        <div className="take-away-div">
                        <label htmlFor="take-away">Hämta beställningen</label>
                         <input id="take-away" type="radio" name="eat"/>
                        </div>

                    </div>


            <div className="price-paragraf">
                <p>Totala kostnaden</p>
                <p>124 .00 kr</p>
            </div>

            <button className="send-order">Skicka Beställning</button>
            </div>
        </div>
    );
};

export default FormCustomer