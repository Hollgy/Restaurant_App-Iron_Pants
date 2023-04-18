import { useRecoilState } from "recoil"
import { overlayState } from "../utils/overlay"
import { addToList } from "../utils/addtolist";
import { fillingStatee } from "../utils/filling";
import { useState } from "react";
import menuList from '../assets/menuArray'
import { loginState } from '../utils/login'
import { renderStatee } from "../utils/conrend";


// För varje ingrediens skapa en label + checkbox
const fillingList = []



function Editform({ setMenu }) {
    const [filling, setFilling] = useRecoilState(fillingStatee)
    const [overlay, setOverlay] = useRecoilState(overlayState)
    const [categoryList, setCategoryList] = useRecoilState(addToList)
    const [list, setList] = useState([]);
    const [render, setRenderState] = useRecoilState(renderStatee)
    // const [newDish, setNewDish] = useState({});


    let newDish = {}

    const backButton = () => {
        setOverlay(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(categoryList);
        newDish.filling = fillingList
        let copy = [...categoryList, newDish]
        setCategoryList(copy)
        setRenderState('menu')
    }



    return (
        <div>
            <button className="back-button" onClick={backButton}>Tillbaka</button>
            <form action="#">
                <label htmlFor='dish-name'>Namn på rätt:</label>
                <input type="text" id='dish-name' onBlur={(e) => newDish.item = e.target.value} required />
                <label htmlFor='dish-price' >Pris:</label>
                <input type="text" id='dish-price' onBlur={(e) => newDish.price = e.target.value} required />
                <label htmlFor='dish-id' >Id:</label>
                <input type="text" id='dish-id' onBlur={(e) => newDish.id = e.target.value} required />
                <ul className="ingredient-list">
                    <IngredientBoxes />
                </ul>
                <button className="save-button" onClick={handleSubmit} >Spara</button>
            </form>
        </div>
    )
}

const IngredientBoxes = () => {


    let ings = []
    menuList.forEach(category => {
        category.items.forEach(item => {
            item.filling.forEach(ing => {
                // console.log('ingrediens-objekt: ', ing)
                if (!ings.find(i => i.name == ing.name))
                    ings.push(ing)
            })
        })
    })

    const handleCheckboxChange = (element) => {
        fillingList.push(element)
    }


    let jsxList = ings.map((element) => {
        return (
            <li key={element.name} className="ingredient">
                <label className="dish-heading" htmlFor={element.name}>{element.name}</label>
                <div>
                    <img className='ingredient-image' src={element.image} alt={element.name} />
                    <input className="checkbox" type="checkbox" id={element.name} onChange={() => handleCheckboxChange(element)} />
                </div>
            </li>
        )
    });
    return jsxList
}

export default Editform