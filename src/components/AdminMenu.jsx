import { useState } from "react";
import { useRecoilState } from "recoil"
import { overlayState } from "../utils/overlay"
import { addToList } from "../utils/addtolist";
import { findList } from './Menu.jsx'
import { tacoState } from "../utils/tacos";
import { burritoState } from "../utils/burritos";
import { quesadillaState } from "../utils/quesadillas";
import { sidesState } from "../utils/sides";
import { isValidPrice, isValidDishName, isValidId, isValidUrl } from "../utils/validation";


const fillingList = []


function Editform() {
    const [overlay, setOverlay] = useRecoilState(overlayState)
    const [categoryID] = useRecoilState(addToList)
    const [tacos, setTacos] = useRecoilState(tacoState)
    const [burritos, setBurritos] = useRecoilState(burritoState)
    const [quesadillas, setQuesadillas] = useRecoilState(quesadillaState)
    const [sides, setSides] = useRecoilState(sidesState)

    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [url, setUrl] = useState('');
    const [priceIsDirty, setPriceIsDirty] = useState(false);
    const [nameIsDirty, setNameIsDirty] = useState(false);
    const [idIsDirty, setIdIsDirty] = useState(false);
    const [urlIsDirty, setUrlIsDirty] = useState(false);



    let nameIsValid = isValidDishName(name);
    let priceIsValid = isValidPrice(price);
    let idIsValid = isValidId(id);
    let urlIsValid = isValidUrl(url);

    const handleDishNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePriceChange = (e) => {
        // setNumber(e.target.value);
        // newDish.price = e.target.value
        const result = e.target.value.replace(/\D/g, "");
        setPrice(result);
    };

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    let newDish = {
        item: name,
        id: id,
        image: url,
        filling: [],
        price: price
    }


    let list = findList()

    const backButton = () => {
        setOverlay(false);
    };

    const handleSubmit = (event) => {
        newDish.filling = fillingList
        event.preventDefault()
        let newList = [...list, newDish]
        if (categoryID == 1) {
            setTacos(newList)
        }
        else if (categoryID == 2) {
            setBurritos(newList)
        }
        if (categoryID == 3) {
            setQuesadillas(newList)
        }
        if (categoryID == 4) {
            setSides(newList)
        }
        setOverlay(false)
    }


    return (
        <div>
            <button className="back-button" onClick={backButton}>
                Tillbaka
            </button>
            <form action="#">
                <div className="input-container">
                    <label htmlFor='dish-name'>Namn på rätt:</label>
                    <div className="field">
                        <input
                            type="text"
                            id='dish-name'
                            value={name}
                            onChange={handleDishNameChange}
                            onBlur={() => setNameIsDirty(true)}
                            required />
                        <span className="valid-name">
                            {nameIsDirty ? (nameIsValid ? "✔️" : "❌") : ""}
                        </span>
                    </div>

                    <label htmlFor='dish-price' >Pris:</label>
                    <div className="field">
                        <input
                            type="text"
                            pattern="[0-9]"
                            id='dish-price'
                            value={price}
                            onChange={handlePriceChange}
                            onBlur={() => setPriceIsDirty(true)}
                            required />
                        <span className="valid-price">
                            {priceIsDirty ? (priceIsValid ? "✔️" : "❌") : ""}
                        </span>
                    </div>

                    <label htmlFor='dish-id' >Id:</label>
                    <div className="field">
                        <input
                            type="text"
                            id='dish-id'
                            value={id}
                            onChange={handleIdChange}
                            onBlur={() => setIdIsDirty(true)}
                            required
                            placeholder="ex. hardtacochicken" />
                        <span className="valid-id">
                            {idIsDirty ? (idIsValid ? "✔️" : "❌") : ""}
                        </span>
                    </div>

                    <label htmlFor='dish-image' >Bild:</label>
                    <div className="field">
                        <input
                            type="text"
                            id='dish-image'
                            value={url}
                            onChange={handleUrlChange}
                            onBlur={() => setUrlIsDirty(true)}
                            required
                            placeholder="Klistra in url här" />
                        <span className="valid-url">
                            {urlIsDirty ? (urlIsValid ? "✔️" : "❌") : ""}
                        </span>
                    </div>
                </div>

                <ul className="ingredient-list">
                    <IngredientBoxes dishObject={newDish} />
                </ul>

                <button className="save-button" onClick={handleSubmit} >Spara</button>

            </form>
        </div>
    );
}

const IngredientBoxes = ({ dishObject }) => {
    const [tacos] = useRecoilState(tacoState)
    const [burritos] = useRecoilState(burritoState)
    const [quesadillas] = useRecoilState(quesadillaState)
    const [sides] = useRecoilState(sidesState)

    let ings = []

    let allCategories = [tacos, burritos, quesadillas, sides]

    allCategories.forEach(list => {
        list.forEach(item => {
            item.filling.forEach(ing => {
                if (!ings.find(i => i.name == ing.name))
                    ings.push(ing)
            })
        })
    })

    let dishFillings = []


    const handleCheckboxChange = (element) => {
        fillingList.push(element)
    }


    let jsxList = ings.map((element) => {
        if (dishFillings.includes(element.name)) {
        }
        return (
            <li key={element.name} className="ingredient">
                <label className="dish-heading" htmlFor={element.name}>{element.name}
                    <img className='ingredient-image' src={element.image} alt={element.name} />
                </label>
                <div>
                    <input className="checkbox" type="checkbox" id={element.name} onChange={() => handleCheckboxChange(element)} />
                </div>
            </li>
        );
    });
    return jsxList;
};

export default Editform;
