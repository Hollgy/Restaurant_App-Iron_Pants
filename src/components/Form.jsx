import { useRecoilState } from "recoil";
import { useState } from "react";
import { isValidFullName } from "../utils/validation";
import { isValidPhonenumber } from "../utils/validation";
import { addToCartState } from "../utils/Addtocart";
import React, { useEffect } from 'react';

function CartList() {
    const [cart, setCart] = useRecoilState(addToCartState);
    const [price, setPrice] = useState(0);
    
    useEffect(() => {
      const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
      setPrice(totalPrice);
    }, [cart]);
    
    const itemList = cart.map((item) => (
      <li key={item.id}>
        <p>{item.item}</p>
      </li>
    ));
    
    return (
      <>
        <ul>
          {itemList}
        </ul>
        <p>Totalt: {price} kr</p>
      </>
    );
  }


const FormCustomer = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [nameIsDirty, setNameIsDirty] = useState(false);
    const [phoneIsDirty, setPhoneIsDirty] = useState(false);

    

    let nameIsValid = isValidFullName(name);
    let phoneNumberIsValid = isValidPhonenumber(number);

    const handleNameChange = (e) => {
        setName(e.target.value);
        // setNameIsDirty(true)
    };
    const handlePhoneChange = (e) => {
        setNumber(e.target.value);
        const result = e.target.value.replace(/\D/g, "");
        setNumber(result);
    };

    const handleSubmit = (event) => {
        // console.log(cart);

        if (!nameIsValid || !phoneNumberIsValid) {
            event.preventDefault();
            return;
        }
    };

    // ✔️❌

    return (
        <form className="form-wrapper">
            <div className="form-inner">
                <h1>Beställning</h1>

                <div className="form-inputs">
                    <label htmlFor="name">Namn & Efternamn</label>
                    <div className="field">
                        <input
                            required
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            onBlur={() => setNameIsDirty(true)}
                        />

                        <span className="valid-name">
                            {nameIsDirty ? (nameIsValid ? "✔️" : "❌") : ""}
                        </span>
                    </div>
                    <div
                        className={
                            nameIsDirty
                                ? nameIsValid
                                    ? "hide-error"
                                    : "show-error error-style"
                                : "hide-error"
                        }
                    >
                        <ul>
                            <li>
                                Kontrollera att Namn & Efternamn är korrekt i
                                fyllt
                            </li>
                            <li>
                                Kontrollera att det inte innehåller siffror i
                                rutan
                            </li>
                        </ul>
                    </div>

                    <label htmlFor="tel">Telefonnummer</label>
                    <div className="field">
                        <input
                            required
                            id="tel"
                            name="tel"
                            type="tel"
                            value={number}
                            onChange={handlePhoneChange}
                            onBlur={() => setPhoneIsDirty(true)}
                        />
                        <span className="valid-name">
                            {phoneIsDirty
                                ? phoneNumberIsValid
                                    ? "✔️"
                                    : "❌"
                                : ""}
                        </span>
                    </div>
                    <div
                        className={
                            phoneIsDirty
                                ? phoneNumberIsValid
                                    ? "hide-phone-error"
                                    : "show-phone-error error-style"
                                : "hide-phone-error"
                        }
                    >
                        <ul>
                            <li>
                                Kontrollera att Telefonnummer är korrekt i fyllt
                            </li>
                            <li>
                                Kontrollera att det inte innehåller bokstäver i
                                rutan
                            </li>
                            <li>Kontrollera att du har minst 10 siffror</li>
                        </ul>
                    </div>
                </div>

                <div className="eat-place">
                    <div className="eat-here-div">
                        <label htmlFor="eat-here">Ät på plats</label>
                        <input id="eat-here" type="radio" name="eat" required />
                    </div>

                    <div className="take-away-div">
                        <label htmlFor="take-away">Hämta beställningen</label>
                        <input id="take-away" type="radio" name="eat" />
                    </div>
                </div>


                <div className="price-paragraf">
                  
                <CartList  />
                </div>

                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="send-order"
                >
                    Skicka Beställning
                </button>
            </div>
        </form>
    );
};

export default FormCustomer;
