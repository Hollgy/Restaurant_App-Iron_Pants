import { useRecoilState } from "recoil"
import { overlayState } from "../utils/overlay"
import menuList from '../assets/menuArray'


// För varje ingrediens skapa en label + checkbox

const IngredientBoxes = ({ dish }) => {

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

    let ingsInDish = []
    dish.filling.forEach(filling => {
        ingsInDish.push(filling)
    })

    console.log(ingsInDish);

    // const HandleCheckBoxChange = (element) => {
    //     let defaultChecked = false
    //     const updatedIngs = ings.forEach(ingri => {
    //         console.log(ingri);
    //         if (ingsInDish.includes(ingri)) {
    //             console.log('ingrediensen finns med');
    //             defaultChecked = true;
    //             // this checkbox should be checked
    //         } 
    //         return defaultChecked
    //         // else {
    //             //     console.log('ingrediensen finns inte med');
    //             // return false
    //             ; // this checkbox should be unchecked
    //         // }
    //     })
    //     return (
    //     <input className="checkbox" type="checkbox" id={element.name} defaultChecked={defaultChecked} />
    //     )
    //     // const defaultChecked = updatedIngs.some(val => val);
    //      // true if any checkbox should be checked, false otherwise
    // };

    // elementet finns i ingsInDish. ska defaultChecked vara true.

    const HandleCheckBoxChange = ({element}) => {

        return (
            <input className="checkbox" type="checkbox" id={element.name} defaultChecked={ingsInDish.some(obj => obj.name === element.name)} />
        )
    };
    
    // {ingsInDish.includes(element) ? true : false}
    // defaultChecked={ingsInDish.some(obj => obj.name === element.name)}


    let jsxList = ings.map((element) => {
        return (
            <li key={element.name} className="ingredient">
                <label className="dish-heading" htmlFor={element.name}>{element.name}</label>
                <div>
                    <img className='ingredient-image' src={element.image} alt={element.name} />
                    <HandleCheckBoxChange element={element} />
                </div>
            </li>
        )
    });
    return jsxList
}

function Editform({ dish }) {
    // console.log('Hej jag är med');

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    let targetDish = null;

    menuList.forEach(category => {
        const dishObject = category.items.find(item => item.id === dish);
        if (dishObject) {
            targetDish = dishObject;
            return;
        }
    });


    let dishName = ''
    let dishPrice = ''

    if (dish) {
        // console.log('rätten finns');
        dishName = targetDish.item
        dishPrice = targetDish.price
    }

    return (
        <div>
            <form action="#">
                <label htmlFor={dishName}>Namn på rätt:</label>
                <input type="text" id={dishName} defaultValue={dishName} />
                <label htmlFor={dishPrice} >Pris:</label>
                <input type="text" id={dishPrice} defaultValue={dishPrice} />
                <ul className="ingredient-list">
                    <IngredientBoxes dish={targetDish} />
                </ul>
                <button className="save-button" onClick={handleSubmit} >Spara</button>
            </form>
        </div>
    )
}


export default Editform