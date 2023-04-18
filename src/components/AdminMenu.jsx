import { useRecoilState } from "recoil"
import { overlayState } from "../utils/overlay"
import menuList from '../assets/menuArray'


// För varje ingrediens skapa en label + checkbox

const IngredientBoxes = () => {

    let ings = []
    menuList.forEach(category => {
        category.items.forEach(item => {
            item.filling.forEach(ing => {
                console.log('ingrediens-objekt: ', ing)
                if (!ings.find(i => i.name == ing.name))
                    ings.push(ing)
            })
        })
    })

    let jsxList = ings.map((element) => {
        return (
            <li key={element.name} className="ingredient">
                <label className="dish-heading" htmlFor={element.name}>{element.name}</label>
                <div>
                <img className='ingredient-image' src={element.image} alt={element.name} />
                <input className="checkbox" type="checkbox" id={element.name} />
                </div>
            </li>
        )
    });
    return jsxList
}

function Editform({ dish }) {
    console.log('Hej jag är med');


    return (
        <div>
            <form action="#">
                <label htmlFor={dish.item}>Namn på rätt:</label>
                <input type="text" id={dish.item} />
                <label htmlFor={dish.price} >Pris:</label>
                <input type="text" id={dish.price} />
                <ul className="ingredient-list">
                    <IngredientBoxes />
                </ul>

            </form>
        </div>
    )
}

export default Editform