import { useState } from 'react'
import { isValidFullName } from '../utils/validation';

const FormCustomer = () => {
    const[name, setName] = useState('')
    const [nameIsDirty, setNameIsDirty] = useState(false)


    const nameIsValid = isValidFullName(name)

    const handleNameChange = e => {
        setName(e.target.value)  
        // setNameIsDirty(true)
    } 

    const handleSubmit = event => {
        event.preventDefault();
    }

    // ✔️❌
    

    return (
        <form className="form-wrapper">
            <div className="form-inner">

            <h1>Beställning</h1>

                    <div className="form-inputs">

                     <label htmlFor="name">Namn & Efternamn</label>
                     <div className='field'>
                        <input id="name" name="name" type="text" 
                        value={name} 
                        onChange={handleNameChange}
                        onBlur={() => setNameIsDirty(true)}
                        /> 

                        <span>{nameIsDirty ? (nameIsValid ? '✔️' : '❌') : ''}
                        </span>

                     </div>

                     <label htmlFor="tel">Telefonnummer</label>
                     <div className='field'> 
                        <input id="tel" name="tel" type="tel" />
                     </div>

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

            <button type="submit" onClick={handleSubmit} className="send-order">Skicka Beställning</button>
            </div>
        </form>
    );
};

export default FormCustomer