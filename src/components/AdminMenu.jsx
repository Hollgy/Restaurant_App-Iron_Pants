import { useRecoilState } from "recoil";
import { overlayState } from "../utils/overlay";
import { addToList } from "../utils/addtolist";
import { fillingStatee } from "../utils/filling";
import { useState } from "react";
import menuList from "../assets/menuArray";
import { loginState } from "../utils/login";
import { renderStatee } from "../utils/conrend";
import { menuState } from "../utils/menu";

// För varje ingrediens skapa en label + checkbox
const fillingList = [];

function Editform() {
    const [filling, setFilling] = useRecoilState(fillingStatee);
    const [overlay, setOverlay] = useRecoilState(overlayState);
    const [categoryID, setCategoryID] = useRecoilState(addToList);
    const [list, setList] = useState([]);
    const [render, setRenderState] = useRecoilState(renderStatee);
    const [menu, setMenu] = useRecoilState(menuState);
    const [newDish, setNewDish] = useState({});

    const backButton = () => {
        setOverlay(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Lägg till fyllning i den nya maträtten
        newDish.filling = filling;

        const createFood = () => {
            const newMenu = [...menu]; // Skapa en kopia av menyn

            // Sök efter kategorin med matchande ID och lägg till nya maträtten i items-arrayen
            newMenu.forEach((category) => {
                if (category.id === categoryID) {
                    let newItems = [...category.items, newDish];
                    category = { ...category, items: newItems };
                    
                    // category.items.push(newDish);
                }
            });

            // Uppdatera menyn med den uppdaterade kopian
            setMenu(newMenu);
            console.log(newMenu);
        };
        createFood();

        setOverlay(false);
    };

    return (
        <div>
            <button className="back-button" onClick={backButton}>
                Tillbaka
            </button>
            <form action="#">
                <label htmlFor="dish-name">Namn på rätt:</label>
                <input
                    type="text"
                    id="dish-name"
                    onChange={(e) =>
                        setNewDish({ ...newDish, item: e.target.value })
                    }
                    required
                />
                <label htmlFor="dish-price">Pris:</label>
                <input
                    type="text"
                    id="dish-price"
                    onChange={(e) =>
                        setNewDish({ ...newDish, price: e.target.value })
                    }
                    required
                />
                <label htmlFor="dish-id">Id:</label>
                <input
                    type="text"
                    id="dish-id"
                    onChange={(e) =>
                        setNewDish({ ...newDish, id: e.target.value })
                    }
                    required
                />
                <ul className="ingredient-list">
                    <IngredientBoxes />
                </ul>
                <button className="save-button" onClick={handleSubmit}>
                    Spara
                </button>
            </form>
        </div>
    );
}

// function Editform() {
//     const [filling, setFilling] = useRecoilState(fillingStatee)
//     const [overlay, setOverlay] = useRecoilState(overlayState)
//     const [categoryID, setCategoryID] = useRecoilState(addToList)
//     const [list, setList] = useState([]);
//     const [render, setRenderState] = useRecoilState(renderStatee)
//     const [menu, setMenu] = useRecoilState(menuState)
//     const [newList, setNewList] = useState([]);
//     // const [newDish, setNewDish] = useState({});

//     let newDish = {}

//     const backButton = () => {
//         setOverlay(false)
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         // console.log(categoryID);
//         // Leta i menyn efter objektet vars id matchar category-variabeln och lägg till newDish i objektets items-array
//         newDish.filling = fillingList

//             const createFood = () => {
//                 const newMenu =[...menu]

//                 // menu.map(category => {
//                 //     newMenu.push(category)
//                 // })

//                 // setNewList(newMenu)
//                 let copy = []
//                 newList.forEach(category => {
//                     console.log(category.name);
//                     if (category.id == categoryID) {

//                         copy = [...category.items, newDish]
//                         console.log(copy);
//                         category.items = copy
//                     }
//                 })

//                 console.log( 'newList', newList);
//                     setMenu(newList)
//             }
//         createFood()
//         //     return newMenu
//         // }
//         // const targetCategory = menu.find(category => category.id == categoryID)
//         // let copy = [...categoryList, newDish]
//         // setMenus(newMenu)
//         // console.log('nya listan', newMenu);
//         setOverlay(false)
//     }

//     return (
//         <div>
//             <button className="back-button" onClick={backButton}>Tillbaka</button>
//             <form action="#">
//                 <label htmlFor='dish-name'>Namn på rätt:</label>
//                 <input type="text" id='dish-name' onChange={(e) => newDish.item = e.target.value} required />
//                 <label htmlFor='dish-price' >Pris:</label>
//                 <input type="text" id='dish-price' onChange={(e) => newDish.price = e.target.value} required />
//                 <label htmlFor='dish-id' >Id:</label>
//                 <input type="text" id='dish-id' onChange={(e) => newDish.id = e.target.value} required />
//                 <ul className="ingredient-list">
//                     <IngredientBoxes />
//                 </ul>
//                 <button className="save-button" onClick={handleSubmit} >Spara</button>
//             </form>
//         </div>
//     )
// }

const IngredientBoxes = () => {
    let ings = [];
    menuList.forEach((category) => {
        category.items.forEach((item) => {
            item.filling.forEach((ing) => {
                // console.log('ingrediens-objekt: ', ing)
                if (!ings.find((i) => i.name == ing.name)) ings.push(ing);
            });
        });
    });

    const handleCheckboxChange = (element) => {
        fillingList.push(element);
        console.log("fillinglist är: ", fillingList);
    };

    let jsxList = ings.map((element) => {
        return (
            <li key={element.name} className="ingredient">
                <label className="dish-heading" htmlFor={element.name}>
                    {element.name}
                    <div>
                        <img
                            className="ingredient-image"
                            src={element.image}
                            alt={element.name}
                        />
                    </div>
                </label>
                <div>
                    <input
                        className="checkbox"
                        type="checkbox"
                        id={element.name}
                        onChange={() => handleCheckboxChange(element)}
                    />
                </div>
            </li>
        );
    });
    return jsxList;
};

export default Editform;
