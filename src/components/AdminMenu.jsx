import { useRecoilState } from "recoil";
import { overlayState } from "../utils/overlay";
import { addToList } from "../utils/addtolist";
import { fillingStatee } from "../utils/filling";
import { useState } from "react";
import { renderStatee } from "../utils/conrend";
import { menuState } from "../utils/menu";

const fillingList = [];

function Editform() {
    const [filling] = useRecoilState(fillingStatee);
    const [setOverlay] = useRecoilState(overlayState);
    const [categoryID] = useRecoilState(addToList);
    const [menu, setMenu] = useRecoilState(menuState);
    const [newDish, setNewDish] = useState({});

    const backButton = () => {
        setOverlay(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        newDish.filling = filling;

        const createFood = () => {
            const newMenu = [...menu]; 

            newMenu.forEach((category) => {
                if (category.id === categoryID) {
                    let newItems = [...category.items, newDish];
                    category = { ...category, items: newItems }; 
                }
            });
            setMenu(newMenu); 
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

const IngredientBoxes = () => {
    let ings = [];
    menuList.forEach((category) => {
        category.items.forEach((item) => {
            item.filling.forEach((ing) => {
                if (!ings.find((i) => i.name == ing.name)) ings.push(ing);
            });
        });
    });

    const handleCheckboxChange = (element) => {
        fillingList.push(element);
       
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
